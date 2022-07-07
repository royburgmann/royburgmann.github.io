const IT_facts = [];


function read_file(){
fetch('assets/facts.txt')
  .then(response => response.text())
  .then(data => {
    const my_array = data.split(".");
    let rand_num = Math.floor(Math.random() * (my_array.length - 1));
    Array.prototype.push.apply(IT_facts, my_array);
    document.getElementById('output').innerHTML = my_array[rand_num];
  });
}


function get_random_fact(){
  let randnum = Math.floor(Math.random() * (IT_facts.length - 1));
  document.getElementById('output').innerHTML = IT_facts[randnum];
}









