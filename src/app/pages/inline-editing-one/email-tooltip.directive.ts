import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEmailTooltip]'
})
export class EmailTooltipDirective {
  constructor(private el : ElementRef, private rendered : Renderer2) { }
  @Input('appEmailTooltip') tooltipContent : any;

  createTooltip() {
    const myDiv = this.rendered.createElement('div');
    const text = this.rendered.createText(this.tooltipContent);
    this.rendered.appendChild(myDiv, text);
    this.rendered.addClass(myDiv,"myTooltip1");
    this.rendered.setStyle(myDiv, 'position', 'absolute')
    return myDiv;
  }

 
  @HostListener('mouseover')
  onMouseover(){
    const myTooltip = this.createTooltip();
    this.rendered.appendChild(this.el.nativeElement, myTooltip)
  }

  @HostListener('mouseout')
  onMouseLeave(){
    setTimeout(()=> {
      const myTooltip = this.el.nativeElement.querySelector(".myTooltip1");
      this.rendered.removeChild(this.el.nativeElement,myTooltip);
    },300);
  }

}
