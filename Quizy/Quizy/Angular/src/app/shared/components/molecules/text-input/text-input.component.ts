import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input() public label!: string;
  @Input() public id!: string;
  @Input() public value!: string;
  @Output() public valueChange: EventEmitter<string> = new EventEmitter();

  @Input() public placeholder!: string;
  @Input() public name?: string;
}
