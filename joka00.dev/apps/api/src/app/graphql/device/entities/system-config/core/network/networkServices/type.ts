import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class NetworkServices {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enableNetworkManager: boolean;

  @Field(() => Boolean, { nullable: false })
  @Prop()
  enableAvahi: boolean;

  @Field(() => Boolean, { nullable: false })
  @Prop()
  enableResolved: boolean;
}
