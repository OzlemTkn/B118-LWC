({
    onclickHandler : function(component, event, helper) {
var eventValue = component.getEvent("newEvent");
eventValue.fire();
    }
})
