import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  inject
} from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]',
  standalone: true,
})
export class DirectiveTestDirective {

  private _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostBinding('style.color') // é o mesmo que: this._elementRef.nativeElement.style.color = this.appDirectiveTest;
  @Input()
  public appDirectiveTest?: string;

  @Output() clicked = new EventEmitter();

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this._elementRef.nativeElement.style.display = 'block';
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this._elementRef.nativeElement.style.display = '';
    this._elementRef.nativeElement.style.backgroundColor = '';
  }

  @HostListener('click')
  public onClick(): void {
    this.clicked.emit('clicou');
  }

}
