
const API_URL = "http://96.9.81.187:8080/api/v1/workspaces";
const getAllWorkspaces = async (pageNo = 0, pageSize = 10, sortBy = "workspaceId", sortDirection = "ASC") => {
  try {
    const url = new URL(API_URL);
    const params = { pageNo, pageSize, sortBy, sortDirection };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch workspaces");

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    throw error;
  }
};

export default getAllWorkspaces;
