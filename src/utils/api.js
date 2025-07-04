import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10, searchQuery = '') => {
  try {
    // First, fetch all posts and filter client-side for search
    // (Note: In a real app, you'd want server-side search)
    const response = await axios.get(`${API_BASE_URL}/posts`);
    
    // Filter posts based on search query
    let filteredPosts = response.data;
    if (searchQuery) {
      filteredPosts = response.data.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Implement pagination
    const startIndex = (page - 1) * limit;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + limit);
    
    return {
      data: paginatedPosts,
      total: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / limit),
      currentPage: page
    };
  } catch (error) {
    throw error;
  }
};