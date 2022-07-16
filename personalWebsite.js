const IT_facts = [];
const num = 55;


function read_file(){
fetch('assets/facts.txt')
  .then(response => response.text())
  .then(data => {
    const my_array = data.split(".");
    let rand_num = Math.floor(Math.random() * (my_array.length - 1));
    Array.prototype.push.apply(IT_facts, my_array);
    document.getElementById('output').innerHTML = my_array[rand_num];
    document.getElementById("c3").style.backgroundImage = "url(./assets/facts_images/"+rand_num
  +".png)";
  });
}


function get_random_fact(){
  let randnum = Math.floor(Math.random() * (IT_facts.length - 1));
  document.getElementById('output').innerHTML = IT_facts[randnum];
  document.getElementById("c3").style.backgroundImage = "url(./assets/facts_images/"+randnum
  +".png)";
}


function get_dimensions(){
  let w = window.innerWidth;
  let h = window.innerHeight;
  document.getElementById('h').innerHTML = "----- height = " + h;
  document.getElementById('w').innerHTML = "----- width = " + w;
}

function find_max_value(one, two, three){
  
    max = 0;
    
    if(one > two && one > three){
      max = one;
    }
    if(two > one && two > three){
      max = two;
    } 
    if(three > one && three > two){
      max = three;
    }
     return max;
}
function tick(numOne){
  var objOne = document.getElementById(numOne);
  currentOne = objOne.innerHTML;
    var refreshId = setInterval(function(){
        objOne.innerHTML = currentOne++;
        if(currentOne > 10){
          clearInterval(refreshId);
        }
    },500);
    document.getElementById(numOne) = 0;
}


function animateValue(numOne, numTwo, numThree){
    var objOne = document.getElementById(numOne);
    var objTwo = document.getElementById(numTwo);
    var objThree = document.getElementById(numThree); 

    currentOne = objOne.innerHTML;
    currentTwo = objTwo.innerHTML;
    currentThree = objThree.innerHTML; 
    let maxNum = (find_max_value(currentOne, currentTwo, currentThree));

    numOne1 = -5;
    numTwo1 = 0;
    numThree1 = -10;
    
    var refreshId = setInterval(function(){
        objTwo.innerHTML = numTwo1++;
        objThree.innerHTML = numThree1++;
        
        if(numTwo1 > 10){
          clearInterval(refreshId);
        }
    },1000);
    document.getElementById(numTwo) = 0;
    document.getElementById(numThree) = 0;

    var refreshId1 = setInterval(function(){
        objOne.innerHTML = numOne1++;
        if(numOne1 > 10){
          clearInterval(refreshId1);
        }
    },500);
    document.getElementById(numOne) = 0;
}



