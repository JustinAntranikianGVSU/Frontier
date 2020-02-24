import { Component, OnInit } from '@angular/core';
import { AccountInfoService } from '../_services/account-info.service';
import { AccountStatus } from '../_models/accountStatusEnum';
import { AccountInfoFormatted } from '../_models/accountInfoFormatted';
import { AccountInfo } from '../_models/AccountInfo';

@Component({
  selector: 'app-account-info-list',
  templateUrl: './account-info-list.component.html',
  styleUrls: ['./account-info-list.component.scss']
})
export class AccountInfoListComponent implements OnInit {

  public accounts: any[]
  public activeAccounts: any[]
  public overdueAccounts: any[]
  public inactiveAccounts: any[]

  constructor(private readonly accountInfoService: AccountInfoService) { }

  ngOnInit() {
    this.accountInfoService.getAccounts().subscribe((data: AccountInfo[]) => {

      const formattedData = data.map(oo => this.getAccountInfoFormatted(oo));

      this.activeAccounts = formattedData.filter(oo => oo.AccountStatusId == AccountStatus.Active)
      this.overdueAccounts = formattedData.filter(oo => oo.AccountStatusId == AccountStatus.Overdue)
      this.inactiveAccounts = formattedData.filter(oo => oo.AccountStatusId == AccountStatus.Inactive)
    })
  }

  private getAccountInfoFormatted(accountInfo: AccountInfo): AccountInfoFormatted
  {
      const formattedDate = accountInfo.PaymentDueDate ? this.getFormattedDate(new Date(accountInfo.PaymentDueDate)) : ''

      const accountInfoFormatted: AccountInfoFormatted = {
        FirstName: accountInfo.FirstName,
        LastName: accountInfo.LastName,
        Email: accountInfo.Email,
        PhoneNumber: accountInfo.PhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
        AmountDue: accountInfo.AmountDue,
        HidePayment: accountInfo.AccountStatusId == AccountStatus.Inactive && !accountInfo.PaymentDueDate,
        PaymentDueDateFormatted: formattedDate,
        AccountStatusId: accountInfo.AccountStatusId
      }

      return accountInfoFormatted;
  }

  private getFormattedDate(date: Date) {
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    return month + "/" + day + "/" + year;
  }
}
