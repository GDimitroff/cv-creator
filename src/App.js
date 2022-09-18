import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CVProvider } from './contexts/CVContext';

import Header from './components/core/Header';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';
import Footer from './components/core/Footer';
import classes from './App.module.css';

const App = () => {
  const previewRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
  });

  return (
    <CVProvider>
      <Header onPrint={handlePrint} />
      <main className={classes.main}>
        <CVForm />
        <CVPreview ref={previewRef} />
      </main>
      <Footer />
    </CVProvider>
  );
};

export default App;
