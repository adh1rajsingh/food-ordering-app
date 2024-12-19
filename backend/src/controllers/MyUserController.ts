import { Request, Response } from "express";

const createCurrentUser = async (req: Request, res: Response) => {
  //1. check if the user exists
  //2. create the user if it doesn't exist
  //3. return the user object to the calling client
};

export default {
  createCurrentUser,
};
