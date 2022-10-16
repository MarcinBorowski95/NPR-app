import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'npr-body-data',
	templateUrl: './body-data.component.html',
	styleUrls: ['./body-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyDataComponent {
	public form: FormGroup;

	constructor() {
		this.form = new FormGroup({
			a: new FormControl(''),
		});
	}
}
