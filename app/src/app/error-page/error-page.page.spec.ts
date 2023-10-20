import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ErrorPagePage } from './error-page.page';

describe('ErrorPagePage', () => {
  let component: ErrorPagePage;
  let fixture: ComponentFixture<ErrorPagePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ErrorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
