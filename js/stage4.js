let compressions = 0;

let shockReady = false;


function startStage4(){


    compressions = 0;

    shockReady = false;



    stageContent.innerHTML = `

        <div class="card resuscitation-card">


            <h1>
                🫀 Resuscitation
            </h1>


            <p class="stage-description">

                Patient has no pulse.
                Start CPR immediately.

            </p>



            <div class="heart-monitor">


                ❤️


                <div id="pulse-status">

                    NO PULSE

                </div>


            </div>



            <div id="compression-count">

                Compressions:
                0 / 30

            </div>



            <button
                id="compression-btn">

                ❤️ Perform Compression

            </button>




            <div
                id="defib-section"
                class="hidden">


                <h2>

                    ⚡ Defibrillator Ready

                </h2>


                <p>

                    Shockable rhythm detected.

                </p>


                <button
                    id="charge-btn">

                    ⚡ Charge Defibrillator

                </button>



            </div>




            <div
                id="shock-section"
                class="hidden">


                <h2>

                    ⚡ Ready To Shock

                </h2>


                <button
                    id="shock-btn">

                    ⚡ DELIVER SHOCK

                </button>


            </div>



        </div>

    `;




    document
    .getElementById(
        "compression-btn"
    )
    .onclick = ()=>{


        compressions++;


        playSound(
            "beep"
        );



        document
        .getElementById(
            "compression-count"
        )
        .textContent =
        `
        Compressions:
        ${compressions} / 30
        `;



        if(compressions >= 30){



            document
            .getElementById(
                "defib-section"
            )
            .classList
            .remove(
                "hidden"
            );



            document
            .getElementById(
                "compression-btn"
            )
            .disabled = true;



            playSound(
                "success"
            );


        }


    };







    document
    .getElementById(
        "charge-btn"
    )
    .onclick = (e)=>{


        const button = e.currentTarget;



        button.disabled = true;



        button.textContent =
            "⚡ Charging...";



        playSound(
            "shock"
        );



        document
        .getElementById(
            "defib-section"
        )
        .innerHTML = `

            <h2>
                ⚡ Charging...
            </h2>


            <div class="charge-bar">

                <div></div>

            </div>

            <p>
                Do not touch patient
            </p>

        `;



        setTimeout(()=>{


            shockReady = true;



            document
            .getElementById(
                "shock-section"
            )
            .classList
            .remove(
                "hidden"
            );



        },2500);



    };








    document
    .getElementById(
        "shock-btn"
    )
    .onclick = ()=>{


        if(!shockReady){

            return;

        }




        shockReady = false;



        playSound(
            "shock"
        );



        const monitor =
            document.querySelector(
                ".heart-monitor"
            );



        if(monitor){

            monitor.classList.add(
                "shock-animation"
            );

        }




        updatePatientState(
            "stabilized"
        );



        transition(

            "❤️ Rhythm Restored",

            "Patient stabilized. Preparing certificate...",


            ()=>{


                completedStage = 4;


                stageCompleted();


            }

        );



    };


}