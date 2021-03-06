import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { UserModule } from "../user/user.module";
import { RoleModule } from "../role/role.module";
import { TokenModule } from "../../providers/token/token.module";

@Module({
  imports: [PassportModule, UserModule, TokenModule, RoleModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
