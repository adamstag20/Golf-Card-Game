

const loadClubs = () => {
    var sender = []
        for (let i = 1; i <= 13 ; i++ ){
            sender.push({"src" : `c${i}`,
             "val" : i, 
             "id" : Math.floor(Math.random() * 2000),
            "face" : 0});
        }
        return sender;
}
const loadDiamonds = () => {
        var sender = []
        for (let i = 1; i <= 13 ; i++ ){
            sender.push({"src" : `d${i}`, 
            "val" : i, 
            "id" : Math.floor(Math.random() * 2000),
            "face" : 0 });
        }
        return sender;
}
const loadHearts = () => {
        var sender = []
        for (let i = 1; i <= 13 ; i++ ){
            sender.push({"src" : `h${i}`,
             "val" : i,
             "id" : Math.floor(Math.random() * 2000),
             "face" : 0 });
        }
        return sender;
}
const loadSpades = () => {
        var sender = []
        for (let i = 1; i <= 13 ; i++ ){
            sender.push({"src" : `s${i}`,
             "val" : i,
            "id" : Math.floor(Math.random() * 2000),
            "face" : 0 });
        }
        return sender;
}

const shuffleDeck = () => {

    const clubs =  loadClubs();
    const diamonds = loadDiamonds();
    const hearts = loadHearts();
    const spades = loadSpades();
    const shuffledCards = [...clubs,...diamonds,...hearts,...spades];

    for (let i = 0; i < shuffledCards.length; i++){
        if (shuffledCards[i].val === 13){shuffledCards[i].val = 0}
    }

    for (let i = 0; i < shuffledCards.length;i++){
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
}

export default shuffleDeck;