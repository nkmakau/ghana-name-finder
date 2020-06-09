
// variables to be used in calculation.
var century, year, month, dayOfMonth, dayOfWeek, day
//Get data that has been captured for calculations.
function getInput(){
  century = parseInt(document.getElementById("century").value)
  year = parseInt(document.getElementById("year").value)
  month = parseInt(document.getElementById("month").value)
  dayOfMonth = parseInt(document.getElementById("monthday").value)

//check to confirm data is right.
  if(century === ""){
    alert("Input the correct centrury")
    return false
  }else if (century < 19 || century > 20){
    alert("Kindly enter the correct century of birth")
    return false
  }else if (year == ""){
    alert("Input the correct year of birth")
    return false
  }else if (year < 00 || year > 99){
    alert("Kindly enter your correct year of birth (00 -99)")
    return false
  }else if (month == ""){
    alert("Input the correct month of birth")
    return false
  }else if (month < 1 || month > 12){
    alert("Kindly enter your correct month of birth in figure (1-12)")
    return false
  }else if(dayOfMonth == ""){
    alert("input the correct date of birth")
    return false
  }else if (dayOfMonth < 01 || dayOfMonth > 31){
    alert("Kindly enter your correct date of birth in figure (1-31)")
    return false
  }
}

//Calculate func
function calculateDay(){
    getInput()
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1
    console.log(dayOfWeek) //Test the calculateDay function
    return (Math.floor(dayOfWeek))
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1
    }
    else if (dayOfWeek > 0) {
      alert("Kindly input the correct birthday")
      //return dayOfWeek
    }
}

//main caller func
 function checkDayOfWeek(){
     day = calculateDay()
      checkGender()
      console.log("The function runs");//Test checkDayOfWeek function
}

//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads")
  if(gen[0].checked == true){
      var gender = "male"
  }else if(gen[1].checked == true){
      var gender = "female"
  }else {
    console.log("pass");//Test the radio buttons
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("gname").innerHTML = "The day is on a Sunday." + "  " + "Your Akan name is " + maleNames[0].toLocaleUpperCase()
                break
                case (1 || -1):
                  document.getElementById("gname").innerHTML = "The day is on a Monday." + " " + "Your Akan name is " + maleNames[1].toLocaleUpperCase()
                break
                case (2 || -2):
                  document.getElementById("gname").innerHTML = "The day is on a Tuesday." + " " + "Your Akan name is " + maleNames[2].toLocaleUpperCase()
                break
                case (3 || -3):
                  document.getElementById("gname").innerHTML = "The day is on a Wednesday." + " " + "Your Akan name is "+ maleNames[3].toLocaleUpperCase()
                break
                case (4 || -4):
                  document.getElementById("gname").innerHTML = "The day is on a Thursday." + " " + "Your Akan name is " + maleNames[4].toLocaleUpperCase()
                break
                case (5 || -5):
                  document.getElementById("gname").innerHTML = "The day is on a Friday." + " " + "Your Akan name is " + maleNames[5].toLocaleUpperCase()
                break
                case (6 || -6):
                  document.getElementById("gname").innerHTML = "The day is on a Saturday." + " " + "Your Akan name is " + maleNames[6].toLocaleUpperCase()
                break
                default:
                // console.console.log("Pass");//Test male case
              }
        break
        case gender = "female":
          switch(day){
            case (0 || -0):
              document.getElementById("gname").innerHTML = "The day is on a Sunday." + "  " + "Your Akan name is " + femaleNames[0].toLocaleUpperCase()
            break
            case (1 || -1):
              document.getElementById("gname").innerHTML = "The day is on a Monday." + " " + "Your Akan name is " + femaleNames[1].toLocaleUpperCase()
            break
            case (2 || -2):
              document.getElementById("gname").innerHTML = "The day is on a Tuesday." + " " + "Your Akan name is " + femaleNames[2].toLocaleUpperCase()
            break
            case (3 || -3):
              document.getElementById("gname").innerHTML = "The day is on a Wednesday." + " " + "Your Akan name is "+ femaleNames[3].toLocaleUpperCase()
            break
            case (4 || -4):
              document.getElementById("gname").innerHTML = "The day is on a Thursday." + " " + "Your Akan name is " + femaleNames[4].toLocaleUpperCase()
            break
            case (5 || -5):
              document.getElementById("gname").innerHTML = "The day is on a Friday." + " " + "Your Akan name is " + femaleNames[5].toLocaleUpperCase()
            break
            case (6 || -6):
              document.getElementById("gname").innerHTML = "The day is on a Saturday." + " " + "Your Akan name is " + femaleNames[6].toLocaleUpperCase()
            break
            default:
            // console.console.log("Pass");//Test female case
          }
    break
        default:
        console.log("pass");//Test gender switch
    }
}
