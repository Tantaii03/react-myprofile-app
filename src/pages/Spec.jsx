import { BsCodeSlash, BsGlobe, BsVectorPen } from 'react-icons/bs'

const specs = [
  {
    title: 'Front end-developer',
    icon: BsCodeSlash,
    text: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
  },
  {
    title: 'UI/UX Designer',
    icon: BsGlobe,
    text: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
  },
  {
    title: 'Graphic designer',
    icon: BsVectorPen,
    text: 'As a graphic designer, I transform ideas into visually striking and impactful designs.',
  },
]

export default function Spec() {
  return (
    <section>
      <h1 className="text-[34px] font-bold tracking-wide text-white">
        My <span className="text-[#ff5a00]">Specializations</span>
      </h1>

      <div className="mt-6 flex flex-col gap-5 max-w-[495px]">
        {specs.map(({ title, icon: Icon, text }) => (
          <div
            key={title}
            className="relative rounded-xl border border-[#ff5a00] px-7 pt-6 pb-7 hover:bg-[#ff5a00]/5 transition-colors"
          >
            <h3 className="text-[15px] font-bold text-white">{title}</h3>
            <p className="mt-2 max-w-[370px] text-[15px] leading-snug text-[#6e6e6e]">{text}</p>
            <Icon className="absolute right-7 top-6 text-[22px] text-[#ff5a00]" />
          </div>
        ))}
      </div>
    </section>
  )
}