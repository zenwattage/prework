// when the button is clicked..
$("#factButton").on("click", function() {
	// generate a number between 0-4
	var number = Math.floor((Math.random() * booFacts.length));
	// display the fact from the catfact array
	$("#factText").text(booFacts[number])
})

// this array holds all the Boo facts..
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16", "making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

// when pink is pressed..
$("#textPink").on("click", function() {
	// change funtext to pink
	$("#funText").css("color", "pink")
})

// when orange is pressed...
$("#textOrange").on("click", function() {
	// change funtext to orange
	$("#funText").css("color", "orange")
})

// when green is pressed...
$("#textGreen").on("click", function() {
	// change funtext to green
	$("#funText").css("color", "green")
})


// when the grow button is clicked...
$("#boxGrow").on("click", function() {
	// increase the size of the box
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// when the boxshrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})