const help = [
    "<br>",
    "<span id='command'>sobre                 </span>Quem sou eu?",
    "<span id='command'>social                </span>Lista todas minhas redes sociais",
    "<span id='command'>sites                 </span>Mostra todos meus sites desenvolvidos",
    "<span id='command'>exp                   </span>Trajetória da minha experiência profissional",
    "<span id='command'>motd                  </span>Mostra a mensagem do dia (banner)",
    "<span id='command'>clear                 </span>Limpa o terminal",
    "<span id='command'>help                  </span>Mostra a lista de todos os comandos",
    "<br>",
    "Use <span id='highlight'>sudo</span> para aumentar os privilégios.",
    "<br>"
]

const contato = [
    "<br>",
    "<span id='highlight'>Minhas formas de contato 📠</span><br>",
    "<span id='highlight'>whatsapp          </span><a id='link' href='https://api.whatsapp.com/send?phone=5511957714130&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20github%2C%20gostaria%20de%20conversar!' target='_blank'>Enviar mensagem</a>",
    "<span id='highlight'>e-mail            </span><a id='link'>thiagotokuzumi@gmail.com</a> <button onclick='copyFunction()'>copiar e-mail</button>",
    "<br>",
]


const social = [
    "<br>",
    "<span id='highlight'>Minhas redes sociais 🌐</span><br>",
    "<span id='highlight'>discord           </span>shw#6510",
    "<span id='highlight'>instagram         </span><a id='link' href='https://www.instagram.com/thiago.tokuzumi/' target='_blank'>https://www.instagram.com/thiago.tokuzumi/</a>",
    "<span id='highlight'>github            </span><a id='link' href='https://github.com/thiagotokuzumi' target='_blank'>https://github.com/thiagotokuzumi</a>",
    "<br>",
]

const sobre = [
    "<br>",
    "<span id='highlight'>Olá, me chamo Thiago Tokuzumi 👋</span>",
    "<p id='text'>Desenvolvedor front-end, costumo criar sites utilizando HTML, CSS e JS utilizando as melhores práticas de SEO.<br><br>Estudando e aperfeiçoando meu conhecimento em Angular, onde desenvolvo SPAs (Single Page Applications). <br>Possuo experiência avançada em banco de dados MySQL. <br><br>Atualmente no oitavo (último) semestre de Sistemas de Informação na Universidade Mogi das Cruzes<br>Resido em Suzano - SP e possuo 21 anos.<br><br>Entre em <a class='link' href='https://api.whatsapp.com/send?phone=5511957714130&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20github%2C%20gostaria%20de%20conversar!' target='_blank'>contato comigo</a> caso queira fazer um orçamento do seu site! 😉<br><strong>Desenvolvimento de sites em WordPress em até 3-15 dias úteis</p>",
    "<br>"
]

const exp = [
    "<br>",
    "<span id='highlight'>Experiência Profissional 💼</span>",
    "<br>",
    "<span id='highlight'>2022 - Atual: <a id='link' href='https://citybox.tec.br/' target='_blank'>CityBox Tecnologia</a> - Programador Angular Trainee</span>",
    "<br>",
    "<span id='highlight'>2020 - 2022: <a id='link' href='https://poloconecta.mogidascruzes.sp.gov.br/' target='_blank'>Polo Digital Mogi da Cruzes</a> - Estágio como programador</span>",
    "<br>",
]

const sites = [
    "<br>",
    "<span id='highlight'>Sites desenvolvidos 👨‍💻</span>",
    "<br>",
    "<a id='link' href='https://elainesilvacoach.com/' target='_blank'>Elaine Silva Coach</a>",
    "<span id='text'>Site de serviços de coaching desenvolvido em WordPress.</span>",
    "<br>",
    "<a id='link' href='https://opitchperfeito.com.br/' target='_blank'>O Pitch Perfeito</a>",
    "<span id='text'>Site sobre a venda do curso O Pitch Perfeito desenvolvido em HTML, CSS e JS.</span>",
    "<br>",
    "<a id='link' href='https://altotietevalley.com.br/' target='_blank'>Alto Tietê Valley</a>",
    "<span id='text'>Landing Page de contato empresarial desenvolvida em WordPress.</span>",
    "<br>",
    "<a id='link' href='https://mogiconecta.mogidascruzes.sp.gov.br/' target='_blank'>Mogi Conecta</a>",
    "<span id='text'>Site desenvolvido em PHP com sistema de cadastro e login, exibindo links para os usuários logados</span>",
    "<br>",
    "<a id='link' href='http://www.agricultura.pmmc.com.br/' target='_blank'>Secretaria de Agricultura Mogi das Cruzes</a>",
    "<span id='text'>Site da Secretaria de Agriculturua da Prefeitura de Mogi das Cruzes, desenvolvido em HTML, CSS E JS.</span>",
    "<br>",
    "<strong>Meu foco no desenvolvimento de sites é sempre nas melhores práticas de SEO e responsividade.</strong>",
    "<br>",
]

const sudo = [
    "<br>",
    "<span id='highlight'>O que você está fazendo aqui? 🕵🏼‍♂️</span>",
    "<br>",
    "<img id='photo' src='../assets/me1.jpeg'><img id='photo' src='../assets/me2.jpeg'><img id='photo' src='../assets/me3.jpeg'><img id='photo' src='../assets/me4.jpeg'>",
    "<br>"
]


function copyFunction() {
    const copyText = "thiagotokuzumi@gmail.com";

     // Copy the text to clipboard
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert('e-mail copiado com sucesso!\n\n' + copyText);
  }