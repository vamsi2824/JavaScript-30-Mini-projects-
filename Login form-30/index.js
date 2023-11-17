let names=document.getElementById("name");
let nameErr=document.getElementById("nameErr");


let email=document.getElementById("email");
let emailErr=document.getElementById("emailErr");

let option=document.getElementById("option");
let female=document.getElementById("female");
let male=document.getElementById("male");

let form=document.getElementById("form");

let data={
    name:"",
    email:"",
    status:"Active",
    gender:"Male"
};


names.addEventListener("blur",function(event){
    if(names.value === ""){
        nameErr.textContent="Required*";
    }
    else{
        nameErr.textContent="";
    }
    data.name=event.target.value;

})

email.addEventListener("blur",function(event){
    if(email.value === ""){
        emailErr.textContent="Required*";
    }
    else{
        emailErr.textContent="";
    }
    data.email=event.target.value;

})

option.addEventListener("change",function(event){
    data.status=event.target.value;
});
male.addEventListener("change",function(event){
    data.gender=event.target.value;
});
female.addEventListener("change",function(event){
    data.gender=event.target.value;
});

function isValid(data){
    if(data.name === ""){
        nameErr.textContent="Required*";
    }
    if(data.email === ""){
        emailErr.textContent="Required*";
    }



}

function submitData(data){
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: JSON.stringify(data)
    }
        let url = "https://gorest.co.in/public-api/users";


        fetch(url,options)
        .then(function(responce){
            return responce.json();
        })
        .then(function(json){
            if(json.code === 422){
                if(json.data[0].message === "is invalid"){
                    emailErr.textContent="Enter a valid Email.";
                }

                if(json.data[0].message === "has already been taken"){
emailErr.textContent="Email Alrady Exists!";
                }
            }
        console.log(json);
        });
};



form.addEventListener("submit",function(event){
    event.preventDefault();
    isValid(data);
    submitData(data);
});