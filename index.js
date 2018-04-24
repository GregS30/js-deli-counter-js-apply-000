var countCustomersToday = 0;
var customers = [];
var hourlyTraffic = [];

function runGregLab() {
  
  takeANumber(customers);
  takeANumber(customers);
  takeANumber(customers);
  
  console.log(customers)
  
  console.log(hourlyTraffic)
  
  console.log(findBusiestHour());
  
  hourlyTraffic[11] = 12;  // pretend that 11am is busiest hour
  
  console.log(findBusiestHour());
  
}

function findBusiestHour() {
  var i;
  var busiestHour = 0;
  var maxTraffic = 0;
  
  for (i=1, len = hourlyTraffic.length; i < len; i++) {
    
    if (hourlyTraffic[i] === null || hourlyTraffic[i] === undefined) continue;
    if (hourlyTraffic[i] > maxTraffic) {
      maxTraffic = hourlyTraffic[i];
      busiestHour = i;
    } 
    else {
      maxTraffic = hourlyTraffic[i];
    }
  }  
  return busiestHour;
}


function takeANumber(katzDeliLine) {
  var thisHour;
  var d = new Date();
  
  countCustomersToday++;
  katzDeliLine.push (countCustomersToday)
  
  thisHour = d.getHours(); 
  if (!hourlyTraffic[thisHour]) {
    hourlyTraffic[thisHour] = 1;
  } else {
    hourlyTraffic[thisHour] = hourlyTraffic[thisHour] + 1;  
  }

  return countCustomersToday; 
}

function nowServing(katzDeliLine) {
  var firstPerson = katzDeliLine[0];
  
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
  } else {
    
    katzDeliLine.shift();
    
    return("Currently serving " + firstPerson + ".");
  }
    
}

function currentLine(katzDeliLine) {
  var i;
  var listPeople = "The line is currently";

  if (katzDeliLine.length === 0) {
    return(listPeople + " empty.")
  } else {
      listPeople = listPeople + ":"
      for (i = 0; i < katzDeliLine.length; i++) {
        if (i > 0) { 
          listPeople = listPeople + ","
        }
        listPeople = listPeople + " " + (i+1) + ". " + katzDeliLine[i]
    }
    return(listPeople)
  }
}