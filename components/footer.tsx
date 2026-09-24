export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col gap-2 px-4 pb-10 pt-6 font-mono text-xs text-faint sm:flex-row sm:justify-between sm:px-6">
      <span>© {new Date().getFullYear()} Ashok Pasala</span>
      <span>
        <a href="/llms.txt" className="link">
          llms.txt
        </a>{' '}
        · Built with Next.js
      </span>
    </footer>
  )
}
