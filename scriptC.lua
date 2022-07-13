page = "http://mta/eovictorkrlPainelTpAdm/html/index.html"
screenWidth, screenHeight = guiGetScreenSize()
security = 0
addEvent("confereResponse", true)


function mainPanel()
	initBrowser = guiCreateBrowser(0, 0, screenWidth, screenHeight, true, true, false) 
	theBrowser = guiGetBrowser(initBrowser)
end

bindKey("o", "down", function()
	triggerServerEvent("confereAeAdm", localPlayer, localPlayer)
	addEventHandler("confereResponse", root, function(incognita)
		if security == 1 then 
			guiSetVisible(initBrowser, true)
			showCursor(true)
		elseif security == 0 then
			security = 1 
			if incognita then 
				mainPanel()
				addEventHandler("onClientBrowserCreated", theBrowser, 
					function()
						loadBrowserURL(source, page)
						showChat(false)
						focusBrowser(theBrowser)
					end)
			else 
				return 
			end
		end
	end)
end)
addEventHandler("onClientBrowserDocumentReady", root, function(url)
	if url == page then 
		global_url = url
		showCursor(true)
		guiSetInputEnabled ( true ) 
	else 
		return
	end
end)

addEvent("jsTeleport", true)
addEventHandler("jsTeleport", root, function(localizacao)
	triggerServerEvent("teleportFinal", localPlayer, localizacao, localPlayer)
end)

addEvent("victor:manager:conc", true)
addEventHandler("victor:manager:conc", root, function(type, playeralvo, veiculoalvo, nomeveiculo, quantia)
	if type == "add" then 
		triggerServerEvent("victor:html:changer", localPlayer, "add", tonumber(playeralvo), veiculoalvo, localPlayer, nomeveiculo)
	elseif type == "remove" then 
		triggerServerEvent("victor:html:changer", localPlayer, "remove", tonumber(playeralvo), veiculoalvo, localPlayer, nomeveiculo)
	elseif type == "set" then 
		triggerServerEvent("victor:html:changer:estoque", localPlayer, localPlayer, "set", veiculoalvo, quantia)
	elseif type == "somar" then 
		triggerServerEvent("victor:html:changer:estoque", localPlayer, localPlayer, "somar", veiculoalvo, quantia)
	end
end)
addEvent("victor:leave", true)
addEventHandler("victor:leave", root, function()
	if global_url == page then 
		guiSetVisible(initBrowser, false)
		showCursor(false)
		showChat(true)
		focusBrowser()
		guiSetInputEnabled ( false ) 
		destroyElement(initBrowser)
		security = 0
	end
end)
