function updateHUD(stageIndex, stage){


    const stageNames = {


        devices:
        "Equipment Preparation",


        ecg:
        "ECG Monitoring",


        repair:
        "Defibrillator Repair",


        stabilize:
        "Resuscitation"


    };




    const hudStage =
        document.getElementById(
            "hud-stage"
        );



    const progress =
        document.getElementById(
            "progress-bar"
        );





    if(hudStage){


        hudStage.textContent =
        `
        Stage ${stageIndex + 1}/4 -
        ${stageNames[stage]}
        `;


    }





    if(progress){


        const value =
        (
            (stageIndex + 1)
            /
            4
        )
        *
        100;



        progress.style.width =
        value + "%";


    }





    updatePatientHUD();


    renderMissionLog();


}