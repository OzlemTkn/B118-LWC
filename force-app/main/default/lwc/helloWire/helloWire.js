import {track, wire, LightningElement} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
export default class HelloWire extends LightningElement {

    @track conList=[];
//1. Way: CAlling Apex method with a function 
//Fonksiyon ile Apex method cagirirken @wire(ApexMethod) ile arkasından 
//fonksiyon olustururuz.
//Asagidaki yapiyi kullaniyoruz. 
@wire (getContacts)
contactListesi({data,error}){
    if(data){
        this.conList = data;
    }
    else if(error){
        console.log('error' + error);
    }
}
//2. way: calling Apex method imperatively, imperatively Apex method cagirmak icin 
// wire decorator kullanmıyoruz, bir method olusturarak, 
//method içinden apex methodu cekiyoruz. 
// Asagidaki gibi bir yapi kullanarak  databaseden data cekiyoruz. 

// getContactList(){
//     getContacts()
//     .then(result=>{
//         this.conList = result;
//     })
//     .catch(error=>{
//         console.log("error" + error);
//     });
    
// }
}