$(document).on('ready', function() {
  var field, fields = {
      name: 'Name: ',
      bio: 'Bio: ',
      books: 'Favorite Books: ',
      libraries: 'Favorite JavaScript Libraries: '
    };
  var $form = $('.edit-details'),
      $showButton = $('.show-edit');

  var toggleVision = function(){
    $form.toggleClass('hidden');
    $showButton.toggleClass('hide-edit');
  };

  $form.on('submit', function(){
    for (field in fields) {
      $('.user-' + field).text(fields[field] + $('.edit-' + field).val());
    }
    toggleVision();
    return false;
  });

  $showButton.on('click', function(){
    toggleVision();
  });
});
