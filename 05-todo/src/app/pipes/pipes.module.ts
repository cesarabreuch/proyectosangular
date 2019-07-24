import { NgModule } from '@angular/core';
import { FilterDonePipe } from './filter-done.pipe';


@NgModule({
  declarations: [
    FilterDonePipe
  ],
  exports: [
    FilterDonePipe
  ]
})
export class PipesModule { }
