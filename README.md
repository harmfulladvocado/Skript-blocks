# Skript Block Editor

A Scratch-style visual block editor for the Skript language. Drag and drop blocks to create Minecraft server scripts without writing code manually!

![Skript Block Editor](https://github.com/user-attachments/assets/acb91763-3e2b-41a5-8ed1-e3b7fd40a109)

## Features

- 🧩 **Visual Block Programming**: Drag and drop blocks like Scratch
- 📝 **Live Code Generation**: See Skript code generated in real-time
- 🎨 **Dark Mode**: Toggle between light and dark themes
- 📚 **Built-in Documentation**: Comprehensive Skript syntax reference
- 🎯 **Multiple Block Types**:
  - Events (on join, on death, on break, etc.)
  - Conditions (if/else logic)
  - Effects (send message, teleport, give items, etc.)
  - Expressions (player, victim, clicked block, etc.)
  - Loops (loop all players, loop times, etc.)
  - Variables (local & global)
- 📋 **Copy to Clipboard**: One-click code copying
- ✏️ **Editable Inputs**: Customize block parameters
- 🎨 **Color-Coded**: Different colors for each block category
- 🗑️ **Easy Deletion**: Remove blocks with X button

## Getting Started

1. Open `index.html` in any modern web browser
2. Drag blocks from the palette (left) to the workspace (center)
3. Customize block inputs as needed
4. View generated Skript code (right panel)
5. Copy the code and use it in your Minecraft server!

## Block Categories

### Events
Triggers that start your script when something happens:
- `on join`, `on quit`, `on death`, `on break`, `on place`, `on chat`, `on right click`, etc.

### Conditions
Check if something is true before executing code:
- `if condition`, `if player has permission`, `if player is op`, `if block is`, `else`

### Effects
Actions that do something in the game:
- `send message`, `broadcast`, `give item`, `teleport`, `execute command`, `kill`, `damage`, `heal`

### Expressions
Values that can be used in your script:
- `player`, `victim`, `attacker`, `clicked block`, `event-item`, `event-block`, `message`

### Loops
Repeat code multiple times:
- `loop all players`, `loop blocks in radius`, `loop times`, `loop-player`, `loop-block`, `loop-value`

### Variables
Store values for later use:
- Local variables: `{_variable}`
- Global variables: `{variable}`
- Operations: `set`, `add`, `remove`, `delete`

## Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS variables for theming
- **Vanilla JavaScript**: No frameworks, pure JS for maximum compatibility
- **Drag and Drop API**: Native browser drag-and-drop

## Resources

- [Official Skript Documentation](https://docs.skriptlang.org/)
- [skUnity Syntax Reference](https://docs.skunity.com/syntax/events)
- [SkriptHub Documentation](https://skripthub.net/docs/)
- [Skript GitHub Repository](https://github.com/SkriptLang/Skript/)

## Example Usage

1. Drag an "on join" event block to workspace
2. Add a "send message to player" block below it
3. Type your welcome message in the input field
4. The generated code appears on the right:
```skript
on join:
    send "Welcome to the server!" to player
```

## License

This project is open source and available for educational purposes.


## Contributing

please contribute bro 💔
