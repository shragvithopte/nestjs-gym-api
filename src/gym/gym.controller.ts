import { Controller, Get, Post, Body,Param, } from '@nestjs/common';
import { GymService } from './gym.service';

@Controller('gym')
export class GymController {
  constructor(
    private readonly gymService: GymService,
  ) {}

  @Get()
  getGyms() {
    return this.gymService.getAllGyms();
  }

  @Get(':id')
getGymById(@Param('id') id: string) {
  console.log('Gym ID:', id);

  return {
    requestedId: id,
  };
}

  @Post()
createGym(@Body() gym: any) {
  console.log('Received Gym:', gym);

  return this.gymService.createGym(gym);
}
}