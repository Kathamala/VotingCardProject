import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'booth',
  template: `
    <h1> {{ header }} </h1>
    <p> {{ statement }} </p>

    <button *ngFor="let option of options; index as i" (click)="select.emit(i)">
        {{ i }} - {{ option }}
    </button>
  `
})

export class VotingBoothComponent {
    @Input() statement: string | undefined
    @Input() options: string[] | undefined
    @Output() select = new EventEmitter()
    header = 'Booth'
}