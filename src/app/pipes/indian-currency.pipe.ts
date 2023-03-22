import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'indianCurrency'
  })

  export class IndianCurrencyPipe implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value)) {
            return '';
          }
        
          const formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0, // Change minimumFractionDigits to 0
            maximumFractionDigits: 2 // Keep maximumFractionDigits as 2
          });
        
          const formattedValue = formatter.format(value);
          
          // Remove the .00 decimal places from the formatted value
          return formattedValue.replace(/\.00$/, '');
    }
  }
  
  