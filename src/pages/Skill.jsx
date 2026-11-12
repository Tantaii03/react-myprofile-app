import { FaReact, FaCss3, FaNodeJs, FaGithub } from 'react-icons/fa6'
import { SiFigma, SiNextdotjs } from 'react-icons/si'

const skills = [
  { name: 'React', pct: 60, icon: <FaReact className="text-[#61dafb]" />, active: true },
  { name: 'Figma', pct: 85, icon: <SiFigma className="text-white" /> },
  { name: 'HTML/CSS', pct: 80, icon: <FaCss3 className="text-white" /> },
  {
    name: 'Next.js',
    pct: 80,
    icon: (
      <span className="grid place-items-center w-[50px] h-[50px] rounded-full bg-white">
        <SiNextdotjs className="text-black text-[50px]" />
      </span>
    ),
  },
  { name: 'Java Script', pct: 60, icon: <FaNodeJs className="text-white" /> },
  { name: 'GitHub', pct: 90, icon: <FaGithub className="text-white" /> },
]

export default function Skill() {
  return (
    <section>
      <h1 className="text-[34px] font-bold tracking-wide text-white">
        My <span className="text-[#ff5a00]">Skills</span>
      </h1>

      <div className="mt-4 grid grid-cols-4 gap-x-5 gap-y-5 max-w-[560px]">
        {skills.map((s) => (
          <div key={s.name} className="flex flex-col items-center">
            <div
              className={`w-[108px] h-[150px] rounded-full border flex flex-col items-center justify-center gap-4 transition-colors hover:border-[#ff5a00] ${
                s.active ? 'border-[#ff5a00]' : 'border-[#444]'
              }`}
            >
              <span className="text-[56px] leading-none">{s.icon}</span>
              <span className="text-[16px] tracking-wider text-[#ff5a00]">{s.pct}%</span>
            </div>
            <p className="mt-2 text-[14px] text-white">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}