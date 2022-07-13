-- created by zsenel

local discordWebhookURL = "https://discord.com/api/webhooks/969268119287783474/1K9MaAgA8elebgFi_x9sR43HShsehaU6Wi3lPmKcxj7WaDK6TmZfc4A_u1dlthVYI0bu"

function sendDiscordMessage(message)
sendOptions = {
    formFields = {
        content="```"..message.."```"
    },
}
fetchRemote ( discordWebhookURL, sendOptions, WebhookCallback )
end

-- 2 arguments (responseData gives back the response or "ERROR" )
function WebhookCallback(responseData) 
return
end

-- SendDiscordTestMessage (deletable, it's a sample function)
function SendDiscordTestMessage(player, command, ...)
local msg = table.concat({...}," ") -- for multiple words
sendDiscordMessage(msg)
end
addCommandHandler("dcmessage", SendDiscordTestMessage)
