import { AccountStatus } from './accountStatusEnum';

export interface AccountInfo
{
  FirstName: string,
  LastName: string,
  Email: string,
  PhoneNumber: string,
  AmountDue: number,
  PaymentDueDate: string | undefined,
  AccountStatusId: AccountStatus
}