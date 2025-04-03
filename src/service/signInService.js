export const signInService = async (credentials) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to authenticate.");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error); 
      }
  
      return data; 
    } catch (error) {
      console.error("signInService error:", error);
      return { error: error.message };
    }
  };
  