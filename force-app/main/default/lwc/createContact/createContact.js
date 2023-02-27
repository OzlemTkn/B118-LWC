import { LightningElement, track } from 'lwc';
import newContact from '@salesforce/apex/CreateContact.newContact';
export default class CreateContact extends LightningElement {
//impreratively olarak Apex method cagirdimiz icin wire kullanmaya gerek yoktur. 
  @track  conObject = {};//Objectlerde track kullanilir. 
  result;
  error;
  setContact(event){//Kullanicinin girdigi field adina gore datasetteki fieldname'e atanmasi icin,
    //dataset.fieldname kullandik. 
    var targetElement = event.target;
    this.conObject[targetElement.dataset.fieldname] = targetElement.value;
  }
//yeni olusturulan contact icin methos olusturulur, method icerisinden Apex method cagirilir. 
  saveContact(){
    newContact({con:this.conObject})//Eger parametre varsa method icerisindeki parametre adi 
    //object adina atanir. 
    .then(result=>{
        alert('Contact basariyla kaydedildi');
    })
    .catch(error=>{
        alert('Bir hata olustu!!');
    });

  }
}