//Instantiate an empty object
var Instagram = {};

// Object to hold configure data
Instagram.config = {
	ClientId = '',
	apiHost: 'https://api.instagram.com'	
};

(function(){
	var photoTemplate, resource;
	
	function init(){
		bindEventHandlers();
		photoTemplate = _.template($('#photo-template').html());
	}
	
	function toTemplate(photo){
		photo = {
			
		}
	}
}());
