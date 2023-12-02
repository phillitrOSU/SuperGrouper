async function login() {
    try {
        const response = await fetch(
            `https://authentication-microservice-production-a9ec.up.railway.app/signup`,
            {
              method: "POST",
              body: JSON.stringify({
                email: "joepazos@gmail.com",
                password: "password123",
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
        if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
        }
      
        const data = await response.json();
        console.log("Signup Success:", data);
    } catch (error) {
      console.error("Signup Failed:", error.message);
    }
}

