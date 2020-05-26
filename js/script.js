var year, month, date, gender
//Get input from index
function getInput() {
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    gender = (document.getElementById("gender").value).tolowerCase()

    if(year==""){
        alert("Kindly enter your year of birth")
    }else if (year < 1900){
        alert("Kindly input your correct year of birth")
    }else if (year > 2020){
        alert ("Kindly input your correct year of birth")
    }
    
}