import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/_services/transactions.service';

interface Transaction{
  transactionId: number,
  fullName: string,
  transactionType: number,
  accountNumber: string,
  bankCode: string,
  issueDate: string,
  amount: number
}
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
