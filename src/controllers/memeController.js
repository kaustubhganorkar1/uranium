const { default: axios } = require('axios')
const { post } = require('../routes/route')

const getAllMeme = async (req, res) => {
  let obj = {
    method: 'get',
    url: 'https://api.imgflip.com/get_memes',
  }
  const Data = await axios(obj)
  res.status(200).send({ data: Data.data.data.memes })
}

const getMemeById = async (req, res) => {
  let memeId = req.body.id
  let text0 = req.body.text0

  const result = await axios.post(
    `http://api.imgflip.com/caption_image?template_id=${memeId}&username=chewie12345&password=meme@123&text0=${text0}`,
  )
  console.log(result.data)

  res.send({ result: result.data })
}

module.exports.getAllMeme = getAllMeme
module.exports.getMemeById = getMemeById
