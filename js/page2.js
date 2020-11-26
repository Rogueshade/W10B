function WriteCookie() {
    if( document.myform.customer.value == "selection" ) {
       alert("Blee Kyanite");
       return;
    }
    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name=" + cookievalue;
    document.write ("Setting Cookies : " + "name=" + cookievalue );
}    
var selection = document.getElementById('selection')
document.getElementById("span").innerHTML.


