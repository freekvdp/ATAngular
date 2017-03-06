import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditableTextComponent} from "./editable-text/editable-text.component";
import {FormsModule} from "@angular/forms";
import {Autosize} from "../Directives/autosize.directive";
import {PersondetailSidebarComponent} from "./persondetail-sidebar/persondetail-sidebar.component";
import {PersondetailSidebarService} from "./persondetail-sidebar/persondetail-sidebar.service";


@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    EditableTextComponent,
    Autosize,
    PersondetailSidebarComponent
  ],
  exports: [
    EditableTextComponent,
    PersondetailSidebarComponent
  ],
  providers: [
    PersondetailSidebarService
  ]
})
export class SharedModule { }
