import {Component, ElementRef} from "@angular/core";
/**
 * Created by Vlerkbook-pro on 16/03/2017.
 */
@Component({
  selector: 'at-image-container',
  template: `
        <input type="file" (change)="changeListner($event)" />
        <img class="image" />
    `
})
export class ImageContainerComponent {
  constructor(private element: ElementRef) {}

  changeListner(event) {
    let reader = new FileReader();
    let image = this.element.nativeElement.querySelector('.image');

    reader.onload = function(e) {
      // let src = e.target.result;
      // image.src = src;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
