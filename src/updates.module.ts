import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { updatesSchema } from "./schemas/updates.schema";
import { UpdatesController } from "./controllers/updates.controller";
import { UpdatesService } from "./services/updates.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Updates', schema: updatesSchema }])],
  controllers: [UpdatesController],
  providers: [UpdatesService],
})
export class UpdatesModule {}