import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToBtc'
})
export class UsdToBtcPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd: boolean = false): number {
    if (isBtcToUsd) {
      return amount * 41633.50;
    }
    return amount / 41633.50;
  }

}
