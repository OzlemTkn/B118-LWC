public with sharing class CreateContact {
    @AuraEnabled
    public static void newContact(Contact con) {
        insert con;
    }
}