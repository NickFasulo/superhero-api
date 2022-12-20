import db from '../db/connection.js'
import Superhero from '../models/Superhero.js'
import fetch from 'node-fetch'

const url = 'https://akabab.github.io/superhero-api/api/all.json'

const seedHeroes = async () => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    const result = [...json]

    await db.dropDatabase()
    await Superhero.create(result)
    await db.close()
  } catch (error) {
    console.error(error)
  }
}

seedHeroes()
