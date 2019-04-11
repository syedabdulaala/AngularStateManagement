import { Component } from '@angular/core';
import { TEXTBOX, CHECKBOX, RADIO_BUTTON, SIGNATURE  } from './../constants';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css' ]
})
export class SidebarComponent  {
  elements = [
    { id: 1, name: 'TextBox', type: TEXTBOX },
    { id: 2, name: 'CheckBox', type: CHECKBOX },
    { id: 3, name: 'Radio Button', type: RADIO_BUTTON },
    { id: 4, name: 'Signature', type: SIGNATURE },
  ];

  onDragStart(event, id) {
    event.dataTransfer.setData('Id', JSON.stringify(
      this.elements.filter((item) => item.id === id).pop()
    ));
  }
}
