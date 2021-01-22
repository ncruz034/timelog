import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TreeFileCreatorComponent } from './tree-file-creator.component';

describe('TreeFileCreatorComponent', () => {
  let component: TreeFileCreatorComponent;
  let fixture: ComponentFixture<TreeFileCreatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeFileCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFileCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
