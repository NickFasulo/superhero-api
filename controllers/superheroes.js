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

export const getSuperhero = async (req, res) => {
  try {
    const superhero = await Superhero.findById(req.params.id)

    if (superhero) {
      return res.json(superhero)
    }

    res.status(404).json({ message: 'Superhero not found' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createSuperhero = async (req, res) => {
  try {
    const superhero = new Superhero(req.body)
    await superhero.save()
    res.status(201).json(superhero)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
