import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>          
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
