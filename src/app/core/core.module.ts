import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
	imports: [CommonModule],
	declarations: [HeaderComponent, WelcomeComponent],
	exports: [HeaderComponent, WelcomeComponent],
})
export class CoreModule {}
