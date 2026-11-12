import picture from '../assets/images/Picture.png'

export default function Projects() {
  return (
    <section>
      <h1 className="text-[34px] font-bold tracking-wide text-white">
        Featured <span className="text-[#ff5a00]">Projects</span>
      </h1>
      <h3 className="mt-5 text-[19px] font-bold text-white">
        Manage Task App - fullstack web development
      </h3>
      <p className="mt-2 max-w-[540px] text-[15px] leading-snug text-[#6e6e6e]">
        Here's my latest project built with Next.js and Laravel, using TailwindCSS on the front-end.
        Watch the video to see the responsive landing page in action!
      </p>
      <img
        src={picture}
        alt="Manage Task App"
        className="mt-5 w-[440px] max-w-full rounded-sm"
      />
    </section>
  )
}