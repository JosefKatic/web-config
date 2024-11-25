import { Field, ObjectType } from '@nestjs/graphql';
import { Bluetooth } from './bluetooth';
import { Cpu } from './cpu';
import { Gpu } from './gpu';
import { Disks } from './disks';
import { Misc } from './misc';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Hardware {
  @Field(() => Bluetooth, {nullable: false})
  @Prop()
  bluetooth: Bluetooth;

  @Field(() => Cpu, {nullable: false})
  @Prop()
  cpu: Cpu;

  @Field(() => Gpu, {nullable: false})
  @Prop()
  gpu: Gpu;

  @Field(() => Disks, {nullable: false})
  @Prop()
  disks: Disks;

  @Field(() => Misc, {nullable: false})
  @Prop()
  misc: Misc;
}
