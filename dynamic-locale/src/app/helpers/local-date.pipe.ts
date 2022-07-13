import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { SessionService } from '../services/session.service';

@Pipe({
  name: 'localdate'
})
export class LocalDatePipe implements PipeTransform {

  constructor(private session: SessionService) { }

    transform(value: any, format: string) {
     
        if (!value) { return ''; }
        if (!format) { format = 'mediumDate'; }
        console.log('pipe' + value);
        return formatDate(value, format, this.session.locale);       
    }
}
