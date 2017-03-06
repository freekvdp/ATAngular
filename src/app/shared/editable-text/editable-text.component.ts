import {Component, OnInit, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'at-editable-text',
  template: `
    <div class="editable-container">
      <textarea 
      autosize
      [placeholder]="placeholder" 
      [readonly]="!_editing" 
      [(ngModel)]="content" 
      [ngClass]="{editcontent:_editing}"
      class="editable-content">{{content}}</textarea>
      <div *ngIf="editable" class="change-button">
        <a (click)="changeEditing()"><i [ngClass]="editbutton" class="fa"></i></a>
      </div>
    </div>
  `,
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent implements OnInit, OnDestroy {

  @Input() editable = true;
  @Input() content;
  @Input() placeholder = 'No content added';
  private _editing: boolean = false;
  private editbutton = 'fa-pencil';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //TODO save content to database
  }

  setContent(text: string) {
    this.content = text;
  }

  changeEditing() {
    this._editing = !this._editing;
    this.editbutton = !this._editing ? 'fa-pencil' : 'fa-check-circle-o fa-lg';
    //icon-ok-circle
  }
}
