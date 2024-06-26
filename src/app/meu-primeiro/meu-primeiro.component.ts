import { Component } from "@angular/core";

@Component({
    selector: 'meu-primeiro-component',
    template: `
    <p>Meu primeiro component com angular</p>
    `,
    standalone: true,
    imports: [],
})
export class MeuPrimeiroComponent { }