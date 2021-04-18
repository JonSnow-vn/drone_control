
function validateForm() {
    var x = document.forms["myForm"]["faccountid"].value;
    var y = document.forms["myForm"]["fpassworld"].value;
    if (x === '') {
        alert("AccountID must be filled out");
        return false;
    }else if(y === ''){
        alert("Password must be filled out");
        return false;
    }else if( x !== 'admin' || y !== 'admin' ){
        alert("AccountID or Password is incorrect");
        return false;
    }
   return true;
  } 