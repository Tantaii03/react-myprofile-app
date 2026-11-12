import { NavLink, Link, Outlet } from 'react-router-dom'
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa6'
import {
  BsHouse, BsPersonLinesFill, BsDoorOpen, BsTextIndentLeft,
  BsBriefcase, BsCodeSquare, BsChat,
} from 'react-icons/bs'
import profile from '../assets/images/Profile.png'


const socials = [
  { name: 'Facebook',  icon: FaFacebook,  href: 'https://www.facebook.com/ชื่อโปรไฟล์ของคุณ' },
  { name: 'X',         icon: FaXTwitter,  href: 'https://x.com/ชื่อผู้ใช้ของคุณ' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/ชื่อผู้ใช้ของคุณ' },
  { name: 'LinkedIn',  icon: FaLinkedin,  href: 'https://www.linkedin.com/in/ชื่อโปรไฟล์ของคุณ' },
  { name: 'Google',    icon: FaGoogle,    href: 'mailto:your-email@example.com' }, // ไอคอน G ใส่เป็นอีเมล Gmail
]

/* ===================== 2) เมนูด้านขวา (ลิงก์ไปแต่ละหน้า) ===================== */
const menu = [
  { to: '/', icon: BsHouse, label: 'Home', end: true },
  { to: '/about', icon: BsPersonLinesFill, label: 'About Me' },
  { to: '/education', icon: BsDoorOpen, label: 'Education & Experience' },
  { to: '/specialization', icon: BsTextIndentLeft, label: 'Specializations', circle: true },
  { to: '/projects', icon: BsBriefcase, label: 'Projects' },
  { to: '/skills', icon: BsCodeSquare, label: 'Skills' },
  { to: '/contact', icon: BsChat, label: 'Contact' },
]

/* ===================== 3) การ์ดโปรไฟล์ด้านซ้าย ===================== */
function ProfileCard() {
  return (
    <aside className="w-[270px] shrink-0 rounded-2xl border border-[#333] p-6 pt-5 flex flex-col">
      {/* ชื่อ */}
      <h2 className="text-[22px] font-normal tracking-wide text-white leading-none">
        <span className="text-[#ff5a00]">T</span>hatchai
      </h2>

      {/* รูปโปรไฟล์ */}
      <div className="mt-3 rounded-xl overflow-hidden bg-white aspect-square">
        <img src={profile} alt="Thatchai" className="w-full h-full object-cover" />
      </div>

      {/* รหัสนักศึกษา + ตำแหน่ง */}
      <p className="mt-2 text-center text-[16px] text-white">STU ID: 6619410001</p>
      <p className="mt-1 text-center text-[13px] text-[#7a7a7a]">Fullstack Web Developer</p>

      {/* ไอคอนโซเชียล: กดแล้วไปยังโปรไฟล์จริง */}
      <div className="mt-6 flex items-center justify-between px-1 text-white text-[26px]">
        {socials
          .filter((s) => s.href) // ข้ามอันที่ไม่ได้ใส่ลิงก์
          .map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              // ลิงก์เว็บ (http) เปิดแท็บใหม่ / mailto เปิดแอปอีเมลในหน้าเดิม
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer" // ความปลอดภัยเมื่อเปิดแท็บใหม่
              aria-label={name}
              title={name}
              className="hover:text-[#ff5a00] transition-colors"
            >
              <Icon />
            </a>
          ))}
      </div>

      {/* ปุ่ม HIRE ME: ไปหน้า Contact */}
      <Link
        to="/contact"
        className="mt-8 block w-full rounded-lg bg-[#ff5a00] py-3 text-center text-[18px] tracking-wide text-white hover:bg-[#ff7a2e] transition-colors"
      >
        HIRE&nbsp; ME !
      </Link>
    </aside>
  )
}

/* ===================== 4) แถบเมนูแนวตั้งด้านขวา ===================== */
function SideNav() {
  return (
    <nav className="shrink-0 self-start sticky top-0 rounded-full border border-[#444] py-3 px-2.5 flex flex-col items-center gap-3.5">
      {menu.map(({ to, icon: Icon, label, end, circle }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          title={label}
          aria-label={label}
          className={({ isActive }) =>
            `grid place-items-center w-9 h-9 text-[24px] transition-colors ${
              isActive ? 'text-[#ff5a00]' : 'text-[#7a7a7a] hover:text-[#ff5a00]'
            }`
          }
        >
          {circle ? (
            <span className="grid place-items-center w-[30px] h-[30px] rounded-full border-2 border-current">
              <Icon className="text-[16px]" />
            </span>
          ) : (
            <Icon />
          )}
        </NavLink>
      ))}
    </nav>
  )
}

/* ===================== 5) โครงหน้าเว็บรวม ===================== */
export default function Layout() {
  return (
    <div className="min-h-screen bg-black grid place-items-center p-4">
      <div className="w-full max-w-[1040px] min-h-[610px] rounded-[28px] bg-[#1c1c1c] p-[45px] flex gap-10 items-stretch">
        <ProfileCard />
        <main className="flex-1 min-w-0 pt-6">
          <Outlet />
        </main>
        <SideNav />
      </div>
    </div>
  )
}