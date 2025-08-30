import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

  @Output() public liked: EventEmitter<void> = new EventEmitter();

  @Input() public src = '';
  @Input() public description = '';
  @Input() public likes = 0;

  private debounceSubject: Subject<void> = new Subject();
  private unsubscribeSubject: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounceSubject.asObservable()
        .pipe(
            takeUntil(this.unsubscribeSubject),
            debounceTime(500)
        )
        .subscribe(() => {
          this.liked.emit();
        });
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  public like(): void {
    this.debounceSubject.next();
  }

}
