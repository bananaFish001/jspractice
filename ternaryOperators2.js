function gfg(){
  let marks = 80

  let result = (marks >= 90) ? "Nerd! detected" : (marks > 70 && marks < 90) ? "You are mid" : (marks < 70) ? "You need to study more" : "You failure!";
  console.log(result);
}

gfg();
