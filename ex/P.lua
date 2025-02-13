for signalName, signal in pairs(getrbxsignals(game)) do
	warn(signalName, typeof(signal))
end

for funcName, func in pairs(getfunctions(game)) do
	print(funcName, func)
end
