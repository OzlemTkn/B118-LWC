import { api, LightningElement } from 'lwc';

export default class ThisChild extends LightningElement {
    @api myName = "ilk deger";//1. property olustur

    @api testChildMethod(sendData){
        alert("Bu child componentten gelen bir bildirim " + sendData.firstName + sendData.lastName );
    }
}