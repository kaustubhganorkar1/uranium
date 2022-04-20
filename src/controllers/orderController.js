const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

module.exports.createOrder = async (req, res) => {
  const createdOrder = req.body
  const isUser = await userModel.find({ _id: req.body.userId })
  const isProduct = await productModel.find({ _id: req.body.productId })

  if (isUser[0] || isProduct[0]) {
    if (!isUser[0]) {
      res.send({
        msg: 'User not found!',
      })
    } else if (!isProduct[0]) {
      res.send({
        msg: 'Product not found!',
      })
    } else {
      if (req.headers['isfreeappuser'] === 'true') {
        const FreeOrder = {
          userId: req.body.userId,
          productId: req.body.productId,
          amount: 0,
          isFreeAppUser: req.headers['isfreeappuser'],
          date: req.body.date,
        }
        const order = await orderModel.create(FreeOrder)
        res.send({
          msg: 'Order Placed!',
          PlacedOrder: order,
        })
      } else {
        const isUser = await userModel.find({ _id: req.body.userId })
        const isProduct = await productModel.find({ _id: req.body.productId })
        const productPrice = isProduct[0].price
        const userBal = isUser[0].balance
        const updatedbal = userBal - productPrice
        if (userBal > productPrice) {
          const setUpdatedbal = await userModel.findOneAndUpdate(
            { _id: isUser[0]._id },
            { balance: updatedbal }, //problem
          )
          const paidOrder = {
            userId: req.body.userId,
            productId: req.body.productId,
            amount: isProduct[0].price,
            isFreeAppUser: req.headers['isfreeappuser'],
            date: req.body.date,
          }

          const order = await orderModel.create(paidOrder)
          res.send({
            msg: 'Paid Order Placed!',
            PlacedOrder: order,
          })
          const myprod = await productModel.find({ _id: req.body.productId })
          console.log(myprod)
        } else {
          res.send({
            msg: 'user has not sufficient balance!',
          })
        }
      }
    }
  } else {
    res.send({
      msg: 'Details Not Found!',
      PlacedOrder: order,
    })
  }
}
