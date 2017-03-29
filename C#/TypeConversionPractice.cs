using System;
namespace TypeConverionPractice
{
    class ExplicitConversion
    {
        static void Main(string[] args)
        {
            double d = 5673.74;
            int i;

            i = (int)d; // this is explicit type conversion
            Console.WriteLine(i);
            Console.WriteLine(d);
            int a = 75;
            float f = 53.005f;
            double c = 2345.7652;
            bool b = true;

            Console.WriteLine(a.ToString()); // explicit string conversions 
            Console.WriteLine(f.ToString());
            Console.WriteLine(c.ToString());
            Console.WriteLine(b.ToString());
            Console.ReadKey();
        }
    }

   
}
