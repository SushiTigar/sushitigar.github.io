function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5esrSl5VloY":
        Script1();
        break;
      case "5sVIV3bOl6h":
        Script2();
        break;
      case "69NNyxOSTTq":
        Script3();
        break;
      case "6VTE4B3A9mX":
        Script4();
        break;
      case "6gHBklR2dV2":
        Script5();
        break;
  }
}

function Script1()
{
  SubmitInitialClick();
}

function Script2()
{
  /*Get a random number for retail and cost and calculate the answer
Math.floor drops the decimals
Math.random generates a number between 0 and 1
*/
var randomly = Math.floor((Math.random()*100000)+50000);
var randomty = Math.floor((Math.random()*100000)+40000);
var tylyanswer = Math.floor(((randomty-randomly)/randomly) *100);
var tylyanswerplusone = tylyanswer + 1;
var tylyanswerminusone = tylyanswer - 1;

/*Pass all of the information to Storyline
*/
var player = GetPlayer();
player.SetVar("pracly",randomly);
player.SetVar("practy",randomty);
player.SetVar("pracanswerplus1",tylyanswerplusone);
player.SetVar("pracanswerminus1",tylyanswerminusone);
player.SetVar("pracanswer",tylyanswer);

}

function Script3()
{
  /*Get a random number for retail and cost and calculate the answer
Math.floor drops the decimals
Math.random generates a number between 0 and 1
*/
var randominventory = Math.floor((Math.random()*200000)+50);
var inventoryanswer = Math.floor(randominventory/5);
var inventoryanswerplusone = inventoryanswer + 1;
var inventoryanswerminusone = inventoryanswer - 1;

/*Pass all of the information to Storyline
*/
var player = GetPlayer();
player.SetVar("pracinventory",randominventory);
player.SetVar("pracanswerplus1",inventoryanswerplusone);
player.SetVar("pracanswerminus1",inventoryanswerminusone);
player.SetVar("pracanswer",inventoryanswer);

}

function Script4()
{
  /*Get a random number for markup and calculate the answer
Math.floor drops the decimals
Math.random generates a number between 0 and 1
*/
var randomsales = Math.floor((Math.random()*20000)+5000);
var randomavg = ~~(randomsales + (Math.random()*8500));
var turncompanswer = (randomsales/randomavg);
var turnanswerplusone = turncompanswer + .01;
var turnanswerminusone = turncompanswer - .01;

/*Pass all of the information to Storyline
*/
var player = GetPlayer();
player.SetVar("pracsales",randomsales);
player.SetVar("pracavg",randomavg);
player.SetVar("pracanswerplus1",turnanswerplusone);
player.SetVar("pracanswerminus1",turnanswerminusone);
player.SetVar("pracanswer",turncompanswer);

}

function Script5()
{
  /*Get a random number for markup and calculate the answer
Math.floor drops the decimals
Math.random generates a number between 0 and 1*/
var randominventory = Math.floor((Math.random()*1000)+950);
var randomsales = Math.floor((Math.random()*850)+1);
var retailanswer = Math.floor((randomsales/(randomsales+randominventory))*100);
var sellthruanswerplusone = retailanswer+ 1;
var sellthruanswerminusone = retailanswer - 1;

/*Pass all of the information to Storyline*/
var player = GetPlayer();
player.SetVar("pracsales",randomsales);
player.SetVar("pracinventory",randominventory);
player.SetVar("pracanswerplus1",sellthruanswerplusone);
player.SetVar("pracanswerminus1",sellthruanswerminusone);
player.SetVar("pracanswer",retailanswer);

}

