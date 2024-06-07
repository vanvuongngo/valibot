import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'ro',
  schema:           (issue) => `Tip incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
  specific: {
    bic:            (issue) => `BIC incorect: S-a primit ${issue.received}`,
    bytes:          (issue) => `Byți incorecți: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    check:          (issue) => `Intrare incorectă: S-a primit ${issue.received}`,
    checkAsync:     (issue) => `Intrare incorectă: S-a primit ${issue.received}`,
    creditCard:     (issue) => `Card de credit incorect: S-a primit ${issue.received}`,
    cuid2:          (issue) => `Cuid2 incorect: S-a primit ${issue.received}`,
    decimal:        (issue) => `Număr zecimal incorect: S-a primit ${issue.received}`,
    email:          (issue) => `Email incorect: S-a primit ${issue.received}`,
    emoji:          (issue) => `Emoji incorect: S-a primit ${issue.received}`,
    empty:          (issue) => `Lungime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    endsWith:       (issue) => `Final incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    excludes:       (issue) => `Conținut incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    finite:         (issue) => `Valoare finită incorectă: S-a primit ${issue.received}`,
    hash:           (issue) => `Hash incorect: S-a primit ${issue.received}`,
    hexColor:       (issue) => `Culoare hex incorectă: S-a primit ${issue.received}`,
    hexadecimal:    (issue) => `Valoare hexazecimală incorectă: S-a primit ${issue.received}`,
    imei:           (issue) => `IMEI incorect: S-a primit ${issue.received}`,
    includes:       (issue) => `Conținut incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    integer:        (issue) => `Număr întreg incorect: S-a primit ${issue.received}`,
    ip:             (issue) => `IP incorect: S-a primit ${issue.received}`,
    ipv4:           (issue) => `IPv4 incorect: S-a primit ${issue.received}`,
    ipv6:           (issue) => `IPv6 incorect: S-a primit ${issue.received}`,
    isoDate:        (issue) => `Dată incorectă: S-a primit ${issue.received}`,
    isoDateTime:    (issue) => `Dată și oră incorectă: S-a primit ${issue.received}`,
    isoTime:        (issue) => `Oră incorectă: S-a primit ${issue.received}`,
    isoTimeSecond:  (issue) => `Valoare timp-secundă incorectă: S-a primit ${issue.received}`,
    isoTimestamp:   (issue) => `Marcaj temporal incorect: S-a primit ${issue.received}`,
    isoWeek:        (issue) => `Săptămână incorectă: S-a primit ${issue.received}`,
    length:         (issue) => `Lungime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    mac:            (issue) => `MAC incorect: S-a primit ${issue.received}`,
    mac48:          (issue) => `MAC de 48-biți incorect: S-a primit ${issue.received}`,
    mac64:          (issue) => `MAC de 64-biți incorect: S-a primit ${issue.received}`,
    maxBytes:       (issue) => `Byți incorecți: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    maxLength:      (issue) => `Lungime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    maxSize:        (issue) => `Mărime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    maxValue:       (issue) => `Valoare incorectă: S-a așteptat ${issue.expected}, dar s-a primit ${issue.received}`,
    mimeType:       (issue) => `Tip MIME incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    minBytes:       (issue) => `Byți incorecți: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    minLength:      (issue) => `Lungime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    minSize:        (issue) => `Mărime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    minValue:       (issue) => `Valoare incorectă: S-a așteptat ${issue.expected}, dar s-a primit ${issue.received}`,
    multipleOf:     (issue) => `Multiplu incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    nonEmpty:       (issue) => `Lungime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    notBytes:       (issue) => `Byți incorecți: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    notLength:      (issue) => `Lungime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    notSize:        (issue) => `Mărime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    notValue:       (issue) => `Valoare incorectă: S-a așteptat ${issue.expected}, dar s-a primit ${issue.received}`,
    octal:          (issue) => `Octal incorect: S-a primit ${issue.received}`,
    regex:          (issue) => `Format incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    safeInteger:    (issue) => `Număr întreg sigur incorect: S-a primit ${issue.received}`,
    size:           (issue) => `Mărime incorectă: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    startsWith:     (issue) => `Început incorect: Valoarea așteptată era ${issue.expected}, dar s-a primit ${issue.received}`,
    ulid:           (issue) => `ULID incorect: S-a primit ${issue.received}`,
    url:            (issue) => `URL incorect: S-a primit ${issue.received}`,
    uuid:           (issue) => `UUID incorect: S-a primit ${issue.received}`,
    value:          (issue) => `Valoare incorectă: S-a așteptat ${issue.expected}, dar s-a primit ${issue.received}`,
  },
};

export default language;
