import { Link } from 'react-router-dom';
import { Section } from '../components/Section';

export const Home = () => {
  const categories = [
    { title: 'أدوية بشرية', desc: 'علاجات متطورة لضمان صحة أفضل', icon: '💊' },
    { title: 'مستحضرات طبية', desc: 'منتجات طبية متخصصة وعالية الجودة', icon: '🧪' },
    { title: 'مستحضرات تجميل', desc: 'عناية طبيعية تبرز جمالك', icon: '✨' },
  ];

  return (
    <>
      <Section className="pt-32 bg-gradient-to-b from-green-50 to-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          طبيعة نقية.. <span className="text-primary">صحة مستدامة</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          نحن في هيربال فارما نجمع بين العلم والطبيعة لنقدم لكم أجود المنتجات الدوائية والتجميلية في قلب صنعاء.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/products" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all">
            تصفح المنتجات
          </Link>
          <Link to="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
            اتصل بنا
          </Link>
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار هيربال فارما؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'جودة عالمية', text: 'نتبع أعلى المعايير الدولية في تصنيع واختيار موادنا.' },
            { title: 'مكونات طبيعية', text: 'نركز على استخلاص فوائد الطبيعة بأحدث التقنيات.' },
            { title: 'خبرة محلية', text: 'نفهم احتياجات السوق اليمني ونقدم حلولاً مخصصة.' },
          ].map((feat, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-gray-600">{feat.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-green-50">
        <h2 className="text-3xl font-bold text-center mb-12">أقسامنا الرئيسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center border-b-4 border-primary">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-gray-600 mb-4">{cat.desc}</p>
              <Link to="/products" className="text-primary font-semibold hover:underline">
                عرض المزيد ←
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};