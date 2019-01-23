import { Customer } from './../model/customer.model';

export interface CustomerState {
    readonly customer: Customer[];
}