import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableListDirective } from './draggable-list.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DraggableListDirective]
})
export class DragDropModule { }