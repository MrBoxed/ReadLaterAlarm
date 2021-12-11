let urlList = [] ;
const element = document.getElementById("element") ;

document.getElementById("save").addEventListener("click", savefun);

document.getElementById("urlbox").addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById('save').click();
    }
});

document.getElementById("urlcopy").addEventListener('click',function(){
    if( ! urlList.includes(window.location.href)){
                urlList.push(window.location.href);}
        showfun()
});

document.getElementById('delete').addEventListener('click', function() {
        element.removeChild(element.lastChild) ; 
        urlList.pop();
});

function  savefun() {
    
    let textValue = document.getElementById('urlbox').value ;
        val = (textValue);
    
        if(val != null || val != undefined)
        {
            if (val == "" ) { return ;}
        
            if(!urlList.includes(val))
                urlList.push(val) ;
        }
    document.getElementById('urlbox').value = null ;

    localStorage.setItem("journal",JSON.stringify(urlList)) ;

    showfun() ;
}

function showfun() {
        
    if(element.hasChildNodes())
    {
        while(element.childElementCount > 0)
            element.removeChild(element.lastChild) ;
    }

    let list = "" ;
    for (let i = urlList.length-1 ; i >= 0 ; i--) 
    {
         list = `<p>
                    <a target = "_blank" href=" ${urlList[i]}"> ${urlList[i]}
                    </a>
                </p>` ;

        element.innerHTML += list ;    
    }

}

function fetchDelails() {
     let fromLocal = JSON.parse(localStorage.getItem("journal")) ;

     if (fromLocal) {
        urlList  = fromLocal ;
        showfun() ;
     }

}