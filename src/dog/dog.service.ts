import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOW-WOW';
  }

  public introduce(): string {
    return 'My name is Tuzik';
  }

  public modifyDetail(): string {
    return 'Seuccesfully modified';
  }
}
