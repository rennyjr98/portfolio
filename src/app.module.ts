import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project.module';
import { UserModule } from './user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:RenesPortfolio@portfolio.zlcakth.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    ProjectModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
