import { Pipe, PipeTransform } from '@angular/core';

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
  name: 'transactionPipe'
})
export class TransactionPipe implements PipeTransform{
    transform(transaction: Transaction|null) {
        if (transaction == null) return null
        return transaction.transactionType == 0 ? {...transaction, transactionType: "ATM"} : {...transaction, transactionType: "Card"}
    }
}