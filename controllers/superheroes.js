import Superhero from '../models/Superhero.js'

export const getSuperheroes = async (req, res) => {
  try {
    const superheroes = await Superhero.find()
    res.json(superheroes)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
