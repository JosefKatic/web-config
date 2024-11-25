import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Encrypted {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;

  @Field(() => String, {
    nullable: false,
    defaultValue: '/dev/disk/by-partlabel/cryptsystem'
  })
  @Prop()
  path: string;
}
