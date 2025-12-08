import { IsNotEmpty, IsString } from "class-validator";


export class ResearchDTO{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    nim:string

    @IsString()
    @IsNotEmpty()
    className:string

    @IsString()
    @IsNotEmpty()
    noHp:string

    @IsString()
    @IsNotEmpty()
    gender:string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    major:string

    @IsString()
    @IsNotEmpty()
    faculty:string

    @IsString()
    @IsNotEmpty()
    document:string

    @IsString()
    @IsNotEmpty()
    year:string
}