//Script for Form Validation-------------
    
    //To get data
	const firstName=document.querySelector("#fname");
    const lastName=document.querySelector("#lname");
    const Email=document.querySelector("#email");
    const message=document.querySelector("#message");
    const Errornodes=document.querySelectorAll(".error");
    const success=document.querySelector("#success");

    //To validate data
    function validateform()
    {
        clearMessages();
        let errorflag= false;
        if(firstName.value.length < 1)
        {
            Errornodes[0].innerText = "first name cannot be blank.";
            errorflag= true;
            
        }
        if(lastName.value.length < 1)
        {
            Errornodes[1].innerText = "last name cannot be blank.";
            errorflag= true;
            
        }
        if(!emailIsValid(email.value))
        {
            Errornodes[2].innerText="Invalid email address.";
            errorflag= true;
        }
        if(message.value.length < 1)
        {
            Errornodes[3].innerText = "Please type your message.";
            errorflag= true;
            
        }
        if(!errorflag)
        {
            success.innerText = "Message Sent!";
        }
    }
    //clear error and success messages.
    function clearMessages()
    {
        for(let i=0 ; i < Errornodes.length; i++)
        {
            Errornodes[i].innerText="";
            success.innerText="";
        }
    }
    //validity of email.
    function emailIsValid(email)
    {
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email); 
    }