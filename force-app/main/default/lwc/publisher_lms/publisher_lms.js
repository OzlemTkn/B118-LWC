import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/accountController.getAccounts';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
//olusturdugumuz messageChannel'i import ettik. ismini SAMPLEMC seklinde bir const'a aktardik. 
export default class Publisher_lms extends LightningElement {
    context = createMessageContext();// LWC kutuphanesinden cektigimiz Messaging Service tarafindan saglanan createMessageContext() methodunu alinan ve gönderilen mesajlari context'e aktarir.
@track accountList;// cekilen accountlari saklayacak List. 
    connectedCallback(){// bu method cagirildiginda getAccounts Apex methodumuzu cagiracak.
        getAccounts()//getAccounts methodu calistigi zaman ya data gelir(result icerisine aktarilir) ya da error gelir. 
        .then(result=>{//sonuclar account liste aktarilir. 
            this.accountList = result;
        })
        .catch(error=>{
            this.accountList = error;//hatalar handle edilir. 
        });
    }

    handleClick(event){
        event.preventDefault(); // Bir event tetiklendiginde varsayilan davranisi onlemek sadece button click olayinin calismasini saglamak icin kullanilir.                
           const message = {
               recordId: event.target.dataset.value,// butona tiklandiginda data-value attribute ile record Id ye ulasilir. 
               recordData: { value: "LWC'den mesaj var!!!" }
           };
           publish(this.context, SAMPLEMC, message);// publish parametreleri verilen mesaji yayinlar.
       }
    }
