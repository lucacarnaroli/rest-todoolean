
$(document).ready(function() {
  getAll();
  $('#button').click(function() {
    var text = $('#input').val();
    $.ajax({
      url: 'http://157.230.17.132:3000/todos',
      method: 'POST',
      data: {
        text: text,
      },
      success: function(data) {
        $('.lista').html('');
        getAll();
      },
      error: function(error) {
        alert('error');
      }
    })
  })
});


function getAll() {
  $.ajax({
    url: 'http://157.230.17.132:3000/todos',
    method: 'GET',
    success: function(data) {
      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);

      for (var i = 0; i < data.length; i++) {
        var elemento = data[i];
        console.log(elemento);
        var context = {
        text: elemento.text,
        };
        var html = template(context);
        $('.lista').append(html);
      }
    },
    error: function(error) {
      alert('error');
    }
  })
}
