import { Field, ObjectType } from '@nestjs/graphql';
import { HomeBrowsers } from './browsers';
import { HomeEditors } from './editors';
import { HomeEmulators } from './emulators';
import { HomeProductivity } from './productivity';
import { HomeGames } from './games';
import { HomeMedia } from './media';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class HomePrograms {
  @Field(() => HomeBrowsers, { nullable: true })
  @Prop()
  browsers: HomeBrowsers;

  @Field(() => HomeEditors, { nullable: true })
  @Prop()
  editors: HomeEditors;

  @Field(() => HomeEmulators, { nullable: true })
  @Prop()
  emulators: HomeEmulators;

  @Field(() => HomeGames, { nullable: true })
  @Prop()
  games: HomeGames;

  @Field(() => HomeMedia, { nullable: true })
  @Prop()
  media: HomeMedia;

  @Field(() => HomeProductivity, { nullable: true })
  @Prop()
  productivity: HomeProductivity;
}
