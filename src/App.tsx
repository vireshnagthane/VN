import React from 'react';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
    </div>
  );
};

export default App;
