let request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(request.status == 200){
        let response = JSON.parse(this.responseText);
        response.forEach(element => {
            document.write("Name : ",element.name); 
            document.write("<br>");
            document.write("Region : ",element.region); 
            document.write("<br>");
            document.write("Sub-Region : ",element.subregion); 
            document.write("<br>");
            document.write("Population : ",element.population); 
            document.write("<br>");
            document.write("<br>");
            document.write("<br>");
        });
    }
};

request.open("GET","https://restcountries.com/v2/all");
request.send();