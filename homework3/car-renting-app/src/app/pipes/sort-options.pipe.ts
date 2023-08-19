import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Pipe({
  name: 'sortOptions'
})
export class SortOptionsPipe implements PipeTransform {
  transform(cars: Car[], order: string): Car[] {
    const sorted = [...cars].sort((a, b) => {
      const modelsAsc = a.model.toLowerCase();
      const modelDesc = b.model.toLowerCase();
      if (order === 'asc') {
        return modelsAsc.localeCompare(modelDesc);
      } else if (order === 'desc') {
        return modelDesc.localeCompare(modelsAsc);
      }
      return 0;
    });
    return sorted;
  }
}
