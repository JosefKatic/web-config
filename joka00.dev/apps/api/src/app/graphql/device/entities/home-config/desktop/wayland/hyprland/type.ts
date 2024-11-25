import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeHyprlandSettings } from './config';
import { HomeHyprlandPlugins } from './plugins';

@ObjectType()
export class HomeHyprland {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;

  @Field(() => HomeHyprlandSettings, { nullable: false })
  @Prop()
  settings: HomeHyprland;


  @Field(() => HomeHyprlandPlugins, { nullable: false })
  @Prop()
  plugins: HomeHyprlandPlugins;
}
