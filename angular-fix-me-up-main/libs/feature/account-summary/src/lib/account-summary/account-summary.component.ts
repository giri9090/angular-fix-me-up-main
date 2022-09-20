/** 
 * TODO: 10. Asynchronous Programming (RxJS) - Used RxJS to filter the accounts
 * TODO: 13. Angular (NX) Architecture
*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { map, withLatestFrom, startWith } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

interface Dropdown {
  id: string;
  value: string;
}

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent {
  accounts$: Observable<Account[]> = of([]);
  filteredAccounts$: Observable<Account[]>| undefined;
  public currencies:Dropdown[]=[];
  formGroup: FormGroup;
  constructor(private accountService: AccountService, private formBuilder: FormBuilder) {
    this.currencies=[{id:"cad",value:"CAD"},{id:"usd",value:"USD"}];
    this.formGroup = formBuilder.group({ filter: [null] });
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts$ = of(accounts);
    });

      this.filteredAccounts$ = this.formGroup.get('filter')?.valueChanges.pipe(
        startWith(''),
        withLatestFrom(this.accounts$),
        map(([val, accounts]) =>
        !val ? accounts : accounts.filter((x) => x.currency.toLowerCase().includes(val))
        )
        );
  }
  // accounts: Account[] = [];
  // accountsFilter = '';

  // filterAccounts(accounts: Account[]) {
  //   return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');
  // }
}
