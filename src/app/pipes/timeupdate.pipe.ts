import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeupdate'
})
export class TimeupdatePipe implements PipeTransform {
  transform(value: string): string {
    const postDate = new Date(value);
    const currentDate = new Date();
    const diffInMinutes = Math.floor((currentDate.getTime() - postDate.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) {
      return 'Just now';
    } else if (diffInMinutes < 60) {
      return diffInMinutes + ' minute(s) ago';
    } else if (diffInMinutes < 1440) {
      const diffInHours = Math.floor(diffInMinutes / 60);
      return diffInHours + ' hour(s) ago';
    } else {
      const diffInDays = Math.floor(diffInMinutes / 1440);
      return diffInDays + ' day(s) ago';
    }
  }
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
