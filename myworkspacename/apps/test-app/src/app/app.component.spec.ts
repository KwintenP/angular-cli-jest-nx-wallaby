import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { util } from '@myworkspacename/test-lib';
describe('AppComponent', () => {
  it('should test the sum function', () => {
    expect(util()).toBe('test');
    expect(true).toBeTruthy();
  });
});
