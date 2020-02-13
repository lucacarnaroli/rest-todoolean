
$(document).ready(function() {
  getAll();
  $('#button').click(function() {
    var text = $('#input').val();
    // CRUD- CREATE
    $.ajax({
      url: 'http://157.230.17.132:3007/todos',
      method: 'POST',
      data: {
        text: text,
      },
      success: function(data) {
        console.log('invio effettuato');
        $('.lista').html('');
        $('#input').val('');
        getAll();
      },
      error: function(error) {
        alert('error');
      }
    })
  });
  $('#input').keypress(function() {
    if (event.which == 13) {
      var text = $('#input').val();
      $.ajax({
        url: 'http://157.230.17.132:3007/todos',
        method: 'POST',
        data: {
          text: text,
        },
        success: function(data) {
          console.log('invio effettuato');
          $('.lista').html('');
          $('#input').val('');
          getAll();
        },
        error: function(error) {
          alert('error');
        }
      })
    }
  })
  $(document).on('click','.box-elim',function() {
    var elimButton = $(this);
    var idList = elimButton.parent().attr('attr-id');

    getDelete(idList);
  }
  );
  // $(document).on('click','.input-up', function() {
  //   $(this).val('');
  //
  // })
});

// ----------------------------------
// CRUD - READE
function getAll() {
  $.ajax({
    url: 'http://157.230.17.132:3007/todos',
    method: 'GET',
    success: function(data) {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

      for (var i = 0; i < data.length; i++) {
        var elemento = data[i];
        // console.log(elemento);
        var context = {
        text: elemento.text,
        id : elemento.id,
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

function getDelete(id) {
  $.ajax({
    url: 'http://157.230.17.132:3007/todos/'+ id,
    method: 'DELETE',
    data: {
      id: id,
    },
    success: function(data) {
      console.log('delete');
      $('.lista').html('');
      getAll();
    },
    error: function(error) {
      alert('error');
    }
  })
}

// function getUpdate(id,newText) {
//   $.ajax({
//     url: 'http://157.230.17.132:3007/todos/'+ id,
//     method: 'PUT',
//     data: {
//       text: newText,
//     },
//     success: function(data) {
//       console.log('aggiornato');
//       c
//       getAll();
//       for (var i = 0; i < data.length; i++) {
//         var newText = data[i];
//         console.log(newText);
//       }
//
//     },
//     error: function(error) {
//       alert('error');
//     }
//   })
// }
