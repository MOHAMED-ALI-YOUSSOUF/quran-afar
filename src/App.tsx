import  { useState } from 'react';
import { Header } from './components/Header';
// import { About } from './components/About';
import { AudioPlayer } from './components/AudioPlayer';
import { ChapterList } from './components/ChapterList';
import { Footer } from './components/Footer';
import { chapters } from './data/chapters';

function App() {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* <About /> */}
        
        <section className="py-16 px-4 bg-emerald-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
              Écoutez la traduction
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ChapterList onSelect={setSelectedChapter} />
              <div className="flex items-center justify-center">
                <AudioPlayer
                  src={selectedChapter.audioUrl}
                  title={`${selectedChapter.number}. ${selectedChapter.name}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;