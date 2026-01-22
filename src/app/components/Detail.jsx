export default function Detail() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-10 py-8">
      <button className="bg-emerald-500 w-25 rounded-sm text-sm py-1.5 px-3 cursor-pointer font-medium text-white">
        Back Home
      </button>
      <section className="flex flex-col rounded-md overflow-hidden shadow-lg">
        <img
          className="rounded w-full object-cover"
          src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
          alt="title"
        />
        <div className="flex flex-col gap-y-4 mt-8">
          <p className="flex gap-x-4">
            <span className="bg-emerald-500 w-fit rounded-sm text-base py-1.5 px-3  font-medium text-emerald-950">
              Name:
            </span>
            A1
          </p>
          <p>
            <span className="bg-emerald-500 w-fit rounded-sm text-base py-1.5 px-3  font-medium text-emerald-950">
              Category:
            </span>
            Cocktail
          </p>
          <p>
            <span className="bg-emerald-500 w-fit rounded-sm text-base py-1.5 px-3  font-medium text-emerald-950">
              Info:
            </span>
            Alcoholic
          </p>
          <p>
            <span className="bg-emerald-500 w-fit rounded-sm text-base py-1.5 px-3  font-medium text-emerald-950">
              Glass:
            </span>
            Cocktail lass
          </p>
          <p>
            <span className="bg-emerald-500 w-fit rounded-sm text-base py-1.5 px-3  font-medium text-emerald-950">
              Ingredient:
            </span>
            Gin,Grand Marnier,Lemon Juice,Grenadine
          </p>
          <p>
            <span className="bg-emerald-500 w-fit rounded-sm text-base py-1.5 px-3  font-medium text-emerald-950">
              Instructions:
            </span>
            Pour all ingredients into a cocktail shaker, mix and serve over ice
            into a chilled glass.
          </p>
        </div>
      </section>
    </div>
  );
}
