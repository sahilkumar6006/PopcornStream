import { Request, Response, NextFunction, RequestHandler } from 'express';

const asyncHandler = <T extends RequestHandler>(requestHandler: T): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
