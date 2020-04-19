import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './datagrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { OnlyNumberDirective } from './onlyNumberDirective';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
