import type { Idioma } from '../types'

const MESES: Record<Idioma, string[]> = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

const DURACAO: Record<Idioma, { ano: [string, string]; mes: [string, string]; juncao: string }> = {
  pt: { ano: ['ano', 'anos'], mes: ['mês', 'meses'], juncao: ' e ' },
  en: { ano: ['year', 'years'], mes: ['month', 'months'], juncao: ' and ' },
}

function parseAnoMes(valor: string) {
  const [ano, mes] = valor.split('-').map(Number)
  return { ano, mes }
}


/**
 * Formata 'AAAA-MM' como mês/ano no idioma pedido.
 *
 * @param valor data no formato 'AAAA-MM'
 * @param idioma 'pt' → 'jun/2026', 'en' → 'Jun 2026'
 */
export function formatMesAno(valor: string, idioma: Idioma = 'pt') {
  const { ano, mes } = parseAnoMes(valor)
  const nome = MESES[idioma][mes - 1]
  return idioma === 'pt' ? `${nome}/${ano}` : `${nome} ${ano}`
}


/**
 * Calcula a duração por extenso entre duas datas 'AAAA-MM'.
 *
 * @param inicio data inicial 'AAAA-MM'
 * @param fim data final 'AAAA-MM', ou `null` para "até hoje"
 * @param idioma 'pt' → '1 ano e 2 meses', 'en' → '1 year and 2 months'
 */
export function formatDuracao(inicio: string, fim: string | null, idioma: Idioma = 'pt') {
  const dataInicio = parseAnoMes(inicio)
  const dataFim = fim ? parseAnoMes(fim) : (() => {
    const hoje = new Date()
    return { ano: hoje.getFullYear(), mes: hoje.getMonth() + 1 }
  })()

  let totalMeses = (dataFim.ano - dataInicio.ano) * 12 + (dataFim.mes - dataInicio.mes)
  totalMeses = Math.max(totalMeses, 1)

  const anos = Math.floor(totalMeses / 12)
  const meses = totalMeses % 12
  const rotulos = DURACAO[idioma]

  const partes = []
  if (anos > 0) partes.push(`${anos} ${rotulos.ano[anos === 1 ? 0 : 1]}`)
  if (meses > 0) partes.push(`${meses} ${rotulos.mes[meses === 1 ? 0 : 1]}`)

  return partes.join(rotulos.juncao)
}
