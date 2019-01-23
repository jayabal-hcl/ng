import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../validators/phone-validator';

// ngrx add
import { Store } from '@ngrx/store';
import { Customer } from './../../../model/customer.model';
import { CustomerState } from './../../../store/customer.state';
import * as CustomerActions from '../../../store/customer.actions';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent{

  customerForm = new FormGroup({

    // name group
    name: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    }),

    // contact group
    contact: new FormGroup({
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
      mobile: new FormControl('', [
        Validators.required,
        phoneNumberValidator
      ])
    }),

    // address group
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })


  })

  constructor(private store: Store<CustomerState>){}

  get firstName() { return this.customerForm.get('name.firstName') }
  get lastName() { return this.customerForm.get('name.lastName') }
  get mobile() { return this.customerForm.get('contact.mobile') }
  get email() { return this.customerForm.get('contact.email') }
  get street() { return this.customerForm.get('address.street') }
  get city() { return this.customerForm.get('address.city') }
  get state() { return this.customerForm.get('address.state') }
  get zip() { return this.customerForm.get('address.zip') }

 

  onSubmit() {
    console.log('test', this.customerForm.value);

    if(this.customerForm.valid) {
      this.store.dispatch(new CustomerActions.AddCustomer({
        name: {
          firstName: this.firstName.value,
          lastName: this.lastName.value
        },
        contact:{
          email: this.email.value,
          mobile: this.mobile.value
        },
        address: {
          street:this.street.value,
          city:this.city.value,
          state:this.state.value,
          zip:this.zip.value
        }
      }));
  
      this.customerForm.reset();
     
    } else {
      alert('Please fill all the details')
    }

    
  }
  

}
