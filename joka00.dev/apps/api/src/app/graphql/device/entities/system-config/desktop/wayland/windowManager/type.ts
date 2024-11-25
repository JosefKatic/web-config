import { Field, ObjectType } from '@nestjs/graphql';
import { Hyprland } from './hyprland';
import { Sway } from './sway';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class WindowManager {
  @Field(() => Hyprland)
  @Prop()
  hyprland: Hyprland;

  @Field(() => Sway)
  @Prop()
  sway: Sway;
}
