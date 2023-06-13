class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
  //NOTE: A getter method is a special kind of method that allows an object to be accessed like a property rather than like a method
  get value() {
    switch (this.rank) {
      case 'Ace':
        return 14;
      case 'King':
        return 13;
      case 'Queen':
        return 12;
      case 'Jack':
        return 11;
      default:
        return parseInt(this.rank);
    }
  }

  describe() {
    return `${this.rank} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    this.cards = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  deal() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.points = 0;
  }

  playCard() {
    return this.hand.pop();
  }

  describe() {
    return `${this.name} has ${this.points} points`;
  }
}

class Game {
  constructor() {
    this.deck = new Deck();
    this.player1 = new Player('Player 1');
    this.player2 = new Player('Player 2');
  }

  play() {
    this.deck.shuffle();
    this.dealCards();
    for (let i = 0; i < 26; i++) {
      let card1 = this.player1.playCard();
      let card2 = this.player2.playCard();
      let result = this.compareCards(card1, card2);
      if (result === 1) {
        this.player1.points++;
      } else if (result === 2) {
        this.player2.points++;
      }
    }
    this.displayScore();
    this.displayWinner();
  }

  dealCards() {
    for (let i = 0; i < 26; i++) {
      this.player1.hand.push(this.deck.deal());
      this.player2.hand.push(this.deck.deal());
    }
  }

  compareCards(card1, card2) {
    if (card1.value > card2.value) {
      return 1;
    } else if (card1.value < card2.value) {
      return 2;
    } else {
      return 0;
    }
  }

  displayScore() {
    alert(`${this.player1.describe()} \n${this.player2.describe()}`);
  }

  displayWinner() {
    if (this.player1.points > this.player2.points) {
      alert(`${this.player1.name} wins!`);
    } else if (this.player1.points < this.player2.points) {
      alert(`${this.player2.name} wins!`);
    } else {
      alert(`It's a tie!`);
    }
  }
}

let game = new Game();
game.play();