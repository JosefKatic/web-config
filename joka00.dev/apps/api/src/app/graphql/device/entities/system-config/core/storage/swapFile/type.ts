import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class SwapFile {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;

  @Field(() => String, { nullable: false })
  @Prop()
  path: string;

  @Field(() => Int, {
    nullable: false,
    description: 'Size in GBs',
  })
  @Prop()
  size: number;
}
