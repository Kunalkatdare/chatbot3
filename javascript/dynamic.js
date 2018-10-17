function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time) {
  if (time === undefined) {
    time = 0;
  }
  var control = "";
  var date = formatAMPM(new Date());

  if (who == "me") {
    control =
      '<li style="width:100%">' +
      '<div class="msj macro">' +
      '<div class="avatar"><img class="img-circle" style="width:100%;" src="' +
      me.avatar +
      '" /></div>' +
      '<div class="text text-l">' +
      "<p>" +
      text +
      "</p>" +
      "<p><small>" +
      date +
      "</small></p>" +
      "</div>" +
      "</div>" +
      "</li>";
    body = buildChatMessage(text, date);
  } else {
    control =
      '<li style="width:100%;">' +
      '<div class="msj-rta macro">' +
      '<div class="text text-r">' +
      "<p>" +
      text +
      "</p>" +
      "<p><small>" +
      date +
      "</small></p>" +
      "</div>" +
      '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="' +
      you.avatar +
      '" /></div>' +
      "</li>";
    body = "";
  }

  setTimeout(function() {
    $("ul")
      .append(control)
      .scrollTop($("ul").prop("scrollHeight"));
  }, 100);
  return body;
}

//-- To send to the server

function buildChatMessage(text, date) {
  //Used fot every messageÏ
  var unstructured = {
    id: "string",
    text: text,
    timestamp: date
  };

  var message = {
    type: "string",
    unstructured: unstructured
  };

  var messages = [];

  messages.push(message);

  var requestBody = {
    messages: messages
  };

  console.log(JSON.stringify(requestBody));

  return requestBody;
}
