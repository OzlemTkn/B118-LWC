public with sharing class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountList() {
        return [SELECT Id, Name FROM Account LIMIT 25];
    }
}