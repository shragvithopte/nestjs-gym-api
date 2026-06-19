import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gym, GymDocument } from './schemas/gym.schema';
@Injectable()
export class GymService {

  constructor(
    @InjectModel(Gym.name) private gymModel: Model<GymDocument>,
  ) {}

  private gyms = [
    {
      id: 1,
      name: 'Gold Gym',
      address: 'Mumbai',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'FitZone',
      address: 'Pune',
      rating: 4.7,
    },
  ];

  async getAllGyms() {
  return await this.gymModel.find();
}
  async createGym(gym: any) {
  return await this.gymModel.create(gym);
}
async updateGym(id: string, gym: any) {
  console.log('SERVICE UPDATE:', id, gym);

  return await this.gymModel.findByIdAndUpdate(
    id,
    { $set: gym },
    { new: true },
  );
}
async deleteGym(id: string) {
  return await this.gymModel.findByIdAndDelete(id);
}
}