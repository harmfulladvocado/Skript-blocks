const blockDefinitions = {
    events: [
        {
            id: 'event-join',
            type: 'event',
            label: 'on join',
            code: 'on join:',
            inputs: []
        },
        {
            id: 'event-quit',
            type: 'event',
            label: 'on quit',
            code: 'on quit:',
            inputs: []
        },
        {
            id: 'event-death',
            type: 'event',
            label: 'on death',
            code: 'on death:',
            inputs: []
        },
        {
            id: 'event-break',
            type: 'event',
            label: 'on break',
            code: 'on break:',
            inputs: []
        },
        {
            id: 'event-place',
            type: 'event',
            label: 'on place',
            code: 'on place:',
            inputs: []
        },
        {
            id: 'event-chat',
            type: 'event',
            label: 'on chat',
            code: 'on chat:',
            inputs: []
        },
        {
            id: 'event-rightclick',
            type: 'event',
            label: 'on right click',
            code: 'on right click:',
            inputs: []
        },
        {
            id: 'event-command',
            type: 'event',
            label: 'on command',
            code: 'on command [input]:',
            inputs: [
                { type: 'text', placeholder: '/command', name: 'command' }
            ]
        },
        // Expanded events
        {
            id: 'event-damage',
            type: 'event',
            label: 'on damage',
            code: 'on damage of %entity%:',
            inputs: [
                { type: 'text', placeholder: 'player', name: 'entity' }
            ]
        },
        {
            id: 'event-click',
            type: 'event',
            label: 'on click (inventory/gui)',
            code: 'on inventory click:',
            inputs: []
        },
        {
            id: 'event-server-start',
            type: 'event',
            label: 'on server start',
            code: 'on server start:',
            inputs: []
        },
        {
            id: 'event-server-stop',
            type: 'event',
            label: 'on server stop',
            code: 'on server stop:',
            inputs: []
        },
        {
            id: 'event-world-load',
            type: 'event',
            label: 'on world load',
            code: 'on load of world:',
            inputs: []
        },
        {
            id: 'event-respawn',
            type: 'event',
            label: 'on respawn',
            code: 'on respawn:',
            inputs: []
        },
        {
            id: 'event-pickup',
            type: 'event',
            label: 'on pickup',
            code: 'on pickup of item:',
            inputs: []
        },
        {
            id: 'event-drop',
            type: 'event',
            label: 'on drop',
            code: 'on drop of item:',
            inputs: []
        },
        {
            id: 'event-entity-spawn',
            type: 'event',
            label: 'on spawn',
            code: 'on spawn of %entity%:',
            inputs: [
                { type: 'text', placeholder: 'creeper', name: 'entity' }
            ]
        }
    ],
    conditions: [
        {
            id: 'condition-if',
            type: 'condition',
            label: 'if condition',
            code: 'if [condition]:',
            inputs: [
                { type: 'text', placeholder: 'condition', name: 'condition' }
            ]
        },
        {
            id: 'condition-permission',
            type: 'condition',
            label: 'if player has permission',
            code: 'if player has permission "[permission]":',
            inputs: [
                { type: 'text', placeholder: 'permission', name: 'permission' }
            ]
        },
        {
            id: 'condition-op',
            type: 'condition',
            label: 'if player is op',
            code: 'if player is op:',
            inputs: []
        },
        {
            id: 'condition-block',
            type: 'condition',
            label: 'if block is',
            code: 'if block is [blocktype]:',
            inputs: [
                { type: 'text', placeholder: 'stone', name: 'blocktype' }
            ]
        },
        {
            id: 'condition-else',
            type: 'condition',
            label: 'else',
            code: 'else:',
            inputs: []
        },
        // Expanded conditions
        {
            id: 'condition-gamemode',
            type: 'condition',
            label: "if player's gamemode is",
            code: "if player's gamemode is [mode]:",
            inputs: [
                { type: 'text', placeholder: 'creative', name: 'mode' }
            ]
        },
        {
            id: 'condition-health',
            type: 'condition',
            label: "if player's health <|>|=",
            code: "if player's health [comparison] [value]:",
            inputs: [
                { type: 'select', options: ['<', '>', '<=', '>=', '='], name: 'comparison' },
                { type: 'number', placeholder: '10', name: 'value' }
            ]
        },
        {
            id: 'condition-is-sneaking',
            type: 'condition',
            label: 'if player is sneaking',
            code: 'if player is sneaking:',
            inputs: []
        },
        {
            id: 'condition-is-flying',
            type: 'condition',
            label: 'if player is flying',
            code: 'if player is flying:',
            inputs: []
        },
        {
            id: 'condition-weather',
            type: 'condition',
            label: 'if weather is',
            code: 'if weather is [type]:',
            inputs: [
                { type: 'text', placeholder: 'clear', name: 'type' }
            ]
        },
        {
            id: 'condition-entity-type',
            type: 'condition',
            label: 'if entity is type',
            code: 'if entity is [type]:',
            inputs: [
                { type: 'text', placeholder: 'zombie', name: 'type' }
            ]
        },
        {
            id: 'condition-distance',
            type: 'condition',
            label: 'if distance between players is',
            code: 'if distance between [a] and [b] is [comparison] [value]:',
            inputs: [
                { type: 'text', placeholder: 'player', name: 'a' },
                { type: 'text', placeholder: 'player', name: 'b' },
                { type: 'select', options: ['<', '>', '<=', '>=', '='], name: 'comparison' },
                { type: 'number', placeholder: '10', name: 'value' }
            ]
        }
    ],
    effects: [
        {
            id: 'effect-send',
            type: 'effect',
            label: 'send message to player',
            code: 'send "[message]" to player',
            inputs: [
                { type: 'text', placeholder: 'Hello!', name: 'message' }
            ]
        },
        {
            id: 'effect-broadcast',
            type: 'effect',
            label: 'broadcast message',
            code: 'broadcast "[message]"',
            inputs: [
                { type: 'text', placeholder: 'Hello everyone!', name: 'message' }
            ]
        },
        {
            id: 'effect-give',
            type: 'effect',
            label: 'give item to player',
            code: 'give [amount] [item] to player',
            inputs: [
                { type: 'number', placeholder: '1', name: 'amount' },
                { type: 'text', placeholder: 'diamond', name: 'item' }
            ]
        },
        {
            id: 'effect-teleport',
            type: 'effect',
            label: 'teleport player',
            code: 'teleport player to [location]',
            inputs: [
                { type: 'text', placeholder: 'spawn', name: 'location' }
            ]
        },
        {
            id: 'effect-set',
            type: 'effect',
            label: 'set variable',
            code: 'set {[variable]} to [value]',
            inputs: [
                { type: 'text', placeholder: 'var', name: 'variable' },
                { type: 'text', placeholder: 'value', name: 'value' }
            ]
        },
        {
            id: 'effect-command',
            type: 'effect',
            label: 'execute command',
            code: 'execute player command "[command]"',
            inputs: [
                { type: 'text', placeholder: 'gamemode creative', name: 'command' }
            ]
        },
        {
            id: 'effect-console',
            type: 'effect',
            label: 'execute console command',
            code: 'execute console command "[command]"',
            inputs: [
                { type: 'text', placeholder: 'say Hello', name: 'command' }
            ]
        },
        {
            id: 'effect-kill',
            type: 'effect',
            label: 'kill player',
            code: 'kill player',
            inputs: []
        },
        {
            id: 'effect-damage',
            type: 'effect',
            label: 'damage player',
            code: 'damage player by [amount]',
            inputs: [
                { type: 'number', placeholder: '5', name: 'amount' }
            ]
        },
        {
            id: 'effect-heal',
            type: 'effect',
            label: 'heal player',
            code: 'heal player by [amount]',
            inputs: [
                { type: 'number', placeholder: '10', name: 'amount' }
            ]
        },
        // Expanded effects
        {
            id: 'effect-send-title',
            type: 'effect',
            label: 'send title/subtitle',
            code: 'send title "[title]" with subtitle "[subtitle]" to player for [in] seconds',
            inputs: [
                { type: 'text', placeholder: 'Welcome', name: 'title' },
                { type: 'text', placeholder: 'Have fun!', name: 'subtitle' },
                { type: 'number', placeholder: '3', name: 'in' }
            ]
        },
        {
            id: 'effect-actionbar',
            type: 'effect',
            label: 'send action bar',
            code: 'send action bar "[message]" to player',
            inputs: [
                { type: 'text', placeholder: 'Action!', name: 'message' }
            ]
        },
        {
            id: 'effect-play-sound',
            type: 'effect',
            label: 'play sound',
            code: 'play sound [sound] to player at [volume] [pitch]',
            inputs: [
                { type: 'text', placeholder: 'ENTITY_PLAYER_LEVELUP', name: 'sound' },
                { type: 'number', placeholder: '1', name: 'volume' },
                { type: 'number', placeholder: '1', name: 'pitch' }
            ]
        },
        {
            id: 'effect-spawn-entity',
            type: 'effect',
            label: 'spawn entity',
            code: 'spawn [entity] at [location]',
            inputs: [
                { type: 'text', placeholder: 'zombie', name: 'entity' },
                { type: 'text', placeholder: 'player', name: 'location' }
            ]
        },
        {
            id: 'effect-remove-entity',
            type: 'effect',
            label: 'remove entity',
            code: 'remove [entity]',
            inputs: [
                { type: 'text', placeholder: 'entity', name: 'entity' }
            ]
        },
        {
            id: 'effect-set-time',
            type: 'effect',
            label: 'set time',
            code: 'set time in world [world] to [time]',
            inputs: [
                { type: 'text', placeholder: 'world', name: 'world' },
                { type: 'text', placeholder: 'day', name: 'time' }
            ]
        },
        {
            id: 'effect-set-weather',
            type: 'effect',
            label: 'set weather',
            code: 'set weather to [weather]',
            inputs: [
                { type: 'text', placeholder: 'clear', name: 'weather' }
            ]
        },
        {
            id: 'effect-add-potion',
            type: 'effect',
            label: 'add potion effect',
            code: 'add potion [effect] [level] to player for [seconds] seconds',
            inputs: [
                { type: 'text', placeholder: 'speed', name: 'effect' },
                { type: 'number', placeholder: '1', name: 'level' },
                { type: 'number', placeholder: '60', name: 'seconds' }
            ]
        },
        {
            id: 'effect-remove-potion',
            type: 'effect',
            label: 'remove potion effect',
            code: 'remove potion [effect] from player',
            inputs: [
                { type: 'text', placeholder: 'slow', name: 'effect' }
            ]
        },
        {
            id: 'effect-create-explosion',
            type: 'effect',
            label: 'create explosion',
            code: 'create explosion at [location] with power [power]',
            inputs: [
                { type: 'text', placeholder: 'player', name: 'location' },
                { type: 'number', placeholder: '4', name: 'power' }
            ]
        },
        {
            id: 'effect-set-score',
            type: 'effect',
            label: 'set scoreboard objective score',
            code: 'set score of player in objective "[objective]" to [score]',
            inputs: [
                { type: 'text', placeholder: 'kills', name: 'objective' },
                { type: 'number', placeholder: '0', name: 'score' }
            ]
        }
    ],
    expressions: [
        {
            id: 'expr-player',
            type: 'expression',
            label: 'player',
            code: 'player',
            inputs: []
        },
        {
            id: 'expr-victim',
            type: 'expression',
            label: 'victim',
            code: 'victim',
            inputs: []
        },
        {
            id: 'expr-attacker',
            type: 'expression',
            label: 'attacker',
            code: 'attacker',
            inputs: []
        },
        {
            id: 'expr-clicked-block',
            type: 'expression',
            label: 'clicked block',
            code: 'clicked block',
            inputs: []
        },
        {
            id: 'expr-event-item',
            type: 'expression',
            label: 'event item',
            code: 'event-item',
            inputs: []
        },
        {
            id: 'expr-event-block',
            type: 'expression',
            label: 'event block',
            code: 'event-block',
            inputs: []
        },
        {
            id: 'expr-message',
            type: 'expression',
            label: 'message',
            code: 'message',
            inputs: []
        },
        // Expanded expressions
        {
            id: 'expr-world',
            type: 'expression',
            label: "player's world",
            code: "world of player",
            inputs: []
        },
        {
            id: 'expr-location',
            type: 'expression',
            label: "player's location",
            code: "location of player",
            inputs: []
        },
        {
            id: 'expr-health',
            type: 'expression',
            label: "player's health",
            code: "health of player",
            inputs: []
        },
        {
            id: 'expr-inventory',
            type: 'expression',
            label: "player's inventory",
            code: "inventory of player",
            inputs: []
        },
        {
            id: 'expr-level',
            type: 'expression',
            label: "player's level",
            code: "level of player",
            inputs: []
        },
        {
            id: 'expr-item-in-hand',
            type: 'expression',
            label: 'item in hand',
            code: 'item in player's hand',
            inputs: []
        },
        {
            id: 'expr-entities-near',
            type: 'expression',
            label: 'entities near location',
            code: 'entities within [radius] of [location]',
            inputs: [
                { type: 'number', placeholder: '5', name: 'radius' },
                { type: 'text', placeholder: 'player', name: 'location' }
            ]
        }
    ],
    loops: [
        {
            id: 'loop-players',
            type: 'loop',
            label: 'loop all players',
            code: 'loop all players:',
            inputs: []
        },
        {
            id: 'loop-blocks',
            type: 'loop',
            label: 'loop blocks in radius',
            code: 'loop blocks in radius [radius]:',
            inputs: [
                { type: 'number', placeholder: '5', name: 'radius' }
            ]
        },
        {
            id: 'loop-times',
            type: 'loop',
            label: 'loop times',
            code: 'loop [times] times:',
            inputs: [
                { type: 'number', placeholder: '10', name: 'times' }
            ]
        },
        {
            id: 'loop-player',
            type: 'loop',
            label: 'loop-player',
            code: 'loop-player',
            inputs: []
        },
        {
            id: 'loop-block',
            type: 'loop',
            label: 'loop-block',
            code: 'loop-block',
            inputs: []
        },
        {
            id: 'loop-value',
            type: 'loop',
            label: 'loop-value',
            code: 'loop-value',
            inputs: []
        },
        // Expanded loops
        {
            id: 'loop-entities',
            type: 'loop',
            label: 'loop entities in radius',
            code: 'loop entities in radius [radius] around [location]:',
            inputs: [
                { type: 'number', placeholder: '10', name: 'radius' },
                { type: 'text', placeholder: 'player', name: 'location' }
            ]
        },
        {
            id: 'loop-inventory',
            type: 'loop',
            label: 'loop inventory slots',
            code: 'loop slots in player's inventory:',
            inputs: []
        }
    ],
    variables: [
        {
            id: 'var-local',
            type: 'variable',
            label: 'local variable',
            code: '{_[name]}',
            inputs: [
                { type: 'text', placeholder: 'variable', name: 'name' }
            ]
        },
        {
            id: 'var-global',
            type: 'variable',
            label: 'global variable',
            code: '{[name]}',
            inputs: [
                { type: 'text', placeholder: 'variable', name: 'name' }
            ]
        },
        {
            id: 'var-set',
            type: 'variable',
            label: 'set variable',
            code: 'set {[variable]} to [value]',
            inputs: [
                { type: 'text', placeholder: 'var', name: 'variable' },
                { type: 'text', placeholder: 'value', name: 'value' }
            ]
        },
        {
            id: 'var-add',
            type: 'variable',
            label: 'add to variable',
            code: 'add [value] to {[variable]}',
            inputs: [
                { type: 'text', placeholder: '1', name: 'value' },
                { type: 'text', placeholder: 'var', name: 'variable' }
            ]
        },
        {
            id: 'var-remove',
            type: 'variable',
            label: 'remove from variable',
            code: 'remove [value] from {[variable]}',
            inputs: [
                { type: 'text', placeholder: '1', name: 'value' },
                { type: 'text', placeholder: 'var', name: 'variable' }
            ]
        },
        {
            id: 'var-delete',
            type: 'variable',
            label: 'delete variable',
            code: 'delete {[variable]}',
            inputs: [
                { type: 'text', placeholder: 'var', name: 'variable' }
            ]
        },
        // Expanded variable helpers
        {
            id: 'var-increment',
            type: 'variable',
            label: 'increment variable',
            code: 'add 1 to {[variable]}',
            inputs: [
                { type: 'text', placeholder: 'var', name: 'variable' }
            ]
        },
        {
            id: 'var-list-add',
            type: 'variable',
            label: 'add to list variable',
            code: 'add [value] to {list::[name]}',
            inputs: [
                { type: 'text', placeholder: 'value', name: 'value' },
                { type: 'text', placeholder: 'mylist', name: 'name' }
            ]
        },
        {
            id: 'var-list-remove',
            type: 'variable',
            label: 'remove from list variable',
            code: 'remove [value] from {list::[name]}',
            inputs: [
                { type: 'text', placeholder: 'value', name: 'value' },
                { type: 'text', placeholder: 'mylist', name: 'name' }
            ]
        }
    ],
    commands: [
        {
            id: 'cmd-basic',
            type: 'command',
            label: 'command definition',
            code: 'command /[name]:\n    trigger:',
            inputs: [
                { type: 'text', placeholder: 'example', name: 'name' }
            ]
        },
        {
            id: 'cmd-with-permission',
            type: 'command',
            label: 'command with permission',
            code: 'command /[name] [arg]:\n    permission: [perm]\n    trigger:',
            inputs: [
                { type: 'text', placeholder: 'teleport', name: 'name' },
                { type: 'text', placeholder: '[player]', name: 'arg' },
                { type: 'text', placeholder: 'myplugin.use', name: 'perm' }
            ]
        }
    ],
    functions: [
        {
            id: 'fn-basic',
            type: 'function',
            label: 'function',
            code: 'function [name]([params]) :: [returntype]:\n    [body]',
            inputs: [
                { type: 'text', placeholder: 'add(a: number, b: number)', name: 'name' },
                { type: 'text', placeholder: 'return a + b', name: 'body' }
            ]
        },
        {
            id: 'fn-without-return',
            type: 'function',
            label: 'function (no return)',
            code: 'function [name]([params]):\n    [body]',
            inputs: [
                { type: 'text', placeholder: 'sayHello()', name: 'name' },
                { type: 'text', placeholder: 'send "hi" to player', name: 'body' }
            ]
        }
    ],
    particles: [
        {
            id: 'particle-play',
            type: 'particle',
            label: 'play particle',
            code: 'play particle [particle] at [location] with [count]',
            inputs: [
                { type: 'text', placeholder: 'flame', name: 'particle' },
                { type: 'text', placeholder: 'player', name: 'location' },
                { type: 'number', placeholder: '10', name: 'count' }
            ]
        }
    ],
    sounds: [
        {
            id: 'sound-play',
            type: 'sound',
            label: 'play sound',
            code: 'play sound [sound] at [location] with volume [volume]',
            inputs: [
                { type: 'text', placeholder: 'ENTITY_EXPERIENCE_ORB_PICKUP', name: 'sound' },
                { type: 'text', placeholder: 'player', name: 'location' },
                { type: 'number', placeholder: '1', name: 'volume' }
            ]
        }
    ],
    entities: [
        {
            id: 'entity-spawn',
            type: 'entity',
            label: 'spawn entity',
            code: 'spawn [entity] at [location]',
            inputs: [
                { type: 'text', placeholder: 'cow', name: 'entity' },
                { type: 'text', placeholder: 'player', name: 'location' }
            ]
        },
        {
            id: 'entity-remove',
            type: 'entity',
            label: 'remove entity',
            code: 'remove [entity]',
            inputs: [
                { type: 'text', placeholder: 'entity', name: 'entity' }
            ]
        }
    ],
    inventory: [
        {
            id: 'inv-open',
            type: 'inventory',
            label: 'open inventory',
            code: 'open virtual chest with size [size] named "[name]" to player',
            inputs: [
                { type: 'number', placeholder: '27', name: 'size' },
                { type: 'text', placeholder: 'My GUI', name: 'name' }
            ]
        },
        {
            id: 'inv-set-item',
            type: 'inventory',
            label: 'set inventory slot',
            code: 'set slot [slot] of player's current inventory to [item]',
            inputs: [
                { type: 'number', placeholder: '0', name: 'slot' },
                { type: 'text', placeholder: 'diamond', name: 'item' }
            ]
        }
    ],
    scoreboard: [
        {
            id: 'sb-create',
            type: 'scoreboard',
            label: 'create objective',
            code: 'create scoreboard objective "[name]" with criteria "[criteria]"',
            inputs: [
                { type: 'text', placeholder: 'kills', name: 'name' },
                { type: 'text', placeholder: 'dummy', name: 'criteria' }
            ]
        },
        {
            id: 'sb-set',
            type: 'scoreboard',
            label: 'set score',
            code: 'set score of player in objective "[objective]" to [score]',
            inputs: [
                { type: 'text', placeholder: 'kills', name: 'objective' },
                { type: 'number', placeholder: '0', name: 'score' }
            ]
        }
    ],
    teams: [
        {
            id: 'team-create',
            type: 'team',
            label: 'create team',
            code: 'create team "[name]"',
            inputs: [
                { type: 'text', placeholder: 'red', name: 'name' }
            ]
        },
        {
            id: 'team-add-player',
            type: 'team',
            label: 'add player to team',
            code: 'add player to team "[team]"',
            inputs: [
                { type: 'text', placeholder: 'red', name: 'team' }
            ]
        }
    ],
    worlds: [
        {
            id: 'world-teleport',
            type: 'world',
            label: 'teleport to world spawn',
            code: 'teleport player to spawn of world [world]',
            inputs: [
                { type: 'text', placeholder: 'world', name: 'world' }
            ]
        },
        {
            id: 'world-load',
            type: 'world',
            label: 'load world',
            code: 'load world [world]',
            inputs: [
                { type: 'text', placeholder: 'world', name: 'world' }
            ]
        }
    ],
    persistence: [
        {
            id: 'db-save',
            type: 'persistence',
            label: 'save to file',
            code: 'save {data} to "[file]"',
            inputs: [
                { type: 'text', placeholder: 'data', name: 'data' },
                { type: 'text', placeholder: 'data.yml', name: 'file' }
            ]
        },
        {
            id: 'db-load',
            type: 'persistence',
            label: 'load from file',
            code: 'load {data} from "[file]"',
            inputs: [
                { type: 'text', placeholder: 'data', name: 'data' },
                { type: 'text', placeholder: 'data.yml', name: 'file' }
            ]
        }
    ],
    placeholders: [
        {
            id: 'ph-placeholder',
            type: 'placeholder',
            label: 'placeholder (papi)',
            code: 'set {_val} to placeholder "%[placeholder]%" for player',
            inputs: [
                { type: 'text', placeholder: 'player_name', name: 'placeholder' }
            ]
        }
    ],
    scheduler: [
        {
            id: 'sched-delay',
            type: 'scheduler',
            label: 'run later (delay)',
            code: 'wait [seconds] seconds:\n    [body]',
            inputs: [
                { type: 'number', placeholder: '5', name: 'seconds' },
                { type: 'text', placeholder: 'send "hi" to player', name: 'body' }
            ]
        },
        {
            id: 'sched-repeat',
            type: 'scheduler',
            label: 'repeat task',
            code: 'every [interval] seconds:\n    [body]',
            inputs: [
                { type: 'number', placeholder: '60', name: 'interval' },
                { type: 'text', placeholder: 'broadcast "tick"', name: 'body' }
            ]
        }
    ],
    math: [
        {
            id: 'math-add',
            type: 'math',
            label: 'math add',
            code: 'set {_sum} to [a] + [b]',
            inputs: [
                { type: 'number', placeholder: '1', name: 'a' },
                { type: 'number', placeholder: '2', name: 'b' }
            ]
        },
        {
            id: 'math-random',
            type: 'math',
            label: 'random number',
            code: 'set {_rand} to random integer between [min] and [max]',
            inputs: [
                { type: 'number', placeholder: '1', name: 'min' },
                { type: 'number', placeholder: '10', name: 'max' }
            ]
        }
    ],
    text: [
        {
            id: 'text-format',
            type: 'text',
            label: 'format text (colors)',
            code: 'set {_msg} to "&a[message]"',
            inputs: [
                { type: 'text', placeholder: 'Hello', name: 'message' }
            ]
        },
        {
            id: 'text-join',
            type: 'text',
            label: 'join strings',
            code: 'set {_joined} to join {_list} with ", "',
            inputs: []
        }
    ],
    items: [
        {
            id: 'item-enchant',
            type: 'item',
            label: 'add enchantment',
            code: 'enchant item in player's hand with [enchant] [level]',
            inputs: [
                { type: 'text', placeholder: 'sharpness', name: 'enchant' },
                { type: 'number', placeholder: '5', name: 'level' }
            ]
        },
        {
            id: 'item-custom-name',
            type: 'item',
            label: 'set item name',
            code: 'set name of item in player's hand to "[name]"',
            inputs: [
                { type: 'text', placeholder: 'Excalibur', name: 'name' }
            ]
        }
    ],
    gui: [
        {
            id: 'gui-button',
            type: 'gui',
            label: 'create GUI button',
            code: 'set slot [slot] of virtual chest "[gui]" to [item] named "[name]" with lore "[lore]"',
            inputs: [
                { type: 'number', placeholder: '10', name: 'slot' },
                { type: 'text', placeholder: 'My GUI', name: 'gui' },
                { type: 'text', placeholder: 'stone', name: 'item' },
                { type: 'text', placeholder: 'Click me', name: 'name' },
                { type: 'text', placeholder: 'A button', name: 'lore' }
            ]
        }
    ],
    permissions: [
        {
            id: 'perm-check',
            type: 'permission',
            label: 'check permission',
            code: 'if player has permission "[perm]":',
            inputs: [
                { type: 'text', placeholder: 'myplugin.use', name: 'perm' }
            ]
        }
    ],
    misc: [
        {
            id: 'misc-cancel-event',
            type: 'misc',
            label: 'cancel event',
            code: 'cancel event',
            inputs: []
        },
        {
            id: 'misc-debug',
            type: 'misc',
            label: 'debug/log',
            code: 'broadcast "DEBUG: [message]"',
            inputs: [
                { type: 'text', placeholder: 'something', name: 'message' }
            ]
        }
    ],
    addons: [
        {
            id: 'addon-vault',
            type: 'addon',
            label: 'vault economy - give money',
            code: 'deposit [amount] to player's bank account',
            inputs: [
                { type: 'number', placeholder: '10', name: 'amount' }
            ]
        },
        {
            id: 'addon-bossbar',
            type: 'addon',
            label: 'bossbar - show',
            code: 'set bossbar of player to "[text]" with progress [progress]',
            inputs: [
                { type: 'text', placeholder: 'Boss!', name: 'text' },
                { type: 'number', placeholder: '1.0', name: 'progress' }
            ]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = blockDefinitions;
}
