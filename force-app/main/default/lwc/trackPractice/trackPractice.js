import { LightningElement, track } from 'lwc';

export default class TrackPractice extends LightningElement {
    sayi;
     @track numbers = [];
    handleSayi(event){
         this.sayi= event.target.value;
    }
    handleAdd(event){
        this.numbers.push(this.sayi);
    }

}