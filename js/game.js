const startBtn =
    document.getElementById("start-btn");


const introScreen =
    document.getElementById("intro-screen");


const gameScreen =
    document.getElementById("game-screen");


const stageContent =
    document.getElementById("stage-content");



/*
    Sounds
*/

const sounds = {

    success: [],

    failure: [],

    shock: [],

    beep: []

};



function createSoundPool(
    name,
    path,
    size = 5
){

    for(
        let i = 0;
        i < size;
        i++
    ){

        sounds[name].push(
            new Audio(path)
        );

    }

}



createSoundPool(
    "success",
    "assets/sounds/success.mp3",
    3
);


createSoundPool(
    "failure",
    "assets/sounds/failure.mp3",
    3
);


createSoundPool(
    "shock",
    "assets/sounds/shock.mp3",
    3
);


createSoundPool(
    "beep",
    "assets/sounds/beep.mp3",
    8
);



const soundIndex = {

    success:0,

    failure:0,

    shock:0,

    beep:0

};



function playSound(name){


    const pool =
        sounds[name];


    if(!pool){

        return;

    }


    const sound =
        pool[
            soundIndex[name]
        ];


    sound.currentTime = 0;


    sound.play();



    soundIndex[name] =
        (
            soundIndex[name] + 1
        )
        %
        pool.length;

}





/*
    Alarm
*/


const alarmSound =
    new Audio(
        "assets/sounds/alarm.mp3"
    );



function startAlarm(){


    alarmSound.currentTime = 0;

    alarmSound.play();

}



function stopAlarm(){


    alarmSound.pause();

    alarmSound.currentTime = 0;

}





let stageIndex = 0;

let completedStage = 0;





startBtn.addEventListener(
    "click",
    startGame
);





function startGame(){


    updatePatientState(
        "critical"
    );



    startAlarm();



    introScreen.classList.remove(
        "active"
    );



    gameScreen.classList.add(
        "active"
    );



    transition(

        "📡 Connecting Emergency System",

        "Loading medical equipment...",


        ()=>{


            stopAlarm();


            loadStage();


        }

    );


}





function loadStage(){


    const stage =
        GAME_DATA.stages[stageIndex];



    updateHUD(
        stageIndex,
        stage
    );



    if(stage === "final"){


        showVictory();


        return;

    }





    showStageBriefing(

        stage,


        ()=>{


            switch(stage){


                case "devices":


                    startStage1();


                    break;



                case "ecg":


                    startStage2();


                    break;



                case "repair":


                    startStage3();


                    break;



                case "stabilize":


                    startStage4();


                    break;


            }


        }

    );


}







function gameOver(message){


    playSound(
        "failure"
    );



    stopAlarm();



    document
        .getElementById("timer")
        .textContent = "";



    stageContent.innerHTML = `


        <div class="card">


            <h1>
                💀 GAME OVER
            </h1>


            <br>


            <p>
                ${message}
            </p>


            <br>



            <button
                onclick="location.reload()">


                Try Again


            </button>



        </div>


    `;

}






function transition(
    title,
    subtitle,
    callback
){


    document
        .getElementById("timer")
        .textContent = "";



    stageContent.innerHTML = `


        <div class="card transition-card">


            <h1>

                ${title}

            </h1>


            <br>


            <p>

                ${subtitle}

            </p>


        </div>


    `;



    setTimeout(

        callback,

        1800

    );

}






function shuffle(array){


    for(
        let i = array.length - 1;
        i > 0;
        i--
    ){


        const j =
            Math.floor(
                Math.random() * (i + 1)
            );



        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }



    return array;

}







function stageCompleted(){



    completeMission(
        "stage" + completedStage
    );



    const dialogues = [

        null,

        "afterStage1",

        "afterStage2",

        "afterStage3",

        "afterStage4"

    ];



    const key =
        dialogues[completedStage];



    if(key){


        showDialogue(

            key,


            ()=>{


                if(
                    completedStage === 4
                ){

                    showMissionReport();

                    return;

                }



                stageIndex++;


                loadStage();


            }

        );


    }else{


        stageIndex++;


        loadStage();


    }

}