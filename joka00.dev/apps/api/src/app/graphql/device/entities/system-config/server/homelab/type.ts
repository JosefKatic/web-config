import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Blocky } from './blocky';
import { Homeassistant } from './homeassistant';
import { Mosquitto } from './mosquitto';
import { Zigbee2Mqtt } from './zigbee2mqtt';

@ObjectType()
export class Homelab {
  @Field(() => Boolean, { nullable: false })
  @Prop()
  enable: boolean;

  @Field(() => Blocky, { nullable: false })
  @Prop()
  blocky: Blocky;

  @Field(() => Homeassistant, { nullable: false })
  @Prop()
  homeassistant: Homeassistant;

  @Field(() => Mosquitto, { nullable: false })
  @Prop()
  mosquitto: Mosquitto;

  @Field(() => Zigbee2Mqtt, { nullable: false })
  @Prop()
  zigbee2mqtt: Zigbee2Mqtt;
}
