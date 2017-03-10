searchKP = function(word){
    var query = word.selectionText;
    chrome.tabs.create({"url": "https://www.kinopoisk.ru/search/?query=" + query});
 };
//https://www.kinopoisk.ru/search/?query=
//https://www.kinopoisk.ru/index.php?first=no&kp_query=
var id =  chrome.contextMenus.create({
 "title": " Stalk!",
 "contexts":["selection"],  // ContextType
 "onclick": wr // A callback function
});
console.log("'" + "selection" + "' item:" + id);
var link = "https://www.kinopoisk.ru/user/5313956/votes/"

wr = function(word){
  document.write(httpGet("http://stackoverflow.com/"));
}
function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  new Notification(hour + time[2] + ' ' + period, {
    body: 'Time to make the toast.'
  });
}

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();
}


function parser1(){
  var el = document.createElement( 'html' );
  //var link = "https://www.kinopoisk.ru/user/5313956/votes/"
//  el.innerHTML = "view-source:https://www.kinopoisk.ru/user/5313956/votes/"


}
