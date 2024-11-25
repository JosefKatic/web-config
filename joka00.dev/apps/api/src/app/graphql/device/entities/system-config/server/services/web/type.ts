import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Nginx } from './nginx';
import { Acme } from './acme';

@ObjectType()
export class Web {
  @Field(() => Acme, { nullable: false })
  @Prop()
  acme: Acme;

  @Field(() => Nginx, { nullable: false })
  @Prop()
  nginx: Nginx;
}
