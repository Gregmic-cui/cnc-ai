import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Footer from '@/components/Footer';

export default function Workflow() {
  const { t } = useTranslation('common');

  const steps = [
    {
      number: 1,
      title: 'workflow.steps.one.title',
      description: 'workflow.steps.one.description',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'workflow.steps.two.title',
      description: 'workflow.steps.two.description',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'workflow.steps.three.title',
      description: 'workflow.steps.three.description',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'workflow.steps.four.title',
      description: 'workflow.steps.four.description',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: 5,
      title: 'workflow.steps.five.title',
      description: 'workflow.steps.five.description',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('workflow.title')}</title>
        <meta name="description" content={t('workflow.description')} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('workflow.heading')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('workflow.subheading')}</p>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute h-full w-0.5 bg-blue-200 left-1/2 transform -translate-x-1/2 top-20 -z-10"></div>
                )}
                
                {/* Icon with number */}
                <div className="flex-shrink-0 z-10 mb-6 md:mb-0">
                  <div className="bg-white rounded-full p-4 shadow-md relative">
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </span>
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-2/3 ${
                  index % 2 === 0 ? 'md:ml-12' : 'md:mr-12 md:text-right'
                }`}>
                  <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(step.title)}</h3>
                    <p className="text-gray-600">{t(step.description)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('workflow.cta.title')}</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">{t('workflow.cta.description')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-lg transition-colors">
                {t('workflow.cta.primaryButton')}
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-lg transition-colors">
                {t('workflow.cta.secondaryButton')}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}; 