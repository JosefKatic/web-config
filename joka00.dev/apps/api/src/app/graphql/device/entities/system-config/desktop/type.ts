import { Field, ObjectType } from "@nestjs/graphql";
import { Gamemode } from "./gamemode";
import { Wayland } from "./wayland";
import { Prop } from "@nestjs/mongoose";

@ObjectType()
export class Desktop {
  @Field(() => Gamemode, { nullable: false })
  @Prop()
  gamemode: Gamemode;

  @Field(() => Wayland, { nullable: false })
  @Prop()
  wayland: Wayland;
}