-- Tested in 'a literal baseplate.'
for _, Module in GetUnlockedModules() do
	LockModule(Module)
end

local TargetScript = game.ReplicatedStorage.Icon
task.spawn(getrenv().require, TargetScript) -- Cannot require a non-RobloxScript module from RobloxScript

-- UnlockSiblingsAndDescendants
for _, descendant in pairs(TargetScript:GetDescendants()) do
	if descendant:IsA("ModuleScript") then
		UnlockModule(descendant)
	end
end

for _, child in pairs(TargetScript.Parent:GetChildren()) do
	if child:IsA("ModuleScript") then
		UnlockModule(child)
	end
end

print(getrenv().require(TargetScript))

--[[
function Xeno.require(moduleScript: Instance, unlockSiblingsAndDescendants: boolean?): {}
	assert(typeof(moduleScript) == "Instance", "Attempted to call require with invalid argument(s). ", 3)
	assert(moduleScript.ClassName == "ModuleScript", "Attempted to call require with invalid argument(s). ", 3)
	if unlockSiblingsAndDescendants == nil then unlockSiblingsAndDescendants = true end
	
	if unlockSiblingsAndDescendants then
		for _, descendant in pairs(moduleScript:GetDescendants()) do
			if descendant:IsA("ModuleScript") then
				UnlockModule(descendant)
			end
		end

		for _, child in pairs(moduleScript.Parent:GetChildren()) do
			if child:IsA("ModuleScript") then
				UnlockModule(child)
			end
		end
	end
	
	if UnlockedModules[moduleScript] then
		return renv.require(moduleScript)
	end
	
	UnlockModule(moduleScript)
	
	return renv.require(moduleScript)
end
]]
