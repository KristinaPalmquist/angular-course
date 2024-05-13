import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { counterReducer } from "./store/counter.reducer";
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from "./store/counter.effects";


@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule,
    CounterOutputComponent,
    StoreModule.forRoot({counter: counterReducer}, {}),
    EffectsModule.forRoot([CounterEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}