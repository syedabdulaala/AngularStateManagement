import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export class Undo {
  static readonly type = '[Main Panel] Undo';
}

export class Redo {
  static readonly type = '[Main Panel] Redo';
}

export interface Undoable<T> {
  past: T[];
  present: T;
  future: T[];
}

export class Drop {
  static readonly type = '[Main Panel] Drop';
  constructor(public event: CdkDragDrop<string[]>) { }
}

export class AddStep {
  static readonly type = '[Main Panel] AddStep';
}

export class DeleteStep {
  static readonly type = '[Main Panel] DeleteStep';
}

export interface MainPanelStateModel {
  steps: { id: number, name: string }[];
}


@State<Undoable<MainPanelStateModel>>({
  name: 'mainpanelstate',
  defaults: {
    future: [],
    present: {
      steps: [
        { id: 1, name: '1.0' },
        { id: 2, name: '2.0' },
        { id: 3, name: '3.0' },
      ]
    },
    past: []
  }
})
export class MainPanelState {
  @Selector()
  static canUndo<T>(state: Undoable<T>) {
    return state.past.length;
  }

  @Selector()
  static canRedo<T>(state: Undoable<T>) {
    return state.future.length;
  }

  @Selector()
  static steps(state: Undoable<MainPanelStateModel>) {
    return state.present.steps;
  }

  @Action(Drop)
  drop(ctx: StateContext<Undoable<MainPanelStateModel>>, action: Drop) {
    // debugger;
    // if (action.event.previousContainer === action.event.container) {
    //   action.event.container.data.subscribe((x) => {
    //     moveItemInArray(x, action.event.previousIndex, action.event.currentIndex);
    //   });
    // }
  }

  @Action(AddStep)
  addStep(ctx: StateContext<Undoable<MainPanelStateModel>>) {
    let state = ctx.getState();
    ctx.patchState({
      future: [],
      past: [...state.past, state.present],
    });
    const newStep = { id: state.present.steps.length + 1, name: `${state.present.steps.length + 1}.0` }
    ctx.patchState({
      present: { steps: [...state.present.steps, newStep] }
    });
    console.log(ctx.getState());
  }

  @Action(DeleteStep)
  deleteStep(ctx: StateContext<Undoable<MainPanelStateModel>>) {
    let state = ctx.getState();
    ctx.patchState({
      future: [],
      past: [...state.past, state.present],
    });
    const newStep = { id: state.present.steps.length + 1, name: `${state.present.steps.length + 1}.0` }
    ctx.patchState({
      present: { steps: [...state.present.steps, newStep] }
    })
    console.log(ctx.getState());
  }

  @Action(Undo)
  undo(ctx: StateContext<Undoable<MainPanelStateModel>>) {
    const state = ctx.getState();
    if (state.past.length == 0) return;
    ctx.patchState({
      future: [...state.future, state.present],
      present: state.past[state.past.length - 1],
      past: state.past.slice(0, state.past.length - 1)
    });
    console.log(ctx.getState());
  }

  @Action(Redo)
  redo(ctx: StateContext<Undoable<MainPanelStateModel>>) {
    const state = ctx.getState();
    if (state.future.length == 0) return;
    ctx.patchState({
      past: [...state.past, state.present],
      present: state.future[state.future.length - 1],
      future: state.future.slice(0, state.future.length - 1)
    });
    console.log(ctx.getState());
  }
}