class Quiz {
    contructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
    }

    update(state){
        database.ref("/").update({
     gameStae: state
        });

    }

    async start(){
    if(gameStae === 0 ){
        contestant = new contestant();
        var contestantCountRef = await database.ref ('çontestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestant.Ref.val();
            contestant.getCount();

        }
        question = new Question()
        question.display();
    }
    }

play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of ythe Quiz",340,50);
    text("----------------------------------",320,65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined ){
        debugger;
        var display_Answers = 230;
        fill ("Blue");
        textSize(20);
        text("*NOTE: Contestant who answeres correct are highlighted in green color !",130,230);

        for(var plr in allContestants){
            debugger;
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer)
            fill("Green")
            else
            fill("red");
            
            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer,250,display_Answers);

        }
    }
}

}
