import { useTranslation } from 'next-i18next';

const WhyUs = () => {
  const { t } = useTranslation('common');
  
  const features = [
    {
      icon: '🔍',
      title: 'whyUs.features.ai.title',
      description: 'whyUs.features.ai.description',
    },
    {
      icon: '⚙️',
      title: 'whyUs.features.precision.title',
      description: 'whyUs.features.precision.description',
    },
    {
      icon: '🚀',
      title: 'whyUs.features.efficiency.title',
      description: 'whyUs.features.efficiency.description',
    },
    {
      icon: '💡',
      title: 'whyUs.features.innovation.title',
      description: 'whyUs.features.innovation.description',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            {t('whyUs.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t(feature.title)}
              </h3>
              <p className="text-gray-600">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 