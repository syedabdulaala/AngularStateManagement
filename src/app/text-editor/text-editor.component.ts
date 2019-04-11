import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  @Input()
  inputString: string;
  widgets = [];

  constructor() { }

  ngOnInit() {
  }

  executeCommand(command : string){
    document.execCommand(command, false, '');
    this.highlightEditorButtons();
  }

  keydown(){
   this.highlightEditorButtons();
  }

  highlightEditorButtons(){
    const isBold = document.queryCommandValue("bold");
    const isItalic = document.queryCommandValue("italic");
    const isUnderline = document.queryCommandValue("underline");
    
    const btnBold = document.getElementById('btnBold');
    const btnItalic = document.getElementById('btnItalic');
    const btnUnderline = document.getElementById('btnUnderline');

    if (isBold === 'true') {
      btnBold.style.backgroundColor = "gray";
    } else {
      btnBold.style.backgroundColor = "lightgray";
    }
    
    if (isItalic === 'true') {
        btnItalic.style.backgroundColor = "gray";
    } else {
       btnItalic.style.backgroundColor = "lightgray";
    }

    if (isUnderline === 'true') {
       btnUnderline.style.backgroundColor = "gray";
    } else {
        btnUnderline.style.backgroundColor = "lightgray";
    }
  }

  onDrop(event) {
      let  widget = JSON.parse(event.dataTransfer.getData("Id"))
      console.log('Dropped On RTB', event)
      let userWidget = document.createElement("span");
      userWidget.innerHTML = widget.name
      userWidget.style.background = 'grey';
      userWidget.style.padding = '5px';
      userWidget.style.color = 'white';
      userWidget.style.fontWeight = 'bolder';
      userWidget.className = 'dummy-component';
      event.target.appendChild(userWidget);
      event.target.innerHTML += '&nbsp;' 
      // this.widgets.push(widget)
        // event.preventDefault();
        // return false
    }
    onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        return false
    }

}