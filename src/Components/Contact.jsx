
const LINKS = [
  { icon: '✉️', label: 'Email',    value: 'lopezjavmiguel@gmail.com', href: 'mailto:lopezjavmiguel@gmail.com' },
  { icon: '📱', label: 'Celular',  value: '662-404-4160',             href: 'tel:6624044160' },
  { icon: '💼', label: 'LinkedIn', value: 'Miguel Lopez',       href: 'https://www.linkedin.com/in/miguel-lopez-505422264/' },
]

export default function Contact() {

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
              Si tienes una idea para una app móvil, necesitas apoyo con tu pagina web o quieres
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

        </div>
      </div>
    </section>
  )
}