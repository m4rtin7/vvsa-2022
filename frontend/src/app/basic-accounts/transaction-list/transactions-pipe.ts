import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/_types/Transaction';
import { TransactionPipe } from '../transaction-detail/transaction-pipe';

@Pipe({
  name: 'transactionsPipe'
})
export class TransactionsPipe implements PipeTransform{
    transform(transactions: Transaction[]) {
        if (transactions == null) return []
        const transactionPipe = new TransactionPipe()
        return transactions.map(transaction => transactionPipe.transform(transaction))
    }
}