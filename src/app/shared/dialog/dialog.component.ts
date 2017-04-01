import {
  Component,
  OnInit,
  Input,
  trigger,
  transition,
  style,
  animate, EventEmitter, Output, HostListener
} from '@angular/core';
import {PersondetailSidebarService} from "../persondetail-sidebar/persondetail-sidebar.service";

@Component({
  selector: 'at-dialog',
  template: `
      <div [@dialog] (keyup.esc)="onClose()" *ngIf="visible" class="dialog">
      <h2 *ngIf="title" class="ata-title">{{title.toUpperCase()}}</h2>
        <ng-content></ng-content>
      </div>
      <div *ngIf="visible" class="overlay" (click)="onClose()"></div>
    `,
  styleUrls: ['dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({transform: 'scale3d(.3, .3, .3)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {

  @Input() title:string;
  @Input() visible: boolean;
  @Input() type: string;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private sidebar : PersondetailSidebarService) {
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyListener(event:KeyboardEvent){
    if(event.keyCode === 27)
      this.onClose();
  }

  onClose() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.sidebar.nwActors = [];
  }

}
