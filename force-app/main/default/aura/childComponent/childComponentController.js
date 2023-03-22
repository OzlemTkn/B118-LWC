({
    onclickHandler : function(component, event, helper) {
var eventValue = component.getEvent("myClickEvent");
eventValue.fire();
    }
})
