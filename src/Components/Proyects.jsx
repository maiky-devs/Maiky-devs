const PROJECTS = [
  {
    emoji: '🏋️',
    gradient: 'linear-gradient(135deg, #0f1923 0%, #1a2f4a 100%)',
    name: 'Wellf',
    tags: [
      { label: 'Mobile App',    cls: 'bg-[#6c6dff]/15 text-[#a78bfa]' },
      { label: 'Independiente', cls: 'bg-[#4ade80]/10 text-[#4ade80]' },
    ],
    desc: 'App de gestión de clases para un gimnasio local. Los miembros pueden reservar clases y el staff administra el calendario de actividades.',
  },
  {
    emoji: '🛡️',
    gradient: 'linear-gradient(135deg, #0f1520 0%, #1a1f3a 100%)',
    name: 'ICOM Safety',
    tags: [
      { label: 'Mobile App',   cls: 'bg-[#fbbf24]/10 text-[#fbbf24]' },
      { label: 'Colaboración', cls: 'bg-[#4ade80]/10 text-[#4ade80]' },
    ],
    desc: 'Aplicación empresarial desarrollada en colaboración. Solución orientada a la seguridad para operaciones internas de ICOM.',
  },
  {
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #1a1208 0%, #2e200a 100%)',
    name: 'ICOM Reporter',
    tags: [
      { label: 'Mobile App',   cls: 'bg-[#fbbf24]/10 text-[#fbbf24]' },
      { label: 'Colaboración', cls: 'bg-[#4ade80]/10 text-[#4ade80]' },
    ],
    desc: 'Herramienta de reporteo de servicios para el equipo de campo de ICOM. Facilita el seguimiento y documentación de operaciones.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <p className="text-[#6c6dff] text-[0.7rem] uppercase tracking-widest font-medium mb-3">
          / proyectos
        </p>
        <h2 className="font-display font-extrabold tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          Lo que he<br />construido.
        </h2>
        <p className="text-[#888899] mb-12 max-w-md">
          Aplicaciones móviles para clientes reales, desarrolladas de forma independiente y en equipo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(p => (
            <div key={p.name}
              className="group bg-[#111118] border border-white/5 rounded-2xl overflow-hidden
                transition-all duration-300 hover:-translate-y-1 hover:border-[#6c6dff]/50">

              {/* Image area */}
              <div className="h-44 flex items-center justify-center border-b border-white/5"
                style={{ background: p.gradient }}>
                <span className="text-5xl">{p.emoji}</span>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map(t => (
                    <span key={t.label}
                      className={`text-[0.65rem] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full ${t.cls}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{p.name}</h3>
                <p className="text-[#888899] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}