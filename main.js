$(document).ready(function() {

//add add button section *make sure it focuses on input
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	var items = $('#shopping-list-entry').val();
	$(".shopping-list").append(
	'<li>' +
      '<span class="shopping-item">' + items + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
         	'<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>');
	$('input:text').val(''); /* removes input value after it is entered*/

});



/*check button *make sure chec22;k button toggles
on method is what makes this code work on new items added to DOM */
$( ".shopping-list" ).on( "click", '.shopping-item-controls', function() {
    $(this).siblings('.shopping-item').toggleClass('shopping-item__checked');

});


//delete button 

$( ".shopping-list" ).on( "click", '.shopping-item-delete', function() {
    $(this).closest('li').remove();

});
//Filter button
//display only checked or unchecked items
$( "#js-shopping-list-form").on("click", '#filter', function() {
  $('.shopping-item__checked').closest('li').toggle();
  //$('.shopping-list').filter('.shopping-item__checked').hide();

});
});


