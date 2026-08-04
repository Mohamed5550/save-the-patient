function startStage1() {

    document
        .getElementById("timer")
        .textContent = "";

    let correctSelected = 0;
    let wrongSelected = 0;
    let timeLeft = 15;


    const devices = [

        {
            name: "🖥 ECG Monitor",
            status: "ECG ONLINE",
            correct: true
        },

        {
            name: "⚡ Defibrillator",
            status: "DEFIB READY",
            correct: true
        },

        {
            name: "💨 Ventilator",
            status: "VENTILATOR READY",
            correct: true
        },

        {
            name: "🧰 Crash Cart",
            status: "CRASH CART READY",
            correct: true
        },


        {
            name: "🎮 PlayStation",
            correct:false
        },

        {
            name:"🍳 Air Fryer",
            correct:false
        },

        {
            name:"📺 TV",
            correct:false
        },

        {
            name:"🧹 Vacuum Cleaner",
            correct:false
        }

    ];

    shuffle(devices);


    stageContent.innerHTML = `

        <div class="card stage-one">

            <h1>
                🚨 Resuscitation Room Setup
            </h1>


            <p class="stage-description">

                A critical patient has arrived.
                Prepare all required medical equipment.

            </p>


            <div class="patient-monitor">

                <h3>
                    Patient Status
                </h3>

                <p>
                    ❤️ Heart Rate:
                    <span>0 bpm</span>
                </p>

                <p>
                    🫁 SpO₂:
                    <span>68%</span>
                </p>

                <p>
                    ⚠ Condition:
                    <span>
                        CRITICAL
                    </span>
                </p>

            </div>


            <div
                id="stage-timer"
                class="timer-box">

                ${timeLeft}

            </div>


            <div class="devices-grid">

                ${
                    devices.map(
                        (device,index)=>`

                        <div
                            class="device-card"
                            data-index="${index}">

                            ${device.name}

                        </div>

                        `
                    ).join("")
                }

            </div>


            <div
                id="status"
                class="status-box">

                Equipment required: 4

            </div>


        </div>

    `;


    const timerElement =
        document.getElementById(
            "stage-timer"
        );


    const statusElement =
        document.getElementById(
            "status"
        );


    const countdown =
        setInterval(()=>{

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            if(timeLeft <= 0){

                clearInterval(countdown);

                gameOver(
                    "Time expired. Patient condition worsened."
                );

            }


        },1000);




    document
        .querySelectorAll(
            ".device-card"
        )
        .forEach(card=>{


            card.addEventListener(
                "click",
                ()=>{


                    if(
                        card.classList.contains(
                            "correct"
                        )
                        ||
                        card.classList.contains(
                            "wrong"
                        )
                    ){
                        return;
                    }


                    const device =
                        devices[
                            card.dataset.index
                        ];



                    if(device.correct){


                        card.classList.add(
                            "correct"
                        );


                        card.innerHTML =
                        `
                        ${device.name}

                        <br>

                        <small>
                            ${device.status}
                        </small>

                        `;


                        correctSelected++;



                        statusElement.textContent =
                        `
                        ${correctSelected}/4 equipment ready
                        `;



                        playSound("success");



                        if(
                            correctSelected === 4
                        ){


                            clearInterval(
                                countdown
                            );


                            transition(

                                "✅ RESUSCITATION ROOM READY",

                                "All critical equipment is operational. Connecting ECG Monitor...",

                                ()=>{

                                    updatePatientState(
                                        "unstable"
                                    );

                                    stageCompleted();

                                }

                            );


                        }


                    }else{


                        card.classList.add(
                            "wrong"
                        );


                        playSound("failure");


                        wrongSelected++;


                        gameOver(
                            "❌ Wrong equipment selected.<br><br>Medical preparation failed."
                        );


                    }


                }
            );


        });

}