import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";


@Injectable()
export class ResearchRepository{
    constructor(private prisma:DatabaseService){}

    async GetEmail(email:string){
        return await this.prisma.research.findUnique({
            where:{
                email
            }
        })
    }
    async GetNim(nim:string){
        return await this.prisma.research.findUnique({
            where:{
                nim
            }
        })
    }
}