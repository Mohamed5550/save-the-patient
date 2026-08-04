function startStage3() {


    document
        .getElementById("timer")
        .textContent = "";


    let connected = 0;


    const wires = [

        {
            name:"🔴 Power Cable",
            color:"red",
            module:"POWER MODULE"
        },

        {
            name:"🔵 ECG Cable",
            color:"blue",
            module:"ECG MONITOR"
        },

        {
            name:"🟡 Charging Cable",
            color:"yellow",
            module:"CHARGING SYSTEM"
        },

        {
            name:"🟢 Patient Pads Cable",
            color:"green",
            module:"PATIENT PADS"
        }

    ];



    shuffle(wires);



    stageContent.innerHTML = `


    <div class="card repair-stage">


        <h1>
            ⚡ Defibrillator Repair
        </h1>



        <p class="stage-description">

            The defibrillator failed during emergency response.
            Restore all hardware connections.

        </p>



        <div class="defibrillator">


            <div class="defib-screen">


                <h2>
                    DEFIBRILLATOR
                </h2>


                <div id="defib-status">

                    SYSTEM ERROR ❌

                </div>



                <div class="defib-line">

                    POWER MODULE:

                    <span>
                        DISCONNECTED
                    </span>

                </div>


                <div class="defib-line">

                    CHARGING:

                    <span>
                        OFF
                    </span>

                </div>


                <div class="defib-line">

                    PATIENT CONNECTION:

                    <span>
                        FAILED
                    </span>

                </div>


            </div>



            <div class="ports">


                <div class="port"
                    data-color="red">

                    POWER

                </div>


                <div class="port"
                    data-color="blue">

                    ECG

                </div>


                <div class="port"
                    data-color="yellow">

                    CHARGE

                </div>


                <div class="port"
                    data-color="green">

                    PADS

                </div>


            </div>


        </div>



        <h3>
            Connect damaged cables:
        </h3>



        <p class="drag-hint">

            🖱️ Touch and drag each cable to the matching port

        </p>



        <div class="wire-panel">


            ${
                wires.map(wire=>`

                <div

                    class="wire ${wire.color}"

                    data-color="${wire.color}">


                    ${wire.name}


                    <small>
                        ${wire.module}
                    </small>


                </div>

                `).join("")
            }


        </div>




        <div
            id="repair-status"
            class="status-box">

            Waiting for connections...

        </div>



    </div>


    `;



    let activeWire = null;



    let offsetX = 0;

    let offsetY = 0;





    document
    .querySelectorAll(".wire")
    .forEach(wire=>{


        wire.addEventListener(
            "pointerdown",
            startDrag
        );


    });






    function startDrag(e){


        activeWire = e.currentTarget;


        activeWire.classList.add(
            "dragging"
        );


        activeWire.setPointerCapture(
            e.pointerId
        );



        const rect =
            activeWire.getBoundingClientRect();



        offsetX =
            e.clientX - rect.left;


        offsetY =
            e.clientY - rect.top;


        activeWire.style.position =
            "fixed";


        moveWire(e);


        activeWire.addEventListener(
            "pointermove",
            moveWire
        );


        activeWire.addEventListener(
            "pointerup",
            endDrag
        );


    }






    function moveWire(e){


        if(!activeWire){

            return;

        }



        activeWire.style.left =
            (
                e.clientX - offsetX
            )
            +
            "px";



        activeWire.style.top =
            (
                e.clientY - offsetY
            )
            +
            "px";


        activeWire.style.zIndex =
            "1000";


    }







    function endDrag(e){


        if(!activeWire){

            return;

        }



        const droppedPort =
            getTargetPort(
                e.clientX,
                e.clientY
            );



        if(
            droppedPort &&
            droppedPort.dataset.color ===
            activeWire.dataset.color
        ){


            droppedPort.classList.add(
                "connected"
            );


            droppedPort.innerHTML =
                "✅ CONNECTED";



            activeWire.classList.add(
                "used"
            );


            activeWire.style.display =
                "none";



            connected++;



            document
            .getElementById(
                "repair-status"
            )
            .textContent =
            `${connected}/4 systems restored`;



            playSound(
                "success"
            );



            if(
                connected === 4
            ){

                activateDefib();

            }



        }
        else{


            activeWire.style.position =
                "";


            activeWire.style.left =
                "";


            activeWire.style.top =
                "";


            playSound(
                "failure"
            );


        }



        activeWire.classList.remove(
            "dragging"
        );


        activeWire.releasePointerCapture(
            e.pointerId
        );


        activeWire.removeEventListener(
            "pointermove",
            moveWire
        );


        activeWire = null;


    }






    function getTargetPort(x,y){


        const ports =
            document
            .elementsFromPoint(
                x,
                y
            );



        return ports.find(
            element =>
            element.classList.contains(
                "port"
            )
        );


    }


}







function activateDefib(){


    const status =
    document.getElementById(
        "defib-status"
    );



    status.innerHTML =
    "SYSTEM REPAIRING... ⚙️";



    setTimeout(()=>{


        status.innerHTML =
        "ONLINE ✅";



        document
        .querySelectorAll(
            ".defib-line span"
        )
        .forEach(item=>{


            item.textContent =
            "READY";


            item.classList.add(
                "ready"
            );


        });



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


        },1500);



    },2000);



}