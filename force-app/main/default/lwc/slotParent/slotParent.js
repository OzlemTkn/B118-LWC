import { LightningElement } from 'lwc';

export default class SlotParent extends LightningElement {
    country;
    city;
    famousFor;
    handleChange(event){
        const field = event.target.name;
        if(field==="country"){
            this.country=event.target.value;
        }
        if(field==="city"){
            this.city=event.target.value;
        }
        if(field==="famous"){
            this.famousFor=event.target.value;
        }
    }
}