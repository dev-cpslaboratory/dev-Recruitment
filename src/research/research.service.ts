import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ResearchDTO } from './dto/research.dto';
import { ResearchRepository } from './research.repository';

@Injectable()
export class ResearchService {
    constructor(private prisma:DatabaseService,
        private repo:ResearchRepository,
    ){}

    async Register(data : ResearchDTO){
        if(!data){
            throw new BadRequestException("all fields are required")
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const {email, nim} = data;

        if(!emailRegex.test(email)){
            throw new BadRequestException("format email false")
        }

        const emailExisted = await this.repo.GetEmail(email)
        if(emailExisted){
            throw new BadRequestException("email already exist")
        }

        const nimExisted = await this.repo.GetNim(nim)
        if(nimExisted){
            throw new BadRequestException("nim already existed")
        }

        const result = await this.prisma.research.create(
            {
                data:data
            }
        )

        return {message:"status berhasil", data: result}

    }
}
