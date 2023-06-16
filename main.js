let preScrollpos = window.pageYOffset;
// window.addEventListener('scroll',function(){})
window.onscroll=function(){
  let currentScrollPos=window.pageYOffset;
  console.log('현재값',currentScrollPos)
  if(preScrollpos>currentScrollPos){
    document.getElementById('navbar').style.top='0'
  }else{
    document.getElementById('navbar').style.top='-54px'
  }
  preScrollpos=currentScrollPos;
console.log('이전값',preScrollpos)

}
