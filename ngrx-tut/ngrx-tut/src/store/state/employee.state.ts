import { Employee } from '../../models/employee.model';


export interface EmployeeState {
    readonly employee: Employee[];
}