import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeAlacritty } from './alacritty';
import { HomeKitty } from './kitty';
import { HomeWezterm } from './wezterm';

@ObjectType()
export class HomeEmulators {
  @Field(() => HomeAlacritty, { nullable: true })
  @Prop()
  alacritty: HomeAlacritty;

  @Field(() => HomeKitty, { nullable: true })
  @Prop()
  kitty: HomeKitty;

  @Field(() => HomeWezterm, { nullable: true })
  @Prop()
  wezterm: HomeWezterm;
}
