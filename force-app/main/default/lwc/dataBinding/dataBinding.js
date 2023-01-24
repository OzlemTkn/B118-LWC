import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
//Property olusturduk.
isim = "Ali";
soyisim = 'Ozturk';
ulke = 'Turkiye';
handleInput(event){
    //console.log('oninput calisti'); //consoldan degisiklikleri gozlemledik.
    this.isim = event.target.value;
    //Kullanicinin girdigi degeri aldik ve ismin degerini guncelledik. 
}
handleChange(event){
    this.soyisim = event.target.value;
}

handleBlur(event){
    console.log('Onblur calisti');
    this.ulke = event.target.value;
}
}