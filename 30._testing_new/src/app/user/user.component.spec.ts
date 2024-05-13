import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  })
  it('should create an instance of UserComponent', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    expect(userComponent).toBeTruthy();
  });
  it('should use user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(userComponent.user.name);
  })
it('should display the user name if the user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    userComponent.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(userComponent.user.name);
  });
  it('should not display the user name if the user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(userComponent.user.name);
  });
  it ('should not fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(userComponent.data).toBe(undefined);
  });
  it ('should fetch data successfully if called asynchronously', waitForAsync( () => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(userComponent.data).toBe('Data');
    })
  }));
  it ('should fetch data successfully if called asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let userComponent = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(userComponent.data).toBe('Data');
  }));
});
