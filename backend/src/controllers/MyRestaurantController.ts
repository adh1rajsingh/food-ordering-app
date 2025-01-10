import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

const streamUpload = (buffer: Buffer, mimetype: string) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });
};

const createMyRestaurant = async (req: Request, res: Response) => {
  try {
    const existingRestaurant = await Restaurant.findOne({ user: req.userId });

    if (existingRestaurant) {
      res.status(409).json({ message: "User Restaurant already exists" });
      return;
    }

    const image = req.file as Express.Multer.File;
    /* const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64:${base64Image}`;

    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = uploadResponse.url;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date(); */
    const uploadResponse = await streamUpload(image.buffer, image.mimetype);

    const restaurant = new Restaurant({
      ...req.body,
      imageUrl: (uploadResponse as any).url, // Add proper typing for Cloudinary response if needed
      user: new mongoose.Types.ObjectId(req.userId),
      lastUpdated: new Date(),
    });
    await restaurant.save();

    res.status(201).send(restaurant);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export default {
  createMyRestaurant,
};
