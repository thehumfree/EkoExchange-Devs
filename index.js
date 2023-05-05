
        const btn1 = document.getElementById("btn1");
		const btn2 = document.getElementById("btn2");
		const popup1 = document.getElementById("popup1");
		const popup2 = document.getElementById("popup2");

		btn1.addEventListener("click", function() {
			btn1.classList.add("active");
			btn2.classList.remove("active");
			btn1.classList.remove("buybtn");
            btn2.classList.add("sellbtn");
			popup1.classList.add("active");
			popup2.classList.remove("active");
		});

		btn2.addEventListener("click", function() {
			btn2.classList.add("active");
			btn1.classList.remove("active");
			btn2.classList.remove("sellbtn");
            btn1.classList.add("buybtn");
			popup2.classList.add("active");
			popup1.classList.remove("active");
		});

  
		const form = document.getElementById("myform");
		const checkbox = document.getElementById("checkbox");
		const submitBtn = document.getElementById("submit-btn");
		 
		submitBtn.Disabled = true;

		checkbox.addEventListener("change", function(){
           if(checkbox.checked){
			submitBtn.disabled = false;
			console.log("Checkbox is checked, enabling submit button.");
		   } else{
			submitBtn.disabled = true;
			console.log("Checkbox is not checked, disabling submit button.");
		   }
		 
		});

		form.addEventListener("submit", function(event) {
			if (!checkbox.checked) {
				event.preventDefault();
				console.log("Form submission prevented due to checkbox not being checked.");
				alert("Please agree to the terms and conditions before submitting.");
			  }
			  else {
				console.log("Form submitted successfully.");
			  }
			});