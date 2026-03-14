import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/layout/Navigation';
import { Footer } from '@/app/components/layout/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ProductsPage } from '@/app/pages/ProductsPage';
import { ClaimScannerPage } from '@/app/pages/ClaimScannerPage';
import { TechnologyPage } from '@/app/pages/TechnologyPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { SecurityPage } from '@/app/pages/SecurityPage';
import { ContactPage } from '@/app/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/claimscanner" element={<ClaimScannerPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
