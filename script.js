let yourChoice = prompt("Rock Paper Scissor")


//callback function is the compute
function showAnswer(answer,compute)
{
compute(answer)
}

//call the function
showAnswer(yourChoice,compare);



//this is now the compute
function compare(value)
{
	
	let enemyPick = Math.floor(Math.random()*3)+1
	
	// console.log(yourChoice.length)
	let answerUser =UserConvertedPick(yourChoice)
	let answerEnemy = EnemyConvertedPick(enemyPick)
	showWinner(answerUser,answerEnemy)

}




//converts your choice

function UserConvertedPick(yourChoice)
{
	if(yourChoice.length == 4 )
	{
		console.log("User's choice is rock")
		return yourChoice = 1
	}
	else if (yourChoice.length == 5 )
	{
		console.log("User's choice is paper")
		return yourChoice =  2
	}
	else  if (yourChoice.length == 7 )
	{
		console.log("User's choice is Scissor")
		return yourChoice = 3
	}
	else  
	{
		alert("thats not in the choice")
	}
}


//function to convert the 3 randomize number into rock paper scissor string

function EnemyConvertedPick(converted)
{

	if (converted == 1 ) 
	{
			console.log("Enemy's choice is rock")
			return converted = 1
			 
	}
	else if (converted == 2) 
	{
			console.log("Enemy's choice is paper")
			return converted = 2
	}
	else
	{
		console.log("Enemy's choice is Scissor")
			return converted = 3
	}
}




/// the alignment of parameter matters because the function that passes it base it on order, not in names
function showWinner(answerUser,answerEnemy)
{

		//log test if the userchoice and enemychoice has its value in this function
		/*console.log(answerUser)
		console.log(answerEnemy)*/
		if(answerUser == answerEnemy)
	    {
		 console.log("its a draw")

		}
		else if  (!(answerUser === answerEnemy))

		{
			
			if (answerUser == 1)
			{
				if(answerUser < answerEnemy && answerEnemy === 2)
				{
					
		console.log("haha")
					console.log("you lose")
				}
				else
				{
					console.log("you win")
				}

			}
			else if (answerUser == 2)
			{
			 			
		console.log("hehe")

				if(answerUser < answerEnemy && answerEnemy === 3)
				{
					console.log("you lose")
				}
				else
				{
					console.log("you win")
				}	
			}
			else if (answerUser == 3)
			{
				console.log("hoho")
				if(answerUser > answerEnemy && answerEnemy === 1)
				{
					console.log("you lose")
				}
				else
				{
					console.log("you win")
				}	
			}
		}

		else
		{
			console.log("thats not in the options")
		}
		
}

