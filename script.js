document.getElementById("buyForm").onsubmit = function(e){
  e.preventDefault();
  alert("تم إرسال طلب الشراء — سنقوم بالتواصل معك عبر واتساب قريبًا.");
};

document.getElementById("sellForm").onsubmit = function(e){
  e.preventDefault();
  alert("تم إرسال طلب البيع — سنقوم بالتواصل معك قريبًا.");
};

document.getElementById("complaintForm").onsubmit = function(e){
  e.preventDefault();
  alert("تم تسجيل الشكوى — سيتم مراجعتها خلال وقت قصير.");
};

// تحديث الأسعار يدويًا
function updatePrices(){
  document.getElementById("btcPrice").innerText = "يتم التحديث يدويًا";
  document.getElementById("ethPrice").innerText = "يتم التحديث يدويًا";}