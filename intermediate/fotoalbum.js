$(document).ready(function(){

	const fammembers = JSON.parse(famMembers);
	
		 for (var i=0; i<fammembers.length; i++) {
		 	
		 	let description = fammembers[i].description;
			
		 	let member = `<div class="memberBox"> 
		 	
						 	<img src="${fammembers[i].image}">
						 	
						 	<div class="persData"> 
								<p> ${fammembers[i].firstname}  ${fammembers[i].lastname}</p>
								<p> ${fammembers[i].relation}</p>
							 </div> 
							 
							 <p class="description">${description}</p>

						 	</div>`
			 $(".wrapper").append(member);	
			
		 };

		 var members = $(".memberBox"); 

		 for ( let i = 0; i < members.length; i++) {
			$(members[i]).on("click" , function(){
				$(this).find(".description").css("display","block");
				$(this).find(".description").text(fammembers[i].description);
				
			})
		 }
		//  console.log(members);
		 
			

		 for (var i=0; i<fammembers.length; i++) {
		 	if (fammembers[i].fam == true){
		 		$(`.memberBox:nth-child(${i+1})`).addClass("family");
		 	}
		 	else {
		 		$(`.memberBox:nth-child(${i+1})`).addClass("nonfamily");
		 		}
		 	}
		 

		});