local p = Instance.new("Part", game)
local p2 = Instance.new("Part", p)
p2.Name = "Yes"

print(p2 == p.Yes) -- true

hookinstance(p2, game) -- p2 is now DataModel

warn(p2 == p.Yes) -- false

print(p.Yes) -- Ugc

print(p.Yes.HttpGet) -- function: 0xb12eb6f5ff994dd
