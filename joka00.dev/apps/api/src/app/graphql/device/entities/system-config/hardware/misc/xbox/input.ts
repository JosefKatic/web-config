import { Field, InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class XboxInput {
  @Field(() => Boolean, { nullable: true })
  @Prop()
  enable: boolean;
}
