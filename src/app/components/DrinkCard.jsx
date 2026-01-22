export default function DrinkCard({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-8">
      {products.map((cardInfo) => {
        const { id, imageUrl, title, description, type } = cardInfo;

        return (
          <div
            key={id}
            className="flex flex-col rounded-md overflow-hidden shadow-lg"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="text-lg text-gray-700">{description}</p>
              <p className="text-base text-gray-500">{type}</p>
              <button className="bg-emerald-500 w-25 hover:bg-emerald-600 transition-colors rounded-sm text-base py-1.5 px-3 mt-2 font-medium text-white cursor-pointer">
                Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
