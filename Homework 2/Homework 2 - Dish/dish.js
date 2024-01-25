function setup()
    {
        createCanvas(500,500)
    }
function draw()
    {
        background(0);

        //plate
        fill(255)
        circle(250, 250, 300)

        //pea
        fill(29, 200, 29)
        circle(250, 250, 40)

        //fresh fries!
        fill(255, 204, 0)
        rect(275, 200, 10, 100)
        rect(200, 250, 10, 100)

        //hashbrown triangles
        fill(255, 150, 50)
        triangle(150, 220, 200, 175, 250, 220)

        //Title
        fill(255)
        text('Mints Favorite Dish', 10, 30)

        //weliveinasociety
        fill(255)
        text('Two Fries, A Hashbrownn Triangle, and a Pea on a Platter', 175, 450)
    }