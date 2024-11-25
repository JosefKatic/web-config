import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Bluetooth {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;

  @Field(() => Boolean, { nullable: false })
  @Prop()
  enableManager: boolean;
}
