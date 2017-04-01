import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'at-add-element',
  template: `
    <div id="addElement" (mouseenter)="onHover()" (mouseleave)="onHover()" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <span id="nieuw" [ngClass]="{'appear': appear}">Nieuw </span>
      <span id="plus"> + </span>
      <span id="type" [ngClass]="{'appear': appear}"> {{type}}</span>
    </div>
  `,
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  @Input() type:string;
  private appear:boolean = false;

  constructor() {}

  ngOnInit() {}

  onHover() {
    this.appear = !this.appear;
  }
}
