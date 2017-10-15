var MAGA0030 = {
    init:function() {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "MAGA0030";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", divClick);
        div.addEventListener("mouseover", divOver);
        div.addEventListener("mouseout", divOut);

        function divClick(event) {
          event.currentTarget.style.backgroundColor = "pink";
          event.currentTarget.style.borderColor = "lightgreen";
        }

        function divOver(event) {
          event.currentTarget.classList.toggle("highlight");

        }

        function divOut(event) {
          event.currentTarget.classList.toggle("highlight");

        }
    }
};


