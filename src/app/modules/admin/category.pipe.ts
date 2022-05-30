import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input_array: any): any {
    let output_array:any = {}
    input_array.forEach((element:any) => {
      output_array[element.category]=true
    });
    return Object.keys(output_array);
  }

}
