import { Request, Response } from 'express';

const createComment = (req: Request, res: Response) => {};
const updateComment = (req: Request, res: Response) => {};
const deleteComment = (req: Request, res: Response) => {};
const getComments = (req: Request, res: Response) => {};

export const CommentController = {
  createComment,
  updateComment,
  deleteComment,
  getComments,
};
