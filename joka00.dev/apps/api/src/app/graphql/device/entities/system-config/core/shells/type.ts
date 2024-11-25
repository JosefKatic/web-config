import { Field, ObjectType } from '@nestjs/graphql';
import { Fish } from './fish';
import { Zsh } from './zsh';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Shells {
  @Field(() => Fish, { nullable: false })
  @Prop()
  fish: Fish;

  @Field(() => Zsh, { nullable: false })
  @Prop()
  zsh: Zsh;
}
