import React from 'react';
import { Header } from './components/layout/Header';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200 w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full">
        <Home />
      </main>
    </div>
  );
};

export default App;
