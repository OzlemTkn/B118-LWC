import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    eventName;
    //parentta yeni bir property olusturuldu ve deger atamasi yapildi. 
    eventName2;

    eventName3;
    handleButtonClick1(){
        this.eventName = "Child Butonuna Tiklandi";
    }

    handleButtonClick2(event){
        this.eventName2 = event.detail;
        //input degeri child'dan geldigi icin detail yazmak yeterlidir. 
    }
    handleButtonClick3(event){// hedef degerde obj oldugu icin goruntulerken degerleri ayri ayri almamiz gerekir. 
        this.eventName3 = event.detail.isim + ' ' + event.detail.soyisim;
    }
}