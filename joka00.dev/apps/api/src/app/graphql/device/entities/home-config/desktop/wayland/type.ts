import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeHyprland } from './hyprland';
import { HomeWaybar } from './waybar';

@ObjectType()
export class HomeWayland {
  @Field(() => HomeHyprland, { nullable: false })
  @Prop()
  hyprland: HomeHyprland;

  @Field(() => HomeWaybar, { nullable: false })
  @Prop()
  waybar: HomeWaybar;
}
