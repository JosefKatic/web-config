import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { GDM } from './gdm';

@ObjectType()
export class DisplayManager {
  @Field(() => GDM)
  @Prop()
  gdm: GDM;
}
