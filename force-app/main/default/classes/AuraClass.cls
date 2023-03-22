public with sharing class AuraClass {
    @AuraEnabled(cacheable=true)
    public static String showMessage() {
        return 'Bu mesaj apex clastan gelmektedir';
    }

    @AuraEnabled(cacheable=true)
    public static Contact getContact(){
       return [SELECT Id, Name, Phone FROM Contact WHERE Id='0038d00000R8lcmAAB' ]; 
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactWithParams(String param){

       String parameter = '%' + param +'%';
       return [SELECT Id, Name, Phone FROM Contact WHERE Name LIKE:parameter]; 
    }

}