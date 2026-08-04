function startStage3() {


    document
        .getElementById("timer")
        .textContent = "";


    let connected = 0;

    let selectedWire = null;



    const wires = [

        {
            id:"red",
            name:"🔴 Power Lead",
            port:"POWER PORT"
        },

        {
            id:"blue",
            name:"🔵 ECG Lead",
            port:"ECG PORT"
        },

        {
            id:"yellow",
            name:"🟡 Charging Lead",
            port:"CHARGE PORT"
        },

        {
            id:"green",
            name:"🟢 Safety Lead",
            port:"SAFETY PORT"
        }

    ];



    shuffle(wires);



    stageContent.innerHTML = `

    <div class="card repair-stage">


        <h1>
            ⚡ Defibrillator Repair
        </h1>


        <p class="stage-description">

            The defibrillator system has failed.
            Connect all cables to restore the device.

        </p>




        <div class="defib-device">


            <h2>
                ⚡ DEFIBRILLATOR
            </h2>


            <div class="device-status">

                STATUS:
                <span id="defib-status">

                    ERROR ❌

                </span>

            </div>


        </div>





        <h3>

            Select a cable then select its port

        </h3>




        <div class="repair-mobile-layout">



            <div class="wire-panel">


                ${wires.map(wire=>`

                    <button

                        class="wire"

                        data-wire="${wire.id}">

                        ${wire.name}

                    </button>


                `).join("")}



            </div>





            <div class="port-panel">


                <button

                    class="port"

                    data-port="red">

                    POWER PORT

                </button>



                <button

                    class="port"

                    data-port="blue">

                    ECG PORT

                </button>



                <button

                    class="port"

                    data-port="yellow">

                    CHARGE PORT

                </button>



                <button

                    class="port"

                    data-port="green">

                    SAFETY PORT

                </button>



            </div>



        </div>





        <div
            id="repair-status"
            class="status-box">

            Select a cable

        </div>



    </div>

    `;




    const status =
        document.getElementById(
            "repair-status"
        );





    document
    .querySelectorAll(".wire")
    .forEach(wire=>{


        wire.onclick = ()=>{


            if(
                wire.classList.contains(
                    "connected"
                )
            ){
                return;
            }



            document
            .querySelectorAll(".wire")
            .forEach(w=>
                w.classList.remove(
                    "selected"
                )
            );



            wire.classList.add(
                "selected"
            );


            selectedWire =
                wire.dataset.wire;



            status.textContent =
                "Now select the matching port";

        };


    });







    document
    .querySelectorAll(".port")
    .forEach(port=>{


        port.onclick = ()=>{


            if(!selectedWire){

                status.textContent =
                "Select a cable first";

                return;

            }




            if(
                port.classList.contains(
                    "connected"
                )
            ){

                return;

            }




            if(
                selectedWire ===
                port.dataset.port
            ){


                port.classList.add(
                    "connected"
                );


                port.innerHTML =
                "✅ CONNECTED";



                const wire =
                    document.querySelector(
                        `.wire[data-wire="${selectedWire}"]`
                    );



                wire.classList.add(
                    "connected"
                );



                wire.disabled = true;



                connected++;



                playSound(
                    "success"
                );



                status.textContent =
                `${connected}/4 connections completed`;



                selectedWire = null;




                if(
                    connected === 4
                ){


                    runDiagnostic();


                }



            }
            else{


                playSound(
                    "failure"
                );


                gameOver(
                    "Wrong connection detected.<br><br>Hardware failure."
                );


            }



        };


    });



}





function runDiagnostic(){


    stageContent.innerHTML = `

    <div class="card">


        <h1>
            🔍 System Diagnostic
        </h1>


        <br>


        <p>
            Checking Power Module...
            ✅
        </p>


        <p>
            Checking Charging Circuit...
            ✅
        </p>


        <p>
            Checking Patient Pads...
            ✅
        </p>


        <br>


        <h2>
            Defibrillator Ready ⚡
        </h2>


    </div>

    `;



    playSound(
        "success"
    );



    setTimeout(()=>{


        transition(

            "⚡ Defibrillator Online",

            "Emergency shock system ready. Patient requires immediate intervention.",

            ()=>{


                updatePatientState(
                    "improving"
                );


                completedStage = 3;


                stageCompleted();


            }

        );


    },2000);


}