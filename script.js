
/* 
   PÁGINA INÍCIO (index.html)
   Troca a frase do topo a cada 3 segundos
 */
if (document.getElementById("fraseInicio")) {

    const frase = document.getElementById("fraseInicio");
    let primeiraFrase = true;

    setInterval(function() {
        if (primeiraFrase) {
            frase.innerText = "Cuidado em cada detalhe";
            primeiraFrase = false;
        } else {
            frase.innerText = "Barbearia em Guarapuava";
            primeiraFrase = true;
        }
    }, 3000);

}


/* 
   PÁGINA SERVIÇOS (servicos.html)
   Troca o título e o texto a cada 5 segundos
 */
if (document.getElementById("tituloServicos")) {

    const titulo = document.getElementById("tituloServicos");
    const frase = document.getElementById("fraseServicos");
    let primeiroTexto = true;

    setInterval(function() {
        if (primeiroTexto) {
            titulo.innerText = "Seu Estilo, Nosso Cuidado";
            frase.innerText = "Do corte à barba, oferecemos um atendimento pensado para valorizar seu visual. Conheça as opções e agende seu horário.";
            primeiroTexto = false;
        } else {
            titulo.innerText = "Nossos Serviços";
            frase.innerText = "Cuidado, estilo e atenção aos detalhes em cada atendimento. Escolha o serviço que combina com você e agende seu horário.";
            primeiroTexto = true;
        }
    }, 5000);

}


/* 
   PÁGINA SOBRE (sobre.html)
   Botão "Saiba mais" (chamado pelo onclick do botão no HTML)
 */
function mostrarTexto() {
    const texto = document.getElementById("textoExtra");
    const botao = document.getElementById("botaoTexto");

    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.innerText = "Mostrar menos";
    } else {
        texto.style.display = "none";
        botao.innerText = "Saiba mais";
    }
}


/* 
   PÁGINA CONTATO (contato.html)
   Formulário: máscara do telefone e envio
*/
if (document.getElementById("meuForm")) {

    const form = document.getElementById("meuForm");
    const campoTelefone = document.getElementById("telefone");

    // Deixa o telefone no formato (42) 99999-9999 enquanto a pessoa digita
    campoTelefone.addEventListener("input", function() {
        let numeros = campoTelefone.value.replace(/\D/g, "").slice(0, 11);

        if (numeros.length > 10) {
            campoTelefone.value = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2, 7) + "-" + numeros.slice(7);
        } else if (numeros.length > 6) {
            campoTelefone.value = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2, 6) + "-" + numeros.slice(6);
        } else if (numeros.length > 2) {
            campoTelefone.value = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2);
        } else if (numeros.length > 0) {
            campoTelefone.value = "(" + numeros;
        } else {
            campoTelefone.value = "";
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Evita campos preenchidos só com espaços
        if (!nome || !email || !telefone || !assunto || !mensagem) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("telefone", telefone);
        localStorage.setItem("assunto", assunto);
        localStorage.setItem("mensagem", mensagem);
        window.location.href = "resultado.html";
    });

}


/* 
   PÁGINA RESULTADO (resultado.html)
   Mostra na tela os dados guardados pelo formulário 
   */
if (document.getElementById("mostrar")) {

    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");
    const telefone = localStorage.getItem("telefone");
    const assunto = localStorage.getItem("assunto");
    const mensagem = localStorage.getItem("mensagem");

    // Se não houver dados, continua aparecendo "Nenhum dado encontrado."
    if (nome && email && telefone && assunto && mensagem) {
        document.getElementById("mostrar").textContent =
            "Nome: " + nome + "\n" +
            "E-mail: " + email + "\n" +
            "Telefone: " + telefone + "\n" +
            "Assunto: " + assunto + "\n" +
            "Mensagem: " + mensagem;
    }

}
