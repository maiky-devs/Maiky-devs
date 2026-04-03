export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center
      px-6 md:px-12 pt-24 pb-16 overflow-hidden max-w-6xl mx-auto">

      {/* background */}
      <div className="absolute inset-0 grid-bg pointer-events-auto" />

      {/* Blob */}
      <div
        className="absolute rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '50px',
          background: 'radial-gradient(circle, rgba(108,109,255,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="fade-up flex items-center gap-2 w-fit mb-6 px-4 py-1.5 rounded-full
        bg-[#1c1c28] border border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#4ade80] pulse-dot" />
        <span className="text-[#a78bfa] text-[0.7rem] uppercase tracking-widest font-medium">
          Disponible para proyectos
        </span>
      </div>

      <h1 className="fade-up-2 font-display font-extrabold leading-[1.02] tracking-tight mb-6"
        style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
        Miguel<br />
        <span className="text-[#6c6dff]">Lopez.</span>
      </h1>

      <p className="fade-up-3 text-[#888899] text-base md:text-lg max-w-lg leading-relaxed mb-8">
        Ing. Sistemas Computacionales · Líder de TI · Desarrollador Mobile.<br />
        Construyo soluciones digitales que funcionan en el mundo real.
      </p>

      <div className="fade-up-4 flex flex-wrap gap-4">
        <a href="#projects"
          className="inline-flex items-center gap-2 bg-[#6c6dff] hover:bg-[#a78bfa]
            text-white font-medium px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 text-sm no-underline">
          Ver proyectos
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#contact"
          className="inline-flex items-center gap-2 border border-white/10
            hover:border-[#6c6dff] hover:text-[#6c6dff] text-white font-medium
            px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 text-sm no-underline">
          Contactar
        </a>
      </div>

      <div className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-white/5">
        {[
          { num: '3 +', label: 'Apps publicadas' },
          { num: '1 +', label: 'Landing page' },
          { num: 'ITH', label: 'Ing. Sistemas Comp.' },
          { num: 'TI', label: 'Líder de tecnología' },
        ].map(s => (
          <div key={s.label}>
            <div className="font-display font-extrabold text-3xl leading-none mb-1">{s.num}</div>
            <div className="text-[#888899] text-[0.68rem] uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}