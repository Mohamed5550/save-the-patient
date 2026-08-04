const DIALOGUES = {


    afterStage1: {

        title:
        "✅ Equipment Ready",

        message:
        `
        Doctor:
        "The emergency room is prepared."

        <br><br>

        System:
        "Patient monitoring can begin."

        <br><br>

        Patient condition:
        🟠 Unstable
        `

    },


    afterStage2: {

        title:
        "⚠️ ECG Analysis Complete",

        message:
        `
        Monitor:
        "Abnormal rhythm detected."

        <br><br>

        Doctor:
        "We need the defibrillator immediately."

        <br><br>

        Patient condition:
        ❤️ Arrhythmia
        `

    },


    afterStage3: {

        title:
        "🔧 Defibrillator Restored",

        message:
        `
        System:
        "Device calibration completed."

        <br><br>

        Doctor:
        "The defibrillator is ready."

        <br><br>

        Patient condition:
        🟡 Improving
        `

    },


    afterStage4: {

        title:
        "❤️ Patient Stabilized",

        message:
        `
        Monitor:
        "Vital signs returning to normal."

        <br><br>

        Doctor:
        "Excellent work. The patient is stable."

        <br><br>

        Preparing final report...
        `

    }

};



function showDialogue(key, callback){


    const data =
        DIALOGUES[key];


    if(!data){

        callback();

        return;

    }



    stageContent.innerHTML = `


        <div class="card dialogue">


            <h1>
                ${data.title}
            </h1>


            <br>


            <p>
                ${data.message}
            </p>



            <button id="continue-btn">

                Continue

            </button>


        </div>


    `;



    document
        .getElementById(
            "continue-btn"
        )
        .onclick = callback;


}