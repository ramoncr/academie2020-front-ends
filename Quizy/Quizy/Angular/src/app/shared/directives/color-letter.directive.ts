import { Directive, HostListener, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[colorLetter]'
})
export class ColorLetterDirective implements AfterViewChecked {
  @HostListener('change')
  onChange() { 
    this.changeColor(this.el.nativeElement);
  }

  constructor(private el: ElementRef<HTMLInputElement>) { }

  changeColor(el: HTMLInputElement) {
    const letters = "123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
      el.style.backgroundColor = color;
  }

  ngAfterViewChecked() {
    this.changeColor(this.el.nativeElement);
  }
}
