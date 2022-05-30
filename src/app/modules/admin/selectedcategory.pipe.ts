import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedcategory'
})
export class SelectedcategoryPipe implements PipeTransform {

  transform(productlst: any[], category: string): any[] {
    return productlst.filter(prod => {
      if (prod.category==category){
        return prod.category;
      }
      else if (category==undefined){
        return productlst;
      }
    })
  }

}
