import { Link } from 'react-router-dom';
import { companyData } from '../data/company';

export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24 font-cairo">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-primary-light">{companyData.name}</h3>
        <p className="text-gray-400 leading-relaxed">
          رواد في تقديم الحلول الدوائية الطبيعية والعلمية في اليمن، نلتزم بالجودة والتميز في كل منتج نقدمه.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-primary-light">روابط سريعة</h3>
        <ul className="space-y-2 text-gray-400">
          <li><Link to="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">من نحن</Link></li>
          <li><Link to="/products" className="hover:text-white transition-colors">المنتجات</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">اتصل بنا</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-primary-light">معلومات التواصل</h3>
        <ul className="space-y-2 text-gray-400">
          <li>{companyData.address}</li>
          <li>{companyData.phones.join(' / ')}</li>
          <li>{companyData.email}</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} {companyData.name}. جميع الحقوق محفوظة.
    </div>
  </footer>
);