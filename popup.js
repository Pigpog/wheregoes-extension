$(function(){
    //function that parses URL parameters. Used for context menu. Likely problematic
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    //function to replace URL encoding with plaintext. Likely problematic
    function escapeHtml(text) {
        return text
             .replace(/&amp;/g, "&")
             .replace(/&lt;/g, "<")
             .replace(/&gt;/g, ">")
             .replace(/&quot;/g, '"')
             .replace(/%27/g,"")
             .replace(/&#039;/g, "'");
    }
    //if being used from the context menu
    if(getUrlVars()["url"]){
        document.getElementById("form_text").value=escapeHtml(getUrlVars()["url"].substr(3))    //set textbox value
        document.getElementById("mainForm").submit() //submit form
        setTimeout(window.close,300) //close the tab after a delay
    }
});
