import { useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export default function Admin() {
  const { t } = useTranslation('common');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock login function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials against a backend
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  // Mock data for dashboard
  const dashboardStats = [
    { label: 'admin.stats.users', value: '1,245', icon: 'users', change: '+12%' },
    { label: 'admin.stats.orders', value: '342', icon: 'shopping-cart', change: '+5%' },
    { label: 'admin.stats.revenue', value: '$38,256', icon: 'dollar-sign', change: '+18%' },
    { label: 'admin.stats.projects', value: '56', icon: 'briefcase', change: '+3%' },
  ];

  // Mock data for recent orders
  const recentOrders = [
    { id: 'ORD-001', customer: 'John Smith', date: '2023-08-15', status: 'completed', amount: '$1,250' },
    { id: 'ORD-002', customer: 'Jane Doe', date: '2023-08-14', status: 'processing', amount: '$850' },
    { id: 'ORD-003', customer: 'Robert Johnson', date: '2023-08-12', status: 'pending', amount: '$2,340' },
    { id: 'ORD-004', customer: 'Emily Wilson', date: '2023-08-10', status: 'completed', amount: '$1,120' },
    { id: 'ORD-005', customer: 'Michael Brown', date: '2023-08-08', status: 'cancelled', amount: '$780' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{t('admin.title')}</title>
        <meta name="description" content={t('admin.description')} />
      </Head>

      {!isAuthenticated ? (
        // Login screen
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('admin.login.title')}</h1>
              <p className="text-gray-600">{t('admin.login.subtitle')}</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('admin.login.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('admin.login.password')}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    {t('admin.login.rememberMe')}
                  </label>
                </div>
                
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  {t('admin.login.forgotPassword')}
                </a>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('admin.login.signIn')}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // Admin dashboard
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 bg-gray-800">
              <div className="flex items-center h-16 px-4 bg-gray-900">
                <span className="text-xl font-bold text-white">AICNC Admin</span>
              </div>
              <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
                <nav className="flex-1 px-2 space-y-1">
                  {[
                    { id: 'dashboard', label: 'admin.nav.dashboard', icon: 'home' },
                    { id: 'orders', label: 'admin.nav.orders', icon: 'shopping-cart' },
                    { id: 'customers', label: 'admin.nav.customers', icon: 'users' },
                    { id: 'products', label: 'admin.nav.products', icon: 'package' },
                    { id: 'reports', label: 'admin.nav.reports', icon: 'bar-chart-2' },
                    { id: 'settings', label: 'admin.nav.settings', icon: 'settings' },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      onClick={() => setActiveTab(item.id)}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        activeTab === item.id
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {t(item.label)}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 p-4 bg-gray-700">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="w-full flex items-center justify-center px-4 py-2 text-sm text-white bg-gray-600 hover:bg-gray-500 rounded"
                >
                  {t('admin.nav.logout')}
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <div className="relative flex-shrink-0 flex h-16 bg-white shadow">
              <button
                type="button"
                className="md:hidden px-4 text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                  <div className="w-full flex md:ml-0">
                    <label htmlFor="search-field" className="sr-only">
                      {t('admin.search')}
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                      </div>
                      <input
                        id="search-field"
                        className="block w-full h-full pl-8 pr-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                        placeholder={t('admin.searchPlaceholder')}
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span className="sr-only">{t('admin.notifications')}</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>

                  <div className="ml-3 relative">
                    <div>
                      <button
                        type="button"
                        className="max-w-xs flex items-center text-sm rounded-full focus:outline-none"
                      >
                        <span className="sr-only">{t('admin.userMenu')}</span>
                        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="font-medium text-gray-700">A</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <main className="flex-1 relative overflow-y-auto focus:outline-none p-6">
              {activeTab === 'dashboard' && (
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">{t('admin.dashboard.title')}</h1>
                  
                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {dashboardStats.map((stat, i) => (
                      <div key={i} className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="text-xl">{stat.icon}</div>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                              <dl>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  {t(stat.label)}
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {stat.value}
                                  </div>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                          <div className="text-sm text-green-600">
                            {stat.change} {t('admin.dashboard.fromLastMonth')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="mt-8 text-lg font-medium text-gray-900">{t('admin.dashboard.recentOrders')}</h2>
                  
                  <div className="mt-4 flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {t('admin.dashboard.orderId')}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {t('admin.dashboard.customer')}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {t('admin.dashboard.date')}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {t('admin.dashboard.status')}
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  {t('admin.dashboard.amount')}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {recentOrders.map((order) => (
                                <tr key={order.id}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {order.id}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.customer}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.date}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                                      order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                                      order.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {order.status}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.amount}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab !== 'dashboard' && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {t('admin.comingSoon')}
                  </h3>
                  <p className="text-gray-500">
                    {t('admin.featureUnderDevelopment')}
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      )}
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