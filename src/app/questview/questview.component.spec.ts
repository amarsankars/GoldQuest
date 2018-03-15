import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestviewComponent } from './questview.component';

describe('QuestviewComponent', () => {
  let component: QuestviewComponent;
  let fixture: ComponentFixture<QuestviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
