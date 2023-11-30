let loginForm = document.getElementById("login-form");

//On Submit...
loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    //Create JSON object of username and password from form data.
    var formData = new FormData(e.target);
    formObject = Object.fromEntries(formData);
    loginJSON = JSON.stringify(formObject);

    console.log(loginJSON);

    // Connect with microservice.
    const loginResponse = await fetch(
        `https://authentication-microservice-production-a9ec.up.railway.app/signup`,
        {
          method: "POST",
          body: loginJSON,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
});
      
/**
      //If request failed, log error.
      if (!loginResponse.ok) {
        const { message } = await loginResponse.json();
        throw new Error(message);
      }

      // If success, record token.
      const { token } = await loginResponse.json();


      // Submit token to microservice.
      const authenticationResponse = await fetch(
        `https://authentication-microservice-production-a9ec.up.railway.app/authenticate`,
        {
          method: "POST",
          body: JSON.stringify({
            token: token,
          }),
        }
      );
      
      //If request fails, log error.
      if (!authenticationResponse.ok) {
        const { message } = await authenticationResponse.json();
        throw new Error(message);
      }
      
      //Otherwise record user.
      const { user } = await authenticationResponse.json();
  });
 */

