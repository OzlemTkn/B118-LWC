import { LightningElement, track } from 'lwc';
import { createMessageContext,APPLICATION_SCOPE,subscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";//olusturdugumuz messageChannel'i import ettik.
import NAME_FIELD from '@salesforce/schema/Account.Name';
// Bu kod satirlarinda @salesforce/schema modulunu kullanarak Account objesinden Name, AnnualRevenue ve Industry fieldlerini import ettik.
// Bu fieldler import edildikten sonra artik ulasilabilir ve Account uzerinde manipule edilebilir. 
// NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD field name'i temsil eden sabit(const) isimler. 
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class Subscriber_lms extends LightningElement {
    context = createMessageContext();// LWC kutuphanesinden cektigimiz Messaging Service tarafindan saglanan createMessageContext() methodunu alinan ve gönderilen mesajlari context'e aktarir.
    subscription = null;
    @track receivedMessage = '';// message Channeldan gelen mesaji alir. 
    @track accountId;//Message channellden gelen recordun id sini saklar. 
    @track objectApiName='Account';// Account objectinin API adini tutar, bu API record Id ile iliskilidir.
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];//import edilen fieldleri tutan arraydir. 
    connectedCallback(){// connectedCallback methodu cagirildiginda subscribeMC methodunu cagirir. 
        this.subscribeMC();
    }
    subscribeMC() {// subscribeMC methodu componentin subscribe edilip edilmediğini kontrol eder. 
        //degilde, subscribe methodunu cagirir. Mesaj alindiginda mesaji handleMessage ile handle eder. 
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {//subscribe, ilgili parametreleri kullanarak message kanala erisir ve mesajlari alir. 
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});//APPLICATION_SCOPE, Messaging Service tarafindan saglanan bir constant, 
        //mesajin subscription kapsamini belirtir. 

     }
     handleMessage(message) { //  handleMessage methodu record ID ve message dan gelen mesaji ayristirir.
        // JSON sayesinde JSON formatinda goruntulenir. Yani {"recordId":"0018d00000QrAMRAA3","recordData":{"value":"LWC'den mesaj var!!!"} bu sekilde.
        //JSON formati object yazim formatina cok benzemektedir.     
        console.log('message:'+  JSON.stringify(message));// Debugging yapmak amaciyle console'da mesaji goruntuledik. 
       this.accountId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}