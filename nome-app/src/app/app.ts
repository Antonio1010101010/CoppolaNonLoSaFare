import { Component } from '@angular/core';
import { Esercizio1 } from './esercizio1/esercizio1';
import { Esercizio2 } from './esercizio2/esercizio2';
import { Esercizio3 } from './esercizio3/esercizio3';
import { Esercizio4 } from './esercizio4/esercizio4';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [Esercizio1, Esercizio2, Esercizio3, Esercizio4],
	templateUrl: './app.html',
	styleUrls: ['./app.css']
})
export class App {
}