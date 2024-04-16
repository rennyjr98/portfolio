import { Body, Controller, Get, Post } from "@nestjs/common";
import { UpdatesDto } from "src/schemas/dtos/updates.dto";
import { Updates } from "src/schemas/updates.schema";
import { UpdatesService } from "src/services/updates.service";

@Controller('updates')
export class UpdatesController {
  constructor(private updatesService: UpdatesService) { }

  @Post()
  addUpdate(@Body() update: UpdatesDto): Promise<Updates> {
    return this.updatesService.addUpdate(update);
  }

  @Get()
  async getLastTenUpdates(): Promise<UpdatesDto[]> {
    return this.updatesService.getLastTenUpdates();
  }
}