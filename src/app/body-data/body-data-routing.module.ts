import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyDataComponent } from './body-data.component';

const routes: Routes = [{ path: '', component: BodyDataComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class BodyDataRoutingModule {}
