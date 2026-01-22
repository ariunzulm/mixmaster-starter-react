export default function Navigation() {
  return (
    <section className="w-full bg-white  ">
      <nav className="w-full bg-white px-6 py-6  md:px-10 lg:px-18 md:text-3xl md:flex justify-between mx-auto shadow-sm">
        <span className="text-emerald-500 text-2xl font-bold tracking-wider">
          MixMaster
        </span>
        <div className="flex flex-col md:items-center gap-2 md:flex-row">
          <a
            className=" text-base cursor-pointer font-medium hover:text-emerald-500"
            href="/"
          >
            Home
          </a>
          <a
            className=" text-base cursor-pointer font-medium hover:text-emerald-500"
            href="/about"
          >
            About
          </a>
          <a
            className=" text-base cursor-pointer font-medium hover:text-emerald-500"
            href="/newsletter"
          >
            Newsletter
          </a>
        </div>
      </nav>
    </section>
  );
}
