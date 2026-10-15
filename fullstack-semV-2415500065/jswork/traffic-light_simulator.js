function checkLight() {
            let lightColor = document.getElementById("lightColor").value;
            let message;

            if (lightColor == "red") {
                message = "Stop";
            }
            else if (lightColor == "yellow") {
                message = "Slow down";
            }
            else if (lightColor == "green") {
                message = "Go";
            }

            document.getElementById("result").innerHTML = message;
        }