const API_URL = 'http://96.9.81.187:8080/api/v1/user';

export const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No token found. Please login again.');
    }

    const response = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    
    // Extract payload from the response
    return data.payload;  
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
