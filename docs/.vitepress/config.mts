import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Phantom Camera",
  description: "A dynamic 2D & 3D camera addon for Godot 4",
  head: [
      ['link', {rel: 'icon', type: 'image/svg+xml', href: '/assets/icons/phantom-camera.svg'}],
      ['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}],

      ['meta', {property: 'og:type', content: 'website'}],
      ['meta', {property: 'og:title', content: 'Phantom Camera'}],
      ['meta', {property: 'og:description', content: 'A dynamic 2D & 3D camera addon for Godot 4'}],
      ['meta', {property: 'og:url', content: 'https://phantom-camera.dev'}],
      ['meta', {property: 'og:image', content: '/meta-image.png'}],
      
      ['meta', {name: 'twitter:card', content: "summary"}],
      ['meta', {name: 'twitter:title', content: 'Phantom Camera'}],
      ['meta', {name: 'twitter:description', content: 'A dynamic 2D & 3D camera addon for Godot 4'}],
      ['meta', {name: 'twitter:site', content: '@marcusskov'}],
      ['meta', {name: 'twitter:image', content: '/meta-image.png'}],
  ],
  cleanUrls: true,
  appearance: 'force-dark',
  transformHead({ assets }) {
    const fontFile = assets.find(file => /Nunito\.\w+\.ttf/)
    const codeFontFile = assets.find(file => /JetBrainsMono\.\w+\.ttf/)
    if (fontFile) {
      return [
          [
            'link',
            {
              rel: 'preload',
              href: fontFile,
              as: 'font',
              type: 'font/ttf',
              crossorigin: '',
            }
          ]
      ]
    }
    if (codeFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: codeFontFile,
            as: 'font',
            type: 'font/ttf',
            crossorigin: '',
          }
        ]
      ]
    }
  },
  srcExclude: [
    '**/parts/*.md'  
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/icons/phantom-camera.svg',
    editLink: {
      pattern: 'https://github.com/ramokz/phantom-camera-docs/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },
    
    nav: [
      {
        text: 'Home', link: '/'
      },
      {
        text: 'Docs', link: '/introduction/what-is-this'
      },
      {
        text: 'FAQ', link: '/support/faq'
      },
      {
        text: 'Discussions', link: 'https://github.com/ramokz/phantom-camera/discussions'
      },
    ],
    
    outline: {
      label: "This page",
      level: [1,4]
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'What is this?', link: '/introduction/what-is-this'
          },
          {
            text: 'Installation', link: '/introduction/installation'
          },
          {
            text: 'Scene Requirements', link: '/introduction/scene-requirements'
          },
        ]
      },
      {
        text: 'Core Nodes',
        items: [
          {
            text: 'PhantomCamera2D', link: '/core-nodes/phantom-camera-2d'
          },
          {
            text: 'PhantomCamera3D', link: '/core-nodes/phantom-camera-3d'
          },
          {
            text: 'PhantomCameraHost', link: '/core-nodes/phantom-camera-host'
          },
          {
            text: 'Multiple Phantom Cameras', link: '/core-nodes/multiple-phantom-cameras'
          },
        ]
      },
      {
        text: 'Priority', link: "/priority",
      },
      {
        text: 'Follow Modes',
        items: [
          {
            text: 'Overview', link: "/follow-modes/overview"
          },
          {
            text: 'Glued', link: '/follow-modes/glued'
          },
          {
            text: 'Simple', link: '/follow-modes/simple'
          },
          {
            text: 'Group', link: '/follow-modes/group'
          },
          {
            text: 'Path', link: '/follow-modes/path'
          },
          {
            text: 'Framed', link: '/follow-modes/framed'
          },
          {
            text: 'Third Person (3D)', link: '/follow-modes/third-person'
          },
        ]
      },
      {
        text: 'Look At Modes (3D)',
        items: [
          {
            text: 'Overview', link: "/look-at-modes/overview"
          },
          {
            text: 'Mimic', link: '/look-at-modes/mimic'
          },
          {
            text: 'Simple', link: '/look-at-modes/simple'
          },
          {
            text: 'Group', link: '/look-at-modes/group'
          },
        ]
      },
      {
        text: 'Resource Types',
        items: [
          {
            text: 'Tween', link: "/resource-types/tween",
          },
          {
            text: 'Camera3D Resource', link: "/resource-types/camera-3d-resource",
          },
        ]
      },
      {
        text: 'Viewfinder', link: "/viewfinder",
      },
      {
        text: 'Timeline Animation', link: "/timeline-animation",
      },
      {
        text: 'Editor Updater', link: "/editor-updater",
      },
      {
        text: 'Support',
        items: [
          {text: 'FAQ', link: "/support/faq"},
          {text: 'How To Contribute', link: "/support/how-to-contribute"},
        ]
      },
      {
        text: 'Roadmap', link: "/roadmap"
      },
    ],
    
    search: {
      provider: "algolia",
      options: {
        appId: 'FCA0M2RPZ7',
        apiKey: 'e0bad5c9ed0efeb70f0e49066cd34705',
        indexName: 'phantom-camera',
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ramokz/phantom-camera' },
      { icon: 'mastodon', link: 'https://mastodon.gamedev.place/@marcusskov' },
      { icon: 'twitter', link: 'https://twitter.com/marcusskov' }
    ],
  }
})