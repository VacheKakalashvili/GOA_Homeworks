from turtle import*

speed(10)
color("red")
width(3)
forward(300)
left(90)

forward(300)
left(90)

forward(300)
left(90)

forward(300)
left(90)

forward(110)
color("black")
begin_fill()
left(90)
forward (150)
right(90)
forward(80)
right(90)
forward(150)
end_fill()

penup()
goto(300,300)
pendown()

color("brown")
begin_fill()
right(120)
forward(175)
left(60)
forward(175)
end_fill()

penup()
goto(40,260)
pendown()

color("blue")
begin_fill()
left(60)
forward(80)
left(90)
forward(50)
left(90)
forward(80)
left(90)
forward(50)

penup()
goto(260,260)
pendown()

right(270)
forward(80)
right(90)
forward(50)
right(90)
forward(80)
right(90)
forward(50)
end_fill()

penup()

exitonclick()