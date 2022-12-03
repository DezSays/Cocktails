import React, {useState} from 'react'
import '../styles/BrowseCocktails.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// TODO //
// use this page to fulfill the redux requirement
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000


const BrowseCocktails = () => {

  const [cocktailTitle1, setCocktailTitle1] = useState("")

  const [cocktailImage1, setCocktailImage1] = useState("")

  const [cocktailInstructions1, setCocktailInstructions1] = useState("")

  const fetchCocktailByID = async() => {

    const cocktailInfo = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000`)

    const cocktailData = await cocktailInfo.json()

    const cocktailName = cocktailData.drinks[0].strDrink

    const cocktailImg = cocktailData.drinks[0].strDrinkThumb

    const cocktailDescription = cocktailData.drinks[0].strInstructions

    console.log(cocktailName)

    // "strDrink": "Mojito",
    // "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",

    setCocktailTitle1(cocktailName)
    setCocktailImage1(cocktailImg)
    setCocktailInstructions1(cocktailDescription)

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
            <Card.Img className='card-image' variant="top" src={cocktailImage1} />
            <Card.Body>
              <Card.Title>{cocktailTitle1}</Card.Title>
              <Card.Text>
                {cocktailInstructions1}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Row>
<button onClick={fetchCocktailByID}>clg name</button>
<br/>
<br/>
<br/>
    </>
  )
}

export default BrowseCocktails