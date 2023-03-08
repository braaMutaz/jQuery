

$(function(){
   
   let widthNav=$('.sideBarnav').innerWidth();
   $('.sideBar').animate({left:-widthNav},10)

   // ------------------   click link ---------

   $(" a[href^='#'").click(function(e){
      let abouttopoffset= $(this).attr('href')
      let ofset=$(abouttopoffset).offset().top;
      
      $('html,body').animate({scrollTop : ofset} , 1000)
      
      })
    // ----------------   click open -------------
   
    $('.open').click(function(){
   

 if($('.sideBar').css('left')=='0px'){
    $('.sideBar').animate({left:-widthNav},1000);
 }else {

        $('.sideBar').animate({left:'0px'},1000);


    
 } 
 })
//  ----------- closeicon --------------
 $('.closeicon').click(function(){
    let widthNav=$('.sideBarnav').innerWidth();

if($('.sideBar').css('left')=='0px'){
$('.sideBar').animate({left:-widthNav},1000);
}


} )


// --------------  singers (occirdon)   ----------
$('.cardeader').click(function(){
// slideDown()
   if($(this).next('.cardBody').hasClass('active')){
      $(this).next('.cardBody').slideDown();
   }else{
      $('.cardBody').removeClass('active').slideUp();
      $(this).next('.cardBody').addClass('active').slideDown();
   

   }
 
})

// -------------- counter Down(days /monthes/years/hours/seconds)  ----------
 


 





  })
 let Days=document.querySelector('#Days');

let  hours=document.querySelector('#hours');
let mints=document.querySelector('#mints');
let  Secnd=document.querySelector('#Secnd');

let countDowen= new Date('Dec 31, 2023 23:59:59').getTime();
// console.log(countDowen)

let counter= setInterval(()=>{
let dateNow= new Date().getTime();
let dateDiff= countDowen - dateNow;

let day= Math.floor(dateDiff / ((1000*60*60*24)));
// console.log(day)
let hour= Math.floor((dateDiff % (1000*60*60*24))/(1000*60*60));
// console.log(hour)
let mint=  Math.floor((dateDiff  % (1000*60*60))/(1000*60));
// console.log(mint)
let sec= Math.floor((dateDiff % (1000*60))/1000);
// console.log(sec)
Days.innerHTML=day;
hours.innerHTML=hour;
mints.innerHTML=mint;
Secnd.innerHTML=sec

},1000)

// --------------------    contact  ---------------

let inputcouter=document.querySelector('.inputcouter');

let inputLenght= inputcouter.getAttribute('maxlength');
console.log(inputLenght);

inputcouter.addEventListener('input',function(){
let currentLength=inputLenght- (inputcouter.value.length);

document.querySelector('.countChar').innerHTML=currentLength;

})













