$(document).ready(function() {

	$("#blogForm").submit(event => {
		event.preventDefault();

		var form = event.target;
		var url = form.action;

		var formData = $(form).serialize();

		var title = $(form).find("input[name=title]");
        var content = $(form).find("textarea[name=content]");

		var requestData = {
		    title: title.val(),
		    content:content.val()
		};

		$.post('/create', requestData, function(response){
			console.log( 'this is my message',response);

			for (let i = 0; i < response.length; i++){

				$("#message")
					.append("<p>"+response[i].title+"<p>")
					.append("<p>"+response[i].content+"<p>");
			}
		});
	});
});
