import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

import { Locale } from './locale';
import { Network } from './network';
import { SecurityRules } from './securityRules';
import { Shells } from './shells';
import { Storage } from './storage';

@ObjectType()
export class Core {
  @Field(() => String, { nullable: false })
  @Prop()
  kernel: string;

  @Field(() => Boolean, { nullable: false })
  @Prop()
  disableDefaults: boolean;

  @Field(() => Locale, { nullable: false })
  @Prop()
  locale: Locale;

  @Field(() => Network, { nullable: false })
  @Prop()
  network: Network;

  @Field(() => SecurityRules, { nullable: false })
  @Prop()
  securityRules: SecurityRules;

  @Field(() => Shells, { nullable: false })
  @Prop()
  shells: Shells;

  @Field(() => Storage, { nullable: false })
  @Prop()
  storage: Storage;
}
