import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionPipe } from './transaction-detail/transaction-pipe';
import { TransactionsPipe } from './transaction-list/transactions-pipe';
import { MaterialModules } from 'src/material.module';

@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionPipe,
    TransactionsPipe
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MaterialModules
  ]
})
export class BasicAccountsModule { }
