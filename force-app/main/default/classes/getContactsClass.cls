public class getContactsClass {
    @AuraEnabled 
    public static List<Contact> getContacts(){
        return [SELECT Id, LastName FROM Contact LIMIT 20];
    }
}