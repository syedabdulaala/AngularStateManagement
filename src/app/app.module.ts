import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainPanelComponent } from './mainpanel/main-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StepComponent } from './step/step.component';
import { TextEditorComponent } from './text-editor/text-editor.component'
import { NgxsModule } from '@ngxs/store'

import { MainPanelState } from './state-managment/main-panel.state';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    DragDropModule,
    NgxsModule.forRoot([MainPanelState],  { developmentMode: true })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MainPanelComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    StepComponent,
    TextEditorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
