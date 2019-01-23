import { Component, OnInit } from '@angular/core';

// ngrx for post store
import { Store } from '@ngrx/store';
import { EmployeeState } from '../../../store/state/employee.state';
import * as EmployeeActions from '../../../store/actions/employee.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<EmployeeState>) { }

  ngOnInit() {
  }

  addEmployee(name, age, city, e) {
    e.preventDefault();
    this.store.dispatch(new EmployeeActions.addEmployee({ name:name, age:age, city }))
    console.log(name, age, city);
  }

}
