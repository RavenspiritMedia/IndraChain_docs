require('dotenv').config()

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Indrachain',
  url: '/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Indranet2.png',
  organizationName: 'RavenspiritMedia',
  projectName: 'Indrachain-docs',
  // themes: ['docusaurus-theme-search-typesense'],
  
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
   
    navbar: {
      hideOnScroll: true,
      title: 'Indrachain',
      logo: {
        alt: 'Indrachain Logo',
        src: 'img/logo.png',
        href: 'docs/',
      },
      items: [
        {
          to: 'docs/overview',
          activeBasePath: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/RavenspiritMedia/polygon-edge.git',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Made with ❤ by the humans at Ravenspirit`,
    },
    // typesense: {
    //   typesenseCollectionName: 'sdk-docs.polygon.technology', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
    //   typesenseServerConfig: {
    //     nodes: [
    //       {
    //         host: 'fvtlbamhupdcon8rp-1.a1.typesense.net',
    //         port: 443,
    //         protocol: 'https',
    //       },
    //     ],
    //     apiKey: process.env.TYPESENSE_API_KEY,
    //   },
    // },
    algolia: {
      indexName: "sdk-docs.polygon.technology",
      appId: '16JCDEHCCN',
      apiKey: "d172fe1ed43468315f82bd9679515131",
      contextualSearch: true,
      algoliaOptions: {
        attributesToSnippet: ['content:20'],
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
