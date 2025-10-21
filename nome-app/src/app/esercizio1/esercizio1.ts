import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'esercizio-1',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="card p-3">
			<button class="btn btn-primary mb-2" (click)="toggle()">
				{{ show ? 'Nascondi' : 'Mostra' }} messaggio
			</button>

			<div *ngIf="show" class="alert alert-success">
				Esempio semplice di *ngIf: questo contenuto è visibile quando show === true.
			</div>
		</div>
	`
})
export class Esercizio1 {
	show = true;
	toggle() { this.show = !this.show; }
}