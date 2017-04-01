import {Component, OnInit, Input, OnDestroy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'at-editable-text',
  template: `
    <div class="editable-container">
      <textarea 
      autosize
      *ngIf="area"
      [placeholder]="placeholder"
      [readonly]="!_editing"
      [(ngModel)]="content"
      [ngClass]="{editcontentarea:_editing}"
      class="editable-contentarea">{{content}}</textarea>
      <input 
      *ngIf="!area"
      type="text"
      [readonly]="!_editing"
      [(ngModel)]="content"
      class="editable-contentinput"
      [ngClass]="{editcontentinput:_editing}"
      [placeholder]="placeholder">   
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
  @Input() area:boolean = true;
  @Output() newContent:EventEmitter<[string,string]> = new EventEmitter<[string,string]>()
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
    if(this._editing)
      this.newContent.emit([this.content,this.placeholder]);
    this._editing = !this._editing;
    this.editbutton = !this._editing ? 'fa-pencil' : 'fa-check-circle-o fa-lg';
    //icon-ok-circle
  }
}
