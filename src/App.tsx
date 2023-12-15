import './App.css';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const App = () => {
  return (
    <CacheProvider value={cache}>
      <p>App</p>
    </CacheProvider>
  )
}

export default App;
