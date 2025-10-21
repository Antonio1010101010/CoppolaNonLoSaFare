import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Studente {
	nome: string;
	voto: number | null;
}

@Component({
	selector: 'esercizio-4',
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
					<button class="btn btn-primary w-100" type="submit">Aggiungi</button>
				</div>
			</form>

			<hr />

			<div *ngIf="studenti.length; else vuoto">
				<table class="table table-hover table-bordered mt-2">
					<thead class="table-dark">
						<tr>
							<th style="width:5%;">#</th>
							<th>Nome</th>
							<th style="width:15%;">Voto</th>
							<th style="width:15%;">Azioni</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let s of studenti; let i = index" [class.table-danger]="s.voto !== null && s.voto < 18">
							<td>{{ i + 1 }}</td>
							<td>{{ s.nome }}</td>
							<td>{{ s.voto }}</td>
							<td>
								<button class="btn btn-sm btn-outline-danger" (click)="rimuovi(i)">Elimina</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<ng-template #vuoto>
				<div class="alert alert-info mt-2">Nessuno studente presente. Aggiungine uno sopra.</div>
			</ng-template>
		</div>
	`,
	styles: [`
		/* piccoli aggiustamenti locali */
	`]
})
export class Esercizio4 {
	studenti: Studente[] = [
		{ nome: 'Anna Verdi', voto: 30 },
		{ nome: 'Paolo Neri', voto: 16 }
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
