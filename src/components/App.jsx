import React from 'react';
import Navbar from './Navbar';
import UserMeta from './UserMeta';
import TrendingFeed from './TrendingFeed';
import NewsFeed from './NewsFeed';
import FollowSuggestions from './FollowSuggestions';

function App(){

  return (
    <div>
      <style jsx global>{`
          body {
            font-family: roboto, sans-serif;
          }
        `}</style>
      <Navbar />
      <UserMeta />
      <TrendingFeed />
      <NewsFeed />
      <FollowSuggestions />
    </div>
  );
}

export default App;
