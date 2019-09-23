import {SuiteValues, CardValues} from '../Conversion/Conversion';
import Card from '../Card/Card';

class Deck {
    constructor(){
        this.random = this.random.bind(this);
        this.randomizeArray = this.randomizeArray.bind(this);
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
            myParent.cards.push(new Card(item[0], item[1], item[2], board))
        })
    }

    randomizeArray(myArray) {
        let newArray = [];
        do {
            newArray.push(myArray.splice(Math.floor(Math.random() * myArray.length),1)[0]);
        } while (myArray.length > 0);
        return newArray;
    }

    reconstituteDeck(stringDeck){
        let solvedDeckString = String(stringDeck).split("");
        let solvedDeckPairs = [];
        do {
            solvedDeckPairs.push([solvedDeckString.shift(), solvedDeckString.shift()]);
        } while (solvedDeckString.length > 0);
        let finishedDeck = solvedDeckPairs.map(pair=>{
            switch(pair[0]){
                case 's': return new Card(this.suites.find(x=> x.suite == 'spade'),this.toDec(pair[1]),false, this.mobileUser);
                case 'd': return new Card(this.suites.find(x=> x.suite == 'diamond'),this.toDec(pair[1]),false, this.mobileUser);
                case 'c': return new Card(this.suites.find(x=> x.suite == 'club'),this.toDec(pair[1]),false, this.mobileUser);
                case 'h': return new Card(this.suites.find(x=> x.suite == 'heart'),this.toDec(pair[1]),false, this.mobileUser);
            }
        })
        return finishedDeck;
    }
}

export default Deck;