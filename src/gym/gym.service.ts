import { Injectable } from '@nestjs/common';

@Injectable()
export class GymService {

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

  getAllGyms() {
    return this.gyms;
  }
  createGym(gym: any) {
  this.gyms.push(gym);
  return gym;
}
}