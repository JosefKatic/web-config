import { Field, ObjectType } from '@nestjs/graphql';
import { Quietboot } from './quietboot';
import { UEFI } from './uefi';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Boot {
  @Field(() => Quietboot, { nullable: false })
  @Prop({ default: { enable: false } })
  quietboot: Quietboot;

  @Field(() => UEFI, { nullable: false })
  @Prop({ default: { enable: false, secureboot: false } })
  uefi: UEFI;
}
