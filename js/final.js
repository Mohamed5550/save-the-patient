function showVictory(){


    document
        .getElementById("timer")
        .textContent = "";



    const missionDate =
        new Date()
        .toLocaleDateString(
            "en-US",
            {
                day:"2-digit",
                month:"long",
                year:"numeric"
            }
        );



    stageContent.innerHTML = `


    <div class="certificate">


        <div class="certificate-header">


            🏆


            <h1>
                CODE BLUE
            </h1>


            <h2>
                Emergency Response Simulation
            </h2>


            <p>
                Mansoura Medical Center
                <br>
                Emergency Department
            </p>


        </div>





        <div class="certificate-body">


            <p>

                Mission Completion Certificate

            </p>


            <p>

                Awarded to

            </p>



            <h1 class="name">

                Mariam Hegazy

            </h1>



            <p>

                For successfully completing the

            </p>



            <h2>

                Biomedical Emergency Response Simulation

            </h2>



            <br>





            <div class="achievements">


                <div>
                    ✅ Emergency Room Prepared
                </div>


                <div>
                    ✅ ECG Rhythm Analyzed
                </div>


                <div>
                    ✅ Defibrillator Restored
                </div>


                <div>
                    ✅ Patient Stabilized
                </div>


            </div>




            <br>




            <h3>

                Biomedical Engineer
                <br>
                Emergency Response Training

            </h3>



        </div>





        <div class="certificate-footer">


            <p>

                Mission Status:

                <strong>

                    COMPLETED

                </strong>

            </p>



            <p>

                ${missionDate}

            </p>


        </div>





        <button
            onclick="location.reload()">

            🔄 Replay Mission

        </button>



    </div>


    `;



    playSound(
        "success"
    );


}