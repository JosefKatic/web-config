import { Field, ObjectType } from '@nestjs/graphql';
import { Drive } from './drive';
import { SwapFile } from './swapFile';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class Storage {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enablePersistence: boolean;

  @Field(() => Drive, { nullable: false })
  @Prop()
  systemDrive: Drive;

  @Field(() => [Drive], { nullable: false})
  @Prop()
  otherDrives: Drive[];

  @Field(() => SwapFile, { nullable: false })
  @Prop()
  swapFile: SwapFile;
}
