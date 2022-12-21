const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurant_list = require('../restaurant.json')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  // for (let i = 0; i < 10; i++) {
  //   Restaurant.create({ name: `name-${i}` })
  // }
  // Restaurant.create({
  //   name: "Sababa 沙巴巴中東美食",
  //   name_en: "Sababa Pita Bar",
  //   rating: 4.3,
  // })
  // console.log(restaurant_list.results[1].name)
  // console.log(restaurant_list.results.length)
  for (let i = 0; i < restaurant_list.results.length; i++) {
    Restaurant.create({
      name: restaurant_list.results[i].name,
      name_en: restaurant_list.results[i].name_en,
      category: restaurant_list.results[i].category,
      image: restaurant_list.results[i].image,
      location: restaurant_list.results[i].location,
      phone: restaurant_list.results[i].phone,
      google_map: restaurant_list.results[i].google_map,
      rating: restaurant_list.results[i].rating,
      description: restaurant_list.results[i].description,
    })
  }
  // Restaurant.create({
  //   name: restaurant_list.results[1].name
  // })
  console.log('done')
})