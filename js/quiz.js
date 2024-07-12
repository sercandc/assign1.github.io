/* 
  1. Store correct answers
   - When quiz begins, no answers are correct

*/

let correctAnswers = ['q1', 'q2', 'q3', 'q4', 'q5'];
let question = correctAnswers

// 2. Store the rank of a player
let score = 0;
let rank = "unknown"

// 3. Select the <main> HTML element
let mainHtmlElement = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

for(let i=0; i<correctAnswers.length;i++)
{
  let currentAnswer = prompt("enter the text into the box:" + " " +question[i]);
  if(currentAnswer==correctAnswers[i])
  {
    score++
  }
  
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

let ranks = ["gold", "silver","silver", "bronze","bronze", "no crown"]
ranks = ranks.reverse();


// 6. Output results to the <main> element
mainHtmlElement.append("score: "+ score + " " + ranks[score])
