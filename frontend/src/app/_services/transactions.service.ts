import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../_types/Transaction';

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