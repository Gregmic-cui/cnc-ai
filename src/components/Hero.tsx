import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-lg transition-colors">
              {t('hero.primaryButton')}
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-lg transition-colors">
              {t('hero.secondaryButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 