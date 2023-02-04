public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
List<Contact> conList = [SELECT Id, LastName FROM Contact LIMIT 10];
return conList;
    }
}