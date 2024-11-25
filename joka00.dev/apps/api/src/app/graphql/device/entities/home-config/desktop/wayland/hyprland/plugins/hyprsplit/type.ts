import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class HomeHyprSplit {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;

  @Field(() => Int, { nullable: false })
  @Prop()
  numberOfWorkspaces: number
}
