import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadmComponent } from './listadm.component';

describe('ListadmComponent', () => {
  let component: ListadmComponent;
  let fixture: ComponentFixture<ListadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
