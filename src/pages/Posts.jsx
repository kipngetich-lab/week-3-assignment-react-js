import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../utils/api';
import Card from '../components/Card';
import Button from '../components/Button';
import PostList from '../components/Posts/PostList';
import useDebounce  from '../hooks/useDebounce';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, totalPages } = await fetchPosts(page, 6, debouncedSearchQuery);
      setPosts(data);
      setTotalPages(totalPages);
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [page, debouncedSearchQuery]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="mb-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Posts from API</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1); // Reset to first page when searching
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                ✕
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="secondary" 
              onClick={handlePrevious}
              disabled={page === 1 || loading}
            >
              Previous
            </Button>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md">
              Page {page} of {totalPages}
            </span>
            <Button 
              variant="secondary" 
              onClick={handleNext}
              disabled={page === totalPages || loading}
            >
              Next
            </Button>
          </div>
        </div>
        
        <PostList posts={posts} loading={loading} error={error} />
      </Card>
    </div>
  );
};

export default Posts;