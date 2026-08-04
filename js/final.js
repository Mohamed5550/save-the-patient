function showVictory(){


    document
        .getElementById("timer")
        .textContent = "";



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

        </div>




        <div class="certificate-body">


            <p>
                This certificate is proudly presented to
            </p>


            <h1 class="name">

                Mariam Hegazy

            </h1>


            <p>

                For successfully completing the

            </p>


            <h2>

                Biomedical Emergency Mission

            </h2>


            <br>


            <div class="achievements">


                <div>
                    ✅ Resuscitation Room Prepared
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

                Biomedical Emergency Specialist

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
                04 August 2026
            </p>


        </div>




        <button
            onclick="location.reload()">

            🔄 Replay Mission

        </button>



    </div>


    `;



    playSound("success");


}