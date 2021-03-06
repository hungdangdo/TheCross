import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {

  }

  transform(value: string) {
    return this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1P4DaXgzVnE');
  }
}
