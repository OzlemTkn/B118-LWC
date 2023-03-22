({
    onclickHandler : function(component, event, helper) {
var eventValue = component.getEvent("newEvent");//event name yazilir. 
eventValue.fire();//Event parenta gonderildi.    
}
})
