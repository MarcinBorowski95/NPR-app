import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'npr-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
	public today: Date = new Date();

	constructor(private router: Router) {}

	public get date(): string {
		return this.today.toDateString();
	}

	public goToBodyData(): void {
		this.router.navigate(['body-data']);
	}
}
