import { Section } from '../components/Section';

export const Products = () => {
  const sections = [
    {
      title: "أدوية بشرية",
      items: ["مكملات غذائية", "أدوية عشبية", "مقويات عامة", "علاجات طبيعية"],
      color: "bg-green-100"
    },
    {
      title: "مستحضرات طبية",
      items: ["معقمات", "كريمات علاجية", "زيوت طبية", "مراهم طبيعية"],
      color: "bg-blue-100"
    },
    {
      title: "مستحضرات تجميل",
      items: ["كريمات تفتيح", "زيوت للشعر", "منتجات العناية بالبشرة", "صابون طبيعي"],
      color: "bg-pink-100"
    }
  ];

  return (
    <div className="pt-20">
      <Section className="bg-primary text-white text-center">
        <h1 className="text-4xl font-bold mb-4">منتجاتنا</h1>
        <p className="text-xl opacity-90">جودة تلامس حياتكم وصحتكم</p>
      </Section>

      <Section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((sec, i) => (
          <div key={i} className={`p-8 rounded-3xl ${sec.color} border border-gray-200`}>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">{sec.title}</h2>
            <ul className="space-y-4">
              {sec.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <span className="text-primary">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </div>
  );
};