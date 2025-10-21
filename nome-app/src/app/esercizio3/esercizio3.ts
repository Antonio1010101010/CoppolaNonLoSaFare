import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Studente {
	nome: string;
	voto: number | null;
}

@Component({
	selector: 'esercizio-3',
	standalone: true,
	imports: [CommonModule, FormsModule],
	template: `
		<div class="card p-3">
			<form (ngSubmit)="aggiungi()" class="row g-2 align-items-end">
				<div class="col-md-6">
					<label class="form-label">Nome</label>
					<input class="form-control" [(ngModel)]="nuovo.nome" name="nome" required />
				</div>
				<div class="col-md-3">
					<label class="form-label">Voto</label>
					<input type="number" class="form-control" [(ngModel)]="nuovo.voto" name="voto" min="0" max="30" required />
				</div>
				<div class="col-md-3">
					<button class="btn btn-success w-100" type="submit">Aggiungi studente</button>
				</div>
			</form>

			<hr />

			<div *ngIf="studenti.length; else vuoto">
				<table class="table table-striped table-bordered mt-2">
					<thead class="table-light">
						<tr>
							<th>#</th>
							<th>Nome</th>
							<th>Voto</th>
							<th>Azioni</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let s of studenti; let i = index">
							<td>{{ i + 1 }}</td>
							<td>{{ s.nome }}</td>
							<td>{{ s.voto }}</td>
							<td>
								<button class="btn btn-sm btn-danger" (click)="rimuovi(i)">Elimina</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<ng-template #vuoto>
				<div class="alert alert-info mt-2">Nessuno studente presente. Aggiungine uno sopra.</div>
			</ng-template>
		</div>
	`
})
export class Esercizio3 {
	studenti: Studente[] = [
		{ nome: 'Mario Rossi', voto: 28 },
		{ nome: 'Luigi Bianchi', voto: 24 }
	];

	nuovo: Studente = { nome: '', voto: null };

	aggiungi() {
		if (!this.nuovo.nome || this.nuovo.voto === null) return;
		this.studenti = [...this.studenti, { nome: this.nuovo.nome.trim(), voto: this.nuovo.voto }];
		this.nuovo = { nome: '', voto: null };
	}

	rimuovi(index: number) {
		this.studenti = this.studenti.filter((_, i) => i !== index);
	}
}