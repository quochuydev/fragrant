import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ViewModule } from "./modules/view/view.module";
import { BlogModule } from "./modules/blog/blog.module";

@Module({
  imports: [BlogModule, ViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
