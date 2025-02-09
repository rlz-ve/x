-- Tested in 'a literal baseplate.'
local function cStr(str: string) : string
    return str:gsub('\0', '')
end

local targetScript = game.Players.LocalPlayer.PlayerScripts.LocalScript

print("Original Bytecode:", cStr(getscriptbytecode(targetScript)))

setscriptbytecode(targetScript, Compile("print('Hello, World!')"))

print("New Bytecode:", cStr(getscriptbytecode(targetScript)))

restorescriptbytecode(targetScript) -- Can still be called after Xeno has restarted due to caching

print("Restored Bytecode:", cStr(getscriptbytecode(targetScript)))
