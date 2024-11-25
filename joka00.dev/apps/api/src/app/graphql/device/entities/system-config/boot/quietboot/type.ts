import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Quietboot {
  @Field(() => Boolean, { nullable: false })
  @Prop({ default: false })
  enable: boolean;
}
