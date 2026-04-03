const TIMELINE = [
  {
    date:    'Actual',
    role:    'Líder de TI',
    company: 'Empresa actual · Hermosillo, Sonora',
    desc:    'Dirección del área de tecnología, gestión de infraestructura, liderazgo de equipo técnico y transformación digital.',
    color:   '#6c6dff',
  },
  {
    date:    'Paralelo — En curso',
    role:    'Desarrollador Mobile',
    company: 'Freelance & colaboraciones',
    desc:    'Desarrollo de apps móviles: Wellf para un gimnasio local, ICOM Safety e ICOM Reporter en colaboración con otra empresa.',
    color:   '#fbbf24',
  },
  {
    date:    'Proyectos de infraestructura',
    role:    'Técnico en Redes',
    company: 'ICRESON · Ferromex',
    desc:    'Cableado estructural, fibra óptica, instalación de routers, Mikrotiks y cámaras para diversas empresas en Sonora.',
    color:   '#4ade80',
  },
  {
    date:    'Instituto Tecnológico de Hermosillo',
    role:    'Ing. Sistemas Computacionales',
    company: 'ITH · Hermosillo, Sonora',
    desc:    'Formación en desarrollo de software, bases de datos (MySQL, SQL Server), redes, Power BI y ciencia de datos. Técnico en Programación desde CBTIS 11.',
    color:   '#a78bfa',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-[#111118] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <p className="text-[#6c6dff] text-[0.7rem] uppercase tracking-widest font-medium mb-3">
          / experiencia
        </p>
        <h2 className="font-display font-extrabold tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          Mi trayectoria.
        </h2>
        <p className="text-[#888899] mb-14 max-w-md">
          De la infraestructura al liderazgo, del código al producto.
        </p>

        <div className="relative max-w-2xl">
          {/* Line */}
          <div className="absolute left-[11px] top-2 bottom-0 w-px bg-white/10" />

          {TIMELINE.map((item, i) => (
            <div key={i} className="flex gap-7 mb-10 last:mb-0">

              {/* Dot */}
              <div className="w-6 h-6 rounded-full border-2 bg-[#0a0a0f] flex-shrink-0 mt-1 relative z-10
                flex items-center justify-center"
                style={{ borderColor: item.color }}>
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              </div>

              {/* Content */}
              <div>
                <p className="text-[0.68rem] uppercase tracking-widest font-medium mb-1"
                  style={{ color: item.color }}>
                  {item.date}
                </p>
                <h3 className="font-display font-bold text-lg mb-0.5">{item.role}</h3>
                <p className="text-[#888899] text-sm mb-2">{item.company}</p>
                <p className="text-[#888899] text-sm leading-relaxed">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}