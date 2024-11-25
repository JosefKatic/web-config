import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeMinecraft } from './minecraft';
import { HomeLutris } from './lutris';

@ObjectType()
export class HomeGames {
  @Field(() => HomeMinecraft, { nullable: false })
  @Prop()
  minecraft: HomeMinecraft;

  @Field(() => HomeLutris, { nullable: false })
  @Prop()
  lutris: HomeLutris;
}
