import { Field, ObjectType } from '@nestjs/graphql';
import { DesktopManager } from './desktopManager';
import { DisplayManager } from './displayManager';
import { WindowManager } from './windowManager';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Wayland {
  @Field(() => DesktopManager, { nullable: false })
  @Prop()
  desktopManager: DesktopManager;

  @Field(() => DisplayManager, { nullable: false })
  @Prop()
  displayManager: DisplayManager;

  @Field(() => WindowManager, { nullable: false })
  @Prop()
  windowManager: WindowManager;
}
