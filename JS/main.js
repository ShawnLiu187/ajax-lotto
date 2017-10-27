//document.addEventListener("DOMContentLoaded", function(){
//  let btn = document.querySelector("#btn");
//  btn.addEventListener("click", goGetStuff);
//});
//
//function goGetStuff(ev){
//  ev.preventDefault();
//  console.log("button clicked");
//  
//  let req = new Request("https://griffis.edumedia.ca/demo/the-data.json");
//  
//  let myData = new FormData();
//  myData.append("first_name", "Bob");
//  myData.append("last_name", "Smith");
//  myData.append("country", "CA");
//  
//  //set up the options for the fetch call
//  //IF you include a body then the method CANNOT be get
//  let opts = { method: 'post',
//               mode: 'cors',
//               body: myData };
//  
//  fetch(req, opts)
//    .then(function(response){
//      //this runs when the response comes from the-data.json
//      //the form data was sent
//      //the request was made with a CORS preflight request
//      console.log("response from server ", response.status);
//      return response.json();
//    })
//    .then(function(data){
//      //data will be the parsed json data returned from the fetch
//      let num = Math.floor(Math.random() * data.numbers.length);
//      document.querySelector("#output").textContent += data.numbers[num].name + " ";
//      //randomly add one of the names from the JSON to the output paragraph
//    })
//    .catch(function(err){
//      console.log("ERROR: ", err.message );
//    });
//}



document.addEventListener("DOMContentLoaded", function(){
  let x = document.getElementById("list");
    x.style.display = "none";

  let btn = document.querySelector("#btnSend");
  btn.addEventListener("click", goGetStuff);
  btn.addEventListener("click", toggleList);
    
  let btn2 = document.querySelector("#btnBack");
  btn2.addEventListener("click", startOver);
  btn2.addEventListener("click", toggleHome);
});

function goGetStuff (ev){
let dgt = document.getElementById("digits").value;
let mx = document.getElementById("max").value;
console.log(dgt,mx);

let req = new Request("https://griffis.edumedia.ca/mad9014/lotto/nums.php");
  
  let myData = new FormData();
  myData.append("digits", dgt);
  myData.append("max", mx);
    
  let opts = { method: 'post',
               mode: 'cors',
               body: myData };

 fetch(req, opts)
    .then(function(response){
     console.log("response from server ", response.status);
     return response.json();
     })
    
    .then(function(data){
     console.log("data parsed", data);
        
     data.numbers.forEach(function(item, index){
            let num = document.createElement("li");
            num.className = "num_list";
            num.innerHTML = item;
            document.querySelector('.num_list').appendChild(num);
    })
 })
    .catch(function(err){
      console.log("ERROR: ", err.message );
    });
    
}


function startOver (ev){
    let lottoList = document.querySelector('.num_list');
    
    while(lottoList.hasChildNodes()){
        lottoList.removeChild(lottoList.firstChild);
}
}

function toggleList (ev) {
    let x = document.getElementById("list");
    let y = document.getElementById("home");
    
    if (x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    
    if (y.style.display == "none"){
        y.style.display = "block";
    }else{
        y.style.display = "none";
    }
}

function toggleHome (ev) {
   let x = document.getElementById("list");
    let y = document.getElementById("home");
    
    if (x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    
    if (y.style.display == "none"){
        y.style.display = "block";
    }else{
        y.style.display = "none";
    }
}
