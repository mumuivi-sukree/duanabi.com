// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://duanabi.com',
  integrations: [starlight({
      title: 'duanabi.com',
		  logo: {
        src: './src/assets/duanabi-logo.png', // ถ้ามีโลโก้หน้าเว็บ
      },
      favicon: './src/assets/duanabi-fav.png', // ระบุตำแหน่ง favicon ที่นี่
      locales: {
        root: { label: 'ไทย', lang: 'th' }
      },	
		  social: [
        { icon: 'email', label: 'Email', href: 'mailto:mumuivi@gmail.com' },
        { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/groups/duanabi' }
		  ],
      sidebar: [
          {
              label: 'หมวดหมู่ดุอาอ์',
              items: [
              { label: 'ดุอาอ์ให้พ่อแม่', autogenerate: { directory: 'parents' } },
              { label: 'ดุอาอ์ให้ลูก', autogenerate: { directory: 'children' } },
              { label: 'ดุอาอ์ให้ครอบครัว', autogenerate: { directory: 'family' } },
              { label: 'ดุอาอ์เมื่อประสบความทุกข์ยาก', autogenerate: { directory: 'relief' } },
              { label: 'ดุอาอ์ขอความดี', autogenerate: { directory: 'success' } },
              { label: 'วิริต บทรำลึกถึงอัลลอฮ์หลังละหมาด', autogenerate: { directory: 'wirid' } },
              { label: 'อัซการฺ บทรำลึกถึงอัลลอฮ์ยามเช้า-เย็น', autogenerate: { directory: 'azkar' } },
              ],
          },
          // ถ้าในอนาคตนึกหมวดใหม่ได้ ก็แค่มาเพิ่มบรรทัดใหม่ตรงนี้
      ],
		  head: [
                // ตั้งค่ารูปภาพสำหรับแชร์ (แนะนำขนาด 1200x630 px)
                {
                tag: 'meta',
                attrs: { property: 'og:image', content: 'https://duanabi.com/dua1.webp' },
                },
                {
                tag: 'meta',
                attrs: { property: 'og:title', content: 'Dua Nabi ดุอาอฺ ฉบับเข้าใจง่าย' },
                },
                {
                tag: 'meta',
                attrs: { property: 'og:description', content: 'รวมบทดุอาอ์จากอัลกุรอานและซุนนะฮ์ เรียนรู้ดุอาอ์พร้อมคำแปลและคำอธิบายที่ถูกต้อง' },
                },
        ],

      customCss: ['./src/styles/custom.css'],
      components: {
          Footer: './src/components/BottomNav.astro',
      },
  }), sitemap()],
    devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});