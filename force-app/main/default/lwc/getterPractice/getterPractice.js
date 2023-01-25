import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {
    sayi1 = 5;
    sayi2 = 3;
    handleSayi1(event){
        this.sayi1 = event.target.value;
    }
    handleSayi2(event){
        this.sayi2 = event.target.value;
    }
    get toplam(){
        //return parseInt(this.sayi1) + parseInt(this.sayi2);//parseInt methodu degeri numbera cevirir. 
        return `${parseInt(this.sayi1) + parseInt(this.sayi2)}`;// backtikle bu sekilde de calisir. 
    }
}