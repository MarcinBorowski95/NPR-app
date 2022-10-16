import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/components/welcome/welcome.component';

const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{
		path: 'body-data',
		loadChildren: () =>
			import('./body-data/body-data.module').then((m) => m.BodyDataModule),
	},
	{ path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
