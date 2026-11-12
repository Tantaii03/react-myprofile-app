import { useState } from 'react'

const field =
  'w-full bg-transparent border-0 border-b border-[#555] pt-3 pb-1.5 text-[13px] text-white outline-none focus:border-[#ff5a00] font-poppins'
const label = 'block text-[12px] text-[#ff5a00] font-poppins'

export default function Contact() {
  const [form, setForm] = useState({
    email: '', phone: '', name: '', address: '', content: '', newsletter: false,
  })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    alert('Thank you! Your message has been sent.')
  }

  return (
    <section>
      <h1 className="text-[34px] font-bold tracking-wide text-white">
        Contact <span className="text-[#ff5a00]">Me</span>
      </h1>
      <p className="mt-3 text-[17px] text-white">Let’s get in touch!</p>

      <form onSubmit={onSubmit} className="mt-9 max-w-[500px] grid grid-cols-2 gap-x-7 gap-y-4">
        <div>
          <label className={label}>Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} className={field} />
        </div>
        <div>
          <label className={label}>Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={onChange} className={field} />
        </div>
        <div>
          <label className={label}>Name</label>
          <input type="text" name="name" value={form.name} onChange={onChange} className={field} />
        </div>
        <div>
          <label className={label}>Adress</label>
          <input type="text" name="address" value={form.address} onChange={onChange} className={field} />
        </div>

        <div>
          <label className={label}>Content</label>
          <textarea
            name="content"
            rows={4}
            value={form.content}
            onChange={onChange}
            className={`${field} resize-none`}
          />
        </div>
        <div />

        <label className="flex items-center gap-2 text-[10px] text-white font-poppins">
          <input
            type="checkbox"
            name="newsletter"
            checked={form.newsletter}
            onChange={onChange}
            className="w-3 h-3 accent-[#ff5a00]"
          />
          I would like to receive the newsletter.
        </label>
        <div />

        <button
          type="submit"
          className="mt-1 rounded-md bg-[#ff5a00] py-1.5 text-[14px] font-medium text-white font-poppins hover:bg-[#ff7a2e] transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  )
}