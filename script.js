document.querySelector("#getInfo").addEventListener('click',loadInformation);

function loadInformation(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','information.json',true);
    xhr.onload = function(){
        // if(this.status === 200){
        //     console.log(this.responseText);
        //     console.log(JSON.parse(this.responseText));
        // }
        // else{
        //     console.log("Başarısız");
        // }
        let info = JSON.parse(this.responseText);
        let html = 
        `<tr>
            <td>${info[0].firstName}</td>
            <td>${info[0].lastName}</td>
            <td>${info[0].age}</td>
        </tr>`
        document.querySelector("#tbl").innerHTML = html;
       
    }

    xhr.send();

   


}


document.querySelector("#getAllInfo").addEventListener('click',loadInformations);
function loadInformations(){
    const xhr = new XMLHttpRequest()

    xhr.open('GET','information.json',true)
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);
        let html = "";

        info.forEach(element => {
            html += `<tr>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.age}</td>
        </tr>`
        });
        document.querySelector("#tbl").innerHTML =html;
    }
    xhr.send();

}