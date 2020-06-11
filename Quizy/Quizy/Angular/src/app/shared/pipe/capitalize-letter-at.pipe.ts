import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeLetterAt'
})
export class CapitalizeLetterAtPipe implements PipeTransform {

  transform(value: string, index: number): unknown {
    return value.substring(0, index) +
      value.substring(index, index + 1).toUpperCase() +
      value.substring(index + 1, value.length);
  }

}
