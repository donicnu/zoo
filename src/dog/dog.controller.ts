import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, query } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('id:', params);
    console.log('query:', query);
    return this.dogService.introduce();
  }

  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);

    return this.dogService.modifyDetail();
  }
}
