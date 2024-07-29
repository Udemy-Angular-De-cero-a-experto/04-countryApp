import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public OnValue = new EventEmitter<string>();

  emitValue(): void {
    this.OnValue.emit( this.txtInput.nativeElement.value );
    this.txtInput.nativeElement.value = '';
  }
}
