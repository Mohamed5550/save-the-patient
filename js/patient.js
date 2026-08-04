let patientState = {

    status: "Critical",

    icon: "🔴",

    condition:
    "Cardiac arrest detected"

};



const PATIENT_STATES = {


    critical: {

        status: "Critical",

        icon: "🔴",

        condition:
        "Cardiac arrest detected"

    },


    unstable: {

        status: "Unstable",

        icon: "🟠",

        condition:
        "Emergency room prepared. Waiting for intervention."

    },


    arrhythmia: {

        status: "Arrhythmia",

        icon: "❤️",

        condition:
        "Abnormal heart rhythm detected."

    },


    improving: {

        status: "Improving",

        icon: "🟡",

        condition:
        "Defibrillator ready. Patient responding."

    },


    stabilized: {

        status: "Stabilized",

        icon: "🟢",

        condition:
        "Vital signs restored."

    }

};



function updatePatientState(state){


    if(!PATIENT_STATES[state]){

        return;

    }


    patientState =
        PATIENT_STATES[state];


    updatePatientHUD();


}



function updatePatientHUD(){


    const element =
        document.getElementById(
            "hud-patient"
        );


    if(!element){

        return;

    }



    element.innerHTML = `

        ${patientState.icon}

        ${patientState.status}

        <br>

        <small>
            ${patientState.condition}
        </small>

    `;

}