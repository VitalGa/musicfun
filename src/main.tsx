import { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SideBarMenu } from './components/SideBarMenu';
import { TracksList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';
import { PegeTitle } from './components/PegeTitle';
// import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(<MainPage />);

function MainPage() {
  return (
    <div>
      <Header />
      <SideBarMenu />
      <div style={{ display: 'flex', gap: '60px' }}>
        <TracksList />
        <TrackDetail />
      </div>

      <PegeTitle />
      <Footer />
    </div>
  );
}
