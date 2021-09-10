//for loop 'flex-ea' here
var cardlist = document.getElementById('cardlist');
var json = {
  "cardlist": [
    {
      "category": "스포츠",
      "class": "프리다이빙",
      "title": "데프리다 - 프리다이빙",
      "location": "수원, 가평",
      "image": "deaflida.PNG"
    },
    {
      "category": "스포츠",
      "class": "스쿠버다이빙",
      "title": "이대복과 함께 떠나는 스쿠버다이빙",
      "location": "강원도 속초",
      "image": "daebok.jpg"
    },
    {
      "category": "스포츠",
      "class": "야구",
      "title": "농인 야구단 대구 호크아이",
      "location": "강원도 속초",
      "image": "hawkeye.jpg"
    },
    {
      "category": "스포츠",
      "class": "농구",
      "title": "서울 농인 농구단",
      "location": "가양동 사당역",
      "image": "tornadowing.jpg"
    }
  ]
};
var template1 = [
  '<div class="flex-ea moim"><figure><img src="../images/',
  '1',
  '" alt="',
  '3',
  '"></figure>  <div class="info">    <div class="category">      <span>',
  '5',
  '</span></div><div class="title">  <span>',
  '7',
  '</span></div><div class="location">  <span>',
  '9',
  '</span></div></div></div>'
];
var array = json.cardlist;

for (var i = 0; i < array.length; i++) {
  var cloned = template1.slice(0);
  cloned[1] = array[i].image;
  cloned[3] = array[i].image;
  cloned[5] = array[i].category +" - " + array[i].class;
  cloned[7] = array[i].title;
  cloned[9] = array[i].location;
  cardlist.innerHTML += cloned.join("");
}

var infoTemplate = '<div class="flex-ea moim selected"><figure><img src="../images/daebok.jpg" alt="daebok.jpg"></figure>  <div class="info">    <div class="category">      <span>스포츠 - 스쿠버다이빙</span></div><div class="title">  <span>이대복과 함께 떠나는 스쿠버다이빙</span></div><div class="location">  <span>강원도 속초</span></div></div></div>';

(function(){
  var moimAll = document.querySelectorAll(".moim");
  console.log(moimAll);

  for (var i = 0; i < moimAll.length; i++) {
    var moim = moimAll[i];
    var el = document.createElement('div');

    var handler =function(event){
      var parent = event.target.parentNode.parentNode;
      if(parent.classList.contains('moim')){
        parent.after(el); //ie not supported
        el.outerHTML = infoTemplate;
      }
    }
    moim.addEventListener('click',handler);
  }

})()//
