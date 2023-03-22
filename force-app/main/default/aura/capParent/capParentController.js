({
    handleCaptureClick: function(component, event, helper) {
        alert("Parentta yakalanan event");
    },

    handleBubbleClick: function(component, event, helper) {
      alert("Click event bubbled up to parent component");
    }
})
