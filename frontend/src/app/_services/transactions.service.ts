import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Transaction{
  transactionId: number,
  fullName: string,
  transactionType: number,
  accountNumber: string,
  bankCode: string,
  issueDate: string,
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  getTransactions(){
    return this.httpClient.get<{data: Transaction[]}>("/api/transactions")
  }
  getTransaction(id: number){
    return this.httpClient.get<{data: Transaction}>(`/api/transactions/${id}`)
  }
}