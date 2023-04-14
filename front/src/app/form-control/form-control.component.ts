import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormControlComponent),
    }
  ]
})
export class FormControlComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() name: string = '';
  @Input() error: string | null = null;
  @Input() type: string = 'text';
  private _value!: any;

  set value(value: any) {
    this._value = value;
    this.propagateChange(this._value);
    this.removeError();
  }

  get value(): any {
    return this._value;
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this._value = value;
    }
  }
  
  propagateChange = (_: any) => {};

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  
  registerOnTouched(fn: any): void { }
  
  setDisabledState(isDisabled: boolean): void { }

  removeError(): void {
    this.error = null;
  }
}
