import styles from './UI.module.css'
import cx from 'classnames'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'
import {useState, useEffect} from 'react'

const cardImages = [
  {src: Bilbo, matched:false},
  {src: Cameron, matched:false}, 
  {src: Nikki, matched:false}, 
  {src: Pollux, matched:false}]

export default function Grid(props) {

  // state to store our deck of cards
  const [cards, setCards] = useState([])
  // state to keep track of our turns
  const [turns, setTurns] = useState(0)
  //keep track of choices
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //function to double our cards so each has a duplicate
  //  and shuffles the deck and deal on screen
  const shuffleCards = () => {
      //spread or img array 2x so we have an array with duplicates 
      const shuffledCards = [...cardImages, ...cardImages]
      // sort function that fires the func for each item in shuffled array 
      // when a number is negative, it leaves item where it is
      // otherwise, swap with another 
      .sort(() => Math.random() - 0.5)
      // a mapping function to add an ID to each img object
      // spread the curr props and add a new one 
      .map((card) => ({...card, id: Math.random()}))
      //use our setter from useState to add new array of doubled, shuffled object
      //with unique id added to each
      setCards(shuffledCards)
      setTurns(0)
  }

  const handleChoice = (card)=> {
    console.log(card)
    //TERNARY: check if u have choice 1
    // if no choice 1 set, make current card choiceOne
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    //compare the cards, but not here

  }
  useEffect(() => {
    //where we compare
    //make sure we have both
    if (choiceOne && choiceTwo){
      if (choiceOne.src === choiceTwo.src){
        setCards((prevCards) => {
            //map thrpugh entire array, set the matched ones to matched=true
            return prevCards.map((card) => {
              if(card.src === choiceOne.src) {
                console.log('these cards match')
                return {...card, matched:true}
              } else{
                return card
              }
            })
        })
      } else {
        console.log('these cards dont match')
        setTimeout(()=> resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }
  return (
    <>
      <button onClick = {shuffleCards}> New Game </button>
      <div className={styles.container}>
        <div className={styles.grid}>
          {
            cards.map((card) => (
              <Card key={card.id} img={card.src} 
              handleChoice={handleChoice} 
              flipped={card === choiceOne || card === choiceTwo || card === choiceTwo || card === card.matched} />
              ))}
        </div>
      </div>
      <div>Turns: {turns} </div>
    </>
  )
}

function Card(props) {
  const {card, handleChoice,flipped} = props
  // keep track of flipped/active in state
  //toggle between active and inactive
  const handleClick = (event) =>{
    handleChoice()
  }
  return (
    <div className={styles.flip_card}>
      <div onClick={handleClick} className={cx(styles.flip_card_inner, {[styles.flipped]: flipped})}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.img} alt="card front" />
        </div>
      </div>
    </div>
  )
}
