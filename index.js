let urlList = [] ;
const demoEl = document.getElementById("demo") ;


document.getElementById("save").addEventListener("click", function(){
    
    let val = document.getElementById('urlbox').value ;

    if(val != '')
    urlList.push(val) ;
    //demoEl.innerHTML = val ;
    //alert("Button clicked and "+ val+ " is added to list");
})

document.getElementById("list").addEventListener("click", function(){
   
    // for (let i = 0 ; i< urlList.length ; i++) {
    // let link = '<a href='+urlList[i] +'>' + urlList[i] +'</a>' ;
    // demoEl.innerHTML += link ;
    // }
        
    let same  = demoEl.childNodes;
    
    for(let i = 0 ; i< urlList.length; i++)
    {
         
         if(urlList.includes(same[i].nodeValue)){
             continue ;
         }             
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
    if( ! urlList.includes(window.location.href)){
                urlList.push(window.location.href);}
})

document.getElementById('delete').addEventListener('click', function() {
        demoEl.removeChild(demoEl.lastChild) ; 
        urlList.pop();
})
