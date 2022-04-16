let request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(request.status == 200){
        let response = JSON.parse(this.responseText);
        response.forEach(element => {
            document.write(element.name); 
            document.write("<br>");
            document.write("<br>");
            const img = document.createElement("img");
            img.src = element.flags.png;
            document.body.appendChild(img);
            document.write("<br>");
            document.write("<br>");
        });
    }
};

request.open("GET","https://restcountries.com/v2/all");
request.send();