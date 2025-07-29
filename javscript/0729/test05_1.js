// test05_1.js

'use srtict';
//         0         1         2         3         4         5         6         7
//         0123456789012345678901234567890123456789012345679801234567890123456789     
let text1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let text2='   ABC    BC   ABC   GHI     JKLABCMN........ A AC .. opq.. abc prod';

// length : 길이
// subsrting() : 특정문자열의 지정된 위치의 문자열을 추출한다.
// indexOf() : 문자열(문자) 검색(찾는값이 있으면 위치값을 반환, 없으면 -1을 반환)
// lastIndexOf() : 뒤에서부터 문자열 검색.. 없으면 -1 반환
// includes() : 특정 문자열을 포함유무(true/false를 반환)
// concat() : 문자열 결합
// slice() : 지정된 인덱스위치부터, 지정인덱스-1 까지의 문자열을 가져온다.
// replace() : 특정 문자(문자열)로 치환(첫번째 검색한 문자(문자열)만 치환한다)
// replaceAll() : 특정 문자(문자열)로 모두 검색하여 치환해준다
// charAt() : 1개 문자열 추출
// charCodeAt() : 1개 문자의 아스키 코드값을 추출
// toUpperCase()
// toLowerCase()
let str = '';

// srt += "lengrh : " + text1.lengrh + "<br/>";
str += "length : " + text1.length + "<br/>";
str += "subsrting(6) :" + text1.substring(6) + "<br/>";
str += "subsrting(6,10) :" + text1.substring(6,10) + "<br/>";
str += "indexOf(abc) : " + text1.indexOf('abc');
str += "indexOf(abc) : " + text2.indexOf('abc');
str += "lastIndexOf(abc) : " + text2.lastIndexOf('abc') + "<br/>";
str += " includes(abc) : " + text2. includes('abc') + "<br/>";
str += "text1.concat(test2) : " + text1.concat(text2) + "<br/>";
str += "text1.concat(text2.trim()) : " + text1.concat(text2.trim()) + "<br/>";
// str += "text1.concat(test20.teim()) : " + text1.concat(text2.teim()) + "<br/>";
str += "text1.slice(5) : " + text1.slice(5) + "<br/>";
str += "text1.slice(5,10) : " + text1.slice(5,10) + "<br/>";
str += text1.replace("abc", "opq");
str += text2.replace("BC", "12345");
str += text2.replaceAll("BC", "12345");
str += text1.charAt(5) + "<br/>"
str += text1.charCodeAt(5) + "<br/>"



demo.innerHTML = str;


let tel = '010-1234-5678';
let tels = tel.split('-')
console.log(tels[0]);
console.log(tels[1]);
console.log(tels[2]);
console.log("");

tels.forEach(data => console.log(data));

console.log(tels.join("/")); 
// document.getElementById("demo").innerText= str;