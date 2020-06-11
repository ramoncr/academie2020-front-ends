import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {

  @Input() public label!: string;
  @Input() public id!: string;
  @Input() public value!: number;
  @Output() public valueChange: EventEmitter<number> = new EventEmitter();

  @Input() public placeholder!: string;
  @Input() public name?: string;
}
