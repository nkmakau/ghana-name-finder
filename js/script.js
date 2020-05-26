var year, month, date, gender
//Get input from index
function getInput() {
    century = parseInt(document.getElementById("century").value)
    year = parseInt(document.getElementById("year").value)
    month = parseInt(document.getElementById("month").value)
    date = parseInt(document.getElementById("date").value)
    
    if (century == ""){
        alert("Kindly enter your century")
    }else if (century < 19 || century > 20){
        alert("Kindly enter the correct century of birth")
    }else if (year==""){
        alert("Kindly enter your year of birth")
    }else if (year < 0 || year > 99){
        alert("Kindly enter your correct year of birth")
    }else if (year > 100){
        alert ("Kindly enter your correct year of birth")
    }else if (month ==""){
        alert("Kindly enter your month of birth in figure (1-12")
    }else if (month < 1){
        alert("Kindly enter your correct month of birth in figure (1-12)")
    }else if (month > 12){
        alert("Kindly enter your correct month of birth in figure (1-12)")
    }else if (date ==""){
        alert("Kindly enter your date of birth")
    }else if (date > 1){
        alert("Kindly enter your correct date of birth in figure (1-31)")
    }else if (date > 31){
        alert("Kindly enter your correct date of birth in figure (1-31)")
    }else if (gender ==""){
        alert("Kindly choose your gender")
    }    
}
//calculation func
function calculateDay(){

}