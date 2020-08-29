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

<h1>Gravação do funcionamento</h1>

<img alt="RU UFSCar App usage gif" align="center" src="/assets/imgs_readme/Screenrecorder_app_usage.gif" height="600px"/>

<h1>Ferramenstas usadas no desenvolvimento</h1>
<H3>No backend foram usados:</H3>
* **axios**
* **jwt token**
* **Nodejs**

<H3>No App foram usados:</H3>
<ul>
	<li>**axios** para trabalhar com as requições</li>
	<li>**lottie-react-native** para fazer a animação do carregamento enquanto o feedback é registrado</li>
	<li>**polished** para escurecer a cor da statusbar</li>
	<li>**react-native-vector-icons** para os ícones da aplicação</li>
	<li>**styled-components** para a criação do modo noturno</li>
	<li>**@react-native-community/async-storage** para a tarefa de armazenamento de dados permanentes no dispositivo</li>
	<li>**@react-native-firebase/analytics** e **@react-native-firebase/app** para utilização dos serviços do Firebase e monitoramento do comportamento do usuário no app com analytics</li>
	além dos modulos que permitiram trabalhar com a navegação entre telas como:
	<li>**react-navigation**</li>
	<li>**react-navigation-drawer**</li>
	<li>**react-navigation-stack**</li>
	<li>**react-navigation-tabs**</li>
</ul>

<h1>Observações e considerações</h1>

<p>Este foi meu primeiro aplicativo desenvolvido por completo, até então eu só tinha feito modulos separados (como forms, botões, listas).</p>

<p>Esta foi uma aplicação desafiadora por demandar conhecimento Fullstack, o aprendizado de conhecimentos específicos, a busca por soluções de problemas diversos que foram surgindo durante o desenvolvimento e não tinham uma resposta direta, pelo fato de toda a ideia ser autoral sem nenhuma fonte externa para se ter uma base de inicio.</p>

<p>O App passou por duas versões, a primeira fazia uso de Class Componentes e características da versão antiga do Reactjs, a ultima e atual faz uso de Functional Componentes e Reack Hooks, além de tecnicas de gerenciamento de estados e temas.</p>

<p>Ao todo o serviço completo demandou 5 meses devido a conxiliação do desenvolvimento com as tarefas da graduação e outras atividades extracurriculares. E posso considerar que o objetivo foi atingido, de adquirir experiência de desenvolvimento de um produto completo, errar e aprender com os erros para não comete-los nas proximas aplicações, ou de saber como corrigi-los!</p>