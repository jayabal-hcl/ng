import { Action } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';

const EmployeeDefaultReducer: Employee = {
    name: 'Jayabal',
    age: 32,
    city: 'Chennai'
}

// reducer
export function EmployeeReducer(state: Employee[] = [EmployeeDefaultReducer], action: EmployeeActions.Actions) {
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            return [...state, action.payload]

        case EmployeeActions.REMOVE_EMPLOYEE:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}