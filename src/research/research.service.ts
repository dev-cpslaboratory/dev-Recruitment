import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ResearchDTO } from './dto/research.dto';
import { ResearchRepository } from './research.repository';
import { join } from 'path';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ResearchService {
    constructor(private prisma:DatabaseService,
        private repo:ResearchRepository,
        private readonly mailerService:MailerService,
    ){}

    async Register(data : ResearchDTO){
        
        try {
            if(!data){
                throw new BadRequestException("all fields are required")
            };
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const {email, nim} = data;
    
            if(!emailRegex.test(email)){
                throw new BadRequestException("format email false")
            };
    
            const emailExisted = await this.repo.GetEmail(email)
            if(emailExisted){
                throw new BadRequestException("email already exist")
            };
    
            const nimExisted = await this.repo.GetNim(nim)
            if(nimExisted){
                throw new BadRequestException("nim already existed")
            };
    
            const result = await this.prisma.research.create(
                {
                    data:data
                }
            );
            
            await this.mailerService.sendMail({
                to:data.email,
                subject:'Terimakasih Telah Mendaftar!',
                template:'./thankyou',
                context:{
                    name:data.name,
                },
                attachments:[
                    {
                        filename:'logocps.png',
                        path:join(__dirname, './templates/images/logocps.png'),
                        cid:'logocps'
                    }
                ]
            })
    
            return {message:"status berhasil", data: result}
        } catch (error) {
            console.error("error: ", error)
        }


    }
}
