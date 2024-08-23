import React from "react";
import { UserProfile } from "./components/one/UserProfile";
import { SearchUI } from "./components/two/SearchUI";
import { Review } from "./components/three/Review";
import { FoodsList } from "./components/fourth/FoodsList";

const App: React.FC = () => {
  return (
    <div className="h-auto bg-gray-100">
      <UserProfile />
      <SearchUI />
      <Review />
      <FoodsList />
    </div>
  );
};

export default App;
