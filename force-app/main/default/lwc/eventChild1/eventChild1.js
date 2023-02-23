import { LightningElement } from 'lwc';

export default class EventChild1 extends LightningElement {
    handleClick(){ //2. dinamik olarak custom event olustalım.
        const myEvent = new CustomEvent('clicked');
        this.dispatchEvent(myEvent);
    }
}