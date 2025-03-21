/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://fast.github.io',
  title: 'FastLabs / Blog',
  description: 'We develop fast Rust crates and release them fast.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 FastLabs',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/fast'
    },
]
});