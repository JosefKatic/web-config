import { Field, ObjectType } from '@nestjs/graphql';
import { Gnome } from './gnome';
import { Plasma6 } from './plasma6';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class DesktopManager {
  @Field(() => Gnome, { nullable: false })
  @Prop()
  gnome: Gnome;

  @Field(() => Plasma6, { nullable: false })
  @Prop()
  plasma6: Plasma6;
}
