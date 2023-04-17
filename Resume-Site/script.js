class wrapper {
        static i = 1;
        static j = 1;
}

files = ["TexasInstruments.png","StateMachine.png","SEEDmachine.png"];

function rotateImage(increment) {
        wrapper.i = wrapper.i + increment
        document.getElementById("image-display").innerHTML = "<img src='" + files[Math.abs(wrapper.i % 3)] + "'/>";
}

function changeStyle(styleSheet) {
        document.getElementById("test").href = styleSheet;
}