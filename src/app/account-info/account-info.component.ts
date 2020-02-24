import { Component, Input, OnInit } from '@angular/core';
import { AccountInfoFormatted } from '../_models/accountInfoFormatted';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent {

  @Input()
  public account: AccountInfoFormatted

  constructor() { }
}
