import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'normalizarDateTime'
})

export class NormalizarDateTimePipe implements PipeTransform{
    transform(value: string) {
        var datePipe = new DatePipe("en-US");
        return datePipe.transform(value, 'dd/MM/yyyy HH:mm')
    }
}
