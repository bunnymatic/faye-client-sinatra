$(function() {

  var thisclient;
  var thatclient;
  var subscription;
  
  var client = new Faye.Client("http://localhost:5000/maucomm");

  $('#publish').bind('submit', function() {
    var msg = $(this).find('input#message').val();
    if (msg) {
      client.publish('/' + thisclient, {text:msg});
    }
    return false;
  });

  var subscribe = function(channel) {
    if(subscription) {
      subscription.cancel();
    }
    subscription = client.subscribe('/'+channel,  function(msg) {
      $('#messages').prepend($('<li>').html(msg.text));
    });
    subscription.callback(function() {
      alert('You\'re now listenin to ' + channel);
    });
  };

  $('#clientsetup select').bind('change', function() {
    var clients = $('select option').each(function() {
      if ($(this).is(':checked')) {
        thisclient = this.value;
      } else {
        thatclient = this.value;
      }
      console.log('this/that : ', thisclient, thatclient);
    });
    subscribe(thatclient);
  });            

  var clients = $('select option');
  thisclient = clients[0].value;
  thatclient = clients[1].value;
  subscribe(thatclient);


});
