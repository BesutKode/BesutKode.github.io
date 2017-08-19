'use strict';
var onFormLoadInteractions = {
  onLoadUnloadChange: function() {
    var formElement = document.getElementById("form_bit24");
    var bdy = document.body;
    window.scrollTo(0,0);
    if(nodeId.style.display === "none"){
      // Open the form, disable main body scroll
      bdy.style.overflow = "hidden";
      formElement.style.display = "block"
    }else{
      // Close form, re-enable main body scroll
      formElement.style.display = "none";
      bdy.style.overflow = "scroll";
    }
  }
};
