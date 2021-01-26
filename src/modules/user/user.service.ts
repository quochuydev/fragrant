import { v4 } from "uuid";
import slugify from "slugify";
import { Injectable, BadRequestException } from "@nestjs/common";
import { User, UserDocument } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findOne(criteria) {
    return this.userModel.findOne(criteria);
  }

  list(query) {
    return this.userModel.find({});
  }

  get(id) {
    return this.userModel.findById(id);
  }

  async create(data) {
    const newUser = new this.userModel(data);
    const user = await newUser.save();
    return user;
  }
}
