import { LightningElement } from 'lwc';

export default class EventChild2 extends LightningElement {
    inputValue;//kullanicidan alinan deger custom event ile parenta gonderilecek.

handleChange2(event){
this.inputValue = event.target.value;
}
handleClick2(){
  
    this.dispatchEvent(new CustomEvent('clicked2',{detail:this.inputValue}));
}
}