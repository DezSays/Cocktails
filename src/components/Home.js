import React, {useState,useEffect} from 'react'


const Home = () => {
    const [cocktailName, setCocktailName] = useState('')
    const [imgTag, setImgTag] = useState('')
    const [cocktailInstructions, setCocktailInstructions] = useState('')
    const [measurements1, setMeasurements1] = useState('')
    const [ingredientList1, setIngredientList1] = useState('')
    const [measurements2, setMeasurements2] = useState('')
    const [ingredientList2, setIngredientList2] = useState('')
    const [measurements3, setMeasurements3] = useState('')
    const [ingredientList3, setIngredientList3] = useState('')
    const [measurements4, setMeasurements4] = useState('')
    const [ingredientList4, setIngredientList4] = useState('')
    const [measurements5, setMeasurements5] = useState('')
    const [ingredientList5, setIngredientList5] = useState('')
    const [measurements6, setMeasurements6] = useState('')
    const [ingredientList6, setIngredientList6] = useState('')
    const [measurements7, setMeasurements7] = useState('')
    const [ingredientList7, setIngredientList7] = useState('')
    const [measurements8, setMeasurements8] = useState('')
    const [ingredientList8, setIngredientList8] = useState('')
    const [measurements9, setMeasurements9] = useState('')
    const [ingredientList9, setIngredientList9] = useState('')
    const [measurements10, setMeasurements10] = useState('')
    const [ingredientList10, setIngredientList10] = useState('')
    const [measurements11, setMeasurements11] = useState('')
    const [ingredientList11, setIngredientList11] = useState('')
    const [measurements12, setMeasurements12] = useState('')
    const [ingredientList12, setIngredientList12] = useState('')
    const [measurements13, setMeasurements13] = useState('')
    const [ingredientList13, setIngredientList13] = useState('')
    const [measurements14, setMeasurements14] = useState('')
    const [ingredientList14, setIngredientList14] = useState('')
    const [measurements15, setMeasurements15] = useState('')
    const [ingredientList15, setIngredientList15] = useState('')
    const [ingredientTitle, setIngredientTitle] = useState('')


      useEffect(() => {
        fetchCocktailByID()
      }, [])
      


    const fetchCocktailByID = async() => {

        function randInt(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          const count = randInt(11000, 11050)


        const cocktailData = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count}`)
        const cocktails = await cocktailData.json()
        const name = cocktails.drinks[0].strDrink
        const directions = cocktails.drinks[0].strInstructions
        const img = cocktails.drinks[0].strDrinkThumb


                const finalMeasurements = () => {
            const strMeasure1 = cocktails.drinks[0].strMeasure1;
            const strMeasure2 = cocktails.drinks[0].strMeasure2;
            const strMeasure3 = cocktails.drinks[0].strMeasure3;
            const strMeasure4 = cocktails.drinks[0].strMeasure4;
            const strMeasure5 = cocktails.drinks[0].strMeasure5;
            const strMeasure6 = cocktails.drinks[0].strMeasure6;
            const strMeasure7 = cocktails.drinks[0].strMeasure7;
            const strMeasure8 = cocktails.drinks[0].strMeasure8;
            const strMeasure9 = cocktails.drinks[0].strMeasure9;
            const strMeasure10 = cocktails.drinks[0].strMeasure10;
            const strMeasure11 = cocktails.drinks[0].strMeasure11;
            const strMeasure12 = cocktails.drinks[0].strMeasure12;
            const strMeasure13 = cocktails.drinks[0].strMeasure13;
            const strMeasure14 = cocktails.drinks[0].strMeasure14;
            const strMeasure15 = cocktails.drinks[0].strMeasure15;

            const strIngredient1 = cocktails.drinks[0].strIngredient1;
            const strIngredient2 = cocktails.drinks[0].strIngredient2;
            const strIngredient3 = cocktails.drinks[0].strIngredient3;
            const strIngredient4 = cocktails.drinks[0].strIngredient4;
            const strIngredient5 = cocktails.drinks[0].strIngredient5;
            const strIngredient6 = cocktails.drinks[0].strIngredient6;
            const strIngredient7 = cocktails.drinks[0].strIngredient7;
            const strIngredient8 = cocktails.drinks[0].strIngredient8;
            const strIngredient9 = cocktails.drinks[0].strIngredient9;
            const strIngredient10 = cocktails.drinks[0].strIngredient10;
            const strIngredient11 = cocktails.drinks[0].strIngredient11;
            const strIngredient12 = cocktails.drinks[0].strIngredient12;
            const strIngredient13 = cocktails.drinks[0].strIngredient13;
            const strIngredient14 = cocktails.drinks[0].strIngredient14;
            const strIngredient15 = cocktails.drinks[0].strIngredient15;

            if(strMeasure1 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
            }
            if(strMeasure2 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
            }
            if(strMeasure3 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
            }
            if(strMeasure4 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
            }
            if(strMeasure5 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
            }
            if(strMeasure6 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
            }
            if(strMeasure7 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
            }
            if(strMeasure8 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
            }
            if(strMeasure9 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
            }
            if(strMeasure10 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
                setIngredientList10(strIngredient10)
                setMeasurements10(strMeasure10)
            }
            if(strMeasure11 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
                setIngredientList10(strIngredient10)
                setMeasurements10(strMeasure10)
                setIngredientList11(strIngredient11)
                setMeasurements11(strMeasure11)
            }
            if(strMeasure12 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
                setIngredientList10(strIngredient10)
                setMeasurements10(strMeasure10)
                setIngredientList11(strIngredient11)
                setMeasurements11(strMeasure11)
                setIngredientList12(strIngredient12)
                setMeasurements12(strMeasure12)
            }
            if(strMeasure13 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
                setIngredientList10(strIngredient10)
                setMeasurements10(strMeasure10)
                setIngredientList11(strIngredient11)
                setMeasurements11(strMeasure11)
                setIngredientList12(strIngredient12)
                setMeasurements12(strMeasure12)
                setIngredientList13(strIngredient13)
                setMeasurements13(strMeasure13)
            }
            if(strMeasure14 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
                setIngredientList10(strIngredient10)
                setMeasurements10(strMeasure10)
                setIngredientList11(strIngredient11)
                setMeasurements11(strMeasure11)
                setIngredientList12(strIngredient12)
                setMeasurements12(strMeasure12)
                setIngredientList13(strIngredient13)
                setMeasurements13(strMeasure13)
                setIngredientList14(strIngredient14)
                setMeasurements14(strMeasure14)
            }
            if(strMeasure15 != null){
                setIngredientTitle('Ingredients')
                setIngredientList1(strIngredient1)
                setMeasurements1(strMeasure1)
                setIngredientList2(strIngredient2)
                setMeasurements2(strMeasure2)
                setIngredientList3(strIngredient3)
                setMeasurements3(strMeasure3)
                setIngredientList4(strIngredient4)
                setMeasurements4(strMeasure4)
                setIngredientList5(strIngredient5)
                setMeasurements5(strMeasure5)
                setIngredientList6(strIngredient6)
                setMeasurements6(strMeasure6)
                setIngredientList7(strIngredient7)
                setMeasurements7(strMeasure7)
                setIngredientList8(strIngredient8)
                setMeasurements8(strMeasure8)
                setIngredientList9(strIngredient9)
                setMeasurements9(strMeasure9)
                setIngredientList10(strIngredient10)
                setMeasurements10(strMeasure10)
                setIngredientList11(strIngredient11)
                setMeasurements11(strMeasure11)
                setIngredientList12(strIngredient12)
                setMeasurements12(strMeasure12)
                setIngredientList13(strIngredient13)
                setMeasurements13(strMeasure13)
                setIngredientList14(strIngredient14)
                setMeasurements14(strMeasure14)
                setIngredientList15(strIngredient15)
                setMeasurements15(strMeasure15)
            }

        }
        finalMeasurements()

        setCocktailName(name)
        setCocktailInstructions(directions)
        setImgTag(img)


    }
    


  return (
    <div>
        <p id='cocktail-name'>{cocktailName}</p>
        <img alt={cocktailName} src={imgTag} />
        <h6 className='ingredients-title'>{ingredientTitle}</h6>
        <div className='measurements-and-ingredients'><p><span>{measurements1}</span><span>{ingredientList1}</span></p>
        <p><span>{measurements2}</span><span>{ingredientList2}</span></p>
        <p><span>{measurements3}</span><span>{ingredientList3}</span></p>
        <p><span>{measurements4}</span><span>{ingredientList4}</span></p>
        <p><span>{measurements5}</span><span>{ingredientList5}</span></p>
        <p><span>{measurements6}</span><span>{ingredientList6}</span></p>
        <p><span>{measurements7}</span><span>{ingredientList7}</span></p>
        <p><span>{measurements8}</span><span>{ingredientList8}</span></p>
        <p><span>{measurements9}</span><span>{ingredientList9}</span></p>
        <p><span>{measurements10}</span><span>{ingredientList10}</span></p>
        <p><span>{measurements11}</span><span>{ingredientList11}</span></p>
        <p><span>{measurements12}</span><span>{ingredientList12}</span></p>
        <p><span>{measurements13}</span><span>{ingredientList13}</span></p>
        <p><span>{measurements14}</span><span>{ingredientList14}</span></p>
        <p><span>{measurements15}</span><span>{ingredientList15}</span></p></div>
        <p id='cocktail-instructions'>{cocktailInstructions}</p>
    </div>
  )
}

export default Home