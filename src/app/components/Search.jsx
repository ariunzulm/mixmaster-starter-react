"use client";

export default function Search({ inputValue, onChange, onSearch }) {
  const handleSearch = (e) => {
    onChange(e.target.value);
  };
  return (
    <section className=" bg-white shadow-lg py-4 px-8 flex items-center justify-center md:py-8 md:px-10">
      <input
        className="bg-gray-50 py-1.5 px-3 min-w-40 md:min-w-48 lg:min-w-64 rounded-sm text-sm border border-gray-200"
        type="text"
        onChange={handleSearch}
        placeholder="Search your drink..."
      />
      <button
        onClick={onSearch}
        className="bg-emerald-500 rounded-sm text-sm py-1.5 px-3 cursor-pointer font-medium text-white"
      >
        Search
      </button>
    </section>
  );
}
