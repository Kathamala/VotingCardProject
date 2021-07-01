import { Component, Input } from '@angular/core'

@Component({
  selector: 'result',
  template:  `
    <h1> {{ header }} </h1>
    <p> {{ statement }} </p>
`
})

export class VotingResultComponent {
    @Input() statement: string | undefined
    header = 'Voting Result'
}