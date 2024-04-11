import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Inertia Rails",
  description: "How to use Inertia with Rails",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation/server-side' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction'
      },
      {
        text: 'Installation',
        items: [
          { text: 'Server-side', link: '/installation/server-side' },
          { text: 'Client-side', link: '/installation/client-side' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PedroAugustoRamalhoDuarte/inertia-rails-docs' }
    ]
  }
})
