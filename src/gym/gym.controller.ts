import { Put } from '@nestjs/common';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Controller, Get, Post, Body,Param, } from '@nestjs/common';
import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { Delete } from '@nestjs/common';
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
async createGym(@Body() gym: CreateGymDto) {
  return await this.gymService.createGym(gym);
}
@Put(':id')
async updateGym(
  @Param('id') id: string,
  @Body() gym: UpdateGymDto,
) {
  console.log('PUT BODY:', gym);

  return await this.gymService.updateGym(id, gym);
}
@Delete(':id')
async deleteGym(@Param('id') id: string) {
  return await this.gymService.deleteGym(id);
}
}