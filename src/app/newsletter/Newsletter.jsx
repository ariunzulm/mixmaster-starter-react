export default function NewsLetter() {
  return (
    <div className="bg-white mx-auto mt-20 flex flex-col justify-center w-full gap-y-4 py-20 px-8 rounded-2xl shadow-xs max-w-150 ">
      <div className="flex justify-center">
        <h4 className="font-semibold capitalize text-base">our newsletter</h4>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 py-1.5 px-3 min-w-40 md:min-w-48 lg:min-w-64 rounded-sm text-sm border border-gray-200"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="bg-gray-50 py-1.5 px-3 min-w-40 md:min-w-48 lg:min-w-64 rounded-sm text-sm border border-gray-200"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="test@test.com"
          className="bg-gray-50 py-1.5 px-3 min-w-40 md:min-w-48 lg:min-w-64 rounded-sm text-sm border border-gray-200"
        />
        <button className="bg-emerald-500 w-full hover:bg-emerald-600 transition-colors rounded-sm text-base py-1 px-3 mt-2 font-medium text-white cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
}
