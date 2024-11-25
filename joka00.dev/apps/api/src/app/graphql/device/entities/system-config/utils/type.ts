import { Field, ObjectType } from '@nestjs/graphql';
import { Virtualisation } from './virtualisation';
import { KdeConnect } from './kdeconnect';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Utils {
  @Field(() => KdeConnect, { nullable: false })
  @Prop()
  kdeconnect: KdeConnect;

  @Field(() => Virtualisation, { nullable: false })
  @Prop()
  virtualisation: Virtualisation;
}
