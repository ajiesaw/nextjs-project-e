const Paras = () => {
  return (
    /*<div className="text-black">
      <p>Paras Frontend Intern Hiring Test</p>
      <p>Please modify the /src based on the test</p>
    </div>*/
    <nav className="flex sm:justify-center space-x-4">
  {[
    ['Home', '/dashboard'],
    ['Team', '/team'],
    ['Projects', '/projects'],
    ['Reports', '/reports'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
  )
}

export default Paras