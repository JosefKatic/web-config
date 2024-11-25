import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeFish } from './fish';

@ObjectType()
export class HomeShell {
  @Field(() => HomeFish, { nullable: false })
  @Prop()
  fish: HomeFish;
}
