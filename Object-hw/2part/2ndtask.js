let myMath = {}
MyMath = {
    a : 5,
    b : 2,

   sum(){
        console.log('5 + 2 = ', MyMath.a + MyMath.b);
    },
    multiplication(){
      console.log('5 * 2 = ', MyMath.a * MyMath.b);
    },
    division(){
        console.log('5 / 2 =', MyMath.a / MyMath.b);
    },
    substraction(){
        console.log('5 - 2 =', MyMath.a - MyMath.b);
    }
}
MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.substraction();

