import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @HostBinding('style.backgroundColor') myBackgroundColor: string;
  @HostBinding('class') myClass!: string;
  constructor() {
    this.myBackgroundColor = '';
  }
  ngOnInit(): void { }


  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myClass = 'first';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myClass = '';
  }

}
