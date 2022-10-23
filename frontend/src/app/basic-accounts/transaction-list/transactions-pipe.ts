import { Pipe, PipeTransform } from '@angular/core';
import { TransactionPipe } from '../transaction-detail/transaction-pipe';

interface Transaction{
    transactionId: number,
    fullName: string,
    transactionType: number,
    accountNumber: string,
    bankCode: string,
    issueDate: string,
    amount: number
  }

@Pipe({
  name: 'transactionsPipe'
})
export class TransactionsPipe implements PipeTransform{
    transform(transactions: Transaction[]|null) {
        if (transactions == null) return null
        const transactionPipe = new TransactionPipe()
        return transactions.map(transaction => transactionPipe.transform(transaction))
    }
}