import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { ResultService } from "../result.service";
import { QuestionService } from "../question.service";
import { QuestviewComponent } from "../questview/questview.component";
import { ResultviewComponent } from "../resultview/resultview.component";
import { InstructionsComponent } from './instructions.component';

describe('InstructionsComponent', () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultviewComponent, QuestviewComponent, InstructionsComponent ],
      providers: [QuestionService, ResultService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
