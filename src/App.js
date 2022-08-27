import Header from './components/core/Header';
import Footer from './components/core/Footer';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <CVForm />
        <CVPreview />
      </main>
      <Footer />
    </>
  );
}

export default App;
