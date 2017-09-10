'use strict';
var onFormLoadInteractions = {
  onLoadUnloadChange: function() {
    var formElement = document.getElementById("form_bit24");
    var b24Form = document.getElementById('bx_form_iframe_8');
    var bdy = document.body;
    const mobileMinWidth = 300;
    const mobileMaxWidth = 600;
    const firefoxIframeDefaultHeight = '200px';
    var windowHeight = Math.min(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    var width = Math.min(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    );
    width -= 20;
    window.scrollTo(0,0);
    if(formElement.style.display === "none"){
      // Open the form, disable main body scroll
      bdy.style.overflow = "hidden";
      formElement.style.display = "block"
    }else{
      // Close form, re-enable main body scroll
      formElement.style.display = "none";
      bdy.style.overflow = "scroll";
    }
    b24Form.scrolling = 'yes';
    b24Form.style['overflow-y'] = 'scroll';
    formElement.style.height = (windowHeight) + 'px';
    // The magic number 200px below here because in the Firefox, they load iframe defaultly 200px in height, so we have
    // to set the height, but in the other browser, they set the height based on the original height of the iframe and
    // if we set the height, it become un-scroll-able
    // the case with mobile are the same
    // Then we diasble the scroll of the div body such that we dont have 2 scroll able item at the same time
    // This case happen in firefox and mobile
    if(b24Form.style.height === firefoxIframeDefaultHeight) {
      b24Form.style.height = windowHeight + 'px';
      formElement.style['overflow-y'] = 'hidden';
    }
    // The magic number 300 to 600 are the common width range of phone
    // to make sure that it looks nice and balance right and left
    // we have to generelize the width
    // but in this case the user must use the overflow-x to see the form entirely
    if(width < mobileMinWidth) width = mobileMinWidth;
    else if(width > mobileMaxWidth) width = mobileMaxWidth;
    b24Form.style['min-width'] = width + 'px';
    formElement.style['min-width'] = width + 'px';
  }
};
$( document ).ready(function() {
  if(location.hash === "#daftar"){
    onFormLoadInteractions.onLoadUnloadChange()
  }
});
