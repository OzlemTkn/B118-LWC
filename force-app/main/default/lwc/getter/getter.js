import { LightningElement } from 'lwc';

export default class Getter extends LightningElement {
    number1 = 3;
    number2 = 6;
    nameList = ['Ali','Ela','Ayse','Hale','Jale'];

    indexNo;
    get toplama(){
        return this.number1 + this.number2;
    }
    get cikarma(){
        return this.number1 - this.number2;
    }
    get carpma(){
        return this.number1 * this.number2;
    }
    get bolme(){
        return this.number1 / this.number2;
    }

    handleBlur(event){
        this.indexNo= event.target.value;
    }
    // Girilen index no ya gore arrayden element cekmek icin get method kullaniyoruz. 
    get getElement(){
        if(this.indexNo < 0 || this.indexNo >= this.nameList.length){
            alert('Lutfen gecerli bir deger giriniz');
        }else{
            return this.nameList[this.indexNo];
        }
    }
}