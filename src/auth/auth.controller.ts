import { Body, Controller, Post } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AUthDTO } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}
@Post('signup')
signup(@Body() dto: AUthDTO){
    console.log(
        {dto}
    );
    
    return this.authService.signup(dto);
}

@Post('signin')
signin(@Body() dto: AUthDTO){
    return this.authService.signin(dto);
}
   
}