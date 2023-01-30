import { LightningElement } from 'lwc';

export default class ExpressionPractice extends LightningElement {
        firstName ='';
        lastName='';
        batchNo='';
        phone='';

        handlerChange(event){// tum inputlari tek bir method ile handle edebiliriz.
            //bunun icin if yapisini kullandik. 
         const field =  event.target.name;
         if(field === 'fname'){
         this.firstName= event.target.value;
        }
        if(field === 'lname'){
            this.lastName=event.target.value;
        }
        if(field === 'batchno'){
            this.batchNo=event.target.value;
        }
        if(field === 'phone'){
            this.phone=event.target.value;
        }
       
}
get upperCaseFullName(){
    return `${this.firstName} ${this.lastName}`.toUpperCase();
}
}