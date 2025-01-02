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
      level: [1,3]
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
        text: "Noise",
        items: [
          {
            text: "Overview", link: "/noise/overview"
          },
          {
            text: "PhantomCameraNoiseEmitter2D", link: "/noise/phantom-camera-noise-emitter-2d"
          },
          {
            text: "PhantomCameraNoiseEmitter3D", link: "/noise/phantom-camera-noise-emitter-3d"
          }
        ],
      },
      {
        text: 'Resource Types',
        items: [
          {
            text: 'Tween', link: "/resource-types/tween",
          },
          {
            text: 'Camera3DResource', link: "/resource-types/camera-3d-resource",
          },
          {
            text: 'PhantomCameraNoise2D', link: "/resource-types/phantom-camera-noise-2d",
          },
          {
            text: 'PhantomCameraNoise3D', link: "/resource-types/phantom-camera-noise-3d",
          },
        ]
      },
      {
        text: 'PhantomCameraManager', link: "/phantom-camera-manager",
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
      {
        icon:{
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.52397 2.63436C6.7405 4.2984 9.12464 7.67236 9.99997 9.48303C10.8754 7.6725 13.2594 4.29836 15.476 2.63436C17.0753 1.43366 19.6666 0.504628 19.6666 3.46086C19.6666 4.05126 19.3281 8.42053 19.1296 9.12986C18.4395 11.596 15.9248 12.225 13.6879 11.8443C17.5979 12.5098 18.5926 14.714 16.4445 16.9183C12.3648 21.1046 10.5808 15.8679 10.1235 14.5261C10.0397 14.2801 10.0005 14.165 9.99991 14.2629C9.99933 14.165 9.96012 14.2801 9.87632 14.5261C9.41919 15.8679 7.63522 21.1048 3.55532 16.9183C1.40719 14.714 2.40182 12.5096 6.31189 11.8443C4.07496 12.225 1.56022 11.596 0.870224 9.12986C0.671684 8.42046 0.333191 4.0512 0.333191 3.46086C0.333191 0.504628 2.92459 1.43366 4.52386 2.63436H4.52397Z"/>
</svg>
          `
        },
        link: 'https://bsky.app/profile/marcusskov.com',
        ariaLabel: 'Bluesky'
      }
    ],
  }
})
