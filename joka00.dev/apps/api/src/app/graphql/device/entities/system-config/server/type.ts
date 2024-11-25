import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Auth } from './auth';
import { Cache } from './cache';
import { Databases } from './databases';
import { GitServer } from './git';
import { Homelab } from './homelab';
import { Services } from './services';
import { Teamspeak } from './teamspeak';
import { Hydra } from './hydra';
import { Minecraft } from './minecraft';
import { Hosting } from './hosting';

@ObjectType()
export class Server {
  @Field(() => Auth, { nullable: false })
  @Prop()
  auth: Auth;

  @Field(() => Cache, { nullable: false })
  @Prop()
  cache: Cache;

  @Field(() => Databases, { nullable: false })
  @Prop()
  databases: Databases;

  @Field(() => GitServer, { nullable: false })
  @Prop()
  git: GitServer;

  @Field(() => Homelab, { nullable: false })
  @Prop()
  homelab: Homelab;

  @Field(() => Hosting, { nullable: false })
  @Prop()
  hosting: Hosting;

  @Field(() => Hydra, { nullable: false })
  @Prop()
  hydra: Hydra;

  @Field(() => Minecraft, { nullable: false })
  @Prop()
  minecraft: Hydra;

  @Field(() => Services, { nullable: false })
  services: Services;

  @Field(() => Teamspeak, { nullable: false })
  teamspeak: Teamspeak;
}
