var selectTop = "/select/";
var maxCommand = 8;

var fillSlot = function(){
  var slots = fetchSlotsByLocalStorage();
  console.log(slots);
  for(var i = 0; i < maxCommand; i++){
    var slotId = "#slot" + i.toString();
    if(slots[i] != null){
      $(slotId).html("<h1>" + slots[i]  + "</h1>");
    }
  }
}

var fetchSlotsByLocalStorage = function(){
  var slots = {};

  var serializedSlots = localStorage.getItem("slots");

  if(serializedSlots != null){
    slots = JSON.parse(serializedSlots);
  }

  return slots;
}

var selectSlot = function(selectedSlot){
  localStorage.setItem("selectedSlot", selectedSlot);
};

$(".slot").click(function(e){
  var selectedSlot = e.target.dataset.sid;
  localStorage.setItem("selectedSlot", selectedSlot);
});

$(".command").click(function(e){
  var selectedSlot = localStorage.getItem("selectedSlot");
  var selectedText = e.target.innerText;
  localStorage.setItem("selectedSlot", selectedSlot);

  var slots = fetchSlotsByLocalStorage();
  
  slots[selectedSlot] = selectedText;
  localStorage.setItem("slots", JSON.stringify(slots));

  window.location.href = selectTop;
});

localStorage.setItem("selectedSlot", null);
fillSlot();

