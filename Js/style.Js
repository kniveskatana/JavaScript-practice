const dob = document.querySelector(".editform");
dob.addEventListener("submit",formCollect);

function formCollect(e) {
    e.preventDefault();
    
    var nom = document.querySelector("input[name=gender]:checked");

    if(nom == null){
        alert("please input data")
    }

    var akan = document.querySelector(".p-3").value;


    const cc = akan.slice(0,2);
    const year = akan.slice(2,4);
    const month = akan.slice(5,7);
    const day = akan.slice(8,10);

    const exactDoW = ( ( (cc/4) -2*cc-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;

    const exactDay = exactDoW.toFixed();
    var open = document.querySelector("#akanNames");
    if(nom.value == "female"){
        var akanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var akanFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        var akanName = akanMale[exactDay];
console.log(akanName)
        open.innerHTML = "Congratulations, your username is" + " " + akanFemale[exactDay];
    open.innerHTML = "Congratulations, your username is" + " " + akanName;
    
    }if(nom.value == "male"){
open.innerHTML = "Congratulations, your username is" + " " + akanName;
    }


}
var submitform = document.querySelector("#submit");
submitform.onclick = function(){display()};

function display(){
    var open1 = document.querySelector(".congrats");
    if(open1.style.display == "none"){
        open1.style.display = "flex";
    }else{
        open1.style.display = "flex";
    }

}


   


