// ==========================================================
// CANAIS DE CONTATO
// Fonte única dos endereços: o Footer monta os 4 cards e o Hero
// pega só o GitHub e o LinkedIn pelos ids. Assim a URL do
// perfil não vive em dois arquivos.
//
// `copiar`: quando existe, o clique copia esse valor em vez de
// navegar. `externo`: abre em nova aba.
// Label e texto de ação são traduzidos — ver contato.canais
// nos dicionários de src/i18n.
// ==========================================================
import type { Canal } from '../types'

export const EMAIL = 'leocontato@outlook.com.br'
const WHATSAPP = '5561985553989'

export const canais: Canal[] = [
  {
    id: 'whatsapp',
    // Sem o número à vista: a página é indexada e o número em texto
    // vira alvo de scraper. O link wa.me continua abrindo a conversa.
    valor: { pt: 'me mande uma mensagem', en: 'send me a message' },
    href: `https://wa.me/${WHATSAPP}`,
    externo: true,
  },
  {
    id: 'email',
    valor: EMAIL,
    href: `mailto:${EMAIL}`,
    copiar: EMAIL,
  },
  {
    id: 'linkedin',
    valor: 'in/leonardo-c-muniz',
    href: 'https://www.linkedin.com/in/leonardo-c-muniz/',
    externo: true,
  },
  {
    id: 'github',
    valor: 'leonardomuniz',
    href: 'https://github.com/leonardomuniz',
    externo: true,
  },
]


/**
 * Busca um canal de contato pelo id ('whatsapp', 'email', 'linkedin', 'github').
 */
export function canalPorId(id: string) {
  return canais.find((canal) => canal.id === id)
}
