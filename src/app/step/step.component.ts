import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input('step') step;
  str: String = "With supporting text below as a natural lead-in to additional content.";
  inputItem = {};
  
  constructor() { }

  ngOnInit() {
  }

    onDrop(event) {
      this.inputItem = JSON.parse(event.dataTransfer.getData("Id"))
    }
    onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        return false
    }

}