import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ExperienceSchema } from "./schemas/experience.schema";
import { ExperienceController } from "./controllers/experience.controller";
import { ExperienceService } from "./services/experience.service";

@Module({
  imports: [MongooseModule.forFeature([{name: 'Experience', schema: ExperienceSchema}])],
  controllers: [ExperienceController],
  providers: [ExperienceService],
})
export class ExperienceModule {}