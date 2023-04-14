import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-time-input-group',
  templateUrl: './date-time-input-group.component.html',
  styleUrls: ['./date-time-input-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DateTimeInputGroupComponent),
    }
  ]
})
export class DateTimeInputGroupComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() name!: string;
  @Input() value!: string | null;
  private _date!: string | null;
  private _time!: string | null;

  get date(): string | null {
    return this.getDate();
  }

  set date(value: string | null) {
    this._date = value;
    this.updateValue();
    this.propagateChange(this.value);
  }

  get time(): string | null {
    return this.getTime();
  }

  set time(value: string | null) {
    this._time = value;
    this.updateValue();
    this.propagateChange(this.value);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
      this._date = this.getDate();
      this._time = this.getTime();
    }
  }
  
  propagateChange = (_: any) => {};

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  
  registerOnTouched(fn: any): void { }
  
  setDisabledState(isDisabled: boolean): void { }

  updateValue(): void {
    if (this._date && this._time) {
      this.value = this._date + ' ' + this._time + ':00';
    } else if (this._date || this._time) {
      let today = new Date();
      let day = (today.getDate() < 10 ? '0' : '') + today.getDate();
      let month = (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1);
      let date = this._date || `${today.getFullYear()}-${month}-${day}`;
      let time = this._time ? (this._time + ':00') : '00:00:00';
      this.value = date + ' ' + time;
    } else {
      this.value = null;
    }
  }

  getDate(): string | null {
    if (this.value) {
      let [date, _] = this.value.split(' ');
      return date;
    } else {
      return null;
    }    
  }

  getTime(): string | null {
    if (this.value) {
      let [_, time] = this.value.split(' ');
      return time;
    } else {
      return null;
    }
  }
}
