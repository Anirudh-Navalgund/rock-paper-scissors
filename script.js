let computerMove;
    let result = '';
    let randomNo;
    let score = {
      wins: 0,
      losses: 0,
      ties: 0
    };

    if (localStorage.getItem('score'))
      score = JSON.parse(localStorage.getItem('score'));

    if (score === null) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }

    document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    function scoresUpdate() {
      document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickCompMove() {
      randomNo = Math.random();
      
      if (randomNo >=0 && randomNo <1/3) {
        computerMove = 'Rock';
      }
      else if (randomNo >=1/3 && randomNo <2/3) {
        computerMove = 'Paper';
      }
      else {
        computerMove = 'Scissors';
      }
    }

    function findingResult(playerMove) {
      if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'Lose';
        }
        else if (computerMove === 'Paper') {
          result = 'Win';
        }
        else {
          result = 'Tie';
        }
      }
      else if (playerMove === 'Rock') {
        if (computerMove === 'Paper') {
          result = 'Lose';
        }
        else if (computerMove === 'Scissors') {
          result = 'Win';
        }
        else {
          result = 'Tie';
        }
      }
      else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'Win';
        }
        else if (computerMove === 'Scissors') {
          result = 'Lose';
        }
        else {
          result = 'Tie';
        }
      }
      
      if (result == 'Win') {
        score.wins++;
      }
      else if (result == 'Lose') {
        score.losses++;
      }
      else if (result == 'Tie') {
        score.ties++;
      }
      
      scoresUpdate();
      
      document.querySelector('.js-result').innerHTML = `${result}`;
      document.querySelector('.js-moves').innerHTML = `You | <img src="${playerMove}-emoji.png"> v/s <img src="${computerMove}-emoji.png"> | Computer`;

      localStorage.setItem('score', JSON.stringify(score));
    }

    function resetScore() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      scoresUpdate();
    }