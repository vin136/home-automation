$(document).ready(function() {
  var client = mqtt.connect("wss://iot.eclipse.org:443/ws")
  client.subscribe({'nodemcu/relay1': 1, 'nodemcu/relay2': 1, 'nodemcu/relay3': 1, 'nodemcu/relay4': 1})

  client.on("message", function (topic, payload) {
    if(topic == "nodemcu/relay1") {
      if(payload == "on") {
        $(".button1").text("ON");
        $('.button1').css({"background-color":"#4caf50"});
      } else if(payload == "off") {
        $(".button1").text("OFF");
        $('.button1').css({"background-color":"#f44336"});
      }
    } else if(topic == "nodemcu/relay2") {
      if(payload == "on") {
        $(".button2").text("ON");
        $('.button2').css({"background-color":"#4caf50"});
      } else if(payload == "off") {
        $(".button2").text("OFF");
        $('.button2').css({"background-color":"#f44336"});
      }
    } else if(topic == "nodemcu/relay3") {
      if(payload == "on") {
        $(".button3").text("ON");
        $('.button3').css({"background-color":"#4caf50"});
      } else if(payload == "off") {
        $(".button3").text("OFF");
        $('.button3').css({"background-color":"#f44336"});
      }
    } else if(topic == "nodemcu/relay4") {
      if(payload == "on") {
        $(".button4").text("ON");
        $('.button4').css({"background-color":"#4caf50"});
      } else if(payload == "off") {
        $(".button4").text("OFF");
        $('.button4').css({"background-color":"#f44336"});
      }
    }
  })



  $(".button1").click(function(){
    if($('.button1').text() == "ON") {
      client.publish("nodemcu/relay1", "off", {
        qos: 1,
        retain: true
      })
    } else if($('.button1').text() == "OFF") {
      client.publish("nodemcu/relay1", "on", {
        qos: 1,
        retain: true
      })
    }
  });

  $(".button2").click(function(){
    if($('.button2').text() == "ON") {
      client.publish("nodemcu/relay2", "off", {
        qos: 1,
        retain: true
      })
    } else if($('.button2').text() == "OFF") {
      client.publish("nodemcu/relay2", "on", {
        qos: 1,
        retain: true
      })
    }
  });

  $(".button3").click(function(){
    if($('.button3').text() == "ON") {
      client.publish("nodemcu/relay3", "off", {
        qos: 1,
        retain: true
      })
    } else if($('.button3').text() == "OFF") {
      client.publish("nodemcu/relay3", "on", {
        qos: 1,
        retain: true
      })
    }
  });

  $(".button4").click(function(){
    if($('.button4').text() == "ON") {
      client.publish("nodemcu/relay4", "off", {
        qos: 1,
        retain: true
      })
    } else if($('.button4').text() == "OFF") {
      client.publish("nodemcu/relay4", "on", {
        qos: 1,
        retain: true
      })
    }
  });

})