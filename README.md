<h1>Criando a aplicação</h1>

Nós usaremos o EXPO CLI para criar a aplicação com React Native.

Neste link é possível aprender como instalar o expo: [Como instalar e configurar o Expo do React Native | Alura](https://www.alura.com.br/artigos/como-instalar-configurar-expo-do-react-native?utm_source=gnarus&utm_medium=timeline)

<h3>Windows</h3>

[React Native: Como instalar o Expo no Windows](https://cursos.alura.com.br/extra/alura-mais/react-native-como-instalar-o-expo-no-windows-c1222)

<h3>macOS</h3>

[React Native: Como instalar o Expo no macOS](https://cursos.alura.com.br/extra/alura-mais/react-native-como-instalar-o-expo-no-mac-c1223)

<h3>Linux</h3>

[React Native: Como instalar o Expo no Linux](https://cursos.alura.com.br/extra/alura-mais/react-native-como-instalar-o-expo-no-linux-c1224)



<h2>Configurando ambiente</h2>

1. Instalar o node.js [Node.js (nodejs.org)](https://nodejs.org/en)
2. Escolher a versão recomendada, pois é a mais estável.
3. Verificar se foi instalado certo: `node -v` 

1. Instalando Expo CLI:

2. Abra o terminal.

3. Cole o seguinte comando para instalar o Expo: `npm install --global expo-cli`

4. Verificar se foi instalado corretamente: `expo -v`

   

<h2>Criando a aplicação</h2>

1. `expo init "name_your_project"`
2. `cd "name_your_project"`
3. `code .`

Poderá ser visualizados os arquivos no VsCode assim:

![image-20230611173107746](C:\Users\flaas\AppData\Roaming\Typora\typora-user-images\image-20230611173107746.png)

 

## Rodando a aplicação

Com o ambiente já configurando e o projeto criado, podemos agora rodar nossa aplicação!

1. Primeiro iremos abrir o terminal e digitar `expo start` ou `npm start`.

2. Irá aparecer o QR Code e com isso podemos escanear o código para que possamos visualizar o que estamos desenvolvendo.

   > Caso tenham o mesmo erro que eu, que seria ao entrar no aplicativo, ele não reconhece. Temos uma solução para isso:
   >
   > Acessar o arquivo package.json no Visual Code; Inserir o seguinte código dentro de "scripts":
   >
   > "start": "expo start --tunnel", "android": "expo start --android", "ios": "expo start --ios", "web": "expo start --web", "eject": "expo eject" - **Copie este código!**
   >
   > Após salvar o arquivo, abrir o terminal no próprio Visual Code, digitar **`"npm start"`**; Dar **` y (yes)`** para utilizar a porta de acesso informada; Dar **` y (yes)`**  para instalar o package; E pronto! Basta apontar a câmera para o QR Code e acessar a aplicação.
   >
   > 
   >
   > Créditos ao Bruno Roberto Nascimento de Sousa pela ajuda! 
   >
   > [[Sugestão\] Configurar o modo tunnel no Visual Code para acessar app Expo | React Native: criando um app | Solucionado (alura.com.br)](https://cursos.alura.com.br/forum/topico-sugestao-configurar-o-modo-tunnel-no-visual-code-para-acessar-app-expo-278732)

   

## Diferenças entre utilizar o Expo CLI e o React Native CLI

- Utilizando o Expo não precisamos instalar o ambiente Java com Android Studio ou Xcode, pois ele é enviado diretamente ao aplicativo do Expo instalado no celular que já inclui os códigos nativos necessários. É mais fácil e rápido começar a desenvolver uma aplicação React Native.

- Os aplicativos criados com o Expo em geral ocupam um pouco mais de espaço no celular do que aplicativos criados da forma tradicional em React Native, pois o expo já mantém todos os recursos necessários em caso de atualizações OTA. Por permitir atualizações sem envio de um novo arquivo para as lojas de aplicativos, o Expo já adiciona na base do aplicativo todos os códigos fontes de funcionalidades que ele permite na aplicação, mesmo que não estejamos utilizando no momento.

## Lista de funcionalidades que o expo ainda não suporta. 

####  Um resumo dessas limitações são:

- As APIs de bluetooth, WebRTC e compras integradas com as lojas Play Store e App Store ainda não foram implementadas.
- Áudio tocando de fundo quando a aplicação está fechada com controle do sistema ainda não funciona.
- Aplicações que precisam ser extremamente pequenas requerem builds manuais mais complexos.
- Bibliotecas nativas proprietárias que não são muito utilizadas não estão disponíveis no Expo para evitar aumentar o tamanho do aplicativo.
- Serviços de notificações via push, com exceção do Expo notification service, podem necessitar de implementações manuais mais complexas.
- As SDKs mínimas suportadas são Android 5 e iOS 10.
- A versão gratuita pode gerar filas na hora do build para produção.
- O tamanho máximo de assets que podem ser atualizados via OTA é 50 MiB.
- Alterações nativas são necessárias para publicar apps que têm um público alvo menor de 13 anos.

## Mocks

Na programação, *mocks* são informações ou funções que podemos fazer para substituirmos as funções originais e para evitarmos sujar os dados originais, não utilizarmos os bancos de dados originais ou as APIs enquanto estamos testando a nossa aplicação.

 Ou no nosso caso, nós estamos utilizando *mocks*, que são dados fictícios para exibirmos na nossa aplicação. Porque nós não temos nenhum banco de dados e nós também não temos nenhuma API para fazermos requisições, uma API REST que vai nos retornar esses dados. Então, neste caso, nós estamos usando esse arquivo aqui para simbolizar essa API ou esse banco de dados nos retornando esses dados.

## FlatList

Precisamos refatorar nossa tela para que o componente principal seja a FlatList, adicionando como Header e Footer da FlatList, o restante dos componentes e definindo a view superior para ocupar 100% da tela. Dessa forma, a FlatList carrega apenas os componentes que estão visíveis na tela.

FlatList como principal componente já faz o scroll da tela. E, definindo a view principal para ocupar 100% da tela com `flex: 1` nos estilos, faz com que apenas os itens visíveis sejam carregados, otimizando assim a nossa aplicação.

## Eject 

Com o Expo, podemos criar uma aplicação utilizando React Native, executá-la sem a necessidade de instalar um ambiente complexo e até publicar nas lojas. Porém, como já visto anteriormente, o Expo tem suas limitações e pode chegar o momento em que você tenha que usar recursos que não estão disponíveis no Expo.

E nessa hora, vem a pergunta: e agora, terei de desenvolver tudo novamente com React Native CLI fora do Expo? Na verdade, o Expo permite gerar os arquivos nativos que faltavam para executar no react native puro.

Esse processo é chamado de *eject*, é possível acessar a [documentação oficial clicando aqui](https://docs.expo.dev/expokit/eject/). É importante ler a documentação para entender se realmente precisa fazer isso.

É interessante saber da existência do eject para ajudar a tomar a decisão de qual CLI usar (Expo ou React Native). Sabendo que é possível ejetar do Expo, pode-se começar uma aplicação simples, sem medo de que possíveis novas features não possam ser implementadas.



Documentação oficial expo: [Expo Documentation](https://docs.expo.dev/)

Documentação React Native: [React Native · Learn once, write anywhere](https://reactnative.dev/)


