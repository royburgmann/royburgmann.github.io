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



