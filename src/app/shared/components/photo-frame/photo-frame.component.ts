import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit {

  @Output() public liked: EventEmitter<void> = new EventEmitter();

  @Input() public src = '';
  @Input() public description = '';
  @Input() public likes = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public like(): void {
    this.liked.emit();
  }

}
