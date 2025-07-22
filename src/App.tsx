import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import DiscoverPage from './pages/DiscoverPage';
import ChatPage from './pages/ChatPage';
import SearchPage from './pages/SearchPage';
import ConfessionPage from './pages/ConfessionPage';
import LikesPage from './pages/LikesPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './contexts/AuthContext';
import { ChatProvider } from './contexts/ChatContext';
import { useLenis } from './hooks/useLenis';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <AuthProvider>
      <ChatProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {isAuthenticated ? (
              <>
                <Navigation />
                <main className="pb-20">
                  <Routes>
                    <Route path="/" element={<DiscoverPage />} />
                    <Route path="/discover" element={<DiscoverPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/confessions" element={<ConfessionPage />} />
                    <Route path="/likes" element={<LikesPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </main>
              </>
            ) : (
              <Routes>
                <Route path="/" element={<LandingPage onGetStarted={() => setIsAuthenticated(true)} />} />
                <Route path="/auth" element={<AuthPage onAuth={() => setIsAuthenticated(true)} />} />
              </Routes>
            )}
          </div>
        </Router>
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;