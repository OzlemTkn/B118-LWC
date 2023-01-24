import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {

str = 'LWC';

clickedButtonLabel;

handleClick(event) {
    this.clickedButtonLabel = event.target.label;
}
}