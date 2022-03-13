
let txt1 = document.querySelector("#txt1")

let frases = ["Os Melhores Cursos","Cursos Gratis",
"Links de Cursos", "Cursos No Drive","Varios Linkes De Cusos", "Cursos De Todo Tipo",
"By M4isv", "Links Para estudos", "Estudos 2022"]


setInterval(function () {
	
let m = Math.floor(Math.random() * 8)
let escolher = frases[m]
txt1.innerHTML=`${escolher}`
}, 2000)






