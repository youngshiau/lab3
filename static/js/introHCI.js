'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var buttonText = ["Experience Chan! It's not a lot of questions.",
					  "Too many questions is the Chan disease.",
					  "The best way is just to observe the noise of the world.",
					  "The answer to your questions?",
					  "Ask your own heart.",
					  "Test Javascript"];
	
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		
		var rand = Math.floor(Math.random() * buttonText.length);
		console.log(rand);
		$(this).text(buttonText[rand]);
		$(this).addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	
	$("#submitBtn").click(function() {
		var width = $("#width").val();
		var text = $("#description").val();
		var project = $("#project").val();
		
		var description = $(project).find(".project-description");
	    if (description.length == 0) {
	       $(project).append("<div class='project-description'><p>Description of the project.</p></div>");
	       description = $(project).find(".project-description");
	       $(project + " .project-description").hide();
	    }
		
		$(project).width(width);
		$(project + " .project-description").text(text);
	});
}

function projectClick(e) {
	console.log("projectClick");
	
	// prevents the project page from reloading
	e.preventDefault();
	
	// in an event handler, $(this) refers to
    // the object that triggered the event
	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    
    var containingProject = $(this).closest(".project");

    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {

       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");

    } else {

       description.slideToggle();
    }
}