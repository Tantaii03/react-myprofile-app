const items = [
  {
    year: '2022 - Present',
    orange: true,
    rows: [
      { title: 'UI/UX Designer', sub: 'Freelance' },
      { title: 'Fullstack Web Developer', sub: 'Freelance' },
    ],
  },
  {
    year: '2026- 2027',
    rows: [{ title: 'Bachelor Degree in Faculty of Computer Engineering', sub: 'Southeast Asia University' }],
  },
  {
    year: '2016- 2021',
    rows: [{ title: 'High school', sub: 'Bangliwittaya School' }],
  },
]

export default function EduExp() {
  return (
    <section>
      <h1 className="text-[34px] font-bold tracking-wide text-white">
        Education &amp; <span className="text-[#ff5a00]">Experience</span>
      </h1>

      <div className="mt-9 ml-7 space-y-6">
        {items.map((it) => (
          <div key={it.year}>
            <p className={`text-[17px] ${it.orange ? 'text-[#ff5a00]' : 'text-[#7a7a7a]'}`}>{it.year}</p>
            {it.rows.map((r) => (
              <div key={r.title} className="mt-0.5">
                <p className="text-[17px] font-bold text-white leading-tight">{r.title}</p>
                <p className="text-[17px] text-[#7a7a7a] leading-tight ml-0.5">{r.sub}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}