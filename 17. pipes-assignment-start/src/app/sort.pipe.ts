import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(array: any, orderby: string): any {
    const resultArray = array.sort((a, b) => {
      if (a[orderby] < b[orderby]) {
        return -1;
      } else if (a[orderby] > b[orderby]) {
        return 1;
      } else {
        return 0;
      }
    });

    return resultArray;

// return array.sort((a, b) => (a[orderby] > b[orderby] ? 1 : -1))

  }
}
