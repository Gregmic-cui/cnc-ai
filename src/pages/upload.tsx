import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Footer from '@/components/Footer';

export default function Upload() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('upload.title')}</title>
        <meta name="description" content={t('upload.description')} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('upload.heading')}</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">{t('upload.instructions')}</p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H8m36-12h-4m4 0H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-gray-600 mb-1">{t('upload.dragAndDrop')}</p>
              <p className="text-gray-500 text-sm mb-4">{t('upload.fileFormats')}</p>
              <input type="file" className="hidden" id="file-upload" multiple />
              <label htmlFor="file-upload" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                {t('upload.selectFiles')}
              </label>
            </div>
            
            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold text-sm transition-colors">
                {t('upload.processFiles')}
              </button>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('upload.previousUploads')}</h2>
            <div className="text-gray-500 text-center py-8">
              {t('upload.noUploads')}
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