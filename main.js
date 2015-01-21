$(document).on('ready', function() {
  var field, fields = {
      name: 'Name: ',
      bio: 'Bio: ',
      books: 'Favorite Books: ',
      libraries: 'Favorite JavaScript Libraries: '
    };
  $('.edit-details').on('submit', function(e){
    for (field in fields) {
      $('.user-' + field).text(fields[field] + $('.edit-' + field).val());
    }
    return false;
  });
});
