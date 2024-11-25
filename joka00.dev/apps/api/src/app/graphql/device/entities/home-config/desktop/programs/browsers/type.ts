import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { HomeBrave } from './brave';
import { HomeChromium } from './chromium';
import { HomeFirefox } from './firefox';

@ObjectType()
export class HomeBrowsers {
  @Field(() => HomeBrave, { nullable: false })
  @Prop()
  brave: HomeBrave;

  @Field(() => HomeChromium, { nullable: false })
  @Prop()
  chromium: HomeChromium;

  @Field(() => HomeFirefox, { nullable: false })
  @Prop()
  firefox: HomeFirefox;
}
