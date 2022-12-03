const card = ['1','2','3','4','5','6','1','2','3','4','5','6']
//const length = card.length
let player = 'won!!'
//let point = 'finish the game'
//let miqum = 0
//let computer_card1 = 0
//let player_card1 = 0
//let player_card = 0
//let won_player = 'player won!'




//while (player < 6 && player_card < 6) {
//const cards = document.querySelectorAll('.mmm');

//  function flipCard() {
 //   this.classList.toggle('flip');
 // }
  
 // cards.forEach(card => card.addEventListener('click', flipCard)); {
 console.log(`image0' ${card[0]}`);
 console.log(`image1' ${card[1]}`);
  console.log(`image2' ${card[2]}`);
 console.log(`image3' ${card[3]}`);
 console.log(`image4' ${card[4]}`);
  console.log(`image5' ${card[5]}`);
  console.log(`image6' ${card[6]}`);
  console.log(`image7' ${card[7]}`);
  console.log(`image8' ${card[8]}`);
  console.log(`image9' ${card[9]}`);
  console.log(`image10' ${card[10]}`);
 console.log(`image11' ${card[11]}`);

function start1(x) {

  console.log('start');
for (let start = 0; start < length; start++) {
  const randomPosition = Math.floor((card.length - start)*Math.random())
  const randomItem = card.splice(randomPosition,1)
  card.push(...randomItem)
}
//if (x == player) {
 // return
//}


$('#image0').attr('src','/card/1.jpg')
$('#image1').attr('src','/card/2.jpg')
$('#image2').attr('src','/card/3.jpg')
$('#image3').attr('src','/card/4.jpg')
$('#image4').attr('src','/card/5.jpg')
$('#image5').attr('src','/card/6.jpg')
$('#image6').attr('src','/card/1.jpg')
$('#image7').attr('src','/card/2.jpg')
$('#image8').attr('src','/card/3.jpg')
$('#image9').attr('src','/card/4.jpg')
$('#image10').attr('src','/card/5.jpg')
$('#image11').attr('src','/card/6.jpg')

//document.getElementById(`image${player_card}`).innerHTML = player_card
//document.getElementById(`image${player}`).innerHTML = player

 }
//}

function tnaim(won) {
    if (card[0] === card[6] === won || 
        card[1] === card[7] === won || 
        card[2] === card[8] === won || 
        card[3] === card[9] === won || 
        card[4] === card[10] === won || 
        card[5] === card[11] === won  

    ) {
      return true       
}
return false

}
//function win_check() {
//if (tnaim(player)) {   
//}  
//}
const game = {
  card_turned_1: undefined,
  card_turned_2: undefined,
  wait_for_animation: false,
  end: 0
}
function card_click(number) {
  if (!game.wait_for_animation) {
    //if (card[number] == card[number]) {
     //   card[number] = player
     //   document.getElementById(`image${number}`).innerHTML = computer;
   // } 
   $(`#image${number}`).attr('src',`/card/${card[number]}.jpg`)
   game.cards_up++;
   if (!game.card_turned_1) {
      game.card_turned_1 = number
      game.wait_for_animation = false;
   }
   else {
      game.card_turned_2 = number
      if (card[game.card_turned_1] === card[game.card_turned_2]) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'exelent',
          showConfirmButton: false,
          timer: 1500
        })
        game.card_turned_1 = undefined;
        game.card_turned_2 = undefined;
        game.wait_for_animation  = false;
        
      }
      
      
      else {
      game.wait_for_animation = true;
      setTimeout(() => {
        $(`#image${game.card_turned_1}`).attr('src',`/card/oo.jpg`)
        $(`#image${game.card_turned_2}`).attr('src',`/card/oo.jpg`)
        game.card_turned_1 = undefined;
        game.card_turned_2 = undefined;
        game.wait_for_animation = false;
      }, 1000)  
   }
    }  
    check_win_play()
  }
}



function check_win_play() {
    if (tnaim(card)) {
      $(`#won`).text(player);
    }
  else {
    $(`#won`).text('no');
  
  }
}
//win()
//function win() {
  //for (let miqom in card) {
  // if(card[miqom] =! undefined) {
  //  $(`#won`).text(won_computer)
 // }
//}
//}
function play() {
  for (i = 0; i <= 13; i++) {
    card_turned_1 = document.getElementById(i)
    card_turned_2 = document.getElementById(i)
    card_turned_1.innerHTML = ''
    card_turned_2.innerHTML = ''
    card_turned_1.disabled = false
    card_turned_2.disabled = false
    game.wait_for_animation  = false

  }
}


//if(player_card = player_card1) {
 //   console.log('player win');
//    document.getElementById(`winer1`).innerHTML = 'player win <br/>'
 //   player++
//}
//else if(player_card != player_card1) {
//    console.log('Not this time');
//}
//computer1()

//function computer1() {

    //computer_card = Math.floor(Math.random()*12)
    //computer_card1 = Math.floor(Math.random()*12)
    
    //console.log(`computer card1 ${card[computer_card1]}`);
    //console.log(`computer card' ${card[computer_card]}`);
    
   // document.getElementById('computer_card1').src =`card/${card[computer_card1]}.jpg`
   // document.getElementById('computer_card').src =`card/${card[computer_card]}.jpg`
    
    
    //if(computer_card = computer_card1) {
       // console.log('computer win');
       // document.getElementById(`winer1`).innerHTML = 'computer win <br/>'
      //  computer++
   // }
    //else if(computer_card != computer_card1) {
   //     console.log('Not this time');
   // }
  //  }
  