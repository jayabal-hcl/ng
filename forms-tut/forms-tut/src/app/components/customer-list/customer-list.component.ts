

import { Component, OnInit } from '@angular/core';
// ngrx read
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Customer } from './../../../model/customer.model';
import { CustomerState } from './../../../store/customer.state';
import * as CustomerActions from '../../../store/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<Customer[]>

  constructor(private store: Store<CustomerState>) { 
    this.customers = store.select('customer');
   }

  ngOnInit() {
  }

  deleteCard(index) {
    this.store.dispatch( new CustomerActions.RemoveCustomer(index));
  }
  updateCard(){
    
  }

}
