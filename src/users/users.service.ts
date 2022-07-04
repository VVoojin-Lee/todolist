import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/users.schema';
// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: User): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async login(username: string, password: string): Promise<User | undefined> {
    const user: User = await this.userModel
      .where({ username, password })
      .findOne()
      .exec();
    return user;
  }

  async findByUserName(username: string): Promise<User | undefined> {
    const user: User = await this.userModel
      .where({ username })
      .findOne()
      .exec();
    return {
      id: user.id,
      username: user.username,
      refreshToken: user.refreshToken,
      password: user.password,
    };
  }

  async findById(id: number): Promise<User | undefined> {
    const user: User = await this.userModel.where({ id }).findOne().exec();
    return user;
  }

  async findByRefreshToken(refreshToken: string, id: number) {
    const user = await this.findById(id);
    if (!user) {
      return { message: 'Login Error (refreshToken)' };
    }
    const isRefreshTokenMatching = user.refreshToken === refreshToken;

    if (isRefreshTokenMatching) {
      return user;
    }
  }
  async setCurrentRefreshToken(refreshToken: string, id: number) {
    await this.userModel.where({ id }).updateOne({ refreshToken });
  }
}
