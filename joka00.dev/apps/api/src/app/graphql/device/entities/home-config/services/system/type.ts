import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeUdiskie } from './udiskie';

@ObjectType()
export class HomeSystemServices {
  @Field(() => HomeUdiskie, { nullable: false })
  @Prop()
  udiskie: HomeUdiskie;
}
