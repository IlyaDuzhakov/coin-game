const fs = require("fs");
const logFile = process.argv[2];

if (!logFile) {
  console.log("Ошибка! Укажите путь к файлу логов.");
  process.exit();
}

fs.readFile(logFile, "utf8", (error, data) => {
  if (error) {
    console.log("Не удалось прочитать файл.");
    process.exit();
  }

  const games = data.trimEnd().split("\n");
  const totalGames = games.length;
  console.log(games, totalGames);

  let wins = 0;
  let losses = 0;
  for (let game of games) {
    if (game.includes("Победа")) {
      wins++;
    } else {
      losses++;
    }
  }
  const winPercent = (wins / totalGames) * 100;
  console.log(`Всего партий: ${totalGames}`);
  console.log(`Побед: ${wins}`);
  console.log(`Поражений: ${losses}`);
  console.log(`Процент побед: ${winPercent.toFixed(2)}%`);
});
