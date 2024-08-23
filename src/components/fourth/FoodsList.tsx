import { useState } from "react";

interface Food {
  name: string;
  type: string;
  avatar: string;
  ingredients: string[];
}

const Foods: Food[] = [
  {
    name: "Spaghetti Carbonara",
    type: "Main course",
    avatar:
      "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Pancetta",
      "Parmesan cheese",
      "Black pepper",
    ],
  },
  {
    name: "Caesar Salad",
    type: "Appertizer",
    avatar:
      "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "Romaine lettuce",
      "Caesar dressing",
      "Croutons",
      "Parmesan cheese",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    type: "Main course",
    avatar:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Spices", "Cream"],
  },
  {
    name: "Chocolate Cake",
    type: "Dessert",
    avatar:
      "https://images.unsplash.com/photo-1623888688438-bff385ccfaa3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
  },
  {
    name: "Mango Smoothie",
    type: "Beverages",
    avatar:
      "https://images.unsplash.com/photo-1679310289578-680ff6ad5188?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Mango", "Yogurt", "Honey", "Ice cubes"],
  },
  {
    name: "Vegetable Stir Fry",
    type: "Main course",
    avatar:
      "https://images.unsplash.com/photo-1543826173-70651703c5a4?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Bell peppers", "Broccoli", "Carrots", "Soy sauce", "Garlic"],
  },
  {
    name: "Bruschetta",
    type: "Appertizer",
    avatar:
      "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Tomatoes", "Basil", "Garlic", "Olive oil", "Bread"],
  },
  {
    name: "Lemon Tart",
    type: "Dessert",
    avatar:
      "https://images.unsplash.com/photo-1543508185-225c92847541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Lemon", "Sugar", "Butter", "Eggs", "Flour"],
  },
  {
    name: "Beef Stroganoff",
    type: "Main course",
    avatar:
      "https://images.unsplash.com/photo-1668724776334-548671c13751?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Beef", "Mushrooms", "Sour cream", "Onion", "Garlic"],
  },
  {
    name: "Greek Salad",
    type: "Appertizer",
    avatar:
      "https://images.unsplash.com/photo-1657014193301-54e4442fa2fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "Cucumbers",
      "Tomatoes",
      "Olives",
      "Feta cheese",
      "Red onion",
    ],
  },
  {
    name: "Pumpkin Soup",
    type: "Main course",
    avatar:
      "https://images.unsplash.com/photo-1603355736640-34a2bee52da3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Pumpkin", "Onion", "Garlic", "Vegetable broth", "Cream"],
  },
  {
    name: "Apple Pie",
    type: "Dessert",
    avatar:
      "https://images.unsplash.com/photo-1601000938259-9e92002320b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Apples", "Flour", "Sugar", "Butter", "Cinnamon"],
  },
];

export const FoodsList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const FILTERS: string[] = [
    "Appertizer",
    "Main course",
    "Mide dish",
    "Dessert",
    "Beverages",
  ];

  const filteredFoods = Foods.filter((food) => {
    const matchsQuery =
      query.length === 0 ||
      food.name.toLowerCase().includes(query.toLowerCase());
    const matchsFilter = !selectedFilter || food.type === selectedFilter;
    return matchsQuery && matchsFilter;
  });

  return (
    <div
      id="foods"
      className="w-full min-h-screen xl:py-10 h-auto m-auto bg-user-list bg-no-repeat bg-opacity-50 bg-cover bg-center flex items-center xl:p-0 p-5"
    >
      <div className="card mx-auto md:w-[80%] w-full rounded-[16px] bg-white shadow-md md:p-[100px] p-[20px]">
        <h3 className="text-[32px] font-medium mb-6">Foods</h3>
        <div className="flex items-center justify-between xl:flex-row flex-col">
          <div className="flex xl:min-w-[40%] min-w-full items-center rounded-[4px] h-[56px] mr-2 border p-2 pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              className="w-full border-none outline-none ml-2"
              placeholder="Search foods"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="space-x-2 xl:mt-0 mt-4">
            {FILTERS.map((flt) => (
              <a
                key={flt}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedFilter(flt);
                }}
                id={flt}
                href="#"
                className="mb-2 inline-block cursor-pointer rounded-lg px-4 py-3 hover:bg-[#849FFF] hover:text-white text-black font-normal text-[16px]"
              >
                {flt}
              </a>
            ))}
            <a
              href="#"
              className="mb-2 inline-block cursor-pointer rounded-lg px-4 py-3 hover:bg-[#849FFF] hover:text-white text-black font-normal text-[16px]"
              onClick={(e) => {
                e.preventDefault();
                setSelectedFilter(null);
              }}
            >
              All
            </a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.map((food) => (
            <div
              key={food.name}
              className="aspect-[4/3] card p-4 flex flex-col justify-end bg-cover bg-center bg-no-repeat rounded-lg shadow-md hover:shadow-lg"
              style={{ backgroundImage: `url(${food.avatar})` }}
            >
              <h4 className="text-xl font-semibold mt-4">{food.name}</h4>
              <p className="text-black text-[14px]">{food.type}</p>
              <ul className="mt-2 flex flex-wrap gap-1">
                {food.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="text-gray-500 text-[14px] px-3 py-1 min-w-max rounded-[100px] bg-gray-200"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
