import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    // let reversedValue: string = '';
    // for (var i = value.length - 1; i >= 0; i--) {
    //   reversedValue += value.charAt(i);
    // }
    // return reversedValue;
return value.split('').reverse().join('')
// return value
  }
}
