

    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");


// load images

    var ship = new Image();
    var bg = new Image();
    var pipe = new Image();
    var pipe2 = new Image();

    ship.src = "images/ship.png";
    bg.src = "images/bg.jpg";
    pipe.src = "images/pipe.png";
    pipe2.src = "images/pipe.png";


    //    some var
    var gap = 500;
    var constant = pipe.width = gap;

    var bx = 333;
    var by = 400;

    var gravity = 0.3;

     // key down

    document.addEventListener("keydown", moveUp);

    function moveUp() {
        
        if (event.keyCode === 87) {

            by -=10;

        };

        if (event.keyCode === 65){

            bx -=15;
        };

        if(event.keyCode === 68){

            bx +=15;
        };

    }


    // pipes

    var pipes = [];

    pipes[0] = {
        x : cvs.height,
        y : 0
    };


    function draw() {

        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(ship, bx, by);


        for (var i = 0; i < pipes.length; i++) {
            ctx.drawImage(pipe, pipes[i].x, pipes[i].y);
            ctx.drawImage(pipe2, pipes[i].x - constant, pipes[i].y);

            pipes[i].y++;

            if (pipes[i].y == 200){

                pipes.push({
                    x : Math.floor(Math.random()*pipe.width),
                    y : Math.floor(Math.random()*pipe.height)
                });
            }

            //
            // // detect
            // if (by <= pipes[i].y && (bx <= pipes[i].x || bx >= pipes[i].x)){
            //     location.reload();
            // }
        }

        by += gravity;


        requestAnimationFrame(draw);
    }
draw();