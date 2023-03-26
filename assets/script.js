
$(function () {
    // Save button click event
    var saveBtns = $(".saveBtn");

    saveBtns.on("click", function() {
      var timeBlock = $(this).parent();
      var timeBlockHour = timeBlock.attr("id");
      var textArea = timeBlock.find(".description");
      var text = textArea.val();
      localStorage.setItem(timeBlockHour, text);
    });

  // Time block class change
  var currentHour = dayjs().hour();
  var timeBlocks = $(".time-block");
  timeBlocks.each(function() {
  var timeBlockHour = parseInt($(this).attr("id"));
    if (currentHour > timeBlockHour) {
      $(this).addClass("past").removeClass("present future");
    } else if (currentHour < timeBlockHour) {
      $(this).addClass("future").removeClass("present past");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });

  // Retrieve Local Storage Data
  function loadSavedData() {
    var timeBlocks = $(".time-block");
    timeBlocks.each(function() {
      var timeBlockHour = $(this).attr("id");
      var savedText = localStorage.getItem(timeBlockHour);
      if (savedText) {
        $(this).find(".description").val(savedText);
      }
    });
  }
  loadSavedData();

  //Current tiime
  function updateTime() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM D, YYYY, HH:mm:ss"));
  }
  setInterval(updateTime, 1000);  
});