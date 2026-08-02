const fs = require("fs");

const logFile = process.argv[2];

if (!logFile) {
  console.log("Ошибка! Укажите имя файла.");
  process.exit();
}

process.stdout.write("Орёл (1) или решка (2)? ");

const computerChoice = Math.floor(Math.random() * 2) + 1;

process.stdin.on("data", (data) => {
  const answer = Number(data.toString().trim());

  if (answer !== 1 && answer !== 2) {
    console.log("Введите только 1 или 2.");
    process.exit();
  }

  let result;

  if (answer === computerChoice) {
    result = "Победа";
    console.log("Вы угадали!");
  } else {
    result = "Поражение";
    console.log("Вы проиграли!");
  }

  const log = `Пользователь: ${answer}, компьютер: ${computerChoice}, результат: ${result}\n`;

  fs.appendFile(logFile, log, (error) => {
    if (error) {
      console.log("Ошибка записи в файл.");
      process.exit();
    }

    console.log("Результат записан в файл.");
    process.exit();
  });
});