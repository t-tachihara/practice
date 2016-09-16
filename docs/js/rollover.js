function initRollovers() {
if (!document.getElementById) return
var aPreLoad = new Array();
var sTempSrc;
var aImages = document.getElementsByTagName('img');
var bImages = document.getElementsByTagName('input');
for (var i = 0; i < aImages.length; i++) {
if (aImages[i].className == 'rollover') {
var src = aImages[i].getAttribute('src');
var ftype = src.substring(src.lastIndexOf('.'), src.length);
var hsrc = src.replace(ftype, '_on'+ftype);
if( aImages[i].getAttribute('rel') != null){
if( !aImages[i].getAttribute('rel').indexOf('png')>= 0){
var rel =  aImages[i].getAttribute('rel');
}
}
var NavVer = navigator.appVersion;
ex_flg = 0;
ex_flg2 = 0;
if( NavVer.indexOf('MSIE')>0 && NavVer.indexOf('MSIE 7') == -1 ){
if( aImages[i].getAttribute('rel') == null ){
ex_flg = 1;
}else{
if( aImages[i].getAttribute('rel').indexOf('png')>= 0){
ex_flg = 1;
ex_flg2 = 1;
src = rel;
ftype = '.png';
hsrc = rel.replace(ftype, '_on'+ftype);
}
}
}else{
ex_flg = 1;
}
if( ex_flg == 1){
aImages[i].setAttribute('hsrc', hsrc);
aPreLoad[i] = new Image();
aPreLoad[i].src = hsrc;
aImages[i].onmouseover = function() {
sTempSrc = this.getAttribute('src');
this.setAttribute('src', this.getAttribute('hsrc'));
}
aImages[i].onmouseout = function() {
if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
if(ex_flg2 == 1){sTempSrc = this.getAttribute('rel').replace('_on'+ftype, ftype);}
this.setAttribute('src', sTempSrc);
}
}
}
}
for (var i = 0; i < bImages.length; i++) {
if (bImages[i].className == 'rollover') {
var src = bImages[i].getAttribute('src');
var ftype = src.substring(src.lastIndexOf('.'), src.length);
var hsrc = src.replace(ftype, '_on'+ftype);
var NavVer = navigator.appVersion;
ex_flg = 0;
if( NavVer.indexOf('MSIE')>0 && NavVer.indexOf('MSIE 7') == -1 ){
if( !bImages[i].getAttribute('rel')){
ex_flg = 1;
}
else{
if( bImages[i].getAttribute('rel').indexOf('png') == -1 ){
ex_flg = 1;
}
}
}else{
ex_flg = 1;
}
if( ex_flg == 1){
bImages[i].setAttribute('hsrc', hsrc);
aPreLoad[i] = new Image();
aPreLoad[i].src = hsrc;
bImages[i].onmouseover = function() {
sTempSrc = this.getAttribute('src');
this.setAttribute('src', this.getAttribute('hsrc'));
}
bImages[i].onmouseout = function() {
if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
this.setAttribute('src', sTempSrc);
}
}
}
}
}
window.onload = function() {
initRollovers();
}