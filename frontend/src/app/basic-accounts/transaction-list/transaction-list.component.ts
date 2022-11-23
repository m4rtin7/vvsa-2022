import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TransactionsService } from 'src/app/_services/transactions.service';
import { Transaction } from 'src/app/_types/Transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = []
  displayedColumns: string[] = ['Meno', 'Typ', 'Ucet', 'Hodnota', 'Akcia'];
  constructor(private transactionService: TransactionsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.transactionService.getTransactions()
    .subscribe(      
      (data: Transaction[]) => {
        console.log(data)
        this.transactions = data
      }
      )
  }

  onClick(id:number) {
    this.router.navigate([`./${id}`], {relativeTo: this.route});
  }
}
