$(function() {

  var thisclient;
  var thatclient;
  
  /** if you do not specify the port here, this will try to use the
      client port and communication with the server may fail */
  /** var server_uri = 'http://maucomm.herokuapp.com:80/maucomm';*/
  var server_uri = FAYE_SERVER_URL;
  var subscription;

  var client = new Faye.Client(server_uri);
  /* heroku doesn't like websocket */
  client.disable('websocket');

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
      $('#messages li').removeClass('new');
      var safemsg = msg.text || msg;
      $('#messages').prepend($('<li class="new">').html(safemsg));
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
