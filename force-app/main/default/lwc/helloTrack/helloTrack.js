import { LightningElement, track } from 'lwc';

export default class HelloTrack extends LightningElement {
    @track customer = {
        name:"Laura",
        LName:"Parson",
        age: 48
    }
    //1. yol
    // handleName(event){ 
    //     this.customer.name = event.target.value;
    // }
    // handleLname(event){
    //     this.customer.lname = event.target.value;
    // }
    // handleAge(event){
    //     this.customer.age = event.target.value;
    // }
    //2.yol: Butun fonksiyonları tek bir fonksiyonla handle edebiliriz. 
    handleChange(event){
       const field =  event.target.name;
        if(field === 'isim'){
            this.customer.name = event.target.value;
        }
        if(field === 'soyisim'){
            this.customer.LName=event.target.value;
        }
        if(field === 'yas'){
            this.customer.age = event.target.value;
        }
    }
}