const MISSION_EVENTS = [

    {
        id: "stage1",
        text: "Resuscitation Room Prepared"
    },

    {
        id: "stage2",
        text: "ECG Rhythm Analyzed"
    },

    {
        id: "stage3",
        text: "Defibrillator Restored"
    },

    {
        id: "stage4",
        text: "Patient Stabilized"
    }

];



let completedMissions = [];



function completeMission(id){


    if(
        completedMissions.includes(id)
    ){

        return;

    }



    completedMissions.push(id);


    renderMissionLog();

}



function renderMissionLog(){


    const container =
        document.getElementById(
            "mission-events"
        );


    if(!container){

        return;

    }



    container.innerHTML =
        MISSION_EVENTS
        .map(event=>{


            const completed =
                completedMissions.includes(
                    event.id
                );



            return `


            <div class="mission-event 
            ${completed ? "done" : ""}">


                ${completed ? "✅" : "⏳"}

                ${event.text}


            </div>


            `;


        })
        .join("");

}