import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../_types/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  private URL = "/api/transactions"

   getTransactions(){
    return this.httpClient.get<Transaction[]>(this.URL)
  }
  getTransaction(id: number){
    return this.httpClient.get<Transaction>(`${this.URL}/${id}`)
  }
}