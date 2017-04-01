import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditableTextComponent} from "./editable-text/editable-text.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Autosize} from "../Directives/autosize.directive";
import {PersondetailSidebarComponent} from "./persondetail-sidebar/persondetail-sidebar.component";
import {PersondetailSidebarService} from "./persondetail-sidebar/persondetail-sidebar.service";
import {AddElementComponent} from "./add-element/add-element.component";
import {DialogComponent} from "./dialog/dialog.component";
import {AuthService} from "./auth.service";
import {DataService} from "./data.service";
import {AuthGuard} from "./auth.guard";
import {NewActorFormComponent} from "./persondetail-sidebar/new-actor-form/new-actor-form.component";


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    EditableTextComponent,
    Autosize,
    PersondetailSidebarComponent,
    AddElementComponent,
    DialogComponent,
    NewActorFormComponent
  ],
  exports: [
    EditableTextComponent,
    PersondetailSidebarComponent,
    AddElementComponent,
    DialogComponent
  ],
  providers: [
    PersondetailSidebarService,
    DataService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
