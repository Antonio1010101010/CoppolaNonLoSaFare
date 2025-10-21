import { Component } from '@angular/core';

@Component({
	selector: 'componente-1',
	standalone: true,
	template: `
		<div class="componente1">
			<h2>Componente 1</h2>
			<p>Funziona!</p>
		</div>
	`,
	styles: [`
		.componente1 { font-family: Arial, sans-serif; color: #333; }
	`]
})
export class Componente1 {
	// ...existing code...
}