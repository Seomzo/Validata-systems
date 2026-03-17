import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src={logo} alt="Validata Systems" className="h-12 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Applied AI systems for automotive compliance and validation.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/claimscanner" className="text-sm text-gray-600 hover:text-gray-900">
                  ClaimScanner.ai
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm text-gray-600 hover:text-gray-900">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-gray-600 hover:text-gray-900">
                  Security
                </Link>
              </li>
              <li>
                <a href="mailto:Omar@validatasystems.com" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Validata Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}