import { LOCALE_ID, NgModule } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePl);

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule, ReactiveFormsModule],
	providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
