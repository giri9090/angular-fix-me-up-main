import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Account } from 'libs/shared/services/src/lib/account';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccountDetailsComponent implements OnInit {
  public accountDetails: Account | undefined;
  ngOnInit() {
    this.accountDetails = history.state;
  }
}
