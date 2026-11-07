# เว็บไซต์ส่วนตัว — นายธีระวัฒน์ ทุ่งคำ (Theerawat Thungkham)

เว็บไซต์ Portfolio แบบ Static สำหรับ **GitHub Pages** รองรับภาษาไทยและอังกฤษ พร้อม SEO พื้นฐาน

## ไฟล์ที่มี

- `index.html` — หน้าแรกภาษาไทย (Google อ่านได้โดยไม่ต้องรัน JavaScript)
- `en.html` — หน้าเว็บไซต์ภาษาอังกฤษ
- `assets/style.css` — สี เลย์เอาต์ และการแสดงผลบนมือถือ
- `assets/script.js` — เมนูมือถือและโหมดสี (ไม่มีการส่งข้อมูลไปยังเซิร์ฟเวอร์)
- `assets/favicon.svg` — ไอคอนเว็บไซต์
- `assets/og-cover.png` — ภาพเมื่อแชร์เว็บไซต์ทางโซเชียล
- `sitemap.xml`, `robots.txt`, `.nojekyll` — สำหรับการค้นหาและ GitHub Pages

## วิธีเผยแพร่ผ่าน GitHub Pages

1. เข้าสู่ระบบ GitHub ด้วยบัญชีที่เป็นเจ้าของโครงการ Green Passport (`Theerawa21`)
2. เปิด https://github.com/new แล้วสร้าง Repository ชื่อ **`theerawa21.github.io`** (ชื่อผู้ใช้ GitHub ใช้ตัวพิมพ์เล็กในชื่อ Repository ได้)
3. ตั้ง Visibility เป็น **Public** และสร้าง Repository
4. อัปโหลด **ไฟล์ทั้งหมดใน ZIP** ลงใน root ของ Repository (ต้องมี `index.html` อยู่ระดับบนสุด ไม่ใช่ซ้อนอยู่ในโฟลเดอร์)
5. ไปที่ **Settings → Pages → Build and deployment**
6. เลือก **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)** และ Save
7. ตรวจสอบว่าเว็บไซต์แสดงที่ https://theerawa21.github.io/

> ถ้าชื่อบัญชี GitHub จริงไม่ใช่ Theerawa21 ต้องแทน `theerawa21.github.io` ทุกตำแหน่งในโปรเจกต์ เช่น canonical, OG URL, sitemap และ robots.txt

## ทำให้ Google ค้นพบ

1. หลังเว็บไซต์ออนไลน์แล้ว เปิด https://search.google.com/search-console/
2. เพิ่ม Property แบบ **URL prefix**: `https://theerawa21.github.io/` (หรือเว็บไซต์จริงตามที่เผยแพร่)
3. ยืนยันความเป็นเจ้าของเว็บไซต์ตามวิธีที่ Google แนะนำ (เช่น HTML tag ใน `<head>` หรือไฟล์ HTML verification)
4. ไปที่เมนู **Sitemaps** เพิ่ม `sitemap.xml`
5. เปิด URL Inspection ใส่ `https://theerawa21.github.io/` และกด **Request indexing**
6. เชื่อมโยงเว็บไซต์นี้จาก GitHub Profile และโปรไฟล์วิชาการที่เป็นของคุณจริง

**หมายเหตุ:** Google อาจใช้เวลาหลายวันถึงหลายสัปดาห์ในการรวบรวมข้อมูล และไม่มีการรับประกันอันดับหรือการปรากฏบน Google

## จุดที่ควรตรวจสอบก่อนเผยแพร่

- ชื่อ ตำแหน่ง หน่วยงาน และคำอธิบายเป็นข้อมูลที่เจ้าของเว็บไซต์อนุมัติให้เผยแพร่
- โครงการ ECO QUEST, JANCHOM และ WHARAP ใช้คำบรรยายสรุปเชิงแนวคิด ไม่อ้างว่าได้รับรางวัลหรือผ่าน peer review
- ลิงก์บทความวิจัยและข่าวกิจกรรมตรวจจากแหล่งสาธารณะแล้ว แต่ควรให้เจ้าของเว็บไซต์ตรวจอีกครั้ง
- หน้านี้ยังไม่ได้ใส่ภาพถ่ายส่วนตัว อีเมล เบอร์โทร หรือรายละเอียดส่วนบุคคลที่ไม่ได้อนุมัติ
- ก่อนเผยแพร่ภาพถ่ายหรือผลงานนักเรียน ต้องตรวจสอบสิทธิ์และความยินยอม

## แก้ไขเว็บไซต์

- เนื้อหาไทย: `index.html`
- เนื้อหาอังกฤษ: `en.html`
- ปรับธีมสี: ตัวแปรบนสุดใน `assets/style.css`
- เพิ่มผลงานใหม่: คัดลอก `<article class="project-card">...` ในส่วน `#projects`
- เมื่อแก้ไขเนื้อหาอย่างมีนัยสำคัญ ให้อัปเดต `lastmod` ใน `sitemap.xml`

เว็บไซต์ออกแบบให้ใช้ไฟล์ HTML/CSS/JS โดยตรง ไม่ต้องใช้ npm, React หรือบริการฐานข้อมูล