const STAGE_INFO = {

    devices: {

        title: "Stage 1 - Emergency Equipment",

        objective:
        "Prepare the emergency room and select the required medical equipment before patient arrival.",

        icon: "🩺"

    },


    ecg: {

        title: "Stage 2 - ECG Monitoring",

        objective:
        "Analyze the patient's heart rhythm and decide the correct emergency action.",

        icon: "❤️"

    },


    repair: {

        title: "Stage 3 - Device Failure",

        objective:
        "Restore the defibrillator by connecting the damaged components correctly.",

        icon: "🔧"

    },


    stabilize: {

        title: "Stage 4 - Resuscitation",

        objective:
        "Perform emergency response procedures and stabilize the patient.",

        icon: "🚨"

    }

};



function showStageBriefing(stage, callback){


    const info =
        STAGE_INFO[stage];


    if(!info){

        callback();

        return;

    }



    document
        .getElementById("timer")
        .textContent = "";



    stageContent.innerHTML = `


    <div class="card briefing">


        <div class="briefing-icon">

            ${info.icon}

        </div>



        <h1>

            ${info.title}

        </h1>



        <p>

            ${info.objective}

        </p>



        <button id="begin-stage">

            Begin Stage

        </button>



    </div>


    `;



    document
        .getElementById("begin-stage")
        .onclick = callback;


}