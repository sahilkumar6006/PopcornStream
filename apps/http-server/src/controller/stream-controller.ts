import { Request, Response } from 'express';
import { StreamModel } from '../model/index';

const createStream = async (req: Request, res: Response) => {
  const { title, url } = req.body;

  if (!title || !url) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const stream = new StreamModel({
    title,
    url,
  });

  await stream.save();

  return res.status(201).json({ message: 'Stream created successfully' });
};
const updateStream = (req: Request, res: Response) => {};
const deleteStream = (req: Request, res: Response) => {};
const getStreams = (req: Request, res: Response) => {};

export const StreamController = {
  createStream,
  updateStream,
  deleteStream,
  getStreams,
};
