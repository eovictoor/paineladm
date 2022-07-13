



let homeButton = document.querySelector("#home-page")
let admButton = document.querySelector("#adm-page")
let infoButton = document.querySelector("#info-page")



let homeDiv = document.querySelector(".main")
let admDiv = document.querySelector(".adm")
let infoDiv = document.querySelector(".info")


function switchPages(page){
    switch(page){
        case "home":
            infoButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
            admButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
            homeButton.style.backgroundColor = "rgba(70, 130, 180, 0.541)"
            infoDiv.style.display = "none"
            admDiv.style.display = "none"
            homeDiv.style.display = "grid"
            break 
        case "adm":
            infoButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
            homeButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
            admButton.style.backgroundColor = "rgba(70, 130, 180, 0.541)"
            homeDiv.style.display = "none"
            infoDiv.style.display = "none"
            admDiv.style.display = "grid"
            break 
        case "info":
            admButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
            homeButton.style.backgroundColor = "rgba(255, 255, 255, 0)"
            infoButton.style.backgroundColor = "rgba(70, 130, 180, 0.541)"
            homeDiv.style.display = "none"
            admDiv.style.display = "none"
            infoDiv.style.display = "grid"
            break
        case "leave":
            mta.triggerEvent("victor:leave")
            break
    }
}





let modelidConcessionaria = document.querySelector("#content-concessionaria-modelid") 
let quantidadeConcessionaria = document.querySelector("#content-concessionaria-quantia")

let modelidGaragem = document.querySelector("#content-garagem-modelid")
let quantidadeGaragem = document.querySelector("#content-garagem-quantia")
let nomeGaragem = document.querySelector("#content-garagem-nome")

function verifyConce(){
    if(modelidConcessionaria.value.length == 0){
        document.querySelector("#content-concessionaria-modelid").style.border = "1px solid red"
    }else{
        if(quantidadeConcessionaria.value.length == 0){
            document.querySelector("#content-concessionaria-quantia").style.border = "1px solid red"
        }else{
            return true
        }
    }
}








function verifyGarag(){
    if(modelidGaragem.value.length == 0 ){
        document.querySelector("#content-garagem-modelid").style.border = "1px solid red"
    }else{
        if(quantidadeGaragem.value.length == 0 ){
            document.querySelector("#content-garagem-quantia").style.border = "1px solid red"
        }else{
            if(nomeGaragem.value.length == 0){
                document.querySelector("#content-garagem-nome").style.border = "1px solid red"
            }else{
                return true
            }
        }
    }
}function verifyGaragC(){
    if(modelidGaragem.value.length == 0 ){
        document.querySelector("#content-garagem-modelid").style.border = "1px solid red"
    }else{
        if(quantidadeGaragem.value.length == 0 ){
            document.querySelector("#content-garagem-quantia").style.border = "1px solid red"
        }else{
            return true
        }
    }
}



function admConcGarage(type, action, event){
    switch(type){
        case "concessionaria":
            switch(action){
                case "Setar":
                    let resulttt = verifyConce()
                    if(resulttt == true){
                        mta.triggerEvent("victor:manager:conc", "set",0,modelidConcessionaria.value,0,quantidadeConcessionaria.value)
                        quantidadeConcessionaria.value = ""
                        modelidConcessionaria.value = ""
                    }
                    break 
                case "Adicionar":
                    let resultttt = verifyConce()
                    if(resultttt == true){
                        mta.triggerEvent("victor:manager:conc", "somar",0,modelidConcessionaria.value,0,quantidadeConcessionaria.value)
                        quantidadeConcessionaria.value = ""
                        modelidConcessionaria.value = ""
                    }
                    break
            }
            break
        case "garagem":
            switch(action){
                case "Adicionar":
                    let result = verifyGarag()
                    if(result == true){
                        mta.triggerEvent("victor:manager:conc", "add", modelidGaragem.value, quantidadeGaragem.value, nomeGaragem.value, 0)
                        modelidGaragem.value = ""
                        quantidadeGaragem.value = ""
                        nomeGaragem.value = ""
                    }
                    break 
                case "Remover":
                    let resultt = verifyGaragC()
                    if(resultt == true){
                        mta.triggerEvent("victor:manager:conc", "remove", modelidGaragem.value, quantidadeGaragem.value, nomeGaragem.value, 0)
                        modelidGaragem.value = ""
                        quantidadeGaragem.value = ""
                        nomeGaragem.value = ""
                    }
                    break 
            }
            break
    }
}


const teleporte = (tipo)    =>  {
    switch(tipo){
        case "pls":
            mta.triggerEvent("jsTeleport", "pls")
            break 
        case "aerols":
            mta.triggerEvent("jsTeleport", "aerols")
            break 
        case "concls":
            mta.triggerEvent("jsTeleport", "concls")
            break 
        case "clv":
            mta.triggerEvent("jsTeleport", "clv")
            break 
        case "csf":
            mta.triggerEvent("jsTeleport", "csf")
            break 
        case "monte":
            mta.triggerEvent("jsTeleport", "monte")
            break 

    }
}

const main = (local) =>  {   
    switch(local){
        case "pls":
            teleporte("pls")
            break
        case "aerols":
            teleporte("aerols")
            break 
        case "concls":
            teleporte("concls")
            break 
        case "clv":
            teleporte("clv")
            break 
        case "csf":
            teleporte("csf")
            break 
        case "monte":
            teleporte("monte")
            break 
    }
}