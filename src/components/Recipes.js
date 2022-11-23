import React, {useState} from 'react'
import '../styles/Recipes.css'


const Recipes = () => {
    const [imgTag, setImgTag] = useState('')
    const [cocktailName, setCocktailName] = useState('')
    const [cocktailInstructions, setCocktailInstructions] = useState('')
    const [userCocktailName, setUserCocktailName] = useState('')
    const fetchCocktails = async() => {

        const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userCocktailName}`) 
    
        const cocktailList = await cocktails.json()

        const directions = cocktailList.drinks[0].strInstructions

        const name = cocktailList.drinks[0].strDrink

        const img = cocktailList.drinks[0].strDrinkThumb

        setCocktailName(name)
        setCocktailInstructions(directions)
        setImgTag(img)

    }
  return (
    <>
    {/* <button onClick={fetchCocktails}>click me</button> */}
    <input type='text' value={userCocktailName} id='user-cocktail-name' onChange={e => setUserCocktailName(e.target.value)} />
    <button type='submit' id='user-cocktail-submit' onClick={fetchCocktails}>Submit</button>
    <p id='cocktail-name'>{cocktailName}</p>
    <img alt={cocktailName} src={imgTag} />
    <p id='cocktail-instructions'>{cocktailInstructions}</p>
    

    </>
  )
}

export default Recipes