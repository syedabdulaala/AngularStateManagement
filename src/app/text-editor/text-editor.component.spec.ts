import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TextEditorComponent } from './text-editor.component';
import { By } from "@angular/platform-browser";

describe('TextEditor',()=>{
  let fixture : ComponentFixture<TextEditorComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
            declarations:[TextEditorComponent],
        });
    fixture = TestBed.createComponent(TextEditorComponent);
  });

  it('should call executeCommand function with bold parameter when Bold icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('bold');
  });

  it('should call executeCommand function with underline parameter when underline icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('underline');
  });

  it('should call executeCommand function with italic parameter when italic icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[2];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('italic');
  });

  it('should call executeCommand function with insertUnorderedList parameter when insertUnorderedList icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[3];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('insertUnorderedList');
  });

  it('should call executeCommand function with insertOrderedList parameter when insertOrderedList icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[4];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('insertOrderedList');
  });

  it('should call executeCommand function with outdent parameter when outdent icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[6];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('outdent');
  });

  it('should call executeCommand function with indent parameter when indent icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'executeCommand');
    const button = fixture.debugElement.queryAll(By.css('button'))[7];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.executeCommand).toHaveBeenCalledWith('indent');
  });

  it('should call keydown function when some text is entered in div',()=>{
    spyOn(fixture.componentInstance, 'keydown');
    const div = fixture.debugElement.queryAll(By.css('div'))[1];
    div.triggerEventHandler('keydown', null);
    expect(fixture.componentInstance.keydown).toHaveBeenCalled();
  });

  it('should call highlightEditorButtons function when any editor icon is clicked ',()=>{
    spyOn(fixture.componentInstance, 'highlightEditorButtons');
    const button = fixture.debugElement.queryAll(By.css('button'))[7];
    button.triggerEventHandler('click', null);
    expect(fixture.componentInstance.highlightEditorButtons).toHaveBeenCalled();
  });

   it('should call highlightEditorButtons function when when some text is entered in div ',()=>{
    spyOn(fixture.componentInstance, 'highlightEditorButtons');
    const div = fixture.debugElement.queryAll(By.css('div'))[1];
    div.triggerEventHandler('keydown', null);
    expect(fixture.componentInstance.highlightEditorButtons).toHaveBeenCalled();
  });

});