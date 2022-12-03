import React, {useState} from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// TODO //
// use this page to fulfill the redux requirement
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000


const BrowseCocktails = () => {
  const fetchCocktailByID = async() => {

    const cocktailInfo = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000`)

    const cocktailData = await cocktailInfo.json()

    const cocktailName = cocktailData.drinks[0].strDrink

    console.log(cocktailName)

    // "strDrink": "Mojito",
    // "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",

  }
  return (
    <>
    <button onClick={fetchCocktailByID}>clg name</button>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
<br/>
<br/>
    </>
  )
}

export default BrowseCocktails