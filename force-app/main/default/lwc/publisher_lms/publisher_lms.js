import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/accountController.getAccounts';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class Publisher_lms extends LightningElement {
    context = createMessageContext();
@track accountList;
    connectedCallback(){
        getAccounts()//getAccounts methodu calistigi zaman ya data gelir(result icerisine aktarilir) ya da error gelir. 
        .then(result=>{
            this.accountList = result;
        })
        .catch(error=>{
            this.accountList = error;
        });
    }

    handleClick(event){
        event.preventDefault();                
           const message = {
               recordId: event.target.dataset.value,
               recordData: { value: "LWC'den mesaj var!!!" }
           };
           publish(this.context, SAMPLEMC, message);
       }
    }
