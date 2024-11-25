import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Schema as MongooSchema } from 'mongoose';
import { HomeConfig } from '../../device/entities/home-config';

@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (placeholder)' })
  _id: MongooSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ unique: true })
  username: string;

  @Field(() => [HomeConfig], { defaultValue: [] })
  @Prop()
  homeConfig: HomeConfig[];
}
