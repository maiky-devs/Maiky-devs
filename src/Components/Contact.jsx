import { useState } from 'react'

const LINKS = [
  { icon: '✉️', label: 'Email',    value: 'lopezjavmiguel@gmail.com', href: 'mailto:lopezjavmiguel@gmail.com' },
  { icon: '📱', label: 'Celular',  value: '662-404-4160',             href: 'tel:6624044160' },
  { icon: '💼', label: 'LinkedIn', value: 'Miguel Ángel López',       href: 'https://www.linkedin.com/in/miguel-lopez-505422264/' },
]

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Conecta con Formspree o EmailJS aquí
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <p className="text-[#6c6dff] text-[0.7rem] uppercase tracking-widest font-medium mb-3">
          / contacto
        </p>
        <h2 className="font-display font-extrabold tracking-tight leading-tight mb-12"
          style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          ¿Tienes un proyecto<br />en mente?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Links */}
          <div>
            <p className="text-[#888899] leading-relaxed mb-8">
              Si tienes una idea para una app móvil, necesitas apoyo en tecnología o quieres
              colaborar, escríbeme. Siempre estoy abierto a buenas conversaciones.
            </p>
            <div className="flex flex-col gap-3">
              {LINKS.map(c => (
                <a key={c.label} href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-[#1c1c28] border border-white/5
                    hover:border-[#6c6dff]/50 rounded-xl px-4 py-3.5 no-underline
                    transition-all hover:translate-x-1 group">
                  <div className="w-9 h-9 rounded-xl bg-[#6c6dff]/10 border border-[#6c6dff]/20
                    flex items-center justify-center text-base flex-shrink-0">
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[0.65rem] uppercase tracking-widest text-[#888899]">
                      {c.label}
                    </span>
                    <span className="block text-sm font-medium text-white truncate">
                      {c.value}
                    </span>
                  </div>
                  <span className="text-[#888899] group-hover:text-[#6c6dff] transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1c1c28] border border-white/5 rounded-2xl p-6">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🚀</div>
                <p className="font-display font-bold text-lg mb-2">¡Mensaje enviado!</p>
                <p className="text-[#888899] text-sm">Te respondo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: 'name',    label: 'Tu nombre', type: 'text',  placeholder: 'Juan Pérez' },
                  { id: 'email',   label: 'Email',     type: 'email', placeholder: 'juan@empresa.com' },
                ].map(f => (
                  <div key={f.id}>
                    <label className="block text-[0.65rem] uppercase tracking-widest text-[#888899] mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type} required placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full bg-[#0a0a0f] border border-white/10 focus:border-[#6c6dff]
                        rounded-xl px-4 py-3 text-sm text-white placeholder-[#888899]
                        outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-[#888899] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required rows={5} placeholder="Cuéntame de tu proyecto..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-white/10 focus:border-[#6c6dff]
                      rounded-xl px-4 py-3 text-sm text-white placeholder-[#888899]
                      outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#6c6dff]
                    hover:bg-[#a78bfa] text-white font-medium py-3 rounded-xl
                    transition-all hover:-translate-y-0.5 text-sm mt-1 border-0 cursor-pointer">
                  Enviar mensaje
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}