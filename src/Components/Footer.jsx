export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] px-6 md:px-12 py-6
      flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="font-display font-extrabold text-base">
        Maiky-<span className="text-orange-400">devs</span><span className="text-[#6c6dff]">.</span>
      </span>
      <span className="text-[#888899] text-xs">
        © {new Date().getFullYear()} — Hermosillo, Sonora 🇲🇽
      </span>
    </footer>
  )
}