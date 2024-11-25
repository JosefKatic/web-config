import { Field, ObjectType } from '@nestjs/graphql';
import { HDD } from './hdd';
import { SSD } from './ssd';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Disks {
  @Field(() => SSD, { nullable: false })
  @Prop()
  ssd: SSD;

  @Field(() => HDD, { nullable: false })
  @Prop()
  hdd: HDD;
}
