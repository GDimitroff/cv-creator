import { CVContextProvider } from './contexts/cv-context';

import Header from './components/core/Header';
import Main from './components/Main';
import Footer from './components/core/Footer';

function App() {
  return (
    <CVContextProvider>
      <Header />
      <Main />
      <Footer />
    </CVContextProvider>
  );
}

export default App;
