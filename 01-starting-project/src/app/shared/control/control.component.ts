import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
   '(click)': 'onClick()'
  },
})
export class ControlComponent {
  // @HostListener('click') onClick() { 
  //   console.log('ControlComponent.onClick()');
  // };
  label = input.required<string>();
  private element = inject(ElementRef);

  onClick() {
    console.log('ControlComponent.onClick()');
    console.log('element:', this.element);
  }

}
