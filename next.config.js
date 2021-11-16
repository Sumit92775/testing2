const nextTranslate = require('next-translate')

const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  env: {
    base_url: '/',
    api_url: 'http://194.163.134.197:3004/api_v1',
    // api_url: 'https://reqres.in',
    date_format: 'DD MMM, YYYY',
    time_format: 'hh:mm A',
    googleMapApi: 'AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4',
    currency: '$'
  },

  async redirects() {
    return [
      {
        source: '/kyc',
        destination: '/kyc/providers',
        permanent: true,
      },
      {
        source: '/users',
        destination: '/users/customers',
        permanent: true,
      },
    ]
  },
}

module.exports = nextTranslate({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  env: {
    base_url: '/',
    api_url: '//194.163.134.197:3000',
    // api_url: 'https://reqres.in',
    date_format: 'DD MMM, YYYY',
    time_format: 'hh:mm A',
    currency: '$'
  },

  async redirects() {
    return [
      {
        source: '/kyc',
        destination: '/kyc/providers',
        permanent: true,
      },
      {
        source: '/users',
        destination: '/users/customers',
        permanent: true,
      },
    ]
  }
})
