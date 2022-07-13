addEvent("confereAeAdm", true)
addEventHandler("confereAeAdm", root, function(jogador)
    local confere = isObjectInACLGroup("user."..getAccountName(getPlayerAccount(jogador)), aclGetGroup("Staff"))
    if confere then 
        triggerClientEvent(jogador, "confereResponse", jogador, true)
        removeEventHandler("confereAeAdm", root, function(jogador) end)
    else 
        triggerClientEvent(jogador, "confereResponse", jogador, false) 
        removeEventHandler("confereAeAdm", root, function(jogador) end)
    end 
end)


addEvent("teleportFinal", true)
addEventHandler("teleportFinal", getRootElement(), function(localizacao, jogador)
    if localizacao == "pls" then 
        setElementPosition(jogador, 1479.7585449219,-1741.6864013672,13.546875)
    elseif localizacao == "aerols" then 
        setElementPosition(jogador, 1883.9367675781,-2544.0275878906,17.227045059204)
    elseif localizacao == "concls" then 
        setElementPosition(jogador, 1779.3111572266,-1785.3500976562,13.530197143555)
    elseif localizacao == "clv" then 
        setElementPosition(jogador, 2030.4505615234,1059.8212890625,10.8203125)
    elseif localizacao == "csf" then 
        setElementPosition(jogador, -1754.3094482422,885.12854003906,295.875)
    elseif localizacao == "monte" then 
        setElementPosition(jogador, -2314.7731933594,-1651.7701416016,483.703125)
    end

end)
