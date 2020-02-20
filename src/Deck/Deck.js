import {SuiteValues, CardValues} from '../Conversion/Conversion';
import GameBoard from "../GameBoard/GameBoard";
import {STATE} from '../index';
import Card from '../Card/Card';

export default class Deck {
    constructor(){
        this.random = this.random.bind(this);
        this.randomizeArray = this.randomizeArray.bind(this);
        this.reconstituteDeck = this.reconstituteDeck.bind(this);
        this.solvable - this.solvable.bind(this);
    }

    solvable(){
        let failed = false;
        new Promise((resolve, reject)=>{
            let xhr = new XMLHttpRequest;
            xhr.open('GET', "https://mrlesbomar.com/games/cgi-bin/get_solved_deck.php");
            xhr.onload = () =>{
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            }
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        }).then(stuff=>{
            return this.reconstituteDeck(stuff);
        }).catch(error=>{
            //Create status screen and deal random deck
            let notice = document.createElement('div');
            notice.id = 'notice';
            notice.innerHTML = `<h1>Unable to connect to the server. Please choose a random deck.</h1>`;
            document.getElementsByTagName('main')[0].appendChild(notice);
        });
    }

    random(myParent, board) {
        let tempDeck = [];
        SuiteValues().forEach(suite => {
            CardValues.forEach(number => {
                tempDeck.push(["A", suite, number]);
            })
        })

        //Shuffle deck and add return
        let shuffled = this.randomizeArray(tempDeck)

        //Build deck
        shuffled.forEach(item => {
            myParent.cards.push(new Card(item[0], item[1], item[2], board, false))
        })
    }

    randomizeArray(myArray) {
        let newArray = [];
        do {
            newArray.push(myArray.splice(Math.floor(Math.random() * myArray.length),1)[0]);
        } while (myArray.length > 0);
        return newArray;
    }

    reconstituteDeck(deckString) {
        //Seperate string into individual card values
        let individualCards = [];
        for(let i=0; i<deckString.length; i+=3) {
            individualCards.push([deckString[i], deckString[i+1], deckString[i+2]]);
        }

        //Build cards and push onto Stock
        individualCards.forEach(crd => {
            STATE.getStock().cards.push(new Card(crd[0], crd[1], crd[2], STATE.getGameBoard(), false))
        })
    }
}   