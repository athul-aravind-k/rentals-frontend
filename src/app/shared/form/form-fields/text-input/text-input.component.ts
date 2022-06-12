import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { getErrorMessage } from '../form-fields.helper';

@Component({
  selector: 'x-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements OnChanges, ControlValueAccessor {
  @Input()
  public label: string;

  @Input()
  public readOnly: boolean;

  @Input()
  public type: string;

  @Input()
  public autoComplete = 'off';

  @Input()
  public errorMessages: any;

  @Input() placeholder: string = '';

  public errors: string;

  public disabled!: boolean;

  public textInputFormControl = new FormControl('');

  private onChange: Function;

  private onTouched: Function;

  constructor() {
    this.onChange = (_: string) => {};
    this.onTouched = () => {};
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['errorMessages']) {
      this.errors = getErrorMessage(this.errorMessages);
    }
  }

  public change() {
    this.onChange(this.textInputFormControl.value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.textInputFormControl.setValue(value);
  }

  registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
