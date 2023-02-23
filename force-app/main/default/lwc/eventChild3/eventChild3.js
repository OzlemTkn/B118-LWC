import { LightningElement } from 'lwc';

export default class EventChild3 extends LightningElement {
copyObject;
eventObject ={isim:'', soyisim:''}

    handleName(event){
        this.eventObject.isim = event.target.value;
    }
    handleSurname(event){
this.eventObject.soyisim = event.target.value;
    }
    handleClick3(){
        this.copyObject = {...this.eventObject};//en modern ve okunakli yazim sekli. 
        // this.copyObject = Object.assign({},this.eventObject);//Eski versiyon js shallow copy of object. 
        const myEvent3 = new CustomEvent('clicked3',{detail: this.copyObject});
        this.dispatchEvent(myEvent3);
    }
}