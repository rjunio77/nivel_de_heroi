let entrada = "joaquim:9500 ricardo:10005 maria:1000";

// Dividir cada conjunto pelo espaço
let parametros = entrada.split(" ");

// Criar um array com os nomes e quantidades
let resultado = parametros.map(item => {
    let [nome, quantidade] = item.split(":");

    if(quantidade < 1000){
                            quantidade = "Ferro"        
                        }
    else if(quantidade >= 1001 && quantidade <= 2000){
                            quantidade = "Bronze"        
                        }
    else if(quantidade >= 2001 && quantidade <= 5000){
                            quantidade = "Prata"        
                        }
    else if(quantidade >= 5001 && quantidade <= 7000){
                            quantidade = "Ouro"        
                        }
    else if(quantidade >= 7001 && quantidade <= 8000){
                            quantidade = "Platina"        
                        }
    else if(quantidade >= 8001 && quantidade <= 9000){
                            quantidade = "Ascendente"        
                        }
    else if(quantidade >= 9001 && quantidade <= 10000){
                            quantidade = "Imortal"        
                        }
    else if(quantidade >= 10001){
                            quantidade = "Radiante"        
                        }
    else                {
                        quantidade = "Não encontrado"  
                        }

    return { nome, quantidade };
});



// Acessando os valores
resultado.forEach(item => {
   console.log(`O Herói de nome:** ${item.nome} **, está no nível de: ** ${item.quantidade} **`);
});
