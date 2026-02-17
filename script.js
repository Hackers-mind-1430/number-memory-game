/*This is the Where the Fun Begins*/
        
        var max=9; /*A variable to store the Biggest number in a digit*/
        var min=1; /*A variable to store the Smallest number in a digit*/
        var randomnumber; /*the random Number that the User should Remember*/
        var level=1; /*Level of the Player (everyone starts from '0' :) */
        var score=0; /*Incremented by 10 for every correct Input*/
        var delay=3000; //the amount of time it takes before disappearing
        
        var currentnumber=0; //This is where the Random number gets Stored*/
        /*Every div is accessed through with the ID of 'My' hence this is 'My' Game*/
        const MyRnumber=document.getElementById("Rnumber");
        const Mylevel=document.getElementById("level");
        const Myscore=document.getElementById("score");
        const Myinput=document.getElementById("input");
        const Myfeedback=document.getElementById("feedback")
        const Mystartbutton=document.getElementById("startbutton");
        const Mygame=document.getElementById("game");
        const Myins=document.getElementById("ins");
        const MyCheer=document.getElementById("Cheer")
        const MyPlayAgain=document.getElementById("playAgain");
        /*This is where the Magic happens :0*
         A Fucntion which Generates the Random Number that the User should Remember
         already the Pre-defined function "Math.random" is used to get a random Number*/
        function generateRnumber()
        {
            /*When the function is called a Random Number is Stored in the Variable 'randomnumber' */
            randomnumber=(Math.floor(Math.random()*(max-min+1))+min);
            /*The logic for Printing More digited Number for every time the Function is called*/
            min=min*10;
            max=max*10+9;
            return randomnumber;
        }
        /*a function That */
        function startthegame()
        {
            /*Input box is now Visible*/
            Myinput.style.display="none";
            /*Stores the random Number into the currentNumber*/  
            currentnumber=generateRnumber();
            /*the Random number is displayed in the Rnumber Div*/
            MyRnumber.textContent=currentnumber;
            /*Makes sure that there is no old Feedback*/
            Myfeedback.textContent="";
            /*a settimeout Fucntion which is used to Hide the random number and
             enables the Input box so that the user can enter the Input*/
             
            setTimeout(()=> 
            {
                MyRnumber.style.display="none"; /*the random number is disappeared*/
                Myinput.style.display="block";
                Myinput.disabled=false;
               Myinput.focus();
            }, delay); /*Executes the Code after some Time delay (after 3 secs)*/
 
        }

         /*Checks the Number if the user Enters the number and hits the enter button*/
        input.addEventListener("keydown",(event) =>
        {
            /*checks if the clicked button is "Enter" or Not*/
            if(event.key === "Enter")
            {
                /*Checks the Number by calling the Function "checknumber"*/
                checknumber();
            }
        });

        /*A function that Checks if the User input is matching with the Random number or not*/
        function checknumber() 
        {
            /*User's input is stored in the userInput var*/
            const userInput=parseInt(input.value, 10); /* input is accessed with input.value & 10 is for Decimal of Parseint*/
            /*if the user's input Matches with the Random Number*/
            if(userInput === currentnumber) 
            {
                /*score is incremented by 10 for every correct input*/
                score+=10; 
                /*increases the level which makes it harder by Increasing the digits*/
                level++;
                /*If user reaches OTP level , we can increase the delay time*/
                if(level == 6)
                {
                    delay=delay+1000;
                    //document.body.style.backgroundColor="orange";
                }
                MyCheer.textContent=cheer[level-1];
                /*updates the Score*/
                MyRnumber.textContent="Score: "+score;
                /*updates the level to the user*/
                Mylevel.textContent="Level: "+level;
                /*This CLears the Input Box so that the user can Enter next random number*/
                Myinput.value="";
                /*This makes the Random number visbile for Next level*/
                MyRnumber.style.display="block";
                /*Calls the Fucntion & again the game is Started for next level*/
                startthegame();
            }
            /*If the user's input mismatches with Random number*/
             else 
            {
                /*Input Box is Disabled so that the user cannot enter the Numbers again*/
                input.disabled=true;
                /*Displays the Correct random number which user failed to Remember */
                Myfeedback.textContent="The Correct number was: "+currentnumber;
                /*Displays the Level of the User*/
                Myinput.textContent="Reached Level: "+level;
                /*Displays the score of the user*/
                
                Myscore.textContent="Score: " +score;
                Myscore.style.display="block";
                MyCheer.textContent="";
                MyPlayAgain.style.display="block";
            }
        }



        /*This Eventlistener executes when the startbutton is Clicked*/
    startbutton.addEventListener("click", ()=>
    {
        /*hides the Instructions*/
       Myins.style.display="none";
       /*Appears the Game*/
        Mygame.style.display="block";
        /*Starts the Game*/
        startthegame();
        
    });
    var cheer=[ "Great Start! Keep goin'",
                "You are doing awesome!!",
                "Keep it up",
                "You are doing Great!!",
                "Nice",
                "Now you can Remember an OTP",
                ];
        /*End of the L0gic*/

       /* function getLocalStorage()
        {
            let total=0;
            for(let i=0; i<localStorage.length; i++)
            {
                const key=localStorage.key(i);
                const value=localStorage.getItem(key);
                total+=(key.length+value.length)*2;
            }
            return total /(1024 * 1024);
        }
        console.log(`Local Storage Size: ${getLocalStorage().toFixed(2)} MB`);*/

        function replay()
        {
            //reset the Variables
            min=1,max=9,level=1,score=0,delay=3000;

            //resetting the level & stuff
           
           /* Mylevel.textContent="Level: "+level;
            Myscore.style.display="none";
            Myscore.textContent="Score: "+score;
            MyPlayAgain.style.display="none";
            MyRnumber.style.display="block";
            myinput.value="";
            Myinput.disabled="true";
            startthegame();*/

            Myfeedback.textContent="";
            Mylevel.textContent="";
            Myscore.textContent="";
            MyRnumber.style.display="block";
            Myinput.value="";
            MyPlayAgain.style.display="none";
            startthegame();
        }
