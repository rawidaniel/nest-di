import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawing 20 waats of power from power service');
    this.powerService.supplyPower(20);
    return 'Data from desk service';
  }
}
