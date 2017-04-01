import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ActorPerson} from "../../../datamodels/actorPerson.model";
import {PersondetailSidebarService} from "../persondetail-sidebar.service";

@Component({
  selector: 'at-new-actor-form',
  templateUrl: 'new-actor-form.component.html',
  styleUrls: ['new-actor-form.component.css']
})
export class NewActorFormComponent implements OnInit {

  private nwActorForm : FormGroup;
  avatar :string;

  constructor(private formBuilder : FormBuilder,
              private pService : PersondetailSidebarService,
              private sidebarService : PersondetailSidebarService) {
  }

  ngOnInit() {
    this.avatar = this.sidebarService.randomAvatar();
    this.nwActorForm = this.formBuilder.group({
      'photo_url': [this.avatar],
      'name': ['', Validators.required],
      'position': ['', Validators.required],
      'email': ['', [Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]],
      'phone': ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(0|[1-9][0-9]*)$')]],
      'notes': ['']
    });
  }

  submitActor(){
    this.sidebarService.returnActorPerson(this.nwActorForm.value);
  }

}
