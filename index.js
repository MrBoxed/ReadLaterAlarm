let urlList = [] ;
const element = document.getElementById("element");
const saveBtn = document.getElementById("save-btn");
const inputTxt = document.getElementById("urlbox") ;
const saveTab = document.getElementById("tab-url-btn");
const delBtn = document.getElementById('delete-btn');

saveBtn.addEventListener("click", urlboxValueSave);

inputTxt.addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById('save-btn').click();
    }
});

saveTab.addEventListener('click',function() {
    chrome.tabs.query({active:true ,currentWindow:true}, function(tabs){
        urlList.push(tabs[0].url);
        localStorage.setItem("journal", JSON.stringify(urlList));
        showfun() ;
    })
});

delBtn.addEventListener('click', function() {
        element.removeChild(element.lastChild) ; 
        urlList.pop();
        saveToLocalStorage(urlList) ;
});

function  urlboxValueSave() {
    
    let textValue = inputTxt.value ;
        val = (textValue);
    
        if(val != null || val != undefined)
        {
            if (val == "" ) { return }
        
            if(!urlList.includes(val))
                urlList.push(val) ;
        }
    inputTxt.value = null ;
    
    saveToLocalStorage(urlList);

    showfun() ;
}

function showfun() {
        
    if(urlList == null|| urlList == undefined)
        return ;   
    
    if(element.hasChildNodes())
    {
        while(element.childElementCount > 0)
            element.removeChild(element.lastChild) ;
    }

    let list = "" ;

    for (let i = urlList.length-1 ; i >= 0 ; i--) 
    {
         list += `<p>
                    <a target = "_blank" href=" ${urlList[i]}"> ${urlList[i]}
                    </a>
                </p>` ;

          
    }
        element.innerHTML = list ; 
}

function saveToLocalStorage(value) {
    localStorage.setItem("journal",JSON.stringify(value)) ;
}

// function getCurrentTab(callback){ 
//     chrome.tabs.query({active:true, currentWindow:true},function(tab){
//         let taburl = tab[0].url ;
//         if (taburl!= null || taburl != undefined) {
//             urlList.push(tab[0].url) ;
//             localStorage.setItem("journal",JSON.stringify(urlList)) ;
//             callback(); //call the callback with argument
//         }
//     });
// };

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

(function() {
    let fromLocal = JSON.parse(localStorage.getItem("journal")) ;
    
    if (fromLocal != null || fromLocal != undefined) {
       urlList = fromLocal ;
       showfun() ;
    }
}
)() ;