import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SteamComponent } from './steam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SteamComponent', () => {
  let component: SteamComponent;
  let fixture: ComponentFixture<SteamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create steam component', () => {
    expect(component).toBeTruthy();
  });
});
