export const defaultCodes = {
    java: `
  /**
  * Problem: Random Dice Roll in Java.
  */
  import java.util.Random;
  import java.util.Scanner;
  
  public class Main {
    public static void main(String[] args) {
      Random random = new Random();
      Scanner scanner = new Scanner(System.in);
      System.out.println("Welcome to the Dice Roller!");
      int diceResult = random.nextInt(6) + 1;
      System.out.println("You rolled a " + diceResult);
      scanner.close();
    }
  }
    `,
  
    python: `# Problem: Random Dice Roll in Python
  import random
  print("Welcome to the Dice Roller!")
  print("You rolled a", random.randint(1, 6))
    `,
  
    cpp: `// Problem: Random Dice Roll in C++
  #include <iostream>
  #include <cstdlib>
  #include <ctime>
  
  int main() {
    std::srand(std::time(0));
    std::cout << "Welcome to the Dice Roller!" << std::endl;
    std::cout << "You rolled a " << (std::rand() % 6 + 1) << std::endl;
    return 0;
  }
    `,
  
    javascript: `// Problem: Random Dice Roll in JavaScript
  console.log("Welcome to the Dice Roller!");
  console.log("You rolled a", Math.floor(Math.random() * 6) + 1);
    `,
  
    c: `// Problem: Random Dice Roll in C
  #include <stdio.h>
  #include <stdlib.h>
  #include <time.h>
  
  int main() {
    srand(time(NULL));
    printf("Welcome to the Dice Roller!\\n");
    printf("You rolled a %d\\n", rand() % 6 + 1);
    return 0;
  }
    `,
  
    typescript: `// Problem: Random Dice Roll in TypeScript
  console.log("Welcome to the Dice Roller!");
  console.log("You rolled a", Math.floor(Math.random() * 6) + 1);
    `,
  
    php: `<?php
  // Problem: Random Dice Roll in PHP
  echo "Welcome to the Dice Roller!\\n";
  echo "You rolled a " . rand(1, 6) . "\\n";
  ?>
    `,
  
    ruby: `# Problem: Random Dice Roll in Ruby
  puts "Welcome to the Dice Roller!"
  puts "You rolled a #{rand(1..6)}"
    `,
  
    csharp: `// Problem: Random Dice Roll in C#
  using System;
  
  class Program {
    static void Main() {
      Random rand = new Random();
      Console.WriteLine("Welcome to the Dice Roller!");
      Console.WriteLine("You rolled a " + rand.Next(1, 7));
    }
  }
    `,
  
    go: `// Problem: Random Dice Roll in Go
  package main
  
  import (
    "fmt"
    "math/rand"
    "time"
  )
  
  func main() {
    rand.Seed(time.Now().UnixNano())
    fmt.Println("Welcome to the Dice Roller!")
    fmt.Println("You rolled a", rand.Intn(6)+1)
  }
    `,
  
    swift: `// Problem: Random Dice Roll in Swift
  import Foundation
  
  print("Welcome to the Dice Roller!")
  print("You rolled a \\(Int.random(in: 1...6))")
    `,
  };
  