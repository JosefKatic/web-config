import { Field, ObjectType } from '@nestjs/graphql';
import { Trezor } from './trezor';
import { Yubikey } from './yubikey';
import { Xbox } from './xbox';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Misc {
  @Field(() => Trezor)
  @Prop()
  trezor: Trezor;

  @Field(() => Xbox)
  @Prop()
  xbox: Xbox;

  @Field(() => Yubikey)
  @Prop()
  yubikey: Yubikey;
}
