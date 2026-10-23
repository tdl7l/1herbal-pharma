import { Section } from '../components/Section';
import { companyData } from '../data/company';

export const Contact = () => (
  <div className="pt-20">
    <Section className="bg-primary text-white text-center">
      <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
      <p className="text-xl opacity-90">نسعد بتواصلكم واستفساراتكم</p>
    </Section>

    <Section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-primary">معلومات التواصل</h2>
        <ul className="space-y-5 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">📍</span>
            <div>
              <p className="font-semibold">العنوان</p>
              <p className="text-gray-600">{companyData.address}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">📞</span>
            <div>
              <p className="font-semibold">الهاتف</p>
              <p className="text-gray-600">{companyData.phones.join(' / ')}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">✉️</span>
            <div>
              <p className="font-semibold">البريد الإلكتروني</p>
              <p className="text-gray-600">{companyData.email}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary text-xl">🕒</span>
            <div>
              <p className="font-semibold">ساعات العمل</p>
              <p className="text-gray-600">{companyData.workingHours}</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-primary">موقعنا على الخريطة</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src={companyData.mapUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع هيربال فارما"
          />
        </div>
      </div>
    </Section>
  </div>
);