# Task Manager App with API Integration


## Features

✅ **Local Task Management**
- Add, complete, and delete tasks
- Filter tasks (All/Active/Completed)
- Persistent storage using localStorage
- Task count statistics

🌐 **API Integration**
- Fetch posts from JSONPlaceholder
- Search functionality
- Pagination controls
- Loading states
- Error handling

🎨 **Modern UI**
- Dark/light mode toggle
- Fully responsive (mobile, tablet, desktop)
- Interactive animations
- Custom icons
- Tailwind CSS styling

## Technologies Used

- React 17
- Vite 2
- Tailwind CSS 3
- React Router 5
- Heroicons (for icons)
- Axios (for API calls)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kipngetich-lab/week-3-assignment-react-js.git
```
cd task-manager-app


2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open in your browser:
```
http://localhost:3000
```

## Project Structure
```
src/
├── components/
│   ├── Button.jsx       # Reusable button component
│   ├── Card.jsx        # Card layout component
│   ├── Footer.jsx      # App footer
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation bar
│   └── TaskManager/    # Task management components
│       ├── Task.jsx
│       ├── TaskForm.jsx
│       └── TaskList.jsx
├── hooks/
│   ├── useDebounce.js  # Debounce hook for search
│   └── useLocalStorage.js # Local storage hook
├── pages/
│   ├── Home.jsx        # Main page with task manager
│   ├── About.jsx       # About page
│   └── Posts.jsx       # API integration demo
├── utils/
│   └── api.js          # API service functions
└── App.jsx             # Main app component
```

## API Integration

The app integrates with JSONPlaceholder API:

// Example API call
```
const fetchPosts = async (page = 1, limit = 10) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  return response.data;
};
```

## Available Endpoints

   - GET /posts - Fetch all posts

   - GET /posts/{id} - Fetch single post

   - GET /posts?_page=1&_limit=10 - Paginated posts
 
# Responsive Design

The app is fully responsive across all devices:

📱 Mobile ( <640px)

  - Single column layout

  - Stacked form elements

  - Compact spacing

🖥️ Tablet (640px-1023px)

  - Two-column grid for posts

  - Adjusted padding and margins

  - Medium-sized text

💻 Desktop ( ≥1024px)

  - Three-column grid for posts

  - Full navigation bar

  - Optimal reading widths
  
# Available Scripts

    - npm run dev - Start development server

    - npm run build - Build for production

    - npm run serve - Preview production build

    - npm run lint - Run ESLint
	
# Customization

## Environment Variables

Create .env file:

VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
VITE_POSTS_PER_PAGE=10

## Theme Colors

Edit tailwind.config.js:
```
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB'
        }
      }
    }
  }
}
```

## License

MIT License

## Support

For issues or questions, please open an issue.

