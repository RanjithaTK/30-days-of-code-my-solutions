function main() {
  var i = 4
  var d = 4.0
  var s = "HackerRank "
  // Declare second integer, double, and String variables.

  var myInt, myFloat, myString
  // Read and save an integer, double, and String to your variables.

  myInt = parseInt(readLine())
  myFloat = parseFloat(readLine())
  myString = readLine()

  // Print the sum of both integer variables on a new line.

  console.log(i + myInt)

  // Print the sum of the double variables on a new line.

  console.log((d + myFloat).toFixed(1))
  // Concatenate and print the String variables on a new line

  console.log(s + myString)
  // The 's' variable above should be printed first.
}
main()
