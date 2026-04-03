import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5' : ''}`}>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <span className="font-display font-extrabold text-lg tracking-tight">
          <span className="text-white">Maiky-</span>
          <span className="text-orange-400">devs</span>
          <span className="text-[#6c6dff]">.</span>
        </span>

        {/* Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="text-xs uppercase tracking-widest text-[#888899] hover:text-white transition-colors no-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#6c6dff] hover:bg-[#a78bfa]
            text-white text-sm font-medium px-5 py-2 rounded-full transition-all hover:-translate-y-0.5 no-underline">
          Hablemos
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer">
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300
            ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300
            ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300
            ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111118] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-[#888899] hover:text-white transition-colors no-underline">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="flex justify-center bg-[#6c6dff] text-white text-sm font-medium py-2.5 rounded-full mt-1 no-underline">
            Hablemos
          </a>
        </div>
      )}
    </nav>
  )
}