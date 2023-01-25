import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag = false;
    handleChange(event){
        this.flag = event.target.checked;
    }

}