let urlList = [] ;
const demoEl = document.getElementById("demo") ;

document.getElementById("save").addEventListener("click", function(){
    
    let val = document.getElementById('urlbox').value ;
    urlList.push(val) ;
    //demoEl.innerHTML = val ;
    //alert("Button clicked and "+ val+ " is added to list");
})

document.getElementById("list").addEventListener("click", function(){
   
    // for (let i = 0 ; i< urlList.length ; i++) {
    // let link = '<a href='+urlList[i] +'>' + urlList[i] +'</a>' ;
    // demoEl.innerHTML += link ;
    // }

    for(let i = 0 ; i< urlList.length; i++)
    {
      let l1 = document.createElement("p");
      //let l2 = document.createElement('li');
      let link = urlList[i] ;
      let text = document.createTextNode(link);
    
      //l2.appendChild(text) ;
      l1.appendChild(text) ;
      demoEl.appendChild(l1) ;
      
    } 
    
})

document.getElementById("urlcopy").addEventListener('click',function(){
    urlList.push(window.location.href);
})
