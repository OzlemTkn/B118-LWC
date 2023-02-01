import { LightningElement, track,wire} from 'lwc';
import getContacts from '@salesforce/apex/getContactsClass.getContacts';
export default class HelloWire extends LightningElement {

    @track conList;
//1. Way: CAlling Apex method with a function 
@wire(getContacts)
contactListesi({data,error}){
    if(data){
        this.conlist = data;
    }
    else if(error){
       this.conList = undefined;
    }
}
//2. way: calling Apex method imperatively 

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