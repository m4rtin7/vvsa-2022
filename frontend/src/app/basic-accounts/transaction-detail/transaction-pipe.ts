import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/_types/Transaction';

@Pipe({
  name: 'transactionPipe'
})
export class TransactionPipe implements PipeTransform{
    transform(transaction: Transaction|null) {
        if (transaction == null) return null
        return transaction.transactionType == 0 ? {...transaction, transactionType: "Debit"} : {...transaction, transactionType: "ATM"}
    }
}