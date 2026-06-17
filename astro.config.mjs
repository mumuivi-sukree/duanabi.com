// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://duanabi.com/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'duanabi.com',
      logo: {
        src: './src/assets/duanabi-logo.png', // ถ้ามีโลโก้หน้าเว็บ
      },
      favicon: './src/assets/duanabi-fav.png', // ระบุตำแหน่ง favicon ที่นี่

      // 🎯 เปิดสิทธิ์ระบบดึงปุ่มภาษาธงชาติชุดใหม่ ไปวางเกาะชิดข้างโลโก้ฝั่งซ้ายทันที
      components: {
        SiteTitle: './src/components/LangSwitcher.astro',
        Footer: './src/components/BottomNav.astro',
      },

      locales: {
        root: { label: 'ไทย', lang: 'th' },         // ภาษาหลัก (ภาษาไทย)
        ms: { label: 'Bahasa Melayu', lang: 'ms' }  // 📁 เพิ่มภาษามาเลย์ (URL จะเป็น /ms/)
      },	

      social: [
        { icon: 'email', label: 'Email', href: 'mailto:mumuivi@gmail.com' },
        { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/groups/duanabi' }
      ],

      // ปรับโครงสร้าง Sidebar ให้รองรับ 2 ภาษา
      sidebar: [
        {
          label: 'หมวดหมู่ดุอาอ์', 
          translations: {
            ms: 'Kategori Doa',  
          },
          items: [
            { 
              label: 'ดุอาอ์ให้พ่อแม่', 
              translations: { ms: 'Doa untuk Ibu Bapa' },
              autogenerate: { directory: 'parents' } 
            },
            { 
              label: 'ดุอาอ์ให้ลูก', 
              translations: { ms: 'Doa untuk Anak' },
              autogenerate: { directory: 'children' } 
            },
            { 
              label: 'ดุอาอ์ให้ครอบครัว', 
              translations: { ms: 'Doa untuk Keluarga' },
              autogenerate: { directory: 'family' } 
            },
            { 
              label: 'ดุอาอ์ประจำวัน', 
              translations: { ms: 'Doa Harian' },
              autogenerate: { directory: 'daily' } 
            },
            { 
              label: 'ดุอาอ์คุ้มครองพ้นจากความทุกข์ยาก', 
              translations: { ms: 'Doa Perlindungan' },
              autogenerate: { directory: 'relief' } 
            },
            { 
              label: 'ดุอาอ์อภัยโทษ', 
              translations: { ms: 'Doa Keampunan' },
              autogenerate: { directory: 'forgiveness' } 
            },
            { 
              label: 'ดุอาอ์ขอความดี', 
              translations: { ms: 'Doa Memohon Kebaikan' },
              autogenerate: { directory: 'success' } 
            },
            { 
              label: 'ดุอาอ์ในโอกาสสำคัญ', 
              translations: { ms: 'Doa Sempena Acara Penting' },
              autogenerate: { directory: 'goodtime' } 
            },
            { 
              label: 'วิริต บทรำลึกถึงอัลลอฮ์หลังละหมาด', 
              translations: { ms: 'Wirid Selepas Solat' },
              autogenerate: { directory: 'wirid' } 
            },
            { 
              label: 'อัซการฺ บทรำลึกถึงอัลลอฮ์ยามเช้า-เย็น', 
              translations: { ms: 'Zikir Pagi & Petang' },
              autogenerate: { directory: 'azkar' } 
            },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://duanabi.com/dua1.webp' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }), 
//    sitemap(),
    sitemap({
      i18n: {
        defaultLocale: 'th', // ภาษาหลักของเว็บคือภาษาไทย
        locales: {
          th: 'th',          // ถ้า path ไม่มี /ms/ นำหน้า ให้หมายถึงภาษา th
          ms: 'ms',          // ถ้า path มี /ms/ นำหน้า ให้หมายถึงภาษา ms
        },
      },
    }),
  ],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  }
});