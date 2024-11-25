import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Locale {
  @Field(() => String, { nullable: false })
  @Prop()
  defaultLocale: string;

  @Field(() => [String], {
    nullable: false
  })
  @Prop()
  supportedLocales: string[];

  @Field(() => String, { nullable: false })
  @Prop()
  timeZone: string;
}
