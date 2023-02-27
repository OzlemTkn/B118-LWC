public with sharing class accountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountList() {
        return [SELECT Id, Name FROM Account LIMIT 25];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Type, AnnualRevenue, Industry FROM Account LIMIT 25];
    }

}