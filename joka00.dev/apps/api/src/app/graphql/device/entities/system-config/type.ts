import { Field, ObjectType } from '@nestjs/graphql';
import { Boot } from './boot';
import { Core } from './core';
import { Desktop } from './desktop';
import { Hardware } from './hardware';
import { Server } from './server';
import { Utils } from './utils';
import { Prop } from '@nestjs/mongoose';
import { TypeEnum } from './typeEnum';

@ObjectType()
export class SystemConfig {
  @Field(() => Core, { nullable: false })
  @Prop()
  core: Core;

  @Field(() => Desktop, { nullable: false })
  @Prop()
  desktop: Desktop;

  @Field(() => Server, { nullable: false })
  @Prop()
  server: Server;

  @Field(() => Utils, { nullable: false })
  @Prop()
  utils: Utils;

  @Field(() => String, { nullable: false })
  build: string;
}
