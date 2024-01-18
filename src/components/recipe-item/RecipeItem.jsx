import styles from './RecipeItem.module.css'
import {useDispatch} from "react-redux";
import {actions} from "../../store/favorites/favorites.slice.js";
import {useFavorites} from "../../hooks/useFavorites.js";

export const RecipeItem = ({recipe}) => {
    const favorites = useFavorites();
    const dispatch = useDispatch();
    const isExist = favorites.some(r => r.id === recipe.id);

    return (
        <div className={styles.item}>
            {/*<img src="" alt=""/>*/}
            <h3>{recipe.name}</h3>
            <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>
                {isExist ? 'Remove from' : 'Add to'} favorites
            </button>
        </div>
    )
}