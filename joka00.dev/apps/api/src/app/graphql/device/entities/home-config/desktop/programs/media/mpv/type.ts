import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class HomeMPV {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;
}
