
import { Component, OnInit } from '@angular/core';

// ngrx for read store
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Employee } from './../../../models/employee.model';
import { EmployeeState } from '../../../store/state/employee.state';
import * as EmployeeActions from '../../../store/actions/employee.actions';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  
  employees: Observable<Employee[]>

  constructor(private store: Store<EmployeeState>) { 
    this.employees = store.select('employee');
  }

  ngOnInit() {
  }

  removeEmployee(index:number) {
    this.store.dispatch(new EmployeeActions.removeEmployee(index));
  }

}
