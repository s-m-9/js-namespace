var MAGA0030 = {
    init:function() {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "MAGA0030";
        document.getElementById("boxes").appendChild(div);
        div.style.backgroundColor = "lightblue";
        div.style.width = "200px";
        div.style.height = "200px";

        div.style.border = "10px solid brown";





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
}


