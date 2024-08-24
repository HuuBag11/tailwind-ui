import React from "react";
import { UserProfile } from "./components/one/UserProfile";
import { SearchUI } from "./components/two/SearchUI";
import { Review } from "./components/three/Review";
import { FoodsList } from "./components/fourth/FoodsList";
import { Noti } from "./components/fifth/Noti";
import FixedMenu from "./components/menu/Menu";

const App: React.FC = () => {
  return (
    <div className="h-auto bg-gray-100">
      <FixedMenu />
      <UserProfile />
      <SearchUI />
      <Review />
      <FoodsList />
      <Noti />
    </div>
  );
};

export default App;
