
let siteName=document.getElementById("siteName");
let siteUrl=document.getElementById("siteUrl");

let allData=[];

if(localStorage.getItem("allData") != null){
    allData=JSON.parse(localStorage.getItem("allData"));
    displayData();
}

function validBookmark(){
    let nameRegex = /^[a-z]{3,}[0-9]?$/;
    if(nameRegex.test(siteName.value)== true){
        document.getElementById("nameMessage").classList.replace("d-block","d-none");
        return true;
    }
    document.getElementById("nameMessage").classList.replace("d-none","d-block");
    return false;
}

function validWebsiteUrl(){
    let urlRegex = /^(http:|https:)[a-z]{5,}[0-9]{2,}$/;
    if(urlRegex.test(siteUrl.value)== true){
        document.getElementById("urlMessage").classList.replace("d-block","d-none");
        return true;
    }

    document.getElementById("urlMessage").classList.replace("d-none","d-block")
    return false;
}

function addInfo(){
   if(validBookmark()==true && validWebsiteUrl()==true){
    let bookmark={
        name:siteName.value,
        url:siteUrl.value,
        };
        
        allData.push(bookmark);
        localStorage.setItem("allData",JSON.stringify(allData));
        console.log(allData);
    
        clearForm();
        displayData();
   }
   
}

function clearForm(){
    siteName.value="";
    siteUrl.value="";
}

function displayData(){
    let info='';
    for(var i=0;i<allData.length;i++){
        info=info+`
         <tr>
                    <th scope="row">${i+1}</th>
                    <td>${allData[i].name}</td>
                    <td><button class="btn btn-success px-3 onClick="visit()"><i class="fa-regular fa-eye pe-1"></i>Visit</button></td>
                    <td><button class="btn btn-danger px-3" onClick="deleteItem(${i})"><i class="fa-regular fa-trash-can pe-1"></i>Delete</button>
                    </td>
                </tr>`
    }

    document.getElementById("data-row").innerHTML=info;
}



function deleteItem(index){
    allData.splice(index,1);
    displayData();
    localStorage.setItem("allData",JSON.stringify(allData));
}

function formValidation(){
    let visitSite=siteUrl.value;
    if (visitSite.protocol === "http:" || visitSite.protocol === "https:") {
        window.location.href = visitSite.href;
    }
}

function visit(){

}