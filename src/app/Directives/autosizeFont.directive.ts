import {ElementRef, HostListener, Directive, OnInit} from '@angular/core';

@Directive({
    selector: 'textarea[autosize]'
})

export class AdjustFont implements OnInit {
  ngOnInit(){console.log(this.element.nativeElement);}

 @HostListener('input',['$event.target'])
  onInput(input: HTMLInputElement): void {
    this.adjust();
  }
  constructor(public element: ElementRef){
  }
  ngAfterContentChecked(): void{
    this.adjust();
  }
  adjust(): void{
   console.log(this.element.nativeElement);
    // this.element.nativeElement.style.overflow = 'auto';
    // this.element.nativeElement.style.height = 'auto';
    // this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
  }
}
