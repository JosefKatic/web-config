import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Mysql {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;
}
