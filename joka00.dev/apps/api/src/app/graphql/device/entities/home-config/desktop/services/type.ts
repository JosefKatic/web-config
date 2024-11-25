import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeKdeConnect } from './kdeconnect';
import { HomeMako } from './mako';
import { HomePolkitAgent } from './polkit-agent';

@ObjectType()
export class HomeDesktopServices {
  @Field(() => HomeKdeConnect, { nullable: false })
  @Prop()
  kdeconnect: HomeKdeConnect;

  @Field(() => HomeMako, { nullable: false })
  @Prop()
  mako: HomeMako;

  @Field(() => HomeKdeConnect, { nullable: false })
  @Prop()
  polkit_agent: HomePolkitAgent;
}
