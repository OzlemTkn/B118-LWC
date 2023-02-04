import { LightningElement } from 'lwc';

export default class SghandleClick extends LightningElement {
    greeting = 'Ozlem';
    handleClick(event){
       this.greeting = event.target.value;
    }
}