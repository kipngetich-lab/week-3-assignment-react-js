import React from 'react';
import Card from '../Card';

const PostList = ({ posts, loading, error }) => {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="text-center py-8 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white line-clamp-1">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {post.body}
          </p>
          <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm text-blue-600 dark:text-blue-400">
              Post ID: {post.id}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PostList;