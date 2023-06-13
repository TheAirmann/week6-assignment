var expect = chai.expect;

describe('Card', function() {
    describe('value', function() {
        it('should return 14 for an Ace', function() {
            var card = new Card('Ace', 'Hearts');
            expect(card.value).to.equal(14);
        });

        it('should return 13 for a King', function() {
            var card = new Card('King', 'Diamonds');
            expect(card.value).to.equal(13);
        });

        it('should return 12 for a Queen', function() {
            var card = new Card('Queen', 'Clubs');
            expect(card.value).to.equal(12);
        });

        it('should return 11 for a Jack', function() {
            var card = new Card('Jack', 'Spades');
            expect(card.value).to.equal(11);
        });

        it('should return the rank for other cards', function() {
            var card = new Card('7', 'Hearts');
            expect(card.value).to.equal(7);
        });
    });

    describe('describe', function() {
        it('should return the name of the card', function() {
            var card = new Card('Ace', 'Hearts');
            expect(card.describe()).to.equal('Ace of Hearts');
        });
    });
});