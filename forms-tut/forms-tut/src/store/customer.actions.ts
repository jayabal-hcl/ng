import { Action } from '@ngrx/store';
import { Customer } from '../model/customer.model';


export const ADD_CUSTOMER = '[CUSTOMER] Add'
export const REMOVE_CUSTOMER = '[CUSTOMER] Remove'
export const UPDATE_CUSTOMER = '[CUSTOMER] Update'


export class AddCustomer implements Action {
    readonly type = ADD_CUSTOMER;
    constructor(public payload: Customer){}
}

export class RemoveCustomer implements Action {
    readonly type = REMOVE_CUSTOMER;
    constructor(public payload: number){
        console.log("Remove Payload", payload)
    }
}

export class UpdateCustomer implements Action {
    readonly type = UPDATE_CUSTOMER;
    constructor(public payload: Customer){
        console.log("Update Payload", payload)
    }
}

export type Actions = AddCustomer | RemoveCustomer