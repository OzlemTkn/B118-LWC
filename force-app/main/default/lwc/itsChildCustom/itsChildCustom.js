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
    //Child component, dispatchEvent() methodunu kullanarak custom eventi tetiklediğinde, parent componentteki handleSelected() fonksiyonu, parametre olarak event objectiyle birlikte çağrılır. Daha sonra event.detail özelliğini kullanarak child componentten aktarilan dataya erişebilirsiniz
}