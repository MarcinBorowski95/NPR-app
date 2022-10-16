import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyDataRoutingModule } from './body-data-routing.module';
import { BodyDataComponent } from './body-data.component';

@NgModule({
	declarations: [BodyDataComponent],
	imports: [CommonModule, BodyDataRoutingModule],
})
export class BodyDataModule {}
