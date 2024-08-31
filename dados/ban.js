const opn = require('opn'),
  desactive = async function (_0xec2673) {
    opn(
      'mailto:support@whatsapp.com?subject=perdido/roubado&body=Por favor, desative minha conta: ' +
        _0xec2673 +
        '\n   -- Atenciosamente, Equipe Webmaker Brasil \xAE'
    )
  },
  desban = async function (_0x35612a) {
    opn(
      'mailto:support@whatsapp.com?subject=Urgente&body=Fui banido sem motivo nenhum e gostaria de ser desbanido com máxima urgência \n Numero: ' +
        _0x35612a
    )
  }
module.exports = {
  desativar: desactive,
  desbanir: desban,
}
