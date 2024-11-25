import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class UEFI {
  @Field(() => Boolean, { nullable: false })
  @Prop({ default: false })
  enable: boolean;

  @Field(() => Boolean, { nullable: false })
  @Prop({ default: false })
  secureboot: boolean;
}
