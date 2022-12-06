import React, {useState} from 'react'
import '../styles/BrowseCocktails.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector} from 'react-redux'
import incrementCount from '../actions/incrementCount.js' 
import decrementCount from '../actions/decrementCount.js' 


const BrowseCocktails = () => {

  
  const dispatch = useDispatch(); 
  const count = useSelector(state => state.count) 

  const [cocktailTitle1, setCocktailTitle1] = useState("")
  const [cocktailImage1, setCocktailImage1] = useState("")
  const [cocktailInstructions1, setCocktailInstructions1] = useState("")

  const [cocktailTitle2, setCocktailTitle2] = useState("")
  const [cocktailImage2, setCocktailImage2] = useState("")
  const [cocktailInstructions2, setCocktailInstructions2] = useState("")

  const [cocktailTitle3, setCocktailTitle3] = useState("")
  const [cocktailImage3, setCocktailImage3] = useState("")
  const [cocktailInstructions3, setCocktailInstructions3] = useState("")

  const fetchCocktailByID = async() => {

    const cocktailInfo1 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count}`)
    const cocktailData1 = await cocktailInfo1.json()
    const cocktailName1 = cocktailData1.drinks[0].strDrink
    const cocktailImg1 = cocktailData1.drinks[0].strDrinkThumb
    const cocktailDescription1 = cocktailData1.drinks[0].strInstructions
    setCocktailTitle1(cocktailName1)
    setCocktailImage1(cocktailImg1)
    setCocktailInstructions1(cocktailDescription1)


    const cocktailInfo2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+1}`)
    const cocktailData2 = await cocktailInfo2.json()
    const cocktailName2 = cocktailData2.drinks[0].strDrink
    const cocktailImg2 = cocktailData2.drinks[0].strDrinkThumb
    const cocktailDescription2 = cocktailData2.drinks[0].strInstructions
    setCocktailTitle2(cocktailName2)
    setCocktailImage2(cocktailImg2)
    setCocktailInstructions2(cocktailDescription2)


    const cocktailInfo3 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+2}`)
    const cocktailData3 = await cocktailInfo3.json()
    const cocktailName3 = cocktailData3.drinks[0].strDrink
    const cocktailImg3 = cocktailData3.drinks[0].strDrinkThumb
    const cocktailDescription3 = cocktailData3.drinks[0].strInstructions
    setCocktailTitle3(cocktailName3)
    setCocktailImage3(cocktailImg3)
    setCocktailInstructions3(cocktailDescription3)
  }

  fetchCocktailByID()
  
  return (
    <div>

    <Row xs={1} md={3} className="g-4">

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage1} />
            <Card.Body>
              <Card.Title>{cocktailTitle1}</Card.Title>
              <Card.Text>
                {cocktailInstructions1}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage2} />
            <Card.Body>
              <Card.Title>{cocktailTitle2}</Card.Title>
              <Card.Text>
                {cocktailInstructions2}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage3} />
            <Card.Body>
              <Card.Title>{cocktailTitle3}</Card.Title>
              <Card.Text>
                {cocktailInstructions3}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>


    </Row>
    <div className='update-value-div'>
      <button className='update-value-button-left' onClick={()=>dispatch(decrementCount(3))}>Previous</button>
      <button className='update-value-button-right' onClick={()=>dispatch(incrementCount(3))}>Next</button>
    </div>
    <br/>
    <br/>
    <br/>
    </div>
  )
}

export default BrowseCocktails