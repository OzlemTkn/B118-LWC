import { api, LightningElement } from 'lwc';

export default class GetterSetter extends LightningElement {
    calculatedAge = 34;

    @api
    get customerAge(){
    return this.calculatedAge;
    //get ile datayi cektik
    }
    set customerAge(value){
    this.calculatedAge = value + 10;
    //set method ile update islemi yaptik
    }
}