import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeMediaServices } from './media';
import { HomeSystemServices } from './system';

@ObjectType()
export class HomeServices {
  @Field(() => HomeMediaServices, { nullable: false })
  @Prop()
  media: HomeMediaServices;

  @Field(() => HomeSystemServices, { nullable: false })
  @Prop()
  system: HomeSystemServices;
}
