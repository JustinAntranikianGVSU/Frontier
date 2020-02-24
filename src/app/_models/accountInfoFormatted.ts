import { AccountStatus } from './accountStatusEnum';

export interface AccountInfoFormatted
{
  FirstName: string
  LastName: string
  Email: string
  PhoneNumber: string
  AmountDue: number,
  HidePayment: boolean,
  PaymentDueDateFormatted: string,
  AccountStatusId: AccountStatus
}