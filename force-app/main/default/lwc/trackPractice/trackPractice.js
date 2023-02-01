import { LightningElement } from 'lwc';

export default class TrackPractice extends LightningElement {
    sayi;
     numbers = [];
    handleSayi(event){
         this.sayi= event.target.value;
    }
    handleAdd(event){
        this.numbers.push(this.sayi);
    }

}