let urlList = [] ;
const element = document.getElementById("element") ;

document.getElementById("save").addEventListener("click", savefun)
//document.getElementById("list").addEventListener("click", showfun)  

function  savefun() {
    
    let textValue = document.getElementById('urlbox').value ;
        val = (textValue);
    if(val != null || val != '' || val != undefined){
        if(!urlList.includes(val))
            urlList.push(val) ;
    }
    document.getElementById('urlbox').value = null ;
    showfun() ;
}

function showfun() {
        
    if(element.hasChildNodes())
    {
        while(element.childElementCount > 0)
            element.removeChild(element.lastChild) ;
    }

    let list = "" ;
    for (let i = 0 ; i< urlList.length ; i++) 
    {
         list = `<p>
                    <a target = "_blank" href=" ${urlList[i]}"> ${urlList[i]}
                    </a>
                </p>` ;

        element.innerHTML += list ;    
    }

}

document.getElementById("urlcopy").addEventListener('click',function(){
    if( ! urlList.includes(window.location.href)){
                urlList.push(window.location.href);}
        showfun()
})

document.getElementById('delete').addEventListener('click', function() {
        element.removeChild(element.lastChild) ; 
        urlList.pop();
})
