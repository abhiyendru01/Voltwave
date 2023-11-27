function validate()
		{   var name=document.f.name.value;
		    var password=document.f.pass.value;
		 if(name==null || name=="")
			
			{
				alert("Name can't be blank");
		   		  return false;
			}
		if(password.length<6)
			{
			alert("password must be atleast 6 digits");
				return false;
			 }
			 if(name=="Aman")
			
			 {
      Swal.fire({
        title: "Sorry",
        text: "We don't give electricity to people named aman",
		text:"we hate amans",
        icon: "sad"
      });
    }
}