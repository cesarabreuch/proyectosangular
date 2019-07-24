import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterDone',
  pure: false
})
export class FilterDonePipe implements PipeTransform {

  transform(lists: List[], done: boolean = true): List[] {

    return lists.filter(newList => newList.finish === done);
  }

}
