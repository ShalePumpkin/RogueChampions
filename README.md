# Rogue Champions
A companion app for the [Marvel Champions Living Card Game](https://boardgamegeek.com/boardgame/285774/marvel-champions-card-game) to create a **Roguelike campaign mode**. Between games you will earn upgrades, level them up, and tend to your wounds.

### Features
 - Select which sets, heroes, villains, and expansions you want to use
 - Play a campaign of multiple games (missions) of Marvel Champions
 - Choose from 1 of 3 upgrades before each mission
 - Choose from two possible missions based on their villain and rewards
 - Choose to either heal or level up your upgrades after a mission

## Demo
You can view the demo at https://ShalePumpkin.github.io/RogueChampions

# Unmaintained!
I do not plan to maintain this project, so I recommend you check out the forks: https://github.com/ShalePumpkin/RogueChampions/network/members

Feel free to edit the code and **make your own version**. See sections below for some guidance on adding content, but you'll have to dive into the code.

# Running It Locally
This project requires node and npm to be installed. It is built on VueJS and TypeScript.

 - Clone the repo with `git clone git@github.com:ShalePumpkin/RogeuChampions.git
 - Run `npm install`
 - Run `npm run server`
 - This should open the site in your browser

# Adding & Changing Content
You can make changes in the `src/consts` folder to add new heroes, upgrades, villains, and expansions.

## Types
You can view the structure of 

### Note on Expansions
When using the app, you need to **select which expansions to enable**. The app will only include cards and content from expansions you enable.

When adding new heroes, villains, and encounters, you also need to add the associated expansion in the `src/contsts/expansions.ts` file.

### Adding New Encounters
You can add new encounter sets in `src/encountersets.ts` file.

### Adding New Heroes
You can add new heroes to the `src/heroes.ts` file. Make sure to **also add the expansion** they are from. Character packs count as expansions.

### Adding New Upgrades
Upgrades are acquired after successful missions, and can be upgraded in between missions. The definition of an upgrade can be found in `types/upgrade.ts`
 
They are organized in the `consts/upgrades` directory. Each hero has its own upgrade file in the `heroes` subdirectory.

All upgrades must **be imported** in the `consts/upgrades.ts` file.

There are `generate` functions like `generateExhaustedCardInPlay` or `generateUpgradeCard` to easily create similar upgrades that might just deal with different cards.

### Adjusting Difficulty
Each mission you play has a set range of "difficulty" that it will fall into. The total difficulty of a mission is the **sum of its components**, with each Villain, Encounter Set, and Challenge having its own difficulty rating.

You can change the individual difficulties in the appropriate file in the src/consts folder.

To change how difficult the games start and how much their target scores go up by, consult the `generateGameOptions` function.

## License
MIT license
