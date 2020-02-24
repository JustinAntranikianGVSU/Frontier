import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInfoListComponent } from './account-info-list/account-info-list.component';

const routes: Routes = [
  { path: 'account-info', component: AccountInfoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
