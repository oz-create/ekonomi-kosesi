//Form Error Messages
document.getElementById("submitButton").addEventListener("click",()=>{
    if(document.getElementById("name").value == ""){
      document.getElementById("nameErrorMessage").style.display = "block";
    }else{
      document.getElementById("nameErrorMessage").style.display = "none";
    }
    if(document.getElementById("email").value == ""){
      document.getElementById("emailErrorMessage").style.display = "block";
    }else{
      document.getElementById("emailErrorMessage").style.display = "none";
    }
    if(document.getElementById("subject").value == ""){
      document.getElementById("subjectErrorMessage").style.display = "block";
    }else{
      document.getElementById("subjectErrorMessage").style.display = "none";
    }
  })