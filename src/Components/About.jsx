const SKILLS = [
  'React', 'Flutter', 'iOS / Android', 'Java',
  'MySQL', 'SQL Server', 'Redes y telecom.', 'Power BI',
  'Fibra óptica', 'Liderazgo TI', 'Desarrollo web', 'Inglés avanzado', 'AWS'
]

const INFO = [
  { label: 'Ubicación',  value: 'Hermosillo, Sonora 🇲🇽' },
  { label: 'Formación',  value: 'ITH — Ing. Sistemas Comp.' },
  { label: 'Rol actual', value: 'Líder de TI en ICOM' },
  { label: 'Interés',    value: 'Apps móviles + Web' },
  { label: 'Idiomas',    value: 'Español / Inglés avanzado' },
  { label: 'Estado',     value: '● Abierto a proyectos', green: true },
]

export default function About() {
  return (
    <section id="about" className="bg-[#111118] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <p className="text-[#6c6dff] text-[0.7rem] uppercase tracking-widest font-medium mb-3">
          / sobre mí
        </p>
        <h2 className="font-display font-extrabold tracking-tight leading-tight mb-12"
          style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
          Tecnología con<br />propósito.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          // Skills
          <div>
            <p className="text-[#888899] leading-relaxed mb-4">
              Soy <span className="text-white font-medium">Miguel López</span>, Ingeniero en
              Sistemas Computacionales del ITH. Me apasiona aprender constantemente y aplicar ese
              conocimiento en soluciones que funcionen.
            </p>
            <p className="text-[#888899] leading-relaxed mb-4">
              Actualmente lidero el área de TI mientras desarrollo aplicaciones móviles de forma
              independiente y en colaboración. Mi background cubre{' '}
              <span className="text-white font-medium">redes, bases de datos, desarrollo de software y telecomunicaciones</span>.
            </p>
            <p className="text-[#888899] leading-relaxed mb-8">
              Ahora expando mi stack hacia el{' '}
              <span className="text-white font-medium">desarrollo web</span>{' '}
              para ofrecer soluciones digitales completas.
            </p>

            <p className="text-[0.68rem] uppercase tracking-widest text-[#888899] mb-3">
              Stack & habilidades
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(s => (
                <span key={s}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/10
                    text-[#888899] hover:border-[#6c6dff] hover:text-[#6c6dff] transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          // Tarjeta de informacion 
          <div className="bg-[#1c1c28] border border-white/5 rounded-2xl p-6">
            <p className="font-display font-bold text-base mb-5">Info rápida</p>
            {INFO.map((item, i) => (
              <div key={item.label}
                className={`flex justify-between items-center py-3
                  ${i < INFO.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-[#888899] text-sm">{item.label}</span>
                <span className={`text-sm font-medium ${item.green ? 'text-[#4ade80]' : 'text-white'}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}