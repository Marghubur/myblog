import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords',
  standalone: true
})
export class SliceWordsPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    // Split the value into an array of words
    const words = value.split(' ');

    // If the number of words is less than or equal to the limit, return the original value
    if (words.length <= limit) {
      return value;
    }

    // Otherwise, concatenate the first 'limit' words and add an ellipsis
    return words.slice(0, limit).join(' ') + '...';
  }

}
