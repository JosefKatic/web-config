import { Field, ObjectType } from '@nestjs/graphql';
import { Libvirtd } from './libvirtd';
import { Podman } from './podman';
import { Docker } from './docker';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Virtualisation {
  @Field(() => Docker, { nullable: false })
  @Prop()
  docker: Docker;

  @Field(() => Podman, { nullable: false })
  @Prop()
  podman: Podman;

  @Field(() => Libvirtd, { nullable: false })
  @Prop()
  libvirtd: Libvirtd;
}
