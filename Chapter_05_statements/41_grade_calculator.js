/*Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59*/
let mark = 95;

if(mark>=90 && mark<=100){
    console.log("A");
}
else if(mark>=80 && mark<=89){
   console.log("B")
}
else if(mark>=70 && mark<=79)
{
    console.log("C")
}else if(mark>=60 && mark<=69)
{
    console.log("D")
}
else if(mark=0&& marks<=59){
    console.log("F")
}

else
{
    console.log("Invalid score");
}
