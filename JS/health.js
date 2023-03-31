function random(){
    let x;
    x=Math.floor(Math.random()*2000000)+1;
    
        document.getElementById("three").innerHTML="NUID"+x;
    
}
function login(){
    if((document.getElementById("dob").value.trim()=="")&&(document.getElementById("gender").value.trim()=="")&&(document.getElementById("mname").value.trim()=="")&&(document.getElementById("fname").value.trim()==""))
    {
        alert("Please fill out the required fields properly");
    } 
    else if((document.getElementById("dob").value.trim()=="")){
        alert("Please fill out the DOB");
    }
    else if((document.getElementById("gender").value.trim()=="")){
        alert("Please fill out the Gender");
    }
    else if((document.getElementById("mname").value.trim()=="")){
        alert("Please fill out the Mother's name");
    }
    else if((document.getElementById("fname").value.trim()=="")){
        alert("Please fill out the Father's name");
    }
    else{
        alert("Registered Sucessfully!!");
    }   
}
function no(){
    document.getElementById("three").innerHTML="Please select 'Yes'";
}
function two(){
    document.getElementById("you").innerHTML="Thank you for visiting our Immnue Boost!!";
}
