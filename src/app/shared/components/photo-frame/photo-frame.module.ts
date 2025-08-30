import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFrameComponent } from './photo-frame.component';
import { LikeWidgetModule } from '../like-widget/like-widget.module';



@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [
    CommonModule,
    LikeWidgetModule,
  ],
})
export class PhotoFrameModule { }
