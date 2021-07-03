<h1 align="center">RU UFSCAR App</h1>
É um aplicativo desenvolvido em React Native para visualização do cardápio diário do restaurante universitário da Universidade Federal de São Carlos.

<div align=center>
<img align="center" alt="RU UFSCar App image mockup" src="/assets/imgs_readme/iphone7ru_app.png" width="500px"/>
</div>

<h1>Como funciona</h1>

<h3>1.</h3>
<p>O aplicativo inicia carregando um script do servidor Firebase que descreve os campos que deverão ser buscados no site do cardápio da universidade, esta foi a melhor maneira encontrada de contornar os custos de um servidor (uma vez que requisições externas são cobradas após exceder a cota gratuita) e poder agir facilmente na solução de problemas como a alteração da estrutura html do site da universidade.</p>

<h3>2.</h3>
<p>A busca do cardápio no site da universidade é feita através do package cheerio-without-node-native ^0.20.2, após o carregamente o cardápio do dia (almoço e janta) é apresentado em forma de lista.</p>

<h3>3.</h3>
<p>Usuários podem reagir ao cardápio do dia apenas uma vez por dia, como medida de proteção a reação só é possivel via método http POST com chave de validação JWT.</p>

<h1>Gif do funcionamento</h1>

<div align="center">
<img alt="RU UFSCar App usage gif" align="center" src="/assets/imgs_readme/Screenrecorder_app_usage.gif" height="400px"/>
</div>

<h1>Capturas de tela</h1>
<p align="center">
  <img alt="" align="top" src="/assets/imgs_readme/splashscreen.png" width="150px" />
  <img alt="" align="top" src="/assets/imgs_readme/home.png" width="150px" />
  <img alt="" align="top" src="/assets/imgs_readme/feed.png" width="150px" />
  <img alt="" align="top" src="/assets/imgs_readme/info.png" width="150px" />
  <img alt="" align="top" src="/assets/imgs_readme/config.png" width="150px" />
</p>
  
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

<p>Este foi meu primeiro aplicativo desenvolvido por completo, até então eu só tinha feito módulos separados (como forms, botões, listas).</p>

<p>O App passou por duas versões, a primeira fazia uso de Class Components e características da versão antiga do Reactjs, a ultima e atual faz uso de Functional Components e React Hooks, além de tecnicas de gerenciamento de estados e temas.</p>

## :memo: Licença

Copyright (c) 2020 Luan Moraes, O Uso deste software é atribuido sob os termos e condições da licença do MIT.

Dúvidas, críticas e sugestões: [Entre em contato][linkedin]

Esta aplicação é de iniciativa pessoal para fins de aprendizado e não conta com qualquer apoio ou conhecimento da Universidade.

[linkedin]: https://www.linkedin.com/in/luanmoraex/
