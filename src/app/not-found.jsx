import Link from 'next/link'
function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold">404 Not found</h1>
            <Link href="/" className="text-slate-400 text-2xl mt-5">
                Back to home
            </Link>
        </div>
    </section>
  )
}

export default NotFound