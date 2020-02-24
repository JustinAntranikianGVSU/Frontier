import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AccountInfo } from '../_models/AccountInfo';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  private accountData = 
  [{
    "Id": 1,
    "FirstName": "Emma",
    "LastName": "Smith",
    "Email": "emma.smith@email.com",
    "PhoneNumber": "5555559483",
    "AmountDue": 84.22,
    "PaymentDueDate": "2020-03-01T00:00:00+00:00",
    "AccountStatusId": 0
  },
  {
    "Id": 2,
    "FirstName": "Noah",
    "LastName": "Johnson",
    "Email": "noah.johnson@email.com",
    "PhoneNumber": "5555557383",
    "AmountDue": 123.76,
    "PaymentDueDate": "2020-03-16T00:00:00+00:00",
    "AccountStatusId": 0
  },
  {
    "Id": 3,
    "FirstName": "Abigail",
    "LastName": "Williams",
    "Email": "abigail.williams@email.com",
    "PhoneNumber": "5555553928",
    "AmountDue": 42.45,
    "PaymentDueDate": "2020-03-13T00:00:00+00:00",
    "AccountStatusId": 0
  },
  {
    "Id": 4,
    "FirstName": "Mason",
    "LastName": "Brown",
    "Email": "mason.brown@email.com",
    "PhoneNumber": "5555550394",
    "AmountDue": 0.0,
    "PaymentDueDate": null,
    "AccountStatusId": 1
  },
  {
    "Id": 5,
    "FirstName": "Emily",
    "LastName": "Miller",
    "Email": "emily.miller@email.com",
    "PhoneNumber": "5555556958",
    "AmountDue": 355.67,
    "PaymentDueDate": "2020-02-09T00:00:00+00:00",
    "AccountStatusId": 2
  },
  {
    "Id": 6,
    "FirstName": "Michael",
    "LastName": "Davis",
    "Email": "michael.davis@email.com",
    "PhoneNumber": "5555550394",
    "AmountDue": 0.0,
    "PaymentDueDate": null,
    "AccountStatusId": 1
  },
  {
    "Id": 7,
    "FirstName": "Joshua",
    "LastName": "Garcia",
    "Email": "joshua.garcia@email.com",
    "PhoneNumber": "5555559283",
    "AmountDue": 98.35,
    "PaymentDueDate": "2020-02-17T00:00:00+00:00",
    "AccountStatusId": 2
  }]

  constructor(private http: HttpClient) { }

  // Todo call api when CORS are enabled on the web server.
  // public getAccounts(): Observable<any> {
  //   return this.http.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall')
  // }

  public getAccounts(): Observable<AccountInfo[]> {
    return of(this.accountData)
  }
}
