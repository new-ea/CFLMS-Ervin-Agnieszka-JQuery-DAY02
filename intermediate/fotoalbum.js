$(document).ready(function(){

	const fammembers = JSON.parse(famMembers);


		 for (var i=0; i<fammembers.length; i++) {
		 	
		 	let decription = fammembers[i].description;
		 	//let out += $('#description');

		 	let member = `<div class="memberBox Box${[i]}"> 
		 	
						 	<img src="${fammembers[i].image}">
						 	
						 	<div class="persData"> 
								<p> ${fammembers[i].firstname}  ${fammembers[i].lastname}</p>
								<p> ${fammembers[i].relation}</p>
								<p id="description${[i]}"></p>
						 	</div> 

						 	</div>`
		 	$(".wrapper").append(member);

		 	$(`.Box${[i]}`).on('click', function(){
		 		
		 		alert(`tets${[i]}`)

		 		//$(`#description${[i]}`).text("test")

		 	});

		 	 
		 };




		 for (var i=0; i<fammembers.length; i++) {
		 	if (fammembers[i].fam == true){
		 		$(`.memberBox:nth-child(${i+1})`).addClass("family");
		 	}
		 	else {
		 		$(`.memberBox:nth-child(${i+1})`).addClass("nonfamily");
		 		}
		 	}
		 

		});