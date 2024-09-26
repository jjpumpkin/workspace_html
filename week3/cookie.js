function setCookie(name, val, expireDate) {
    //쿠키에서 사용되는 문자열 형식으로
    let cookieStr = name + "=" + val +
(expireDate==null)? "": ("; expires=" + expireDate.toUTCString());
      
document.cookie = cookieStr;
}
function getCookie(name){
  let str= name + "=";
  let pairs = document.cookie.split(";");
  for(let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].trim(); //공백제거
    let unit = pair.split("=");
    if(unit[0] == name) {
        return unit[1];
    }
  }
    
}