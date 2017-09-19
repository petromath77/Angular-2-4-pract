import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[bold]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective {

    constructor(private element:ElementRef, private renderer:Renderer2) {

        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onMouseEnter() {
        this.setFontWeight("bold");
        this.setFontSize("20px");
    }

    onMouseLeave() {
        this.setFontWeight("normal");
        this.setFontSize("16px");
    }
    private setFontWeight(val) {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    }
    private setFontSize(val) {
        this.renderer.setStyle(this.element.nativeElement, "font-size", val);
    }
}