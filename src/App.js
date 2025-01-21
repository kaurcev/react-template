import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import E404View from './views/notFound/view';
import HomeView from './views/home/view';
import PrivacyView from './views/privacy/view';
import TermOfUseView from './views/termofuse/view';
import CookiesView from './views/cookies/view';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomeView />} />
        <Route path='/privacy' element={<PrivacyView />} />
        <Route path='/termsofuse' element={<TermOfUseView />} />
        <Route path='/cookies' element={<CookiesView />} />
        <Route path='*' status="404" element={<E404View />} />
      </Routes>
   </Router>
  );
}

export default App;
