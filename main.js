$(document).ready(function(){

//add add button section *make sure it focuses on input
$('#js-shopping-list-form').submit(function(event){
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



//check button *make sure check button toggles







//delete button 










//use eventDelegation
//
});


