# RU UFSCAR App
É um aplicativo desenvolvido em React Native para visualização do cardápio diário do restaurante universitário da Universidade Federal de São Carlos.

<span align="center">
<img alt="RU UFSCar App image mockup" src="/assets/imgs_readme/iphone7ru_app.png" width="600px"/>
</span>

<h1>Como funciona?</h1>

<h3>1.</h3>
<p>O aplicativo inicia carregando um script do servidor Firebase que descreve os campos que deverão ser buscados no site do cardápio da universidade, esta foi a melhor maneira encontrada de contornar os custos de um servidor (uma vez que requisições externas são cobradas após exceder a cota gratuita) e poder agir facilmente na solução de problemas como a alteração da estrutura html do site da universidade.</p>

<h3>2.</h3>
<p>A busca do cardápio no site da universidade é feita através do package cheerio-without-node-native ^0.20.2, após o carregamente o cardápio do dia (almoço e janta) é apresentado em forma de lista.</p>

<h3>3.</h3>
<p>Usuários podem reagir ao cardápio do dia apenas uma vez por dia, como medida de proteção a reação só é possivel via método http POST com chave de validação JWT.</p>

<h1>Gif do funcionamento</h1>

<img alt="RU UFSCar App usage gif" align="center" src="/assets/imgs_readme/Screenrecorder_app_usage.gif" height="600px"/>

<h1>Ferramentas usadas no desenvolvimento</h1>
<H3>No backend foram usados:</H3>

* 	**axios**
* 	**jwt token**
* 	**Nodejs**

<H3>No App foram usados:</H3>

* 	**axios** para trabalhar com as requições
* 	**lottie-react-native** para fazer a animação do carregamento enquanto o feedback é registrado
* 	**polished** para escurecer a cor da statusbar
* 	**react-native-vector-icons** para os ícones da aplicação
* 	**styled-components** para a criação do modo noturno
* 	**@react-native-community/async-storage** para a tarefa de armazenamento de dados permanentes no dispositivo
* 	**@react-native-firebase/analytics** e **@react-native-firebase/app** para utilização dos serviços do Firebase e monitoramento do comportamento do usuário no app com analytics

além dos modulos que permitiram trabalhar com a navegação entre telas como:

* 	**react-navigation**
* 	**react-navigation-drawer**
* 	**react-navigation-stack**
* 	**react-navigation-tabs**

<h1>Observações e considerações</h1>

<p>Este foi meu primeiro aplicativo desenvolvido por completo, até então eu só tinha feito modulos separados (como forms, botões, listas).</p>

<p>Esta foi uma aplicação desafiadora por demandar conhecimento Fullstack, o aprendizado de conhecimentos específicos, a busca por soluções de problemas diversos que foram surgindo durante o desenvolvimento e não tinham uma resposta direta e pelo fato de toda a ideia ser autoral sem nenhuma fonte externa para se ter uma base de inicio.</p>

<p>O App passou por duas versões, a primeira fazia uso de Class Componentes e características da versão antiga do Reactjs, a ultima e atual faz uso de Functional Componentes e Reack Hooks, além de tecnicas de gerenciamento de estados e temas.</p>

<p>Ao todo a aplicação completa (Backend e Frontend) demandou 5 meses devido a conxiliação do desenvolvimento com as tarefas da graduação e outras atividades extracurriculares. E posso considerar que o objetivo foi atingido, de adquirir experiência de desenvolvimento de um produto completo, errar e aprender com os erros para não comete-los nas proximas aplicações, ou de saber como corrigi-los.</p>

<p>Por último, há diversas coisas no app que poderiam ser feitas de forma melhor, mas que eu fiz com o conhecimento que eu tinha até o momento. Com o aperfeiçoamento espero melhorar e contruir aplicações mais </p>

## :memo: Licença

Copyright (c) 2020 Luan Moraes, O Uso deste software é atribuido sob os termos e condições da licença do MIT.

Dúvidas, críticas e sugestões: [Entre em contato][linkedin]

Esta aplicação é de iniciativa pessoal para fins de aprendizado e prática e não conta com qualquer apoio ou conhecimento da Universidade.

[linkedin]: https://www.linkedin.com/in/luanmoraex/