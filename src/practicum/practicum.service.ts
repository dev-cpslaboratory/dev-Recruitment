import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PracticumDTO } from './dto/practicum.dto';

@Injectable()
export class PracticumService {
    constructor(
        private prisma : DatabaseService
    ){}

    async GetEmail(email : string){
        return await this.prisma.practicum.findUnique(
            {
                where: {email : email}
            }
        )
    }

    async GetNim(nim : string){
        return await this.prisma.practicum.findUnique(
            {
                where: {nim : nim}
            }
        )
    }

     async Register(data : PracticumDTO){
            if(!data){
                throw new BadRequestException("all fields are required")
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const {email, nim} = data;
    
            if(!emailRegex.test(email)){
                throw new BadRequestException("format email false")
            }
    
            const emailExisted = await this.GetEmail(email)
            if(emailExisted){
                throw new BadRequestException("email already exist")
            }
    
            const nimExisted = await this.GetNim(nim)
            if(nimExisted){
                throw new BadRequestException("nim already existed")
            }
    
            const result = await this.prisma.practicum.create(
                {
                    data:data
                }
            )
    
            return {message:"status berhasil", data: result}
    
        }
    
}
