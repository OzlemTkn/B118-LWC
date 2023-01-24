import { LightningElement } from 'lwc';

export default class GetterFunction extends LightningElement {
firstName = 'ozlem';
lastName ='tekin';

handleName(event){
    this.firstName = event.target.value;
}
handleLName(event){
    this.lastName= event.target.value;
}
get fullUpperCase(){
    return `${this.firstName.toUpperCase()}  ${this.lastName.toUpperCase()}`
}
}