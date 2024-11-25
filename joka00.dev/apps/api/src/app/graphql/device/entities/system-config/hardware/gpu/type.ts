import { Field, ObjectType } from '@nestjs/graphql';
import { GpuIntel } from './intel';
import { GpuAMD } from './amd';
import { GpuNvidia } from './nvidia';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Gpu {
  @Field(() => GpuIntel, { nullable: false })
  @Prop()
  intel: GpuIntel;

  @Field(() => GpuAMD, { nullable: false })
  @Prop()
  amd: GpuAMD;

  @Field(() => GpuNvidia, {
    nullable: false,
    defaultValue: { enable: false }
  })
  @Prop()
  nvidia: GpuNvidia;
}
