const axios = require('axios')

const getWeatherbyCity = async (req, res) => {
  const city = req.query.city

  const obj = {
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d004f86db01c169f7da0ffa1d717a7b9`,
  }
  const result = await axios(obj)

  res.send({ temp: result.data.main.temp })
}

const getSortedTemp = async (req, res) => {
  const Cities = [
    'Bengaluru',
    'Mumbai',
    'Delhi',
    'Kolkata',
    'Chennai',
    'London',
    'Moscow',
  ]
  const myCorrospondingArr = []
  for (i = 0; i < Cities.length; i++) {
    const obj = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${Cities[i]}&appid=d004f86db01c169f7da0ffa1d717a7b9`,
    }
    const result = await axios(obj)

    const newObj = { city: Cities[i], temp: result.data.main.temp }
    myCorrospondingArr.push(newObj)
  }
  const sortedArr = myCorrospondingArr.sort(function (a, b) {
    return a.temp - b.temp
  })

  res.status(200).send({ Data: sortedArr })
}

module.exports.getWeatherbyCity = getWeatherbyCity
module.exports.getSortedTemp = getSortedTemp
