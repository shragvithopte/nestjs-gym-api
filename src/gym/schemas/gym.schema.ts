import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GymDocument = Gym & Document;

@Schema()
export class Gym {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  address!: string;

  @Prop({ required: true })
  rating!: number;
}

export const GymSchema = SchemaFactory.createForClass(Gym);