import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { Transaction } from 'src/app/_types/Transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  public transaction: Transaction | null = null
  constructor(private route: ActivatedRoute, private transactionService: TransactionsService) {}



  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.transactionService.getTransaction(id)
    .subscribe(      
      ({data}:{data: Transaction}) => this.transaction = data
      )
      
    console.log(id)
    console.log(this.transaction)
  
  }
}
