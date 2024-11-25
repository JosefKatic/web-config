import { Field, ObjectType } from '@nestjs/graphql';
import { CpuIntel } from './intel';
import { CpuAMD } from './amd';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Cpu {
  @Field(() => CpuIntel, { nullable: false })
  @Prop()
  intel: CpuIntel;

  @Field(() => CpuAMD, { nullable: false })
  @Prop()
  amd: CpuAMD;
}
