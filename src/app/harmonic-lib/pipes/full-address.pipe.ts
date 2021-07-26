import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {

  transform(address: string, city: string, country: string): string {
    return `${address}, ${city}, ${country}`;
  }

}
