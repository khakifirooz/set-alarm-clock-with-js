const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
const content = document.querySelector('.content');
let alarmTime;
let alarmstate = 'noset';
const ring = new Audio('./files/ringtone.mp3');

for(let i = 23; i>=0; i--){
   // i = i  < 10 ? '0' + i; // اگر آی کوچکتر از ده بود یک رشته صفر به آی اضافه بشه
    if(i<10){
        i = '0' + i;
    }
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option);

}
for(let i = 59; i>=0; i--){
     if(i<10){
         i = '0' + i;
     }
     let option = `<option value="${i}">${i}</option>`;
     selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option);
 
 }
 setInterval(() => {
    let date = new Date(); // دریافت کردن زمان و قرار دادن در متغیر دیت
    let h = date.getHours(); // گرفتن ساعت و ذخیره سازی در متغیر اچ
    let m = date.getMinutes();
    let s = date.getSeconds();
  //  console.log(`${h}:${m}:${s}`);
  if(h<10){
    h = '0' + h;  // اگه اچ زیر عدد10 بود ی صفر بندازه پشتش که دو رقمی نشون بده
  }else{
    h = h;
  }

  if(m<10){
    m = '0' + m;
  }else{
    m = m;
  }

  if(s<10){
    s = '0' + s;
  }else{
    s = s;
  }

  timeBox.innerHTML = `${h}:${m}:${s}`;
  if(alarmTime == `${h}:${m}`){
   // console.log('ringggg')
   ring.play();
   ring.loop = true;
  }


 }, 1000);

 setAlarmBtn.addEventListener('click' , function(){
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  //console.log(alarmTime)
  if(alarmTime.includes('houre') || alarmTime.includes('minutes')){
    return alert('زمان را مثل آدم مشخص کنید');
  }
  checkStates(alarmstate);
 });

 function checkStates(state){
  if(state == 'noset'){
    content.classList.add('disable');
    setAlarmBtn.innerText = 'cleare alarm';
    alarmstate = 'set';
  }else{
    content.classList.remove('disable');
    alarmTime ='';
    ring.pause();
    alarmTime = 'noset';
    setAlarmBtn.innerText = 'set alarm';
  }
 }