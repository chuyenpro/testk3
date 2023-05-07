import express from 'express'
import { usersCollection } from '../db.js'

const userRouter = express.Router()

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body
  try {
    if (!username || !password) {
      return res.status(400).json({
        message: 'Username or password is missing',
      })
    }
    const user = await usersCollection.findOne({ username })
    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      })
    }

    if (password !== user.password) {
      return res.status(400).json({
        message: 'Password is incorrect',
      })
    }

    return res.status(200).json({
      message: 'Login success',
      data: {
        user,
      },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Login fail',
      data: null,
    })
  }
})

export default userRouter
