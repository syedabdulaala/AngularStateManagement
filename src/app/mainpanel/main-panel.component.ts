import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Select } from '@ngxs/store';
import { MainPanelState, MainPanelStateModel, AddStep, DeleteStep, Drop, Undo, Redo } from '../state-managment/main-panel.state';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent {

  constructor(private store: Store) {
  }

  @Select(MainPanelState.steps)
  steps: Observable<{ id: number, name: string }[]>;

  @Select(MainPanelState.canRedo)
  canRedo: Observable<number>;

  @Select(MainPanelState.canUndo)
  canUndo: Observable<number>;

  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(new Drop(event));
  }

  deleteStep(step) {
    this.store.dispatch(new DeleteStep())
  }

  addNewStep() {
    this.store.dispatch(new AddStep())
  }

  undo() {
    this.store.dispatch(new Undo());
  }

  redo() {
    this.store.dispatch(new Redo());
  }
}