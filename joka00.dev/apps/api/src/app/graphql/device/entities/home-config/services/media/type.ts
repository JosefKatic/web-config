import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomePlayerctl } from './playerctl';

@ObjectType()
export class HomeMediaServices {
  @Field(() => HomePlayerctl, { nullable: false })
  @Prop()
  playerctl: HomePlayerctl;
}
