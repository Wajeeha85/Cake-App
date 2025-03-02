
import CakeRecipe from "./Components/Pages/CakeRecipe";
import CakesPage from "./Components/Pages/CakesPage";
import HeroPage from "./Components/Pages/HeroPage";
import Login from "./Components/Pages/Login";
import { FloatingNavDemo,StylishBackground } from "./Components/Pages/Navbar";

export default function Home() {
  return (
    <div >
      <FloatingNavDemo/>
        <HeroPage/>
        <CakesPage/>
        <CakeRecipe/>
        <Login/>
     <StylishBackground/>
    </div>
  );
}
