public with sharing class myClass {
    @AuraEnabled(cacheable=true)
    public static String myMethod() {
return 'Bu mesaj Apex classtan gelmektedir' ;   }
}