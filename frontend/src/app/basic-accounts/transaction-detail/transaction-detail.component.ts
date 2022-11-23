import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { Transaction } from 'src/app/_types/Transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction | null = null

  transactionForm = new FormGroup({
    accountNumber: new FormControl(this.transaction?.accountNumber),
    amount: new FormControl(this.transaction?.amount),
    issueDate: new FormControl(this.transaction?.issueDate),
  });
  
  constructor(private route: ActivatedRoute, private transactionService: TransactionsService) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.transactionService.getTransaction(id)
    .subscribe(      
      (data: Transaction) => {
        this.transaction = data
        console.log(data);
        
        this.transactionForm.setValue({accountNumber: this.transaction?.accountNumber, amount: this.transaction?.amount, issueDate: this.transaction?.issueDate})
      }
      )
  }
}
