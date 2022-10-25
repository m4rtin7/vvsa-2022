import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { Transaction } from 'src/app/_types/Transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  public transactions: Transaction[] | null = null
  constructor(private transactionService: TransactionsService) { }

  ngOnInit() {
    this.transactionService.getTransactions()
    .subscribe(      
      ({data}:{data: Transaction[]}) => this.transactions = data
      )
      
    console.log(this.transactions)
  
  }

}
