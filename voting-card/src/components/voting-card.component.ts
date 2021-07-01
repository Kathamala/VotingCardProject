import { Component } from '@angular/core'
import { VotingBoothComponent } from './voting-booth.component';
import { VotingResultComponent } from './voting-result.component';

@Component({
  selector: 'card',
  template: `
    <div *ngIf="state === 'open'; else showResult" >  
        <booth 
            [statement]="statement" 
            [options]="options"
            (select)="onSelect($event)"
        >
        </booth>
    </div>

    <ng-template #showResult>
        <result statement="This is the result coming from card"></result>
    </ng-template>
  `
})

export class VotingCardComponent {
    state = 'open'
    statement = 'Teste voting card';
    options = ['sim', 'não', 'talvez', 'cai fora']

    onSelect(i: any){
        console.log(i);
    }
}