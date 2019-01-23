export interface Customer {
    name:{
        firstName:string,
        lastName:string
    }
    contact:{
        email:any,
        mobile:number
    }
    address: {
        street:any,
        city:string,
        state:string,
        zip:number
    }
}