import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';//navigation import edildi
import { registerListener } from 'c/pubsub';   //pubsub import ettik    
export default class SubComp extends LightningElement {
    myName;
    @wire(CurrentPageReference) pageRef;//Unrelated componenti iliskilendirmek icin @wire kullanilir. 
connectedCallback(){//eventName, callback, thisArg parametreleri registerListener ile kullanilir. 
    registerListener('pubsubevent', this.handleCallBack,this)
    //registerListener ile publisherdan gelen data handle edilir. 
}
handleCallBack(data){//callback fonksiyonu bu fonksiyon ile handle edilir. 
    this.myName = data.toUpperCase();
    //alert('bu mesaj subscriberda calisti');
}
}