import { Field, ObjectType } from '@nestjs/graphql';
import { Postgresql } from '../databases/postgresql';
import { Mysql } from '../databases/mysql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Databases {
  @Field(() => Mysql, { nullable: false })
  @Prop()
  mysql: Mysql;
  @Field(() => Postgresql, { nullable: false })
  @Prop()
  postgresql: Postgresql;
}
