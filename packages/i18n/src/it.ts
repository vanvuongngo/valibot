import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:               'it',
  schema:             (issue) => `Tipo non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
  specific: {
    base64:           (issue) => `Base64 non valido: Ricevuto ${issue.received}`,
    bic:              (issue) => `BIC non valido: Ricevuto ${issue.received}`,
    bytes:            (issue) => `Byte non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    check:            (issue) => `Input non valido: Ricevuto ${issue.received}`,
    checkAsync:       (issue) => `Input non valido: Ricevuto ${issue.received}`,
    checkItems:       (issue) => `Elemento non valido: Input ${issue.received}`,
    checkItemsAsync:  (issue) => `Elemento non valido: Input ${issue.received}`,
    creditCard:       (issue) => `Carta di credito non valida: Ricevuto ${issue.received}`,
    cuid2:            (issue) => `Cuid2 non valido: Ricevuto ${issue.received}`,
    decimal:          (issue) => `Decimale non valido: Ricevuto ${issue.received}`,
    digits:           (issue) => `Cifre non valide: Ricevuto ${issue.received}`,
    email:            (issue) => `Email non valida: Ricevuto ${issue.received}`,
    emoji:            (issue) => `Emoji non valido: Ricevuto ${issue.received}`,
    empty:            (issue) => `Lunghezza non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    endsWith:         (issue) => `Finale non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    everyItem:        (issue) => `Elemento non valido: Ricevuto ${issue.received}`,
    excludes:         (issue) => `Contenuto non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    finite:           (issue) => `Finito non valido: Ricevuto ${issue.received}`,
    graphemes:        (issue) => `Grafi non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    hash:             (issue) => `Hash non valido: Ricevuto ${issue.received}`,
    hexColor:         (issue) => `Colore esadecimale non valido: Ricevuto ${issue.received}`,
    hexadecimal:      (issue) => `Esadecimale non valido: Ricevuto ${issue.received}`,
    imei:             (issue) => `IMEI non valido: Ricevuto ${issue.received}`,
    includes:         (issue) => `Contenuto non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    integer:          (issue) => `Intero non valido: Ricevuto ${issue.received}`,
    ip:               (issue) => `IP non valido: Ricevuto ${issue.received}`,
    ipv4:             (issue) => `IPv4 non valido: Ricevuto ${issue.received}`,
    ipv6:             (issue) => `IPv6 non valido: Ricevuto ${issue.received}`,
    isoDate:          (issue) => `Data non valida: Ricevuto ${issue.received}`,
    isoDateTime:      (issue) => `Data e ora non validi: Ricevuto ${issue.received}`,
    isoTime:          (issue) => `Ora non valida: Ricevuto ${issue.received}`,
    isoTimeSecond:    (issue) => `Secondo dell'ora non valido: Rricevuto ${issue.received}`,
    isoTimestamp:     (issue) => `Timestamp non valido: Ricevuto ${issue.received}`,
    isoWeek:          (issue) => `Settimana non valida: Ricevuto ${issue.received}`,
    length:           (issue) => `Lunghezza non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    mac:              (issue) => `MAC non valido: Ricevuto ${issue.received}`,
    mac48:            (issue) => `MAC a 48 bit non valido: Ricevuto ${issue.received}`,
    mac64:            (issue) => `MAC a 64 bit non valido: Ricevuto ${issue.received}`,
    maxBytes:         (issue) => `Byte non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    maxGraphemes:     (issue) => `Grafi non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    maxLength:        (issue) => `Lunghezza non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    maxSize:          (issue) => `Dimensione non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    maxValue:         (issue) => `Valore non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    maxWords:         (issue) => `Parole non valide: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    mimeType:         (issue) => `Tipo MIME non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    minBytes:         (issue) => `Byte non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    minGraphemes:     (issue) => `Grafi non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    minLength:        (issue) => `Lunghezza non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    minSize:          (issue) => `Dimensione non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    minValue:         (issue) => `Valore non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    minWords:         (issue) => `Parole non valide: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    multipleOf:       (issue) => `Multiplo non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    nanoid:           (issue) => `Nano ID non valido: Ricevuto ${issue.received}`,
    nonEmpty:         (issue) => `Lunghezza non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    notBytes:         (issue) => `Byte non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    notGraphemes:     (issue) => `Grafi non validi: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    notLength:        (issue) => `Lunghezza non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    notSize:          (issue) => `Dimensione non valida: previsto ${issue.expected} ma ricevuto ${issue.received}`,
    notValue:         (issue) => `Valore non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    notWords:         (issue) => `Parole non valide: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    octal:            (issue) => `Ottale non valido: Ricevuto ${issue.received}`,
    partialCheck:     (issue) => `Input non valido: Ricevuto ${issue.received}`,
    regex:            (issue) => `Formato non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    safeInteger:      (issue) => `Intero sicuro non valido: Ricevuto ${issue.received}`,
    size:             (issue) => `Dimensione non valida: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    someItem:         (issue) => `Elemento non valido: Ricevuto ${issue.received}`,
    startsWith:       (issue) => `Inizio non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    ulid:             (issue) => `ULID non valido: Ricevuto ${issue.received}`,
    url:              (issue) => `URL non valido: Ricevuto ${issue.received}`,
    uuid:             (issue) => `UUID non valido: Ricevuto ${issue.received}`,
    value:            (issue) => `Valore non valido: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
    words:            (issue) => `Parole non valide: Previsto ${issue.expected} ma ricevuto ${issue.received}`,
  },
};

export default language;
