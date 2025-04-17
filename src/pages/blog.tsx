import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Footer from '@/components/Footer';

export default function Blog() {
  const { t } = useTranslation('common');

  // Mock blog post data
  const featuredPost = {
    id: 1,
    title: 'blog.featuredPost.title',
    excerpt: 'blog.featuredPost.excerpt',
    date: '2023-08-10',
    author: 'Jane Smith',
    authorTitle: 'blog.featuredPost.authorTitle',
    category: 'blog.categories.technology',
    readTime: '8',
    image: '/images/blog/featured.jpg', // This would be a real image path in production
  };

  const recentPosts = [
    {
      id: 2,
      title: 'blog.recentPosts.post1.title',
      excerpt: 'blog.recentPosts.post1.excerpt',
      date: '2023-08-05',
      author: 'Michael Johnson',
      category: 'blog.categories.innovation',
      readTime: '5',
      image: '/images/blog/post1.jpg',
    },
    {
      id: 3,
      title: 'blog.recentPosts.post2.title',
      excerpt: 'blog.recentPosts.post2.excerpt',
      date: '2023-07-28',
      author: 'Emily Chen',
      category: 'blog.categories.manufacturing',
      readTime: '6',
      image: '/images/blog/post2.jpg',
    },
    {
      id: 4,
      title: 'blog.recentPosts.post3.title',
      excerpt: 'blog.recentPosts.post3.excerpt',
      date: '2023-07-20',
      author: 'David Wilson',
      category: 'blog.categories.casestudy',
      readTime: '4',
      image: '/images/blog/post3.jpg',
    },
  ];

  const categories = [
    { name: 'blog.categories.all', count: 12, active: true },
    { name: 'blog.categories.technology', count: 5, active: false },
    { name: 'blog.categories.innovation', count: 3, active: false },
    { name: 'blog.categories.manufacturing', count: 4, active: false },
    { name: 'blog.categories.casestudy', count: 2, active: false },
    { name: 'blog.categories.tutorial', count: 3, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t('blog.title')}</title>
        <meta name="description" content={t('blog.description')} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('blog.heading')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('blog.subheading')}</p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {t(category.name)} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-2/5">
                <div className="h-64 md:h-full bg-gray-300">
                  {/* Image placeholder - in a real app, use next/image component */}
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    {t('blog.imagePlaceholder')}
                  </div>
                </div>
              </div>
              <div className="p-8 md:w-3/5">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  {t(featuredPost.category)} • {featuredPost.readTime} {t('blog.minuteRead')}
                </div>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">{t(featuredPost.title)}</h2>
                <p className="mt-3 text-gray-600">{t(featuredPost.excerpt)}</p>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                    <p className="text-sm text-gray-500">{t(featuredPost.authorTitle)}</p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">{featuredPost.date}</span>
                </div>
                <div className="mt-6">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    {t('blog.readMore')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('blog.recentPostsHeading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-300">
                  {/* Image placeholder */}
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    {t('blog.imagePlaceholder')}
                  </div>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {t(post.category)} • {post.readTime} {t('blog.minuteRead')}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{t(post.title)}</h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">{t(post.excerpt)}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                      <p className="ml-2 text-sm text-gray-700">{post.author}</p>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              {t('blog.loadMore')}
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-blue-600 text-white rounded-lg shadow-xl p-8 sm:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">{t('blog.newsletter.title')}</h2>
              <p className="mb-6">{t('blog.newsletter.description')}</p>
              <form className="sm:flex justify-center">
                <input
                  type="email"
                  placeholder={t('blog.newsletter.placeholder')}
                  className="w-full sm:max-w-xs px-4 py-3 text-gray-900 rounded-md mb-3 sm:mb-0 sm:mr-3"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  {t('blog.newsletter.button')}
                </button>
              </form>
              <p className="mt-4 text-sm text-blue-200">{t('blog.newsletter.privacy')}</p>
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