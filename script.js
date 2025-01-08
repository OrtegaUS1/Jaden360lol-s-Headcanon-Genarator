function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function headcanon(){
let output = document.getElementById("output") 
let name = document.getElementById("name").value
let number = getRandomInt(1, 7)
let headcanon = 'has code error'


if (number==1) {
headcanon = "likes Jaden360lol"    
} 

if (number==2) {
    headcanon = "Is a murderer"    
    } 

 if (number==3) {
     headcanon = "Is a psychopath"    
     } 

     if (number==4) {
        headcanon = "likes the number 360, lol"    
        } 
      if (number==5) {
        headcanon = "Often gets caught in the crossfire of powerscaling debates"    
        } 

        if (number==6) {
            headcanon = "is NOT cool4ever2"  
            if (name=="Jaden360lol"){ headcanon = "IS cool4ever2" }  
            if (name=="jaden360lol"){ headcanon = "IS cool4ever2" }
            } 
                if (number==7) {
     headcanon = "should add the one on Cannon Island"    
     } 




output.innerText = name + " " + headcanon 

};
