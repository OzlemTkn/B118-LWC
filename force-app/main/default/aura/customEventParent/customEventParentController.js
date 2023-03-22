({
    fireNewEvent : function(component, event, helper) {
        alert('Hayırlı ramazanlar!!!');
    },
    handleCaptureClick : function(component, event, helper) {
        alert('Capture event Calisti');
        event.stopPropagation();//burasi ilk once calisir ve burada durur. 
    },
    handleBubbleClick : function(component, event, helper) {
        alert('Bubble ile child\'dan parenta dogru event tetiklendi');
    }
})
