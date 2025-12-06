// Main application logic
let workspaceBlocks = [];
let isDarkMode = false;
let blockIdCounter = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeBlocks();
    setupEventListeners();
    updateCodeDisplay();
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        toggleDarkMode();
    }
});

// Initialize blocks in the palette
function initializeBlocks() {
    Object.keys(blockDefinitions).forEach(category => {
        const container = document.getElementById(`${category}-blocks`);
        if (container) {
            blockDefinitions[category].forEach(blockDef => {
                const block = createBlockElement(blockDef, true);
                container.appendChild(block);
            });
        }
    });
}

// Create a block element
function createBlockElement(blockDef, isPalette = false) {
    const block = document.createElement('div');
    block.className = `block ${blockDef.type}`;
    block.setAttribute('draggable', 'true');
    
    if (!isPalette) {
        block.dataset.workspaceId = blockIdCounter++;
        block.dataset.blockId = blockDef.id;
    } else {
        block.dataset.blockId = blockDef.id;
    }
    
    // Create block content
    let content = blockDef.label;
    
    // Add inputs if any
    if (blockDef.inputs && blockDef.inputs.length > 0) {
        const inputContainer = document.createElement('div');
        inputContainer.style.display = 'inline';
        
        blockDef.inputs.forEach(input => {
            const inputElement = document.createElement('input');
            inputElement.type = input.type === 'number' ? 'number' : 'text';
            inputElement.placeholder = input.placeholder;
            inputElement.name = input.name;
            inputElement.style.width = input.type === 'number' ? '60px' : '120px';
            
            if (!isPalette) {
                inputElement.addEventListener('input', () => {
                    updateCodeDisplay();
                });
            } else {
                inputElement.disabled = true;
            }
            
            inputContainer.appendChild(document.createTextNode(' '));
            inputContainer.appendChild(inputElement);
        });
        
        block.innerHTML = content;
        block.appendChild(inputContainer);
    } else {
        block.textContent = content;
    }
    
    // Add delete button for workspace blocks
    if (!isPalette) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'block-delete';
        deleteBtn.textContent = '✕';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeBlock(block);
        });
        block.appendChild(deleteBtn);
    }
    
    // Setup drag events
    block.addEventListener('dragstart', (e) => handleDragStart(e, blockDef, isPalette));
    block.addEventListener('dragend', handleDragEnd);
    
    return block;
}

// Handle drag start
function handleDragStart(e, blockDef, isPalette) {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('application/json', JSON.stringify({
        blockDef: blockDef,
        isPalette: isPalette,
        sourceId: e.target.dataset.workspaceId
    }));
    e.target.classList.add('dragging');
}

// Handle drag end
function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Setup event listeners
function setupEventListeners() {
    const workspace = document.getElementById('workspace');
    
    // Workspace drag and drop events
    workspace.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        workspace.classList.add('drag-over');
    });
    
    workspace.addEventListener('dragleave', () => {
        workspace.classList.remove('drag-over');
    });
    
    workspace.addEventListener('drop', (e) => {
        e.preventDefault();
        workspace.classList.remove('drag-over');
        
        const data = JSON.parse(e.dataTransfer.getData('application/json'));
        
        if (data.isPalette) {
            // Adding new block from palette
            const newBlock = createBlockElement(data.blockDef, false);
            workspace.appendChild(newBlock);
            workspaceBlocks.push({
                id: newBlock.dataset.workspaceId,
                blockDef: data.blockDef,
                element: newBlock
            });
            updateCodeDisplay();
        } else {
            // Reordering blocks in workspace
            const sourceBlock = document.querySelector(`[data-workspace-id="${data.sourceId}"]`);
            if (sourceBlock) {
                const dropY = e.clientY;
                const blocks = Array.from(workspace.children);
                let insertBefore = null;
                
                for (let block of blocks) {
                    const rect = block.getBoundingClientRect();
                    if (dropY < rect.top + rect.height / 2) {
                        insertBefore = block;
                        break;
                    }
                }
                
                if (insertBefore) {
                    workspace.insertBefore(sourceBlock, insertBefore);
                } else {
                    workspace.appendChild(sourceBlock);
                }
                
                updateCodeDisplay();
            }
        }
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    
    // Docs toggle
    document.getElementById('docs-toggle').addEventListener('click', () => {
        const docsPanel = document.getElementById('docs-panel');
        docsPanel.classList.toggle('show');
        docsPanel.classList.toggle('hidden');
    });
    
    document.getElementById('close-docs').addEventListener('click', () => {
        const docsPanel = document.getElementById('docs-panel');
        docsPanel.classList.remove('show');
        docsPanel.classList.add('hidden');
    });
    
    // Clear workspace
    document.getElementById('clear-workspace').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the workspace?')) {
            clearWorkspace();
        }
    });
    
    // Copy code
    document.getElementById('copy-code').addEventListener('click', copyCode);
}

// Toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-toggle');
    btn.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', isDarkMode);
}

// Remove a block from workspace
function removeBlock(blockElement) {
    const workspaceId = blockElement.dataset.workspaceId;
    workspaceBlocks = workspaceBlocks.filter(b => b.id !== workspaceId);
    blockElement.remove();
    updateCodeDisplay();
}

// Clear workspace
function clearWorkspace() {
    const workspace = document.getElementById('workspace');
    workspace.innerHTML = '';
    workspaceBlocks = [];
    updateCodeDisplay();
}

// Update code display
function updateCodeDisplay() {
    const workspace = document.getElementById('workspace');
    const blocks = Array.from(workspace.children);
    let code = '';
    let indentLevel = 0;
    
    blocks.forEach((blockElement, index) => {
        const blockId = blockElement.dataset.blockId;
        const blockDef = findBlockDefinition(blockId);
        
        if (!blockDef) return;
        
        // Handle indentation based on block type
        let blockCode = blockDef.code;
        
        // Get input values
        const inputs = blockElement.querySelectorAll('input');
        inputs.forEach(input => {
            const placeholder = `[${input.name}]`;
            const value = input.value || input.placeholder;
            blockCode = blockCode.replace(placeholder, value);
        });
        
        // Check if we need to decrease indent (for else)
        if (blockId === 'condition-else') {
            indentLevel = Math.max(0, indentLevel - 1);
        }
        
        // Add the block code with proper indentation
        const indent = '\t'.repeat(indentLevel);
        code += indent + blockCode + '\n';
        
        // Check if we need to increase indent (for events, conditions, loops)
        if (blockCode.endsWith(':')) {
            indentLevel++;
        }
        
        // For else, increase indent again
        if (blockId === 'condition-else') {
            indentLevel++;
        }
        
        // Reset indent when next block is an event or at end of blocks
        if (index < blocks.length - 1) {
            const nextBlockDef = findBlockDefinition(blocks[index + 1].dataset.blockId);
            if (nextBlockDef && nextBlockDef.type === 'event') {
                indentLevel = 0;
                code += '\n'; // Add blank line between events
            }
        }
    });
    
    document.getElementById('code-display').textContent = code || '# Drag blocks here to generate code\n# Start with an event block';
}

// Find block definition by ID
function findBlockDefinition(blockId) {
    for (let category in blockDefinitions) {
        const found = blockDefinitions[category].find(b => b.id === blockId);
        if (found) return found;
    }
    return null;
}

// Copy code to clipboard
function copyCode() {
    const codeDisplay = document.getElementById('code-display');
    const code = codeDisplay.textContent;
    
    if (!code || code.startsWith('#')) {
        alert('No code to copy! Add some blocks first.');
        return;
    }
    
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('copy-code');
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        alert('Failed to copy code to clipboard');
    });
}
