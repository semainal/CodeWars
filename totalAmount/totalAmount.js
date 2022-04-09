function points(games) {
    let result = 0;

    for (let game of games) {
        let [x, y] = game.split(":");

       let score = x>y ? 3: x ===y ?1:0;
       result += score;

    }

    

    return result;

  }

console.log(points(["3:1"]));