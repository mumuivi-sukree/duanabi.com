// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
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
                  { label: 'อัซการฺ ยามเช้า-เย็น', autogenerate: { directory: 'azkar' } },
                  { label: 'วิริตหลังละหมาด', autogenerate: { directory: 'wirid' } },
                  { label: 'ดุอาอ์ให้พ่อแม่', autogenerate: { directory: 'parents' } },
                  { label: 'ดุอาอ์ให้ลูก', autogenerate: { directory: 'children' } },
                  ],
              },
              // ถ้าในอนาคตนึกหมวดใหม่ได้ ก็แค่มาเพิ่มบรรทัดใหม่ตรงนี้
          ],
          customCss: ['./src/styles/custom.css'],
          components: {
              Footer: './src/components/BottomNav.astro',
          },
      }),
	],
	devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});