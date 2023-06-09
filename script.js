
var t1 = gsap.timeline()

t1.to("#page1",{
y:"100vh",
scale:0.4,
duration:0
})
t1.to("#page1",{
y:"30vh",
duration:1,
delay:1
})
t1.to("#page1",{
y:"0vh",
rotate:2*360,
scale:1,
duration:1
})