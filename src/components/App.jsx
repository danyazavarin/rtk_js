import {RecipeItem} from "./recipe-item/RecipeItem.jsx";
import {Header} from "./header/Header.jsx";

export default function App() {
  return (
      <section>
          <Header />
          <div>
              <RecipeItem recipe={{
                  id: 1,
                  name: 'Lazanya',
              }}/>
              <RecipeItem recipe={{
                  id: 2,
                  name: 'Kasha',
              }}/>
              <RecipeItem recipe={{
                  id: 3,
                  name: 'Pasta',
              }}/>
          </div>
      </section>
  )
}