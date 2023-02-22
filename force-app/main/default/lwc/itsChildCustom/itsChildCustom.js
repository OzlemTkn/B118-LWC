import { LightningElement } from 'lwc';

export default class ItsChildCustom extends LightningElement {
    handleMe(){
        //1. custom event olusturduk
        const childEvent = new CustomEvent('buttonclick',{
            detail:{firstName:'Ela', lastName:'Demir'}
        });
        //Olusturdugumuz eventi dispatch ediyoruz.
        this.dispatchEvent(childEvent);
    }
}