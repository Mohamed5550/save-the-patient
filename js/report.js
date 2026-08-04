function showMissionReport(){


    document
        .getElementById("timer")
        .textContent = "";



    stageContent.innerHTML = `


    <div class="card mission-report">


        <div class="report-header">


            <h1>
                📋 CODE BLUE REPORT
            </h1>


            <p>
                Emergency Response Simulation
            </p>


        </div>




        <div class="report-section">


            <h2>
                Patient Information
            </h2>


            <p>
                Patient:
                <strong>
                    Case #001
                </strong>
            </p>


            <p>
                Location:
                <strong>
                    Mansoura Medical Center
                </strong>
            </p>


            <p>
                Final Status:
                <strong class="stable">
                    STABLE 🟢
                </strong>
            </p>


        </div>





        <div class="report-section">


            <h2>
                Mission Results
            </h2>



            <div class="report-item">

                ✅ Resuscitation Room Prepared

            </div>


            <div class="report-item">

                ✅ ECG Rhythm Analyzed

            </div>


            <div class="report-item">

                ✅ Defibrillator Restored

            </div>


            <div class="report-item">

                ✅ Patient Stabilized

            </div>


        </div>





        <div class="performance">


            <h2>
                Emergency Performance
            </h2>


            <div class="stars">

                ⭐⭐⭐⭐⭐

            </div>


            <p>
                Accuracy:
                <strong>
                    100%
                </strong>
            </p>


            <p>
                Response:
                <strong>
                    Excellent
                </strong>
            </p>


        </div>





        <button id="certificate-btn">

            🏆 View Certificate

        </button>



    </div>


    `;




    document
        .getElementById(
            "certificate-btn"
        )
        .onclick = ()=>{


            showVictory();


        };


}