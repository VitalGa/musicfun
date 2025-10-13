import { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SideBarMenu } from './components/SideBarMenu';
import { TrackList } from './components/TracksList';
import { TrackDetail } from './components/TrackDetail';
import { PageTitle } from './components/PegeTitle';

createRoot(document.getElementById('root')!).render(<MainPage />);

function MainPage() {
  return (
    <div>
      <Header />
      <SideBarMenu />
      <PageTitle />
      <div style={{ display: 'flex', gap: '60px' }}>
        <TrackList />
        <TrackDetail />
      </div>
      <Footer />
    </div>
  );
}
