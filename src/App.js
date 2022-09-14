import { CVProvider } from './contexts/CVContext';

import Header from './components/core/Header';
import Main from './components/Main';
import Footer from './components/core/Footer';

const App = () => {
  return (
    <CVProvider>
      <Header />
      <Main />
      <Footer />
    </CVProvider>
  );
};

export default App;
