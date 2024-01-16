import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => {
      switch (prevTheme) {
        case 'dark':
          return 'light';
        case 'light':
          return 'terminal';
        case 'terminal':
          return 'cyber';
        case 'cyber':
          return 'historic';
        case 'historic':
          return 'dark';
        default:
          return 'dark';
      }
    });
  };

  return (
    <div className={`w-screen h-screen ${theme} bg-brand`}>
      <div className='py-8 px-16'>
        <h1 className="text-5xl font-bold underline text-primary">
          Theme Switcher
        </h1>
        <h3 className="text-2xl font-semibold text-secondary my-3">
          Welcome to the theme switcher! Current theme is <span className='text-title'>{theme}</span>.
        </h3>
        <button onClick={toggleTheme} className="mt-4 p-2 bg-blue-500 text-white">
          Toggle Theme
        </button>
      </div>
      
    </div>
  )
}