// Caleb Latimer C# tutorial 1
// C# starts programs with using basically including other namespaces which are collections of classes
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// user defined namespace
namespace Hello
{
    class HelloWorld // which contains my first class
    {
        static void Main(string[] args)
        { // main function
            Console.WriteLine("Hello World"); // output to console
            Console.ReadKey();
            // basically _getch() wait for a character to be input
        }
    }
}

/*
Apparently cs programs can be compiled manually via the csc foo.cs into an exe which can be by just typing foo in cmd

Requires configuring though, look into it soon.
*/