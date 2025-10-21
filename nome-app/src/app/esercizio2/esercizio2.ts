import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'esercizio-2',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="card p-3">
			<div class="d-flex justify-content-between align-items-center mb-2">
				<p class="mb-0">Esempio di *ngFor su una lista di elementi:</p>
				<div>
					<button class="btn btn-sm btn-outline-primary me-1" (click)="addItem()">Aggiungi</button>
					<button class="btn btn-sm btn-outline-danger" (click)="clear()">Svuota</button>
				</div>
			</div>

			<ul class="list-group" *ngIf="items.length; else vuoto">
				<li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let item of items; let i = index">
					<span><strong>{{ i + 1 }}.</strong> {{ item }}</span>
					<button class="btn btn-sm btn-danger" (click)="remove(i)">Elimina</button>
				</li>
			</ul>

			<ng-template #vuoto>
				<div class="alert alert-info mb-0">La lista è vuota. Premi "Aggiungi".</div>
			</ng-template>
		</div>
	`
})
export class Esercizio2 {
	items = ['Angular', 'TypeScript', 'Directives', 'Components'];

	addItem() {
		const newItem = `Elemento ${this.items.length + 1}`;
		this.items = [...this.items, newItem];
	}

	remove(index: number) {
		this.items = this.items.filter((_, i) => i !== index);
	}

	clear() {
		this.items = [];
	}
}