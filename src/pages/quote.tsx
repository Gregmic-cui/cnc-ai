import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Footer from '@/components/Footer';

export default function Quote() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('quote.title')}</title>
        <meta name="description" content={t('quote.description')} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('quote.heading')}</h1>
          
          <div className="bg-white shadow-md rounded-lg p-8">
            <p className="text-gray-700 mb-6">{t('quote.instructions')}</p>
            
            <form className="space-y-6">
              {/* Project Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('quote.projectInfo')}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('quote.projectName')}
                    </label>
                    <input
                      type="text"
                      id="project-name"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('quote.deadline')}
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Material Specifications */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('quote.materialSpecs')}</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="material-type" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('quote.materialType')}
                    </label>
                    <select
                      id="material-type"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">{t('quote.selectMaterial')}</option>
                      <option value="aluminum">{t('quote.materials.aluminum')}</option>
                      <option value="steel">{t('quote.materials.steel')}</option>
                      <option value="plastic">{t('quote.materials.plastic')}</option>
                      <option value="wood">{t('quote.materials.wood')}</option>
                      <option value="other">{t('quote.materials.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('quote.dimensions')}
                    </label>
                    <textarea
                      id="dimensions"
                      rows={3}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder={t('quote.dimensionsPlaceholder')}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Quantity and Contact Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('quote.quantityAndContact')}</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('quote.quantity')}
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('quote.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="additional-info" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('quote.additionalInfo')}
                  </label>
                  <textarea
                    id="additional-info"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={t('quote.additionalInfoPlaceholder')}
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold transition-colors">
                  {t('quote.submitRequest')}
                </button>
              </div>
            </form>
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