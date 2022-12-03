import React, {useState} from 'react'
import '../styles/BrowseCocktails.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector} from 'react-redux'
import incrementCount from '../actions/incrementCount' //this is our action


const BrowseCocktails = () => {

  
  const dispatch = useDispatch();// access the store.dispatch()  to dispatch actions 
  const count = useSelector(state => state.count) //count mapped from global state 

  const [cocktailTitle1, setCocktailTitle1] = useState("")
  const [cocktailImage1, setCocktailImage1] = useState("")
  const [cocktailInstructions1, setCocktailInstructions1] = useState("")

  const [cocktailTitle2, setCocktailTitle2] = useState("")
  const [cocktailImage2, setCocktailImage2] = useState("")
  const [cocktailInstructions2, setCocktailInstructions2] = useState("")

  const [cocktailTitle3, setCocktailTitle3] = useState("")
  const [cocktailImage3, setCocktailImage3] = useState("")
  const [cocktailInstructions3, setCocktailInstructions3] = useState("")

  const [cocktailTitle4, setCocktailTitle4] = useState("")
  const [cocktailImage4, setCocktailImage4] = useState("")
  const [cocktailInstructions4, setCocktailInstructions4] = useState("")
  
  const [cocktailTitle5, setCocktailTitle5] = useState("")
  const [cocktailImage5, setCocktailImage5] = useState("")
  const [cocktailInstructions5, setCocktailInstructions5] = useState("")

  const [cocktailTitle6, setCocktailTitle6] = useState("")
  const [cocktailImage6, setCocktailImage6] = useState("")
  const [cocktailInstructions6, setCocktailInstructions6] = useState("")

  const [cocktailTitle7, setCocktailTitle7] = useState("")
  const [cocktailImage7, setCocktailImage7] = useState("")
  const [cocktailInstructions7, setCocktailInstructions7] = useState("")

  const [cocktailTitle8, setCocktailTitle8] = useState("")
  const [cocktailImage8, setCocktailImage8] = useState("")
  const [cocktailInstructions8, setCocktailInstructions8] = useState("")

  const [cocktailTitle9, setCocktailTitle9] = useState("")
  const [cocktailImage9, setCocktailImage9] = useState("")
  const [cocktailInstructions9, setCocktailInstructions9] = useState("")

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


    const cocktailInfo4 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+3}`)
    const cocktailData4 = await cocktailInfo4.json()
    const cocktailName4 = cocktailData4.drinks[0].strDrink
    const cocktailImg4 = cocktailData4.drinks[0].strDrinkThumb
    const cocktailDescription4 = cocktailData4.drinks[0].strInstructions
    setCocktailTitle4(cocktailName4)
    setCocktailImage4(cocktailImg4)
    setCocktailInstructions4(cocktailDescription4)


    const cocktailInfo5 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+4}`)
    const cocktailData5 = await cocktailInfo5.json()
    const cocktailName5 = cocktailData5.drinks[0].strDrink
    const cocktailImg5 = cocktailData5.drinks[0].strDrinkThumb
    const cocktailDescription5 = cocktailData5.drinks[0].strInstructions
    setCocktailTitle5(cocktailName5)
    setCocktailImage5(cocktailImg5)
    setCocktailInstructions5(cocktailDescription5)


    const cocktailInfo6 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+5}`)
    const cocktailData6 = await cocktailInfo6.json()
    const cocktailName6 = cocktailData6.drinks[0].strDrink
    const cocktailImg6 = cocktailData6.drinks[0].strDrinkThumb
    const cocktailDescription6 = cocktailData6.drinks[0].strInstructions
    setCocktailTitle6(cocktailName6)
    setCocktailImage6(cocktailImg6)
    setCocktailInstructions6(cocktailDescription6)


    const cocktailInfo7 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+6}`)
    const cocktailData7 = await cocktailInfo7.json()
    const cocktailName7 = cocktailData7.drinks[0].strDrink
    const cocktailImg7 = cocktailData7.drinks[0].strDrinkThumb
    const cocktailDescription7 = cocktailData7.drinks[0].strInstructions
    setCocktailTitle7(cocktailName7)
    setCocktailImage7(cocktailImg7)
    setCocktailInstructions7(cocktailDescription7)


    const cocktailInfo8 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+7}`)
    const cocktailData8 = await cocktailInfo8.json()
    const cocktailName8 = cocktailData8.drinks[0].strDrink
    const cocktailImg8 = cocktailData8.drinks[0].strDrinkThumb
    const cocktailDescription8 = cocktailData8.drinks[0].strInstructions
    setCocktailTitle8(cocktailName8)
    setCocktailImage8(cocktailImg8)
    setCocktailInstructions8(cocktailDescription8)


    const cocktailInfo9 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${count+8}`)
    const cocktailData9 = await cocktailInfo9.json()
    const cocktailName9 = cocktailData9.drinks[0].strDrink
    const cocktailImg9 = cocktailData9.drinks[0].strDrinkThumb
    const cocktailDescription9 = cocktailData9.drinks[0].strInstructions
    setCocktailTitle9(cocktailName9)
    setCocktailImage9(cocktailImg9)
    setCocktailInstructions9(cocktailDescription9)



  }
  return (
    <>

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

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage4} />
            <Card.Body>
              <Card.Title>{cocktailTitle4}</Card.Title>
              <Card.Text>
                {cocktailInstructions4}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage5} />
            <Card.Body>
              <Card.Title>{cocktailTitle5}</Card.Title>
              <Card.Text>
                {cocktailInstructions5}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage6} />
            <Card.Body>
              <Card.Title>{cocktailTitle6}</Card.Title>
              <Card.Text>
                {cocktailInstructions6}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage7} />
            <Card.Body>
              <Card.Title>{cocktailTitle7}</Card.Title>
              <Card.Text>
                {cocktailInstructions7}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage8} />
            <Card.Body>
              <Card.Title>{cocktailTitle8}</Card.Title>
              <Card.Text>
                {cocktailInstructions8}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='card-container'>
            <Card.Img className='card-image' variant="top" src={cocktailImage9} />
            <Card.Body>
              <Card.Title>{cocktailTitle9}</Card.Title>
              <Card.Text>
                {cocktailInstructions9}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Row>
<button onClick={fetchCocktailByID}>clg name</button>
<button onClick={()=>dispatch(incrementCount(1))}>Increment</button>
<br/>
<br/>
<br/>
    </>
  )
}

export default BrowseCocktails