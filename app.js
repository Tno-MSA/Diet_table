window.onload = function() {

  // --------------Breakfast-------------
  var beakfastArray = ["ا50 جرام شوفان كامل الحبوب + 1 كوب حليب اللوز + 1 ملعقة صغيرة عسل + نص معلقة قرفة + 1 ملعقة صغيرة بذر الكتان + 1 خوخ او موز + سلطة + اوميجا 3", "ا5 ملاعق كبيرة فول + 1 معلقة زيت زيتون/حار + 3 خيار + 1 عيش بلدي + سلطة + اوميجا 3", "سلطة فواكهة: 1 كيوي متوسط + 1 كوب مكعبات بطيخ + 1 خوخ متوسط + ملعقة صغيرة شيا + نص ملعقة صغيرة قرفة + اوميجا 3", "نص كوب بليلة مسلوقة + كوب حليب اللوز + ملعقة صغيرة من مسحوق القرفة + 1 خوخ + اوميجا 3", "ا2 طعمية مخبوزة في الفرن + 1 خبز بلدي + 2 خيار + كوب جرير + اوميجا 3", "فاكهتين + اوميجا 3", "موزة مع حليب هوز الهند + سلطة + اوميجا 3", "ا15 زتون اسود او اخضر + توست او خبز بلدي + شاي + اوميجا 3", "عشر حبان زيتون اخضر + قطعة جبنة متوسطة + ملعقتين لبنة + نص رغيف + اوميجا 3", "شريحتين توست + جبنة + خيار + عصير جريب فروت + اوميجا 3", "قطعتين جبنة قريش + نص رغيف + سلطة + اوميجا 3"];
  var breakfastRandom = beakfastArray[Math.floor(Math.random()*beakfastArray.length)];
  document.getElementById("breakfast").textContent = breakfastRandom;

  // --------------Snake 1-------------
  var snack1Array = ["ا1 كوب من زنجبيل إمتنان + 15 حبة لوز خام (مرتين في الاسبوع فقط)","كوب شاي اخضر إمتنان مع الليمون + 1 فاكهة", "حبة فواكه", "ثلاث حبات تمر", "زبيب بحجم قبضة اليد"];
  var snack1Random = snack1Array[Math.floor(Math.random()*snack1Array.length)];
  document.getElementById("snack1").textContent = snack1Random;

  // --------------Lunch-------------
  var lunchArray = ["نص كوب من العدس الاسود المسلوق + 1 كوب رز بسمتي + 1 كوب شربة خضار + سلطة + بي 12", "نص كوب ام عين سوداء + كوب رز بسمتي + شربة خضار + سلطة + بي 12", "نص كوب حمص + كوب مكرونة باستا + شوربة خضار + سلطة + بي 12", "ا2 كوب مسقعة مشوية + 1 توست سن + سلطة + بي 12" + "طبق فول مع زيت الزيتون + سلطة + بي 12", "بطاطس متوسطة الحجم + فلفل الوان + جزر + طماطم + اعشاب وبهارات + معلقة زيت زيتون ثم وضعه بالفرن + بي 12", " ا100 جرام برغل نطبخه بالماء ومعلقة زيت زيتون + سلطة + بي 12", "https://bit.ly/38ftfqx", "https://bit.ly/2uD68Yn", "ورق عنب + سلطة + بي 12", "باميا + سلطة + بي12"];
  var lunchRandom = lunchArray[Math.floor(Math.random()*lunchArray.length)];
  document.getElementById("lunch").textContent = lunchRandom;

  // --------------Snake 2-------------
  var snack2Array = ["كوب شاي إمتنان + 2 خيار", "كوب زنجبيل إمتنان + 2 خيار", "15 حبة لوز (مرتين في الاسبوع فقط)", "حبة فواكه", "ثلاث حبات تمر", "زبيب بحجم قبضة اليد"];
  var snack2Random = snack2Array[Math.floor(Math.random()*snack2Array.length)];
  document.getElementById("snack2").textContent = snack2Random;


  // --------------Dinner-------------
  var dinnerArray = ["كوب شربة عدس + سلطة", "سلطة بالزيت الزيتون", "تبولة مع الاكثار من الخس والبقدونس والطماطم (ممكن اضافة ملعقة برغل)", "حبة فاكهة", "طبق بطيخ متوسط"];
  var dinnerRandom = dinnerArray[Math.floor(Math.random()*dinnerArray.length)];
  document.getElementById("dinner").textContent = dinnerRandom;


  for(var i=0; i<11; i++){
    document.getElementsByTagName("th")[i].style.textAlign = ("center");
  }

  for(var i=0; i<9; i++){
    document.getElementsByTagName("td")[i].style.textAlign = ("right");
  }


};
