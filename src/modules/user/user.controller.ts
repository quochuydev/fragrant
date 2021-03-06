import { UserService } from "./user.service";
import { Param, Controller, Get, Query, UseGuards } from "@nestjs/common";

@Controller("/api/users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async list(@Query() query) {
    return { users: await this.userService.list(query) };
  }

  @Get("/:id")
  async get(@Param("id") id) {
    return await this.userService.get(id);
  }
}
