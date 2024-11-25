import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Headscale {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;
}
