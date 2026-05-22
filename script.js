function scanWebsite(){

    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if(url == ""){
        result.innerHTML = "Please enter a website URL";
        result.style.color = "red";
        return;
    }

    let vulnerabilities = [];

    // Simple checks
    if(!url.startsWith("https://")){
        vulnerabilities.push("Website is not using HTTPS");
    }

    if(url.includes("admin")){
        vulnerabilities.push("Admin page detected");
    }

    if(url.length < 10){
        vulnerabilities.push("Suspicious URL length");
    }

    // Display Result
    if(vulnerabilities.length == 0){
        result.innerHTML = "No common vulnerabilities found";
        result.style.color = "green";
    }
    else{
        result.innerHTML = "<h3>Vulnerabilities Found:</h3><ul>" +
            vulnerabilities.map(v => `<li>${v}</li>`).join('') +
            "</ul>";

        result.style.color = "red";
    }
}
