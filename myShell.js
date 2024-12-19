let currDir = ["~"];

const cd = function (arguements) {
  if (arguements[0] === ".." && currDir.length > 1) {
    currDir.pop();

    return "";
  }
  
  currDir.push(arguements);
  
  return "";
};

const pwd = function () {
  return currDir;
};

const echo = function (strings) {
  return strings;
};

const getPrompt = function () {
  const commandString = prompt("cognis " + currDir.join("/") + "/ ==> ");

  return commandString.split(" ");
};

const runCommand = function (command, arguements) {
  // console.log("command:", command, "args:", arguements);

  switch (command) {
    case "cd": return cd(arguements);
    case "echo": return echo(arguements).join(" ");
    case "pwd": return pwd().join("");
  }

  return "result";
};

const startShell = function () {
  while (true) {
    const [command, ...args] = getPrompt();
    // console.log("you entered command:", command);
    // console.log("you entered args:", args);
    const output = runCommand(command, args);

    if (command !== "cd" || output !== "") {
      console.log("the result is ", output);
    }
  }
};

startShell();
