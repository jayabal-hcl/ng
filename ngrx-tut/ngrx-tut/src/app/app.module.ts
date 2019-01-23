import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EmployeeReducer } from '../store/reducers/employee.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      employee: EmployeeReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
