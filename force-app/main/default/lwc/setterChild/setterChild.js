import { api, LightningElement } from 'lwc';

export default class SetterChild extends LightningElement {
    upperCaseName ='baslangic degeri';//1. propery olustur. 
    //get ve set methodlar olustur. 
@api
    get itemName(){//get method ile property'ye ulasilir.
        return this.upperCaseName;
    }
//set method kullanilacaksa get kullanilmak zorundadir.
//set method genellikle validation islemlerin kullanilir. 
// get ile gelen datayi gunceller. 
//Eger parent uzerinden dataya ulasilacaksa @api kullanilir.
//api decorator genellikle getterdan once kullanilir, birine eklenmesi yeterli. 
    set itemName(value){
    this.upperCaseName = value.toUpperCase();
    }
//Getter ve setter methodlar encapsulation yapar, yani veri guvenligi aisindan tercih edilir,
//buradaki dataya sadece getter ve setter uzerinden ulasilabilir anlamina gelir. 
}