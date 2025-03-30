import { Request, Response } from 'express';
import { UserModel } from '../model/index';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = new UserModel({
    username: name,
    email,
    password,
  });

  await user.save();

  return res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email, id: user._id }, 'secret');

  return res.status(200).json({ message: 'Login successful', token, user: { id: user._id, email, name: user.username } });
};

export const logoutUser = async (req: Request, res: Response) => {};
export const getUser = async (req: Request, res: Response) => {};
export const updateUser = async (req: Request, res: Response) => {};
export const deleteUser = async (req: Request, res: Response) => {};


