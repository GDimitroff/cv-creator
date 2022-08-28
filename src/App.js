import Header from './components/core/Header';
import Main from './components/Main';
import Footer from './components/core/Footer';
import { CVContextProvider } from './store/cv-context';

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
