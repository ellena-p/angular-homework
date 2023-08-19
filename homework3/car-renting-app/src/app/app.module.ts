import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsListComponent } from './component/cars-list/cars-list.component';
import { FilterOptionsComponent } from './component/filter-options/filter-options.component';
import { FormsModule } from '@angular/forms';
import { SortOptionsPipe } from './pipes/sort-options.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    FilterOptionsComponent,
    SortOptionsPipe,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
