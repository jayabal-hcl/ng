import { Customer } from './../model/customer.model';
import * as CustomerActions from './customer.actions';

const CustomerDefaultReducer: Customer = {
    name:{
        firstName: 'Jayabal',
        lastName: 'Malaichamy'
    },
    contact:{
        email: 'jayabal.malaichamy@gisbiz.com',
        mobile: 8939926882
    },
    address: {
        street: 'No.3A, 10th Stree, Periyar Nagar, Irumbuliyur, West Tambaram',
        city: 'Chennai',
        state:'Tamil Nadu',
        zip: 630561
    }
}

export function CustomerReducer(state: Customer[] = [CustomerDefaultReducer], action: CustomerActions.Actions){
    switch(action.type) {
        case CustomerActions.ADD_CUSTOMER:
            return [...state, action.payload]

        case CustomerActions.REMOVE_CUSTOMER:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}