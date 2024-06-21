import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { randomUUID } from "crypto";
import { Model } from "mongoose";
import { UpdatesDto } from "src/schemas/dtos/updates.dto";
import { Updates } from "src/schemas/updates.schema";

@Injectable()
export class UpdatesService {
  constructor(@InjectModel(Updates.name) private updatesModel: Model<Updates>) {}

  private parseToDto(update: Updates): UpdatesDto {
    return {
      title: update.title,
      description: update.description,
      publishedTime: update.publishedTime,
      imgPreview: update.imgPreview,
      url: update.url,
    } as UpdatesDto;
  }

  async addUpdate(updateDto: UpdatesDto): Promise<Updates> {
    const update: Updates = { ...updateDto, _id: randomUUID() };
    const modelUpdate = new this.updatesModel(update);
    const updUpdate: Updates = await modelUpdate.save();
    return updUpdate;
  }

  async getLastTenUpdates(): Promise<UpdatesDto[]> {
    const updates: Updates[] = await this.updatesModel.aggregate([{
      $addFields: {
        date: {
          $dateFromString: {
            dateString: "$publishedTime"
          }
        }
      }
    }]).sort({
      date: -1
    }).limit(10).exec();
    return updates.map(update => this.parseToDto(update));
  }
}