        /*Events fired on the draggable target (the source element):
        ondragstart - occurs when the user starts to drag an element
        ondrag - occurs when an element is being dragged
        ondragend - occurs when the user has finished dragging the element

        Events fired on the drop target:
        ondragenter - occurs when the dragged element enters the drop target
        ondragover - occurs when the dragged element is over the drop target
        ondragleave - occurs when the dragged element leaves the drop target
        ondrop - occurs when the dragged element is dropped on the drop target
        */
    var historias = document.getElementById("ejemplo");
    
    //ÉSTOS SON LOS DIVS
    var backlog = document.getElementById("backlog");
    var backlogSprint = document.getElementById("backlogSprint");
    var sprint = document.getElementById("sprint");
    
    //ARRAY DE LOS DIVS PARA MANEJARLOS MEJOR
    var dropzones = [backlog,sprint,backlogSprint];
    
    //ARRAY DE HISTORIAS DRAGGABLES
    var draggables = [];
    
    function initDropzones(){
        for(var i =0; i<dropzones.length; i++){
            dropzones[i].setAttribute("class","dropzone");
        }
    }    
    
    //ESTOS 2 MANEJADORES DE EVENTOS SON PARA LAS HISTORIAS
    function dragStartHandler(e){
        var id = e.target.getAttribute("id");
        e.dataTransfer.setData("divMovido", id);
        console.log("dragStart" + id);
    }
    
    function dragEndHandler(e){
        console.log("drag end ");
    }
    
    //ESTOS PARA LOS DIVS
    
    function dragEnterHandler(e){
        console.log("dragenter");
        //initDropzones();
    }
    
    function dragOverHandler(e){
        console.log("dragover");
        //ESTE PREVENTDEFAULT ES MÁS IMPORTANTE DE LO QUE PARECE Y NO LO ENTIENDO
        e.preventDefault();
    }
    
    function dropHandler(e){
       var id = e.target.getAttribute("id");
       e.preventDefault();
       var boxId = e.dataTransfer.getData("divMovido");
       var box = document.getElementById(boxId);
       this.appendChild(box);
       console.log("drop " + this.getAttribute("id"));
    }
    
    //HAY QUE MEJORAR ESTO.
    historias.addEventListener("dragstart", dragStartHandler);
    historias.addEventListener("dragend",dragEndHandler);
    
    for(var i = 0; i<dropzones.length; i++){
        dropzones[i].addEventListener("drop", dropHandler);
        //dropzones[i].addEventListener("dragenter", dragEnterHandler);
        dropzones[i].addEventListener("dragover", dragOverHandler);
        console.log(dropzones[i]);
    }