function startStage2(){


    stageContent.innerHTML = `

    <div class="card ecg-card">


        <h1>
            ❤️ ECG Monitoring
        </h1>


        <p class="stage-description">

            Analyze the patient's heart rhythm
            and identify the emergency condition.

        </p>



        <div class="monitor">


            <div class="monitor-header">

                HEART MONITOR

            </div>



            <div class="ecg-screen">


                <div class="ecg-info">

                    <span>
                        BPM:
                        <strong id="bpm">
                            178
                        </strong>
                    </span>


                    <span>
                        Rhythm:
                        <strong class="critical-text">
                            UNSTABLE
                        </strong>
                    </span>

                </div>



                <svg
                    class="ecg-wave"
                    viewBox="0 0 600 150">


                    <polyline

                    points="
                    0,80
                    60,80
                    90,80
                    110,30
                    130,120
                    150,80
                    220,80
                    250,80
                    270,35
                    290,120
                    310,80
                    380,80
                    420,80
                    440,25
                    460,125
                    480,80
                    600,80
                    "

                    />


                </svg>



            </div>




            <div class="monitor-status">

                Rhythm analysis required

            </div>



        </div>




        <h3>

            Select the detected rhythm:

        </h3>



        <div class="ecg-options">


            <button
                class="ecg-option"
                data-answer="normal">

                Normal Sinus Rhythm

            </button>



            <button
                class="ecg-option"
                data-answer="arrhythmia">

                Ventricular Tachycardia

            </button>



            <button
                class="ecg-option"
                data-answer="flatline">

                Flat Line

            </button>


        </div>



        <div
            id="ecg-status"
            class="status-box">

        </div>



    </div>

    `;



    beepLoop();



    document
    .querySelectorAll(".ecg-option")
    .forEach(button => {


        button.onclick = ()=>{


            const answer =
                button.dataset.answer;



            if(answer === "arrhythmia"){


                stopBeepLoop();


                updatePatientState(
                    "arrhythmia"
                );



                playSound(
                    "success"
                );



                document
                .getElementById(
                    "ecg-status"
                )
                .innerHTML = `

                ✅ Diagnosis confirmed

                <br><br>

                Ventricular Tachycardia detected.

                <br>

                Prepare defibrillator.

                `;



                setTimeout(()=>{


                    stageCompleted();


                },2000);



            }
            else{


                playSound(
                    "failure"
                );


                gameOver(
                    "Wrong ECG interpretation. Patient condition worsened."
                );


            }


        };


    });


}





let beepInterval;



function beepLoop(){


    beepInterval =
    setInterval(()=>{


        playSound(
            "beep"
        );


    },3000);



}




function stopBeepLoop(){


    clearInterval(
        beepInterval
    );


}