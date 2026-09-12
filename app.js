const SZ = ['1/2"', '3/4"', '1"'];

const THREAD = {
  '1/2"': { g: 'G 1/2"', d: '20,955', di: '18,631', p: '1,814', t: '14' },
  '3/4"': { g: 'G 3/4"', d: '26,441', di: '24,119', p: '1,814', t: '14' },
  '1"':   { g: 'G 1"',   d: '33,249', di: '30,291', p: '2,309', t: '11' }
};

const ITEMS = {
  kran:     { n: 'Кран шаровый с американкой', u: 'шт' },
  murfa_nr: { n: 'Муфта с наружной резьбой (НР)', u: 'шт' },
  murfa_vr: { n: 'Муфта с внутренней резьбой (ВР)', u: 'шт' },
  ugolok:   { n: 'Угольник 90°', u: 'шт' },
  trojnik:  { n: 'Тройник', u: 'шт' },
  sgon:     { n: 'Сгон', u: 'шт' },
  kontr:    { n: 'Контргайка', u: 'шт' },
  zaglushka:{ n: 'Заглушка (пробка)', u: 'шт' },
  maevsky:  { n: 'Кран Маевского', u: 'шт' },
  fum:      { n: 'Лента ФУМ', u: 'рулон' },
  nit:      { n: 'Нить уплотнительная', u: 'катушка' },
  pasta:    { n: 'Паста-герметик', u: 'туба' }
};

let PR = {
  '1/2"': { kran: 320, murfa_nr: 64,  murfa_vr: 58,  ugolok: 74,  trojnik: 96,  sgon: 110, kontr: 16,  zaglushka: 30, maevsky: 90, fum: 45, nit: 180, pasta: 320 },
  '3/4"': { kran: 430, murfa_nr: 105, murfa_vr: 92,  ugolok: 118, trojnik: 145, sgon: 150, kontr: 22,  zaglushka: 45, maevsky: 90, fum: 45, nit: 180, pasta: 320 },
  '1"':   { kran: 680, murfa_nr: 185, murfa_vr: 160, ugolok: 210, trojnik: 260, sgon: 270, kontr: 34,  zaglushka: 80, maevsky: 90, fum: 45, nit: 180, pasta: 320 }
};

const KRAN_IDS = ['kran', 'murfa_nr', 'murfa_vr'];
const FITE = ['ugolok', 'trojnik', 'sgon', 'kontr', 'zaglushka', 'maevsky'];
const RASC = ['fum', 'nit', 'pasta'];
const AUTO = ['murfa_nr', 'murfa_vr'];

const CATALOG = [
  { t: 'Муфты и краны', ids: ['kran', 'murfa_nr', 'murfa_vr'] },
  { t: 'Угольники и тройники', ids: ['ugolok', 'trojnik'] },
  { t: 'Сгоны и крепёж', ids: ['sgon', 'kontr', 'zaglushka'] },
  { t: 'Специальные краны', ids: ['maevsky'] },
  { t: 'Расходники', ids: ['fum', 'nit', 'pasta'] }
];

/* ---------- Связки (комплекты) ---------- */
let st = { boiler: false, boiler1: false, sys: 'rad', area: 0, rooms: 1, loops: 0, manifolds: 0, floors: 1, flAreas: [0], bArea: 0, hOn: false, hLitres: 0, hMat: 'ss', hMaker: 'Gekon', hamam: false, epp: false, radRooms: [], radAreas: [], radWnd: [], radBrand: 0, perim: 0, wOn: false, wFloors: 2, wPeople: 4, wBath: 2, wKit: 1, wSrc: 'well', wDepth: 40, wLift: 8, wFilt: 'basic' };

const FIXED = {
  coaxial: 2900, stabilizer: 5900,
  pipe_m: 76, fix: 102, euro: 196, iso_s: 27, iso_r: 27,
  obr34: 485, btroj: 540, kran12mm: 583, troj34: 540, bbgrp: 3635, bbak: 6000,
  kran34nv: 824, bnasos: 2974, bnipp1: 223, kran34ff: 573, fskob: 4, epp: 241, grib: 15, pp32: 172, filt34: 1047,
  radpipe25: 107, radopora25: 7, ugl25: 17, ugl2545: 17, trj25: 22,
  wpump: 30863, whydr: 18000, wppr32: 172, wppr32k: 5000, wfit32: 350, wlat: 5000,
  wkran32: 1918, wred: 4500, wgryaz: 1850, wmagn: 3800, wf3: 12000, wosm: 18000,
  wcol4: 4840, wcol3: 3423, weuro: 350, wrozet: 652, wgilza: 67, wpex: 66, wutepl: 31,
  wskob: 4, wiz32: 64, wkron: 2500
};

let FIXED_NAMES = {};
const FIXED_NAME_ID = {
  bcoax: 'coaxial', bstab: 'stabilizer', fpipe: 'pipe_m', ffix: 'fix',
  feuro: 'euro', fiso1: 'iso_s', fiso2: 'iso_r', bkran12: 'kran12mm',
  fskob: 'fskob', pp32: 'pp32', bfilt: 'filt34'
};
function fixedName(id) {
  if (id === 'bbak' || id === 'troj34') return '';
  const k = FIXED_NAME_ID[id] || id;
  return FIXED_NAMES[k] || '';
}

const BOILERS = [
  { name: 'Настенный газовый котел Baxi ECO Nova 14 F', price: 48351, kw: 14 },
  { name: 'Настенный газовый котел Baxi ECO Nova 18 F', price: 48957, kw: 18 },
  { name: 'Настенный газовый котел Baxi ECO Nova 24 F', price: 50914, kw: 24 },
  { name: 'Настенный газовый котел Baxi Eco LIFE 24 F', price: 50914, kw: 24 },
  { name: 'Настенный газовый котел Baxi ECO-4S 10F',    price: 56667, kw: 10 },
  { name: 'Настенный газовый котел Baxi ECO-4S 18F',    price: 59035, kw: 18 },
  { name: 'Настенный газовый котел Baxi ECO-4S 24F',    price: 59460, kw: 24 },
  { name: 'Настенный газовый котел Baxi ECO Nova 31 F', price: 66828, kw: 31 },
  { name: 'Настенный газовый котел Baxi Eco LIFE 31 F', price: 71160, kw: 31 },
  { name: 'Настенный газовый котел Baxi Eco Four 24 F', price: 72805, kw: 24 },
  { name: 'Настенный газовый котел Baxi Luna-3 240 Fi', price: 85708, kw: 24 },
  { name: 'Настенный газовый котел Baxi Luna-3 Comfort 240 Fi', price: 93729, kw: 24 },
  { name: 'Настенный газовый котел Baxi Luna-3 280 Fi', price: 95160, kw: 28 },
  { name: 'Настенный газовый котел Baxi Luna-3 310 Fi', price: 97363, kw: 31 }
];

const BOILERS1 = [
  { name: 'Настенный газовый котел Baxi Eco LIFE 1.24 F',          price: 52034, kw: 24 },
  { name: 'Настенный газовый котел Baxi Eco Four 1.14 F',          price: 61568, kw: 14 },
  { name: 'Настенный газовый котел Baxi Eco Four 1.24 F',          price: 65037, kw: 24 },
  { name: 'Настенный газовый котел Baxi Eco LIFE 1.31 F',          price: 70124, kw: 31 },
  { name: 'Настенный газовый котел Baxi Luna-3 1.310 Fi',          price: 83752, kw: 31 },
  { name: 'Настенный газовый котел Baxi Luna-3 Comfort 1.240 Fi',  price: 84367, kw: 24 },
  { name: 'Настенный газовый котел Baxi Luna-3 Comfort 1.310 Fi',  price: 91361, kw: 31 }
];

const HEATER_MAKERS = { ss: ['Gekon', 'Baxi'], em: ['Stout', 'Baxi', 'Hajdu'] };

const HEATERS = [
  { n: "Водонагреватель косвенного нагрева Baxi UBT 80(GR)", p: 43678, l: 80, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UB 80", p: 68651, l: 80, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UBT 100(GR)", p: 46439, l: 100, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UBT 120(GR)", p: 51472, l: 120, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UB 120", p: 79790, l: 120, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UBT 160(GR)", p: 61972, l: 160, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UBT 200(GR)", p: 64029, l: 200, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Baxi UBT 300(GR)", p: 94988, l: 300, m: 'em', k: 'Baxi' },
  { n: "Водонагреватель косвенного нагрева Hajdu AQ IND FC 75 настенный", p: 50436, l: 75, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu ID 20 A", p: 37490, l: 80, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu ID 25 A", p: 41805, l: 100, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu AQ IND FC 100 настенный", p: 54886, l: 100, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu IND100SC", p: 63652, l: 100, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu HR-T 30", p: 34096, l: 120, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu HR-N 30", p: 87792, l: 120, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu ID 40 A", p: 48953, l: 150, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu AQ IND FC 150 настенный", p: 62439, l: 150, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu IND150SC", p: 71204, l: 150, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu AQ IND 150 SC", p: 71204, l: 150, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu HR-N 40", p: 91971, l: 160, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu ID 50 A", p: 56101, l: 190, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu AQ IND FC 200 настенный", p: 71204, l: 200, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu IND200SC", p: 80239, l: 200, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu AQ IND 200 SC", p: 80239, l: 200, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA200C", p: 91028, l: 200, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA200C2", p: 113414, l: 200, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA300C", p: 115571, l: 300, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA300C2", p: 141868, l: 300, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA400C2", p: 213207, l: 400, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA500C", p: 226962, l: 500, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA500C2", p: 249483, l: 500, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA800C", p: 315293, l: 800, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA800C2", p: 341994, l: 800, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA1000C", p: 376112, l: 1000, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева Hajdu STA1000C2", p: 399173, l: 1000, m: 'em', k: 'Hajdu' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный настенный 75 л,ТЭН 2,4 кВт SWH-1210-050075", p: 59000, l: 75, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный настенный 100 л,ТЭН 2,4 кВт SWH-1210-050100", p: 62000, l: 100, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный напольный 100 л, один теплообменник, ТЭН 2 кВт SWH-1110-050100", p: 69000, l: 100, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева Stout OptiBase 150 напольный SWH-2110-000150", p: 45500, l: 150, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT бойлер косвенного нагрева напольный 150 л SWH-1110-000150 (без ТЭНа)", p: 63852, l: 150, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный настенный 150 л,ТЭН 2,4 кВт SWH-1210-050150", p: 69000, l: 150, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный напольный 150 л, один теплообменник, ТЭН 2 кВт SWH-1110-050150", p: 77000, l: 150, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева Stout OptiBase 200 напольный SWH-2110-000200", p: 51000, l: 200, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева Stout OptiBase 200 напольный два теплообменника SWH-2110-200200", p: 64000, l: 200, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT бойлер косвенного нагрева напольный 200 л SWH-1110-000200 (без ТЭНа)", p: 68965, l: 200, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный настенный 200 л,ТЭН 2,4 кВт SWH-1210-050200", p: 78000, l: 200, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный напольный 200 л, один теплообменник, ТЭН 3 кВт SWH-1110-050200", p: 85000, l: 200, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева Stout OptiBase 300 напольный SWH-2110-000300", p: 79000, l: 300, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева Stout OptiBase 300 напольный два теплообменника SWH-2110-200300", p: 85000, l: 300, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный напольный 300 л, один теплообменник, ТЭН 3 кВт SWH-1110-050300", p: 111000, l: 300, m: 'em', k: 'Stout' },
  { n: "Водонагреватель косвенного нагрева STOUT Комбинированный напольный 300 л, два теплообменника, ТЭН 3 кВт SWH-1110-250300", p: 121000, l: 300, m: 'em', k: 'Stout' },
  { n: "нержавейка Baxi premier plus 100", p: 80483, l: 100, m: 'ss', k: 'Baxi' },
  { n: "нержавейка Baxi premier plus 150", p: 86545, l: 150, m: 'ss', k: 'Baxi' },
  { n: "нержавейка Baxi premier plus 200", p: 101266, l: 200, m: 'ss', k: 'Baxi' },
  { n: "нержавейка Baxi premier plus 300", p: 122158, l: 300, m: 'ss', k: 'Baxi' },
  { n: "нержавейка Gekon(RISPA) HWB 120 1HE TC INOX", p: 76506, l: 120, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 150 1HE INOX", p: 72203, l: 150, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 200 1HE INOX", p: 79871, l: 200, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 200 2HE INOX", p: 92525, l: 200, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 300 1HE INOX", p: 111596, l: 300, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 300 2HE INOX", p: 131024, l: 300, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 400 1HE INOX", p: 126365, l: 400, m: 'ss', k: 'Gekon' },
  { n: "нержавейка Gekon(RISPA) HWB 400 2HE INOX", p: 145793, l: 400, m: 'ss', k: 'Gekon' }
];

const BOILER_RESERVE = 1.15; // запас мощности котла 15% (10 м² → 1 кВт)

function selectBoiler() {
  if (!(st.boiler || st.boiler1) || !st.bArea || st.bArea <= 0) return null;
  const req = st.bArea / 10 * BOILER_RESERVE;
  const list = st.boiler ? BOILERS : BOILERS1;
  return list.filter(b => b.kw >= req).sort((a, b) => a.price - b.price)[0] || null;
}

function boilName(b) {
  return b.name.replace(/настенный\s+газовый\s+котел\s*/i, '');
}

function selectHeater() {
  if (!st.hOn || !st.hLitres || st.hLitres <= 0) return null;
  return HEATERS
    .filter(h => h.m === st.hMat && h.k === st.hMaker && h.l >= st.hLitres)
    .sort((a, b) => a.p - b.p)[0] || null;
}

const B_ITEMS = {
  muf_vv_34x1:  { n: 'Муфта латунная (ВН-ВН) 3/4"×1"',            u: 'шт' },
  muf_vv_12x34: { n: 'Муфта латунная (ВН-ВН) 1/2"×3/4"',          u: 'шт' },
  muf_vv_34:    { n: 'Муфта латунная (ВН-ВН) 3/4"',               u: 'шт' },
  muf_vv_12:    { n: 'Муфта латунная (ВН-ВН) 1/2"',               u: 'шт' },
  muf_pp_32x1:  { n: 'Муфта ПП 32×1" НР',                        u: 'шт' },
  muf_pp_25x34: { n: 'Муфта ПП 25×3/4" НР',                      u: 'шт' },
  kran34:       { n: 'Кран с американкой 3/4"',                   u: 'шт' },
  kran1:        { n: 'Кран с американкой 1"',                     u: 'шт' },
  kran12:       { n: 'Кран с американкой 1/2"',                   u: 'шт' },
  bbak:         { n: 'Бак расширительный Flamco Airfix R 25 л', u: 'шт' },
  bkronsh:      { n: 'Кронштейн для бака (резьба 3/4")',          u: 'шт' },
  bnippel:      { n: 'Ниппель 3/4"',                              u: 'шт' },
  btroj:        { n: 'Тройник 3/4"×1/2"×3/4"',                    u: 'шт' },
  bkran12:      { n: 'Кран шаровой 1/2" НР-НР',                   u: 'шт' },
  bmuf34:       { n: 'Муфта 3/4" НР',                             u: 'шт' },
  fnsu:         { n: 'Насосно-смесительный узел',                 u: 'шт' },
  fnasos:       { n: 'Насос циркуляционный 25/40',                u: 'шт' },
  fkol:         { n: 'Коллектор тёплого пола',                    u: 'шт' },
  bcoax:        { n: 'Коаксиальный дымоход 60/100 (антиобледен.)', u: 'шт' },
  bstab:        { n: 'Стабилизатор котловой STOUT ST 600',        u: 'шт' },
  fpipe:        { n: 'Труба ROMMER 16×2,0 PE-Xa, бухта 240 м',    u: 'бухта' },
  ffix:         { n: 'Фиксатор поворота TIM FZ016-90 (16 мм)',    u: 'шт' },
  feuro:        { n: 'Евроконус TIM 16 (2,0) × 3/4" МП',          u: 'шт' },
  fiso1:        { n: 'Теплоизоляция Энергофлекс SUPER PROTECT синяя', u: 'шт' },
  fiso2:        { n: 'Теплоизоляция Энергофлекс SUPER PROTECT красная', u: 'шт' },
  obr34:        { n: 'Обратный клапан 3/4"',                          u: 'шт' },
  troj34:       { n: 'Тройник 3/4"×3/4"×3/4"',                        u: 'шт' },
  bbgrp:        { n: 'Группа безопасности бойлера TIM JH-1021 (3 бар)', u: 'шт' },
  kran34nv:     { n: 'Кран шаровой 3/4" НР-ВН',                       u: 'шт' },
  bnasos:       { n: 'Насос циркуляционный 25/60',                    u: 'шт' },
  bnipp1:       { n: 'Гайка переходная 3/4" НАР × 1" НАР',            u: 'шт' },
  kran34ff:     { n: 'Кран шаровой 3/4" ВН-ВН',                       u: 'шт' },
  hkol:         { n: 'Коллектор тёплого пола, 3 выхода',              u: 'шт' },
  hpipe:        { n: 'Труба тёплого пола 16×2,0 PE-Xa (хамам)',       u: 'м' },
  fepp:         { n: 'ЭПП Пеноплэкс Основа 50 мм (0,55×1,15 м)',      u: 'лист' },
  fgrb:         { n: 'Грибы для монтажного пистолета',               u: 'шт' },
  pp32:         { n: 'Труба ПП Ø32 стекловолокно ProAqua (Rubis)',   u: 'м' },
  bfilt:        { n: 'Фильтр грубой очистки Valtec 3/4" VT.192.N.05', u: 'шт' },
  fskob:        { n: 'Скобы-кассеты якорные P1620-4 (труба 16-20)',  u: 'шт' },
  radpipe25:    { n: 'Труба ПП Ø25 стекловолокно ProAqua (Rubis)',   u: 'м' },
  radopora25:   { n: 'Опора ПП 25 ProAqua',                          u: 'шт' },
  ugl25:        { n: 'Уголок ПП 25 90°',                             u: 'шт' },
  ugl2545:      { n: 'Уголок ПП 25 45°',                             u: 'шт' },
  trj25:        { n: 'Тройник ПП 25',                                u: 'шт' },
  ktr_pipe:     { n: 'Труба ПП Ø25 (обвязка котельной)',             u: 'м' },
  ktr_ugl90:    { n: 'Уголок ПП 25 90° (обвязка котельной)',         u: 'шт' },
  ktr_ugl45:    { n: 'Уголок ПП 25 45° (обвязка котельной)',         u: 'шт' },
  ktr_pora:     { n: 'Опора ПП 25 (обвязка котельной)',              u: 'шт' },
  wpump:        { n: 'Насосная станция Unipump AUTO MH 600 C',       u: 'шт' },
  whydr:        { n: 'Гидроаккумулятор 100 л',                       u: 'шт' },
  wppr32:       { n: 'Труба PPR Ду32 ProAqua',                       u: 'м' },
  wppr32k:      { n: 'Уголки и тройники PPR Ду32 (компл.)',          u: 'компл.' },
  wfit32:       { n: 'Фитинги PPR Ду32 (компл.)',                    u: 'компл.' },
  wlat:         { n: 'Латунные фитинги (компл. обвязки)',            u: 'компл.' },
  wkran32:      { n: 'Шаровый кран Itap Ду32 1"',                    u: 'шт' },
  wred:         { n: 'Редуктор давления',                            u: 'шт' },
  wgryaz:       { n: 'Фильтр-грязевик',                              u: 'шт' },
  wmagn:        { n: 'Магнитный фильтр-грязевик',                    u: 'шт' },
  wf3:          { n: 'Фильтр для воды (3 ступени)',                  u: 'шт' },
  wosm:         { n: 'Система обратного осмоса',                     u: 'шт' },
  wcol4:        { n: 'Коллектор 4 вых. Stout 3/4"',                  u: 'шт' },
  wcol3:        { n: 'Коллектор 3 вых. Stout 3/4"',                  u: 'шт' },
  weuro:        { n: 'Евроконусы 16×3/4"',                           u: 'шт' },
  wrozet:       { n: 'Водорозетки Stout 16 1/2"',                    u: 'шт' },
  wgilza:       { n: 'Монтажные гильзы Rommer 16',                   u: 'шт' },
  wpex:         { n: 'Труба PEX-a 16×2 Royal Thermo',                u: 'м' },
  wutepl:       { n: 'Утеплитель Energoflex Super 18/9',             u: 'м' },
  wskob:        { n: 'Скобы-кассеты P1620-4',                        u: 'шт' },
  wiz32:        { n: 'Теплоизоляция Energoflex Super 35/9 Ду32',     u: 'м' },
  wkron:        { n: 'Кронштейны/хомуты/заглушки',                   u: 'компл.' }
};

const FIXED_ITEMS = [
  { id: 'bcoax', q: 1 },
  { id: 'bstab', q: 1 }
];

const BOILER_ITEMS = [
  { id: 'muf_vv_34x1', q: 2 },
  { id: 'muf_vv_12x34', q: 2 },
  { id: 'kran34',       q: 3 },
  { id: 'kran1',        q: 2 },
  { id: 'muf_pp_32x1',  q: 2 },
  { id: 'muf_pp_25x34', q: 2 },
  { id: 'bfilt',        q: 1 },
  { id: 'kran34nv',     q: 1 }
];

const BOILER1_ITEMS = [
  { id: 'muf_vv_34',    q: 2 },
  { id: 'muf_pp_25x34', q: 2 },
  { id: 'kran34',       q: 3 },
  { id: 'muf_vv_12',    q: 1 },
  { id: 'kran12',       q: 1 },
  { id: 'bfilt',        q: 1 },
  { id: 'kran34nv',     q: 1 },
  { id: 'obr34',        q: 2 }
];

const TANK_ITEMS = [
  { id: 'muf_vv_34',   q: 6 },
  { id: 'kran34',      q: 6 },
  { id: 'bnippel',     q: 5 },
  { id: 'btroj',       q: 4 },
  { id: 'bkran12',     q: 3 },
  { id: 'troj34',      q: 2 },
  { id: 'bbgrp',       q: 1 },
  { id: 'kran34nv',    q: 1 },
  { id: 'bnasos',      q: 1 },
  { id: 'bnipp1',      q: 2 },
  { id: 'kran34ff',    q: 2 },
  { id: 'bbak',        q: 1 }
];

const FLOOR_ITEMS = [
  { id: 'fnsu',      q: 1 },
  { id: 'fnasos',    q: 1 },
  { id: 'kran1',     q: 2 },
  { id: 'muf_pp_32x1', q: 2 }
];

const HAMAM_ITEMS = [
  { id: 'hpipe',        q: 160 },
  { id: 'fnsu',        q: 1 },
  { id: 'bnasos',      q: 1 },
  { id: 'kran1',       q: 2 },
  { id: 'muf_pp_32x1', q: 2 },
  { id: 'hkol',        q: 1 },
  { id: 'feuro',       q: 6 },
  { id: 'ffix',        q: 10 },
  { id: 'fskob',       q: 640 },
  { id: 'fiso1',       q: 16 },
  { id: 'fiso2',       q: 16 }
];

const PIPE_M2 = 6;   // м трубы тёплого пола на 1 м² (шаг 150 мм)
const MAX_LOOP = 80; // м трубы на один контур

const RADIATORS = [
  { n: 'Stout TITAN', w: 198, price: 890 },
  { n: 'Рифар В',     w: 204, price: 940 }
];
const WORK_RATE = 250; // ₽/м² — укладка пенополистирола

function workLines() {
  const out = [];
  if (st.sys === 'floor' && st.epp && st.area > 0) {
    out.push({ id: 'wLay', n: 'Укладка пенополистирола 50 мм', u: 'м²', p: 250, q: st.area,
      note: 'Площадь ' + st.area + ' м² × 250 ₽/м² = ' + FMT(st.area * 250) });
  }
  const kotel = st.boiler || st.boiler1;
  if (kotel) {
    out.push({ id: 'wKotel', n: 'Монтаж и обвязка настенного котла', u: 'шт', p: 5000, q: 1, note: 'Котёл — монтаж, подвод магистралей, подключение' });
    out.push({ id: 'wCoax', n: 'Устройство коаксиальной системы дымоудаления', u: 'шт', p: 3500, q: 1, note: 'Коаксиальный дымоход 60/100 — монтаж и вывод' });
    out.push({ id: 'wBak', n: 'Монтаж и обвязка расширительного бака', u: 'шт', p: 3500, q: 1, note: 'Бак Flamco Airfix R 25 л — крепление и подключение' });
  }
  if (st.boiler1 || st.hOn) {
    out.push({ id: 'wBojler', n: 'Обвязка бойлера косвенного нагрева', u: 'шт', p: 40000, q: 1, note: 'Полная обвязка: магистраль, группа безопасности, насос, арматура' });
  }
  let nsu = 0, kol = 0;
  if (st.sys === 'floor') { nsu += 1; kol += st.manifolds; }
  if (st.hamam) { nsu += 1; kol += 1; }
  if (nsu) {
    out.push({ id: 'wNsu', n: 'Монтаж и обвязка насосно-смесительного узла', u: 'шт', p: 3500, q: nsu,
      note: 'Насосно-смесительных узлов: ' + nsu + ' шт × 3500 ₽ = ' + FMT(nsu * 3500) });
  }
  if (kol) {
    out.push({ id: 'wKol', n: 'Монтаж и обвязка коллектора тёплого пола', u: 'шт', p: 8000, q: kol,
      note: 'Коллекторов: ' + kol + ' шт × 8000 ₽ = ' + FMT(kol * 8000) });
  }
  if (st.sys === 'floor' && st.area > 0) {
    out.push({ id: 'wPipe', n: 'Укладка труб тёплого пола', u: 'м²', p: 1200, q: st.area,
      note: 'Площадь ' + st.area + ' м² × 1200 ₽/м² = ' + FMT(st.area * 1200) });
  }
  if (st.hamam) {
    out.push({ id: 'wHamam', n: 'Укладка труб тёплого пола · хамам', u: 'м', p: 200, q: 160,
      note: 'Труба хамама 160 м × 200 ₽/м = ' + FMT(160 * 200) + ' — тариф укладки как у тёплого пола (1200 ₽/м² ÷ 6 м/м²)' });
  }
  if (st.floors > 1) {
    out.push({ id: 'wMain', n: 'Прокладка магистральных труб отопления для коллекторов распределения тёплого пола', u: 'м', p: 250, q: 30,
      note: 'Магистраль Ø32 к коллекторам этажей: 30 м × 250 ₽/м = ' + FMT(30 * 250) });
  }
  if (st.sys === 'rad' && radPipe() > 0) {
    const pipe = radPipe();
    out.push({ id: 'wRadPipe', n: 'Прокладка труб подводки к радиаторам', u: 'м', p: 250, q: pipe,
      note: 'Труба ПП Ø25: ' + pipe + ' м × 250 ₽/м = ' + FMT(pipe * 250) });
    const rc = radCount();
    if (rc > 0) {
      out.push({ id: 'wRadUst', n: 'Установка и обвязка радиатора отопления', u: 'шт', p: 4000, q: rc,
        note: 'Радиаторов: ' + rc + ' шт × 4000 ₽ = ' + FMT(rc * 4000) });
    }
  }
  if (st.wOn) {
    const rs = wRisers();
    const o = wOutlets();
    const pexM = wPexM();
    out.push({ id: 'wwPipe', n: 'Прокладка трубы в утеплителе (водоснабжение)', u: 'м', p: 150, q: pexM,
      note: 'Труба PEX-a: ' + pexM + ' м × 150 ₽/м = ' + FMT(pexM * 150) });
    out.push({ id: 'wwKol', n: 'Обвязка коллектора водоснабжения', u: 'шт', p: 5000, q: 2,
      note: 'Коллекторы ХВС/ГВС: 2 шт × 5000 ₽ = 10 000 ₽' });
    if (st.wSrc === 'well' || st.wSrc === 'well_tank') {
      out.push({ id: 'wwStan', n: 'Обвязка насосной станции', u: 'шт', p: 5000, q: 1,
        note: 'Насосная станция + гидроаккумулятор — установка и подключение' });
    }
    const filtCount = st.wFilt === 'none' ? 0 : 2;
    if (filtCount) {
      out.push({ id: 'wwFilt', n: 'Установка и обвязка фильтров', u: 'шт', p: 3500, q: filtCount,
        note: 'Фильтров: ' + filtCount + ' шт × 3500 ₽ = ' + FMT(filtCount * 3500) });
    }
    if (o.total > 0) {
      out.push({ id: 'wwRozet', n: 'Установка водорозеток со штроблением', u: 'шт', p: 1500, q: o.total,
        note: 'Водорозеток: ' + o.total + ' шт × 1500 ₽ = ' + FMT(o.total * 1500) });
    }
    out.push({ id: 'wwPpr', n: 'Прокладка PPR трубы до 32 мм', u: 'м', p: 200, q: rs * 3,
      note: 'Стояки PPR Ду32: ' + rs * 3 + ' м × 200 ₽/м = ' + FMT(rs * 3 * 200) });
  }
  return out;
}

function workTotal() {
  return workLines().reduce((s, w) => s + w.p * w.q, 0);
}

function renderWork() {
  const rows = workLines();
  document.getElementById('workRows').innerHTML = rows.map(w =>
    svcBRow(w.id, w.n, w.u + ' · работа', w.p, w.q, w.note || '')
  ).join('');
  document.getElementById('cWork').textContent = FMT(workTotal());
}

function fixEuroCount() {
  return st.loops * 2 + 2;
}

function bPrice(id) {
  switch (id) {
    case 'kran34':       return PR['3/4"'].kran;
    case 'kran1':        return PR['1"'].kran;
    case 'kran12':       return PR['1/2"'].kran;
    case 'muf_vv_34x1':  return PR['1"'].murfa_vr;
    case 'muf_vv_12x34': return PR['3/4"'].murfa_vr;
    case 'muf_vv_34':    return PR['3/4"'].murfa_vr;
    case 'muf_vv_12':    return PR['1/2"'].murfa_vr;
case 'bnippel':      return PR['3/4"'].murfa_nr;
    case 'btroj':        return FIXED.btroj;
    case 'bkran12':      return FIXED.kran12mm;
    case 'muf_pp_32x1':  return 170;    // справочная цена
    case 'muf_pp_25x34': return 120;    // справочная цена
    case 'obr34':        return FIXED.obr34;
    case 'troj34':       return FIXED.troj34;
    case 'bbgrp':        return FIXED.bbgrp;
    case 'kran34nv':     return FIXED.kran34nv;
    case 'bnasos':       return FIXED.bnasos;
    case 'bnipp1':       return FIXED.bnipp1;
    case 'kran34ff':     return FIXED.kran34ff;
    case 'bbak':         return FIXED.bbak;
    case 'bkronsh':      return 350;    // справочная цена
    case 'bkran12':      return 380;    // справочная цена
    case 'fnsu':         return 12500;  // справочная цена
    case 'fnasos':       return 3900;   // справочная цена
    case 'fkol': { const pm = st.manifolds ? Math.min(12, Math.ceil(st.loops / st.manifolds)) : 0; return 1300 + 900 * pm; }
    case 'hkol':         return 1300 + 900 * 3; // коллектор на 3 выхода
    case 'hpipe':        return FIXED.pipe_m; // цена за метр
    case 'fepp':         return FIXED.epp;
    case 'fgrb':         return FIXED.grib;
    case 'pp32':         return FIXED.pp32;
    case 'bfilt':        return FIXED.filt34;
    case 'bcoax':        return FIXED.coaxial;
    case 'bstab':        return FIXED.stabilizer;
    case 'fpipe':        return FIXED.pipe_m * 240; // бухта 240 м
    case 'fskob':        return FIXED.fskob;
    case 'ffix':         return FIXED.fix;
    case 'feuro':        return FIXED.euro;
    case 'fiso1':        return FIXED.iso_s;
    case 'fiso2':        return FIXED.iso_r;
    case 'radpipe25':    return FIXED.radpipe25;
    case 'radopora25':   return FIXED.radopora25;
    case 'ugl25':        return FIXED.ugl25;
    case 'ugl2545':      return FIXED.ugl2545;
    case 'trj25':        return FIXED.trj25;
case 'ktr_pipe':     return FIXED.radpipe25;
    case 'ktr_ugl90':    return FIXED.ugl25;
    case 'ktr_ugl45':    return FIXED.ugl2545;
    case 'ktr_pora':     return FIXED.radopora25;
    case 'wpump':        return FIXED.wpump;
    case 'whydr':        return FIXED.whydr;
    case 'wppr32':       return FIXED.wppr32;
    case 'wppr32k':      return FIXED.wppr32k;
    case 'wfit32':       return FIXED.wfit32;
    case 'wlat':         return FIXED.wlat;
    case 'wkran32':      return FIXED.wkran32;
    case 'wred':         return FIXED.wred;
    case 'wgryaz':       return FIXED.wgryaz;
    case 'wmagn':        return FIXED.wmagn;
    case 'wf3':          return FIXED.wf3;
    case 'wosm':         return FIXED.wosm;
    case 'wcol4':        return FIXED.wcol4;
    case 'wcol3':        return FIXED.wcol3;
    case 'weuro':        return FIXED.weuro;
    case 'wrozet':       return FIXED.wrozet;
    case 'wgilza':       return FIXED.wgilza;
    case 'wpex':         return FIXED.wpex;
    case 'wutepl':       return FIXED.wutepl;
    case 'wskob':        return FIXED.wskob;
    case 'wiz32':        return FIXED.wiz32;
    case 'wkron':        return FIXED.wkron;
    default:             return 0;
  }
}

function bundleLines() {
  const map = new Map();
  const put = (id, q) => map.set(id, (map.get(id) || 0) + q);
  const radSkip = st.sys === 'rad' ? { kran1: 1, muf_pp_32x1: 1, bnasos: 1 } : null;
  const putA = (id, q) => { if (!radSkip || !radSkip[id]) put(id, q); };
  if (st.boiler) {
    BOILER_ITEMS.forEach(x => putA(x.id, x.q));
    TANK_ITEMS.forEach(x => putA(x.id, x.q));
  }
  if (st.boiler1) {
    BOILER1_ITEMS.forEach(x => putA(x.id, x.q));
    TANK_ITEMS.forEach(x => putA(x.id, x.q));
  }
  if (st.boiler || st.boiler1) {
    FIXED_ITEMS.forEach(x => put(x.id, x.q));
    put('ktr_pipe', 20);
    put('ktr_ugl90', 30);
    put('ktr_ugl45', 20);
    put('ktr_pora', 40);
  }
  if (st.sys === 'floor') {
    FLOOR_ITEMS.forEach(x => putA(x.id, x.q));
    if (st.loops > 0) {
      put('fkol', st.manifolds);
      put('fpipe', Math.ceil(st.area * PIPE_M2 / 240));
      put('ffix', fixEuroCount());
      put('feuro', fixEuroCount());
      put('fiso1', st.loops * 6 + 4);
      put('fiso2', st.loops * 6 + 4);
      put('fskob', Math.ceil(st.area * PIPE_M2 * 4));
      if (st.epp) {
        put('fepp', Math.ceil(st.area / (0.55 * 1.15)));
        put('fgrb', Math.ceil(st.area * 5));
      }
      if (st.floors > 1) put('pp32', 30);
    }
  }
  if (st.hamam) {
    HAMAM_ITEMS.forEach(x => put(x.id, x.q));
  }
  if (st.sys === 'rad') {
    const pipe = radPipe();
    const rc = radCount();
    if (pipe > 0 && rc > 0) {
      put('radpipe25', pipe);
      put('radopora25', pipe);
      put('kran34', rc * 2);
      put('muf_pp_25x34', rc * 2);
      put('ugl25', rc * 6);
      put('ugl2545', rc * 3);
      put('trj25', rc * 3);
    }
  }
  if (st.wOn) {
    const rs = wRisers();
    const o = wOutlets();
    const pexM = wPexM();
    if (st.wSrc === 'well' || st.wSrc === 'well_tank') {
      put('wpump', 1);
      if (st.wSrc === 'well_tank') put('whydr', 1);
    }
    put('wppr32', rs * 3);
    put('wppr32k', 1);
    put('wfit32', rs);
    put('wlat', 1);
    put('wkran32', st.wFloors + 1);
    put('wred', 1);
    if (st.wFilt === 'basic' || st.wFilt === 'full') {
      put('wgryaz', 1);
      put('wmagn', 1);
    }
    if (st.wFilt === 'full') {
      put('wf3', 1);
      put('wosm', 1);
    }
    const col4 = Math.floor(o.total / 4);
    const col3 = o.total % 4 > 0 ? 1 : 0;
    if (col4 > 0) put('wcol4', col4);
    if (col3 > 0) put('wcol3', col3);
    put('weuro', o.total * 2);
    put('wrozet', o.total);
    put('wgilza', o.total);
    put('wpex', pexM);
    put('wutepl', pexM);
    put('wskob', pexM * 5);
    put('wiz32', rs * 3);
    put('wkron', 1);
  }
  return map;
}

function bundTotal() {
  let t = 0;
  bundleLines().forEach((q, id) => t += bPrice(id) * q);
  const bl = selectBoiler();
  if (bl) t += bl.price;
  const he = selectHeater();
  if (he) t += he.p;
  if (st.sys === 'rad') t += radTotal();
  return t;
}

function bundNote(id, q) {
  const a = st.area, l = st.loops;
  if (st.hamam) {
    switch (id) {
      case 'fnsu':        return 'Насосно-смесительный узел — держит пониженную температуру контуров хамама (пол, лежак, стена)';
      case 'bnasos':      return 'Насос циркуляционный 25/60 — прокачивает контуры хамама';
      case 'kran1':       return 'Кран с американкой 1" ×2 — подача и обратка хамама от магистрали';
      case 'muf_pp_32x1': return 'Муфта ПП 32×1" НР ×2 — переход с полипропилена Ду32 на резьбу 1" контура хамама';
      case 'hkol':        return 'Коллектор на 3 выхода — контуры пола, лежака и стены хамама. Цена: 1 300 ₽ + 900 ₽ × 3 = ' + FMT(1300 + 900 * 3);
      case 'feuro':       return 'Евроконусы 3/4" — подключение труб 16 мм к коллектору, 6 шт (2 на контур)';
      case 'ffix':        return 'Фиксатор поворота — крепление труб на поворотах, 10 шт (запас)';
      case 'fiso1':       return 'Теплоизоляция синяя (подача) — 16 м на контуры хамама';
      case 'fiso2':       return 'Теплоизоляция красная (обратка) — 16 м на контуры хамама';
      case 'hpipe':       return 'Труба тёплого пола 16×2,0 PE-Xa — 160 погонных метров (контуры пола, лежака и стены хамама). 160 м × ' + FIXED.pipe_m + ' ₽/м = ' + FMT(160 * FIXED.pipe_m);
      case 'fskob':       return 'Скобы-кассеты P1620-4 — 160 м × 4 скобы/м = 640 шт';
    }
  }
  if (st.wOn) {
    switch (id) {
      case 'wpump':    return 'Насосная станция Unipump AUTO MH 600 C — подъём воды из скважины, автоматика включения';
      case 'whydr':    return 'Гидроаккумулятор 100 л — стабилизация давления и запас воды при пиковых разборах';
      case 'wppr32':   return 'Труба PPR Ду32 ProAqua — стояки раздачи: ' + (wRisers() * 3) + ' м (2 стояка × 3 м × этажи)';
      case 'wppr32k':  return 'Уголки и тройники PPR Ду32 — комплект на стояки и разводку';
      case 'wfit32':   return 'Фитинги PPR Ду32 (компл. на ' + wRisers() + ' стояка) — переходы, сгоны, заглушки';
      case 'wkran32':  return 'Шаровый кран Itap Ду32 1" — ' + (st.wFloors + 1) + ' шт (на каждый этаж + ввод)';
      case 'wred':     return 'Редуктор давления — защита сантехники от скачков давления';
      case 'wgryaz':   return 'Фильтр-грязевик — первая ступень механической очистки на вводе';
      case 'wmagn':    return 'Магнитный фильтр-грязевик — улавливает магнитные примеси (ржавчина)';
      case 'wf3':      return 'Фильтр для воды (3 ступени) — механика + уголь + умягчение';
      case 'wosm':     return 'Система обратного осмоса — питьевая вода на кухне';
      case 'wcol4':    return 'Коллектор 4 вых. Stout 3/4" — распределение по точкам, ' + Math.floor(wOutlets().total / 4) + ' шт';
      case 'wcol3':    return 'Коллектор 3 вых. Stout 3/4" — распределение оставшихся точек';
      case 'weuro':    return 'Евроконусы 16×3/4" — подключение труб 16 мм к коллекторам, ' + (wOutlets().total * 2) + ' шт (2 на точку)';
      case 'wrozet':   return 'Водорозетки Stout 16 1/2" — закладные под смесители, ' + wOutlets().total + ' шт';
      case 'wgilza':   return 'Монтажные гильзы Rommer 16 — защита трубы в стяжке';
      case 'wpex':     return 'Труба PEX-a 16×2 Royal Thermo — коллекторная разводка: ' + wPexM() + ' м (100 м на санузел)';
      case 'wutepl':   return 'Утеплитель Energoflex Super 18/9 — теплоизоляция ГВС-труб, ' + wPexM() + ' м';
      case 'wskob':    return 'Скобы-кассеты P1620-4 — крепление трубы 16 мм, 5 шт/м';
      case 'wiz32':    return 'Теплоизоляция Energoflex Super 35/9 Ду32 — на стояки PPR: ' + (wRisers() * 3) + ' м';
      case 'wkron':    return 'Кронштейны/хомуты/заглушки — крепёж стояков и магистралей';
    }
  }
  switch (id) {
    case 'kran1':        return 'Кран с американкой 1" на магистраль со стороны котла — ' + q + ' шт';
    case 'kran12':       return 'Кран с американкой 1/2"';
    case 'muf_vv_34x1':  return 'Муфта 3/4"×1" (ВН-ВН) — переход магистрали 1" на кран 3/4"';
    case 'muf_vv_12x34': return 'Муфта 1/2"×3/4" (ВН-ВН) — переход на кран 3/4"';
    case 'muf_vv_34':    return 'Муфта латунная 3/4" (ВН-ВН) — ' + q + ' шт для обвязки котла и бойлера косвенного нагрева';
    case 'muf_vv_12':    return 'Муфта латунная 1/2" (ВН-ВН) — обвязка котла';
    case 'muf_pp_32x1':  return 'Муфта ПП 32×1" НР — переход с полипропилена Ду32 на резьбу 1" (подача/обратка котла)';
    case 'muf_pp_25x34': return 'Муфта ПП 25×3/4" НР — переход с полипропилена Ду25 на резьбу 3/4"';
    case 'bnippel':      return 'Ниппель 3/4" — ' + q + ' шт для подключения расширительного бака и группы безопасности';
    case 'bmuf34':       return 'Муфта 3/4" НР — для подключения расширительного бака';
    case 'btroj':        return 'Тройник 3/4"×1/2"×3/4" — врезка бойлера в магистраль · ' + q + ' шт';
    case 'obr34':        return 'Обратный клапан 3/4" на подаче ХВС/ГВС — не даёт потоку затекать в обратную сторону · ' + q + ' шт';
    case 'troj34':       return 'Тройник 3/4"×3/4"×3/4" — разводка магистрали контура бойлера · ' + q + ' шт';
    case 'bbgrp':        return 'Предохранительный клапан 3 бар + манометр — защита бойлера от превышения давления';
    case 'kran34nv':     return 'Кран шаровой 3/4" НР-ВН — запорная арматура на группу безопасности/подпитку';
    case 'bnasos':       return 'Насос 25/60 для контура бойлера — обеспечивает циркуляцию через змеевик';
    case 'bnipp1':       return 'Гайка переходная 3/4" НАР × 1" НАР — подключение магистрали 1" к узлу бойлера · ' + q + ' шт';
    case 'kran34ff':     return 'Кран шаровой 3/4" ВН-ВН — на ГВС/подпитке бойлера · ' + q + ' шт';
    case 'kran34':       return 'Кран с американкой 3/4" — ' + q + ' шт на контурах бойлера и котла';
    case 'bkran12':      return 'Кран шаровой 1/2" НР-НР — ' + q + ' шт для слива/подпитки';
    case 'bbak':         return 'Бак расширительный Flamco Airfix R 25 л — компенсирует тепловое расширение воды';
    case 'bkronsh':      return 'Кронштейн бака — монтажный крепёж к стене';
    case 'fnsu':         return 'Насосно-смесительный узел — смешивает обратку с подачей котла, держит температуру тёплого пола';
    case 'fnasos':       return 'Насос циркуляционный 25/40 — гоняет контуры тёплого пола';
    case 'fkol': {
      const pm = st.manifolds ? Math.min(12, Math.ceil(l / st.manifolds)) : 0;
      return 'Контуров: ' + l + ' → коллекторов: ' + st.manifolds + ' (до 12 контуров на каждый). Цена за шт: 1 300 ₽ + 900 ₽ × ' + pm + ' = ' + FMT(1300 + 900 * pm);
    }
    case 'fpipe':        return 'Площадь ' + a + ' м² × 6 м/м² (шаг 150) ÷ 240 м в бухте = ' + q + ' бухт. Бухта: 240 м × ' + FIXED.pipe_m + ' ₽/м = ' + FMT(FIXED.pipe_m * 240);
    case 'pp32':         return 'Многоэтажный дом (этажей: ' + st.floors + '): 30 м трубы ПП Ø32 стекловолокно ProAqua для магистрали / стояка к коллекторам этажей. 30 м × ' + FIXED.pp32 + ' ₽/м = ' + FMT(30 * FIXED.pp32);
    case 'fskob':        return 'Труба: ' + (a * 6).toLocaleString('ru-RU') + ' м × 4 скобы/м = ' + q + ' шт (кассета P1620-4)';
    case 'fepp':         return 'Площадь ' + a + ' м² ÷ 0,6325 м²/лист (0,55 × 1,15 м) = ' + q + ' листов ЭПП 50 мм';
    case 'fgrb':         return 'Площадь ' + a + ' м² × 5 грибов/м² = ' + q + ' шт — крепёж листов ЭПП монтажным пистолетом';
    case 'ffix':
    case 'feuro':        return 'Контуров ' + l + ' × 2 + 2 = ' + q + ' шт';
    case 'fiso1':
    case 'fiso2':        return 'Контуров ' + l + ' × 6 + 4 (запас) = ' + q + ' м';
    case 'bfilt':        return 'Фильтр грубой очистки Valtec 3/4" VT.192.N.05 — на входе котла, защищает теплообменник от грязи';
    case 'radpipe25': {
      const P = st.perim, f = radFloors(), pct = 10 + 10 * f;
      return 'Труба ПП Ø25: (периметр ' + P + ' м × 2 × ' + f + ' эт.) + ' + pct + '% = ' + radPipe() + ' м × ' + FIXED.radpipe25 + ' ₽/м';
    }
    case 'radopora25':   return 'Опоры ПП 25: 1 опора на метр трубы = ' + q + ' шт × ' + FIXED.radopora25 + ' ₽';
    case 'ugl25':        return 'Уголки ПП 25 90° — 6 шт на радиатор · радиаторов: ' + radCount() + ' → ' + q + ' шт × ' + FIXED.ugl25 + ' ₽';
    case 'ugl2545':      return 'Уголки ПП 25 45° — 3 шт на радиатор · радиаторов: ' + radCount() + ' → ' + q + ' шт × ' + FIXED.ugl2545 + ' ₽';
    case 'trj25':        return 'Тройники ПП 25 — 3 шт на радиатор · радиаторов: ' + radCount() + ' → ' + q + ' шт × ' + FIXED.trj25 + ' ₽';
    case 'ktr_pipe':     return 'Обвязка котельной: труба ПП Ø25 — 20 м × ' + FIXED.radpipe25 + ' ₽/м = ' + FMT(20 * FIXED.radpipe25);
    case 'ktr_ugl90':    return 'Обвязка котельной: углы ПП 25 90° — 30 шт × ' + FIXED.ugl25 + ' ₽ = ' + FMT(30 * FIXED.ugl25);
    case 'ktr_ugl45':    return 'Обвязка котельной: углы ПП 25 45° — 20 шт × ' + FIXED.ugl2545 + ' ₽ = ' + FMT(20 * FIXED.ugl2545);
    case 'ktr_pora':     return 'Обвязка котельной: опоры ПП 25 — 40 шт × ' + FIXED.radopora25 + ' ₽ = ' + FMT(40 * FIXED.radopora25);
    case 'bcoax':        return 'Коаксиальный дымоход 60/100 — для настенных газовых котлов';
    case 'bstab':        return 'Стабилизатор 600 ВА — защищает электронику котла от скачков сети';
    default:             return 'Входит в состав связки · ' + B_ITEMS[id].u;
  }
}

function svcBRow(id, name, unit, price, qty, note) {
  return '<div class="svc bx" data-i="' + id + '">' +
    '<div><div class="svc-n"><span class="chk">✓</span>' + esc(name) +
    (note ? '<span class="cr">▸</span>' : '') + '</div>' +
    '<div class="svc-u">' + unit + '</div></div>' +
    '<div class="svc-p c">' + price + ' ₽</div>' +
    '<div class="svc-q lock">×' + qty + '</div>' +
    '<div class="svc-t">' + FMT(price * qty) + '</div>' +
    (note ? '<div class="svc-d">' + note + '</div>' : '') +
    '</div>';
}

function renderBund() {
  const wrap = document.getElementById('bundWrap');
  const box = document.getElementById('bbAreaBox');
  if (box) box.style.display = (st.boiler || st.boiler1) ? '' : 'none';
  const hbox = document.getElementById('hbAreaBox');
  if (hbox) hbox.style.display = (st.hOn && !st.boiler) ? '' : 'none';
  const hchip = document.getElementById('bHeater');
  if (hchip) hchip.style.display = st.boiler ? 'none' : '';
  const rbox = document.getElementById('radPnl');
  if (rbox) rbox.style.display = (st.sys === 'rad') ? '' : 'none';
  const wbox = document.getElementById('wAreaBox');
  if (wbox) wbox.style.display = st.wOn ? '' : 'none';
  const wWell = document.getElementById('wWellBox');
  if (wWell) wWell.style.display = (st.wOn && (st.wSrc === 'well' || st.wSrc === 'well_tank')) ? '' : 'none';
  const winf = document.getElementById('waterInfo');
  if (winf) {
    if (st.wOn) {
      const o = wOutlets();
      winf.innerHTML = 'Точки ГВС: <b>' + o.hws + '</b> · ХВС: <b>' + o.cws +
        '</b> · стояки PPR Ду32: <b>' + wRisers() * 3 + ' м</b> · труба PEX-a: <b>' + wPexM() + ' м</b>';
    } else {
      winf.innerHTML = '';
    }
  }
  const bl = selectBoiler();
  const he = selectHeater();
  let html = '';
  let total = 0;
  let wHtml = '';
  let wTotal = 0;
  if (st.boiler || st.boiler1) {
    if (bl) {
      const req = st.bArea / 10 * BOILER_RESERVE;
      total += bl.price;
      html += svcBRow('boiler', 'Котёл ' + boilName(bl), bl.kw + ' кВт · авто', bl.price, 1,
        'Подбор по площади: ' + st.bArea + ' м² → нужен котёл ≥ ' + req.toFixed(1) +
        ' кВт (10 м²/кВт, запас 15%). Выбран: ' + bl.kw + ' кВт');
    } else if (st.bArea > 0) {
      html += '<div class="bwarn">Не найден котёл ≥ ' + (st.bArea / 10 * BOILER_RESERVE).toFixed(1) +
        ' кВт — уточните площадь или проверьте актуальность прайса.</div>';
    }
  }
  if (he) {
    total += he.p;
    const matTxt = he.m === 'ss' ? 'нержавеющая сталь' : 'эмалированный';
    html += svcBRow('heater', 'Бойлер ' + he.n, he.l + ' л · ' + he.k + ' · ' + matTxt + ' · авто', he.p, 1,
      'Автоподбор: самый дешёвый бойлер ≥ ' + st.hLitres + ' л у производителя ' + he.k + ' (' + matTxt + ')');
  } else if (st.hOn && st.hLitres > 0) {
    html += '<div class="bwarn">Не найден бойлер ≥ ' + st.hLitres + ' л (' + st.hMat + ' · ' + st.hMaker +
      ') — увеличьте объём или проверьте прайс.</div>';
  }
  bundleLines().forEach((q, id) => {
    let nm = B_ITEMS[id].n;
    const fName = fixedName(id);
    if (fName) nm = fName;
    if (id === 'fkol' && st.loops) nm = 'Коллектор тёплого пола, ' + st.loops + ' контуров';
    const p = bPrice(id), t = p * q;
    if (id[0] === 'w') {
      wTotal += t;
      wHtml += svcBRow(id, nm, B_ITEMS[id].u + ' · авто', p, q, bundNote(id, q));
      return;
    }
    total += t;
    html += svcBRow(id, nm, B_ITEMS[id].u + ' · авто', p, q, bundNote(id, q));
  });
  if (st.sys === 'rad') {
    radGroups().forEach(g => {
      const p = g.sec * RADIATORS[st.radBrand].price;
      const t = p * g.q;
      total += t;
      html += svcBRow('rad' + g.sec, 'Радиатор ' + RADIATORS[st.radBrand].n + ' · ' + g.sec + ' секций',
        'шт · авто', p, g.q,
        'Радиатор под окном: число радиаторов = числу окон комнаты (минимум 6 секций на радиатор).' +
        ' Требуемая мощность: площадь м² × 100 Вт ÷ ' + RADIATORS[st.radBrand].w + ' Вт/сек = ' +
        g.sec + ' секц · ' + g.sec * RADIATORS[st.radBrand].price + ' ₽/шт');
    });
  }
  const bi = document.getElementById('boilerInfo');
  if (bi) {
    bi.textContent = (st.boiler || st.boiler1) && !st.bArea
      ? 'Укажите отапливаемую площадь — котёл подберётся по мощности (10 м² = 1 кВт, запас 15%)'
      : '';
  }
  const hi = document.getElementById('heaterInfo');
  if (hi) {
    hi.textContent = st.hOn && !st.hLitres
      ? 'Укажите требуемый объём бака — подберётся самый дешёвый бойлер ≥ объёма у выбранного производителя'
      : '';
  }
  wrap.innerHTML = total > 0
    ? SVC_HDR + html +
      '<div class="ctot"><span>Связки</span><span class="a">' + FMT(total) + '</span></div>'
    : '';
  const wWrap = document.getElementById('wRows');
  if (wWrap) {
    wWrap.innerHTML = wTotal > 0
      ? SVC_HDR + wHtml +
        '<div class="ctot"><span>Водоснабжение</span><span class="a" id="cWtr">' + FMT(wTotal) + ' ₽</span></div>'
      : '';
    const wCat = document.getElementById('wCat');
    if (wCat) wCat.style.display = wTotal > 0 ? '' : 'none';
  }
}

function renderRadRooms(n) {
  let html = '';
  for (let i = 0; i < n; i++) {
    const v = st.radRooms && st.radRooms[i] != null ? st.radRooms[i] : (i === 0 ? 0 : 1);
    html += '<div class="frow"><label class="f-label">Количество комнат · этаж ' + (i + 1) + '</label>' +
      '<input class="qkin sm radCnt" id="radRoom' + i + '" type="number" min="0" step="1" inputmode="numeric" value="' + v + '">' +
      '<div id="radRows' + i + '"></div></div>';
  }
  document.getElementById('radRoomsBox').innerHTML = html;
  for (let i = 0; i < n; i++) fillRadRows(i);
}

function fillRadRows(i) {
  const cnt = Math.min(30, Math.max(0, Math.round(+document.getElementById('radRoom' + i).value || 0)));
  if (!st.radAreas[i]) st.radAreas[i] = [];
  if (!st.radWnd[i]) st.radWnd[i] = [];
  let html = '';
  for (let j = 0; j < cnt; j++) {
    const a = st.radAreas[i][j] != null && st.radAreas[i][j] !== '' ? st.radAreas[i][j] : '';
    const w = st.radWnd[i][j] != null && st.radWnd[i][j] !== '' ? st.radWnd[i][j] : '';
    html += '<div class="frow2" style="margin-top:6px">' +
      '<div><label class="f-label" style="font-size:14px">Комната ' + (j + 1) + ' · площадь, м²</label>' +
      '<input class="qkin sm radArea" data-i="' + i + '" data-j="' + j + '" type="number" min="0" step="1" inputmode="decimal" placeholder="0" value="' + a + '"></div>' +
      '<div><label class="f-label" style="font-size:14px">Комната ' + (j + 1) + ' · окон</label>' +
      '<input class="qkin sm radWnd" data-i="' + i + '" data-j="' + j + '" type="number" min="0" step="1" inputmode="numeric" placeholder="0" value="' + w + '"></div></div>';
  }
  document.getElementById('radRows' + i).innerHTML = html;
}

function radCalc() {
  if (!st.radRooms) st.radRooms = [];
  if (!st.radAreas) st.radAreas = [];
  if (!st.radWnd) st.radWnd = [];
  const n = document.querySelectorAll('.radCnt').length;
  for (let i = 0; i < n; i++) {
    const el = document.getElementById('radRoom' + i);
    const v = el ? Math.min(30, Math.max(0, Math.round(+el.value || 0))) : (st.radRooms[i] || 0);
    if (el && v !== (st.radRooms[i] || 0)) st.radRooms[i] = v;
    if (el && (+el.value > 30)) el.value = v;
    fillRadRows(i);
  }
}

function handleRadInput(e) {
  const t = e.target;
  if (t.classList.contains('radCnt')) radCalc();
  else if (t.classList.contains('radArea')) {
    const i = +t.dataset.i, j = +t.dataset.j;
    if (!st.radAreas[i]) st.radAreas[i] = [];
    const nv = t.value === '' ? 0 : parseFloat(t.value);
    if (isNaN(nv)) nv = 0;
    const cv = Math.min(2000, Math.max(0, nv));
    st.radAreas[i][j] = String(cv);
    if (Math.abs(cv - nv) > 0) t.value = String(cv);
  } else if (t.classList.contains('radWnd')) {
    const i = +t.dataset.i, j = +t.dataset.j;
    if (!st.radWnd[i]) st.radWnd[i] = [];
    const nv = t.value === '' ? 0 : Math.round(+t.value);
    if (isNaN(nv)) nv = 0;
    const cv = Math.min(30, Math.max(0, nv));
    st.radWnd[i][j] = String(cv);
    if (cv !== nv) t.value = String(cv);
  }
}

function radRender() {
  const n = Math.min(10, Math.max(1, Math.round(+document.getElementById('bRadFloors').value || 1)));
  radCalc();
  const flat = [];
  for (let i = 0; i < n; i++) flat.push(st.radRooms[i] || (i === 0 ? 0 : 1));
  st.radRooms = flat;
  renderRadRooms(n);
}

function radInfo() {
  const r = RADIATORS[st.radBrand];
  const el = document.getElementById('radInfo');
  if (el) el.textContent = r.n + ' — тепловая мощность ' + r.w + ' Вт на секцию, цена ' + r.price + ' ₽/секция';
}

function radCalcSummary() {
  const brand = RADIATORS[st.radBrand];
  const rows = [];
  let grandSec = 0;
  (st.radRooms || []).forEach(function (cnt, i) {
    if (!cnt) return;
    for (let j = 0; j < cnt; j++) {
      let a = parseFloat((st.radAreas[i] && st.radAreas[i][j]) || '') || 0;
      if (a > 2000) a = 2000;
      let w = Math.max(0, Math.round(parseFloat((st.radWnd[i] && st.radWnd[i][j]) || '') || 0));
      if (w > 30) w = 30;
      if (a <= 0) continue;
      const R = Math.max(1, w);
      const need = a * 100;
      let sec = Math.max(6, Math.ceil(need / (brand.w * R)));
      if (sec === 7) sec = 8;
      const tSec = sec * R;
      grandSec += tSec;
      rows.push({ i: i, j: j, a: a, w: w, R: R, sec: sec, tSec: tSec, t: tSec * brand.price });
    }
  });
  return { brand: brand, rows: rows, grandSec: grandSec };
}

function radGroups() {
  const m = new Map();
  radCalcSummary().rows.forEach(r => m.set(r.sec, (m.get(r.sec) || 0) + r.R));
  return Array.from(m.entries()).map(e => ({ sec: e[0], q: e[1] }));
}

function radTotal() {
  return radCalcSummary().rows.reduce((s, r) => s + r.t, 0);
}

function radFloors() {
  return Math.min(10, Math.max(1, Math.round(+document.getElementById('bRadFloors').value || 1)));
}

function radPipe() {
  const P = parseFloat(document.getElementById('bPerim').value) || 0;
  if (P <= 0) return 0;
  const f = radFloors();
  const pct = 10 + 10 * f;  // 1 эт. +20%, 2 эт. +30%, 3 эт. +40%
  return Math.ceil(P * 2 * f * (1 + pct / 100));
}

function radCount() {
  return radCalcSummary().rows.reduce((s, r) => s + r.R, 0);
}

function wRisers() { return st.wFloors * 2; }

function wOutlets() {
  const hws = st.wBath * 3 + st.wKit;
  const cws = st.wBath * 4 + st.wKit * 3;
  return { hws: hws, cws: cws, total: hws + cws };
}

function wPexM() { return st.wBath * 100; }

function radItemsArr() {
  const b = RADIATORS[st.radBrand];
  return radGroups().map(g => ({
    n: 'Радиатор ' + b.n + ' · ' + g.sec + ' секций',
    q: g.q,
    p: g.sec * b.price,
    t: g.sec * b.price * g.q
  }));
}

function renderRadSummary() {
  const el = document.getElementById('radSummary');
  if (!el) return;
  const s = radCalcSummary();
  let html = '';
  if (st.perim > 0) {
    const pipe = radPipe(), f = radFloors();
    html += '<div class="fnote"><b>Подводка:</b> труба ПП Ø25 — ' + pipe + ' м (периметр ' + st.perim +
      ' м × 2 × ' + f + ' эт. + ' + (10 + 10 * f) + '%) · опоры ' + pipe +
      ' шт · краны 2/р-р · муфты 2/р-р · углы 90° 6/р-р · углы 45° 3/р-р · тройники 3/р-р</div>\n';
  }
  s.rows.forEach(function (r) {
    html += '<div class="fnote" style="margin-top:4px">Этаж ' + (r.i + 1) + ' · комната ' + (r.j + 1) + ': ' + r.a + ' м² · ' + r.w +
      ' ок. → ' + r.R + ' р-р × ' + r.sec + ' секц = <b>' + r.tSec + ' секц</b> · ' + FMT(r.t) + '</div>\n';
  });
  if (s.rows.length) {
    html += '<div style="margin-top:6px"><b>Всего:</b> ' + s.grandSec + ' секций ' + s.brand.n + ' (' +
      s.brand.w + ' Вт/секц) = ' + FMT(radTotal()) + '</div>';
  }
  el.innerHTML = html;
}

function radRefresh() {
  renderRadSummary();
  renderBund();
  upd();
}

function floorsRead() {
  const n = Math.min(10, Math.max(1, Math.round(+document.getElementById('bFloors').value || 1)));
  const areas = [];
  for (let i = 0; i < n; i++) {
    const el = document.getElementById('flArea' + i);
    areas.push(el ? Math.max(0, parseFloat(el.value) || 0) : 0);
  }
  st.flAreas = areas;
  st.area = areas.reduce((s, a) => s + a, 0);
  const perFloor = areas.map(function (a) {
    if (a <= 0) return null;
    const perRoom = a / st.rooms;
    const perRoomCirc = Math.max(1, Math.ceil(perRoom * PIPE_M2 / MAX_LOOP));
    return perRoomCirc * st.rooms;
  });
  st.loops = perFloor.reduce((s, x) => s + (x || 0), 0);
  st.manifolds = perFloor.reduce((s, x) => s + (x ? Math.ceil(x / 12) : 0), 0);
  const info = document.getElementById('floorInfo');
  if (st.area <= 0) {
    info.innerHTML = '<span class="note">Укажите количество этажей и отапливаемую площадь каждого этажа — подберутся коллекторы и труба тёплого пола.</span>';
  } else {
    let rows = '';
    perFloor.forEach(function (c, i) {
      if (c) {
        const m = Math.ceil(c / 12);
        const buh = Math.ceil(areas[i] * PIPE_M2 / 240);
        rows += '<div class="fnote">Этаж <b>' + (i + 1) + '</b>: ' + areas[i] + ' м² → ' +
          (areas[i] * PIPE_M2).toLocaleString('ru-RU') + ' м трубы · ' + buh + ' бухт × 240 м · контуров ' + c + ' · коллекторов ' + m + ' шт</div>';
      }
    });
    info.innerHTML = 'Раскладка: ≈ <b>6 м</b> трубы на м² (шаг 150 мм) · до <b>80 м</b> на контур.' +
      '<br><br><b>Всего:</b> отапливаемая площадь <b>' + st.area + ' м²</b> · контуров <b>' + st.loops +
      '</b> · коллекторов <b>' + st.manifolds + '</b> · трубы <b>' + Math.ceil(st.area * PIPE_M2 / 240) +
      ' бухт × 240 м</b>' + rows;
  }
  renderBund();
  upd();
}

function renderFloorInputs(n, prev) {
  let html = '';
  for (let i = 0; i < n; i++) {
    const v = prev && prev[i] ? prev[i] : '';
    html += '<div class="frow"><label class="f-label">Отапливаемая площадь · этаж ' + (i + 1) + ', м²</label>' +
      '<input class="qkin sm" id="flArea' + i + '" type="number" min="0" step="1" inputmode="decimal" value="' + v + '" placeholder="0"></div>';
  }
  document.getElementById('floorsBox').innerHTML = html;
}

function floorCalc() {
  const prevN = Math.max(st.floors || 0, 1);
  const cur = [];
  for (let i = 0; i < prevN; i++) {
    const el = document.getElementById('flArea' + i);
    cur.push(el ? el.value : '');
  }
  const n = Math.min(10, Math.max(1, Math.round(+document.getElementById('bFloors').value || 1)));
  st.floors = n;
  st.rooms = Math.max(1, Math.round(+document.getElementById('bRooms').value || 1));
  renderFloorInputs(n, cur);
  floorsRead();
}

let sz = SZ[0];
let qty = {
kran: 0, ugolok: 0, trojnik: 0, sgon: 0, kontr: 0,
  zaglushka: 0, maevsky: 0, fum: 0, nit: 0, pasta: 0
};

let hist = [];
try {
  hist = JSON.parse(localStorage.getItem('rs_hist') || '[]');
  if (!Array.isArray(hist)) hist = [];
} catch (e) { hist = []; }

let histIdx = -1;
let histEdit = -1;

const FMT = n => (Math.round(n * 100) / 100).toLocaleString('ru-RU') + ' ₽';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function itemQ(id) {
  return (id === 'kran' || AUTO.includes(id)) ? qty.kran : qty[id];
}
function rowTotal(id) {
  return PR[sz][id] * itemQ(id);
}

const SVC_HDR = '<div class="svc-h"><span></span><span>Цена</span><span>Кол-во</span><span>Стоим.</span></div>';

function svcHTML(id, mode) {
  const p = PR[sz][id], t = rowTotal(id), auto = AUTO.includes(id) || id === 'kran';
  const qcell = auto
    ? '<div class="svc-q lock" id="t-' + id + '">×' + qty.kran + '</div>'
    : '<input class="qi" type="number" min="0" step="1" data-id="' + id + '" value="' + qty[id] + '">';
  const mark = auto ? '<span class="chk">✓</span>' : '';
  const autoTxt = auto ? (id === 'kran' ? ' · кол-во' : ' · авто') : '';
  return '<div class="svc">' +
    '<div><div class="svc-n">' + mark + esc(ITEMS[id].n) + '</div>' +
    '<div class="svc-u">' + (RASC.includes(id) ? '' : 'Ø ' + sz + ' · ') + ITEMS[id].u + autoTxt + '</div></div>' +
    '<div class="svc-p' + (auto ? ' c' : '') + '">' + p + ' ₽</div>' +
    qcell +
    '<div class="svc-t" id="c-' + id + '">' + FMT(t) + '</div></div>';
}

function catTotal(ids) {
  return ids.reduce((s, id) => s + rowTotal(id), 0);
}

function upd() {
  renderWork();
  ['kran', 'murfa_nr', 'murfa_vr'].forEach(id => {
    const el = document.getElementById('t-' + id);
    const c  = document.getElementById('c-' + id);
    if (el) el.textContent = '×' + qty.kran;
    if (c)  c.textContent = FMT(rowTotal(id));
  });
  [...FITE, ...RASC].forEach(id => {
    const c = document.getElementById('c-' + id);
    if (c) c.textContent = FMT(rowTotal(id));
  });
  const cKr = document.getElementById('cKr'); if (cKr) cKr.textContent = FMT(catTotal(KRAN_IDS));
  const cFit = document.getElementById('cFit'); if (cFit) cFit.textContent = FMT(catTotal(FITE));
  document.getElementById('cRas').textContent = FMT(catTotal(RASC));
  const cWtr = document.getElementById('cWtr');
  if (cWtr) {
    let wt = 0;
    bundleLines().forEach((q, id) => { if (id[0] === 'w') wt += bPrice(id) * q; });
    cWtr.textContent = FMT(wt);
  }
  document.getElementById('cWork').textContent = FMT(workTotal());
  const mat = catTotal(KRAN_IDS.concat(FITE, RASC)) + bundTotal();
  const wrk = workTotal();
  document.getElementById('gtMat').textContent = FMT(mat);
  document.getElementById('gtWork').textContent = FMT(wrk);
  document.getElementById('gtVal').textContent = FMT(mat + wrk);
}

function setSize(k) {
  sz = SZ[k];
  const seg = document.getElementById('segSz');
  if (seg) seg.dataset.k = k;
  const sH = document.getElementById('szHint');
  if (sH) sH.innerHTML =
    '<b>' + THREAD[sz].g + '</b> · наружный Ø ' + THREAD[sz].d + ' мм · внутренний Ø ' + THREAD[sz].di +
    ' мм · шаг ' + THREAD[sz].p + ' мм · ' + THREAD[sz].t + ' нитей/дюйм';
  const kranB = document.getElementById('kranRows'); if (kranB) kranB.innerHTML =
    SVC_HDR + svcHTML('kran', 'auto') + svcHTML('murfa_nr', 'auto') + svcHTML('murfa_vr', 'auto');
  const fitB = document.getElementById('fitRows'); if (fitB) fitB.innerHTML = SVC_HDR + FITE.map(id => svcHTML(id, 'edit')).join('');
  document.getElementById('rasRows').innerHTML = SVC_HDR + RASC.map(id => svcHTML(id, 'edit')).join('');
  const qK = document.getElementById('qKran'); if (qK) qK.value = qty.kran;
  upd();
}

function renderCalc() {
  const kranB = document.getElementById('kranRows'); if (kranB) kranB.innerHTML =
    SVC_HDR + svcHTML('kran', 'auto') + svcHTML('murfa_nr', 'auto') + svcHTML('murfa_vr', 'auto');
  const fitB = document.getElementById('fitRows'); if (fitB) fitB.innerHTML = SVC_HDR + FITE.map(id => svcHTML(id, 'edit')).join('');
  document.getElementById('rasRows').innerHTML = SVC_HDR + RASC.map(id => svcHTML(id, 'edit')).join('');
  const qK = document.getElementById('qKran'); if (qK) qK.value = qty.kran;
  upd();
}

function clearCalc() {
  qty = { kran: 0, ugolok: 0, trojnik: 0, sgon: 0, kontr: 0, zaglushka: 0, maevsky: 0, fum: 0, nit: 0, pasta: 0 };
  renderCalc();
  toast('Расчёт очищен');
}

function saveState() {
  try { localStorage.setItem('rs_hist', JSON.stringify(hist)); } catch (e) {}
}

function clientData() {
  const v = id => (document.getElementById(id).value || '').trim();
  const fio = v('clFio'), phone = v('clPhone'), addr = v('clAddr');
  const errs = [];
  if (fio.length < 3) errs.push('clFio');
  if (phone.replace(/\D/g, '').length < 10) errs.push('clPhone');
  if (addr.length < 3) errs.push('clAddr');
  ['clFio', 'clPhone', 'clAddr'].forEach(id =>
    document.getElementById(id).classList.toggle('err', errs.indexOf(id) >= 0));
  return { fio: fio, phone: phone, addr: addr, errs: errs };
}

function clearClientOops() {
  ['clFio', 'clPhone', 'clAddr'].forEach(id =>
    document.getElementById(id).classList.remove('err'));
}

function saveCalc() {
  const cl = clientData();
  if (cl.errs.length) {
    document.getElementById(cl.errs[0]).focus();
    toast('Заполните обязательные поля: ФИО, номер телефона, адрес');
    return;
  }
  const items = [];
  if (qty.kran > 0) {
    KRAN_IDS.forEach(id => {
      items.push({ n: ITEMS[id].n + ' (Ø ' + sz + ')', q: qty.kran, p: PR[sz][id], t: rowTotal(id) });
    });
  }
  FITE.concat(RASC).forEach(id => {
    if (qty[id] > 0) items.push({ n: ITEMS[id].n + (RASC.includes(id) ? '' : ' (Ø ' + sz + ')'), q: qty[id], p: PR[sz][id], t: rowTotal(id) });
  });
  bundleLines().forEach((q, id) => {
    let nm = B_ITEMS[id].n;
    if (id === 'fkol' && st.loops) nm = 'Коллектор тёплого пола ' + st.loops + ' конт.';
    items.push({ n: nm, q: q, p: bPrice(id), t: bPrice(id) * q });
  });
  if (st.sys === 'rad') radItemsArr().forEach(it => items.push(it));
  const bl = selectBoiler(); if (bl) items.push({ n: bl.n, u: 'шт', q: 1, p: bl.price, t: bl.price });
  const he = selectHeater(); if (he) items.push({ n: he.n, u: 'шт', q: 1, p: he.p, t: he.p });
  workLines().forEach(w => items.push({ n: w.n, u: w.u, q: w.q, p: w.p, t: w.p * w.q, work: true }));
  const sysTxt = st.sys === 'floor' ? ' · тёплый пол' : (st.sys === 'rad' && radTotal() > 0 ? ' · радиаторы' : '');
  const bldrTxt = st.boiler ? ' · котёл 2-конт.' : st.boiler1 ? ' · котёл 1-конт. + бойлер' : '';
  const hmmTxt = st.hamam ? ' · хамам' : '';
  const wtrTxt = st.wOn ? ' · водоснабжение' : '';
  const rec = {
    id: histEdit >= 0 && hist[histEdit] ? hist[histEdit].id : Date.now(),
    name: 'BELYAEV_PROJECT · ' + sz + bldrTxt + sysTxt + hmmTxt + wtrTxt,
    date: new Date().toLocaleString('ru-RU'),
    sz: sz,
    client: { fio: cl.fio, phone: cl.phone, addr: cl.addr },
    items: items,
    total: catTotal(KRAN_IDS.concat(FITE, RASC)) + bundTotal() + workTotal(),
    state: JSON.stringify({ st: st, qty: qty, sz: sz })
  };
  if (histEdit >= 0 && hist[histEdit]) {
    hist[histEdit] = rec;
  } else {
    hist.unshift(rec);
  }
  histEdit = -1;
  saveState();
  renderHist();
  showPage('hist');
  toast('Расчёт сохранён в историю');
  return rec;
}

function hitemHTML(h, i) {
  const ed = h.state ? '<button class="hedit" data-i="' + i + '">Редактировать</button>' : '';
  return '<div class="hitem" data-i="' + i + '">' +
    '<div class="hitem-top"><span class="hitem-name">' + esc(h.name) + '</span>' +
    '<span class="hitem-date">' + esc(h.date) + '</span></div>' +
    '<div class="hitem-items">' + esc(h.items.slice(0, 4).map(it => it.q + '× ' + it.n).join(' · ')) + '</div>' +
    '<div class="hitem-foot"><span class="hitem-total">' + FMT(h.total) + '</span>' + ed + '</div></div>';
}

function renderHist() {
  const l = document.getElementById('hList');
  l.innerHTML = hist.length
    ? hist.map(hitemHTML).join('')
    : '<div class="hempty">Пока ничего нет.<br>Соберите расчёт на вкладке «Расчёт» и нажмите «Сохранить».</div>';
}

function renderDet(i) {
  histIdx = i;
  const h = hist[i];
  if (!h) return;
  document.getElementById('hList').style.display = 'none';
  document.getElementById('hBack').style.display = 'inline-flex';
  const det = document.getElementById('hDet');
  det.style.display = 'block';
  det.innerHTML =
    '<div class="hitem-top"><span class="hitem-name">' + esc(h.name) + '</span>' +
    '<button class="hdel" id="hDel">Удалить</button></div>' +
    '<div class="hitem-date">' + esc(h.date) + '</div>' +
    (h.client ? '<div class="hclient"><b>' + esc(h.client.fio) + '</b> · ' + esc(h.client.phone) +
      '<br>' + esc(h.client.addr) + '</div>' : '') +
    h.items.map(it =>
      '<div class="hrow"><span class="hn">' + esc(it.n) + '</span>' +
      '<span class="hq">×' + it.q + '</span><span class="ht">' + FMT(it.t) + '</span></div>'
    ).join('') +
    '<div class="hdet-tot"><span>Итого</span><span class="a">' + FMT(h.total) + '</span></div>' +
    '<div class="hbtns">' +
    (h.state ? '<button class="btn bp" id="hEdit">Редактировать</button>' : '') +
    '<button class="btn bs" id="hXls">Скачать .xls</button>' +
    '<button class="btn bs" id="hGit">В репозиторий</button>' +
    '</div>';
  document.getElementById('hDel').onclick = function () {
    hist.splice(histIdx, 1);
    saveState();
    backList();
    toast('Расчёт удалён');
  };
  const hEdit = document.getElementById('hEdit');
  if (hEdit) hEdit.onclick = function () { editHist(histIdx); };
  document.getElementById('hXls').onclick = function () { exportXls(hist[histIdx]); };
  document.getElementById('hGit').onclick = function () { pushToGit(hist[histIdx]); };
}

function backList() {
  histIdx = -1;
  document.getElementById('hList').style.display = '';
  document.getElementById('hBack').style.display = 'none';
  document.getElementById('hDet').style.display = 'none';
  renderHist();
}

function editHist(i) {
  const h = hist[i];
  if (!h || !h.state) { toast('Эта смета не содержит данных для редактирования'); return; }
  let s;
  try { s = JSON.parse(h.state); } catch (e) { toast('Ошибка данных сметы'); return; }
  if (!s || !s.st || !s.qty) { toast('Эта смета не содержит данных для редактирования'); return; }
  Object.assign(st, s.st);
  Object.assign(qty, s.qty);
  sz = s.sz || SZ[0];
  histEdit = i;
  restoreStateUI(h);
  renderBund();
  renderWork();
  upd();
  backList();
  showPage('calc');
  toast('Редактирование сметы — измените данные и нажмите «Сохранить»');
}

function restoreStateUI(h) {
  const segSys = document.getElementById('segSys');
  const kSys = st.sys === 'floor' ? 1 : 0;
  segSys.dataset.k = kSys;
  document.querySelectorAll('#segSys .mbtn').forEach(el => el.classList.toggle('a', +el.dataset.k === kSys));
  document.getElementById('floorPnl').style.display = (st.sys === 'floor') ? '' : 'none';

  document.getElementById('bBoiler').classList.toggle('on', !!st.boiler);
  document.getElementById('bBoiler1').classList.toggle('on', !!st.boiler1);
  document.getElementById('bHeater').classList.toggle('on', !!st.hOn);
  document.getElementById('bHeater').style.display = st.boiler ? 'none' : '';
  document.getElementById('bHamam').classList.toggle('on', !!st.hamam);

  document.getElementById('bWater').classList.toggle('on', !!st.wOn);
  document.getElementById('wArea').value = st.bArea || '';
  document.getElementById('wFloors').value = st.wFloors || 2;
  document.getElementById('wPeople').value = st.wPeople || '';
  document.getElementById('wBath').value = st.wBath || '';
  document.getElementById('wKit').value = st.wKit || '';
  document.getElementById('wSrc').value = st.wSrc || 'well';
  document.getElementById('wDepth').value = st.wDepth || '';
  document.getElementById('wLift').value = st.wLift || '';
  document.getElementById('wFilt').value = st.wFilt || 'basic';

  document.getElementById('bPerim').value = st.perim || '';
  document.getElementById('bRadFloors').value = Math.max(1, st.radRooms ? st.radRooms.length : 1);
  renderRadRooms(Math.max(1, st.radRooms ? st.radRooms.length : 1));
  radRefresh();
  const segRad = document.getElementById('segRad');
  segRad.dataset.k = st.radBrand;
  document.querySelectorAll('#segRad .mbtn').forEach(el => el.classList.toggle('a', +el.dataset.k === st.radBrand));
  radInfo();

  document.getElementById('bFloors').value = st.floors || 1;
  document.getElementById('bRooms').value = st.rooms || 1;
  document.getElementById('bEpp').checked = !!st.epp;
  renderFloorInputs(Math.max(st.floors, 1), st.flAreas);
  floorsRead();

  const MK = HEATER_MAKERS[st.hMat] || HEATER_MAKERS.ss;
  const hSel = document.getElementById('hMaker');
  hSel.innerHTML = '';
  MK.forEach(k => {
    const o = document.createElement('option');
    o.value = k; o.textContent = k;
    hSel.appendChild(o);
  });
  hSel.value = (MK.indexOf(st.hMaker) >= 0 ? st.hMaker : MK[0]);
  st.hMaker = hSel.value;
  st.hMat = MK === HEATER_MAKERS.ss ? 'ss' : 'em';
  const kMat = st.hMat === 'em' ? 1 : 0;
  document.getElementById('segMat').dataset.k = kMat;
  document.querySelectorAll('#segMat .mbtn').forEach(el => el.classList.toggle('a', +el.dataset.k === kMat));
  document.getElementById('hLitres').value = st.hLitres || '';

  if (h.client) {
    document.getElementById('clFio').value = h.client.fio || '';
    document.getElementById('clPhone').value = h.client.phone || '';
    document.getElementById('clAddr').value = h.client.addr || '';
  }
  clearClientOops();
}

function xlsDoc(h) {
  const rows = [['№', 'Наименование', 'Ед.', 'Кол-во', 'Цена', 'Сумма']];
  h.items.forEach((it, i) => rows.push([i + 1, it.n, it.u || '', it.q, it.p, it.t]));
  const mat = h.items.filter(it => !it.work).reduce((s, it) => s + it.t, 0);
  const wrk = h.items.filter(it => it.work).reduce((s, it) => s + it.t, 0);
  rows.push(['', 'МАТЕРИАЛЫ', '', '', '', mat]);
  rows.push(['', 'РАБОТЫ', '', '', '', wrk]);
  rows.push(['', 'ИТОГО', '', '', '', mat + wrk]);
  const head = (h.client ? (h.client.fio + ' · ' + h.client.phone + ' · ' + h.client.addr) : '') + (h.date ? ' · ' + h.date : '');
  const w = [];
  for (let c = 0; c < rows[0].length; c++) w[c] = Math.max.apply(null, rows.map(r => (r[c] === undefined ? 0 : String(r[c]).length))) + 2;
  const cell = (v, b) => '<td style="border:1px solid #000;padding:4px 6px;' + (b ? 'font-weight:bold;' : '') + '">' + v + '</td>';
  let html = '<table>' +
    (head ? '<tr><td colspan="6" style="border:1px solid #000;padding:4px 6px;font-weight:bold">' + esc(head) + '</td></tr>' : '') +
    '<tr><td colspan="6" style="border:1px solid #000;padding:4px 6px;font-weight:bold;font-size:14px">' + esc(h.name) + '</td></tr>';
  html += '<tr>' + rows[0].map(c => '<td style="border:1px solid #000;padding:4px 6px;font-weight:bold;background:#eee">' + esc(c) + '</td>').join('') + '</tr>';
  rows.slice(1).forEach(r => {
    const sumRow = r[0] === '' && (r[1] === 'МАТЕРИАЛЫ' || r[1] === 'РАБОТЫ' || r[1] === 'ИТОГО');
    html += '<tr>' + r.map((c, ci) => cell(esc(c), sumRow ? (ci === 1 || ci === 5) : (ci === 5 && r[1] === 'ИТОГО'))).join('') + '</tr>';
  });
  html += '</table>' +
    '<style>table{border-collapse:collapse} .x, td{font-family:Calibri,Arial,sans-serif;font-size:11pt;vertical-align:middle}</style>';
  const colW = '<colgroup>' + w.map(x => '<col width="' + (x * 8) + '">').join('') + '</colgroup>';
  html = html.replace('<table>', '<table>' + colW);
  const docHtml = '\ufeff' + '<html><head><meta charset="UTF-8"></head><body>' + html + '</body></html>';
  const fio = h.client && h.client.fio ? h.client.fio.trim() : 'без_имени';
  const ph = h.client && h.client.phone ? h.client.phone.replace(/[^\d+]/g, '') : 'нет_телефона';
  const fName = fio.replace(/[\\\/:*?"<>|]/g, '').replace(/\s+/g, '_') + '_' + ph + '.xls';
  return { html: docHtml, fName: fName };
}

function exportXls(h) {
  const doc = xlsDoc(h);
  const blob = new Blob([doc.html], { type: 'application/vnd.ms-excel' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = doc.fName;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  toast('Файл сметы (xls) загружен');
}

function u8b64(s) {
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
function ghCfg() {
  return {
    token: (localStorage.getItem('ov_gh_token') || '').trim(),
    user: (localStorage.getItem('ov_gh_user') || '').trim(),
    repo: (localStorage.getItem('ov_gh_repo') || '').trim()
  };
}
function gitMsg(t, ok) {
  const m = document.getElementById('gitMsg');
  if (m) { m.textContent = t; m.style.color = ok ? '#4caf7d' : '#e35b5b'; }
}
function pushToGit(h) {
  const cfg = ghCfg();
  if (!cfg.token || !cfg.user || !cfg.repo) {
    gitMsg('Укажите токен, имя пользователя и репозиторий на странице «Справка» (блок «Синхронизация смет»).', false);
    showPage('help');
    return;
  }
  if (!h || !h.items) { gitMsg('Нет данных сметы для отправки.', false); return; }
  const doc = xlsDoc(h);
  const path = 'smeti/' + doc.fName;
  const body = { message: 'Смета ' + h.name + ' от ' + h.date, content: u8b64(doc.html) };
  gitMsg('Отправка сметы в репозиторий…', true);
  fetch('https://api.github.com/repos/' + encodeURIComponent(cfg.user) + '/' + encodeURIComponent(cfg.repo) + '/contents/' + encodeURIComponent(path), {
    method: 'PUT',
    headers: { 'Authorization': 'Bearer ' + cfg.token, 'Accept': 'application/vnd.github+json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json()).then(j => {
    if (j && j.content) { gitMsg('Смета сохранена в репозитории: /' + path, true); toast('Смета отправлена в репозиторий'); }
    else gitMsg('Ошибка GitHub: ' + (j && j.message ? j.message : 'неизвестно'), false);
  }).catch(e => gitMsg('Ошибка сети: ' + e.message, false));
}

function renderCAT() {
  const f = (document.getElementById('catS').value || '').trim().toLowerCase();
  const wrap = document.getElementById('catWrap');
  wrap.innerHTML = CATALOG.map(g => {
    const items = g.ids
      .filter(id => !f || ITEMS[id].n.toLowerCase().includes(f))
      .map(id => {
        const auto = AUTO.includes(id);
        const cols = SZ.map(s => '<span><u>' + s + '</u><i>' + PR[s][id] + '</i></span>').join('');
        return '<div class="crow"><div><div class="cn">' + esc(ITEMS[id].n) + '</div>' +
          '<div class="cu">' + ITEMS[id].u + (auto ? ' · входит в комплект крана автоматически' : '') + '</div></div>' +
          '<div class="prices">' + cols + '</div>' +
          (auto ? '' : '<button class="addbtn" data-add="' + id + '">+</button>') + '</div>';
      }).join('');
    return items ? '<div class="cat"><div class="cat-h"><h2>' + g.t + '</h2><span class="arr">▾</span></div>' +
      '<div class="cat-b open">' + items + '</div></div>' : '';
  }).join('');
}

function addItem(id) {
  qty[id] = (qty[id] || 0) + 1;
  toast('Добавлено: ' + ITEMS[id].n);
  showPage('calc');
  renderCalc();
}

/* ---------- Навигация ---------- */
function showPage(pg) {
  if (!pg) pg = 'calc';
  const tid = 'pg' + pg[0].toUpperCase() + pg.slice(1);
  document.querySelectorAll('.pg').forEach(el => el.classList.toggle('a', el.id === tid));
  document.querySelectorAll('.nbtn').forEach(el =>
    el.classList.toggle('a', el.dataset.pg === pg));
  if (pg === 'cat') renderCAT();
  if (pg === 'hist') { backList(); }
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('s');
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('s'), 2000);
}

/* ---------- События ---------- */
document.addEventListener('DOMContentLoaded', function () {
  if (window.PRICES_LOCAL) {
    SZ.forEach(s => {
      const L = PRICES_LOCAL[s];
      if (L) Object.keys(L).forEach(id => { if (typeof L[id].price === 'number') PR[s][id] = L[id].price; });
    });
  }
  if (window.BOILERS_LOCAL) {
    const B = window.BOILERS_LOCAL;
    if (Array.isArray(B.boilers) && B.boilers.length && typeof B.boilers[0].kw === 'number') {
      BOILERS.length = 0;
      BOILERS.push.apply(BOILERS, B.boilers);
    }
    if (Array.isArray(B.boilers1) && B.boilers1.length && typeof B.boilers1[0].kw === 'number') {
      BOILERS1.length = 0;
      BOILERS1.push.apply(BOILERS1, B.boilers1);
    }
    if (Array.isArray(B.heaters) && B.heaters.length && typeof B.heaters[0].litres === 'number') {
      HEATERS.length = 0;
      B.heaters.forEach(h => HEATERS.push({ n: h.name, p: h.price, l: h.litres, m: h.mat, k: h.maker }));
    }
    if (typeof B.fixed === 'object' && B.fixed) {
      Object.keys(B.fixed).forEach(k => { if (typeof B.fixed[k] === 'number') FIXED[k] = B.fixed[k]; });
    }
    if (typeof B.fixed_names === 'object' && B.fixed_names) {
      Object.keys(B.fixed_names).forEach(k => { if (typeof B.fixed_names[k] === 'string') FIXED_NAMES[k] = B.fixed_names[k]; });
    }
  }
  setSize(0);
  renderHist();

  /* --- Связки --- */
  renderBund();
  document.getElementById('bundWrap').addEventListener('click', function (e) {
    const r = e.target.closest('.svc.bx');
    if (r) r.classList.toggle('open');
  });
  document.getElementById('workBod').addEventListener('click', function (e) {
    const r = e.target.closest('.svc.bx');
    if (r) r.classList.toggle('open');
  });
  document.getElementById('bBoiler').addEventListener('click', function () {
    st.boiler = !st.boiler;
    if (st.boiler) {
      st.boiler1 = false; document.getElementById('bBoiler1').classList.remove('on');
      st.hOn = false; document.getElementById('bHeater').classList.remove('on');
    }
    this.classList.toggle('on', st.boiler);
    renderBund(); upd();
  });
  document.getElementById('bBoiler1').addEventListener('click', function () {
    st.boiler1 = !st.boiler1;
    if (st.boiler1) {
      st.boiler = false; document.getElementById('bBoiler').classList.remove('on');
      st.hOn = true; document.getElementById('bHeater').classList.add('on');
    }
    this.classList.toggle('on', st.boiler1);
    renderBund(); upd();
  });
  document.getElementById('bHeater').addEventListener('click', function () {
    if (st.boiler) return;
    st.hOn = !st.hOn;
    this.classList.toggle('on', st.hOn);
    renderBund(); upd();
  });
  document.getElementById('bHamam').addEventListener('click', function () {
    st.hamam = !st.hamam;
    this.classList.toggle('on', st.hamam);
    renderBund(); upd();
  });

  document.getElementById('bWater').addEventListener('click', function () {
    st.wOn = !st.wOn;
    this.classList.toggle('on', st.wOn);
    renderBund(); renderWork(); upd();
  });
  [
    ['wPeople', 'wPeople'], ['wBath', 'wBath'], ['wKit', 'wKit'],
    ['wDepth', 'wDepth'], ['wLift', 'wLift']
  ].forEach(function (p) {
    document.getElementById(p[0]).addEventListener('input', function () {
      st[p[1]] = Math.max(0, parseFloat(this.value) || 0);
      renderBund(); renderWork(); upd();
    });
  });
  document.getElementById('wArea').addEventListener('input', function () {
    st.bArea = Math.max(0, parseFloat(this.value) || 0);
    const bb = document.getElementById('bbArea');
    if (bb && bb.value !== this.value) bb.value = this.value;
    renderBund(); renderWork(); upd();
  });
  ['wFloors', 'wSrc', 'wFilt'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', function () {
      st[id] = id === 'wFloors' ? Math.max(1, Math.round(+this.value || 1)) : this.value;
      renderBund(); renderWork(); upd();
    });
  });

  const hSel = document.getElementById('hMaker');
  function fillMakers(mat) {
    hSel.innerHTML = '';
    HEATER_MAKERS[mat].forEach(k => {
      const o = document.createElement('option');
      o.value = k; o.textContent = k;
      hSel.appendChild(o);
    });
    hSel.value = st.hMaker = (HEATER_MAKERS[mat].indexOf(st.hMaker) >= 0 ? st.hMaker : HEATER_MAKERS[mat][0]);
  }
  fillMakers(st.hMat);

  const segMat = document.getElementById('segMat');
  segMat.addEventListener('click', function (e) {
    const b = e.target.closest('.mbtn');
    if (!b) return;
    const k = +b.dataset.k;
    st.hMat = k ? 'em' : 'ss';
    segMat.dataset.k = k;
    document.querySelectorAll('#segMat .mbtn').forEach(el => el.classList.toggle('a', +el.dataset.k === k));
    fillMakers(st.hMat);
    renderBund(); upd();
  });

  hSel.addEventListener('change', function () {
    st.hMaker = this.value;
    renderBund(); upd();
  });

  document.getElementById('hLitres').addEventListener('input', function () {
    st.hLitres = Math.max(0, parseFloat(this.value) || 0);
    renderBund(); upd();
  });

  const segSys = document.getElementById('segSys');
  segSys.addEventListener('click', function (e) {
    const b = e.target.closest('.mbtn');
    if (!b) return;
    const k = +b.dataset.k;
    st.sys = k ? 'floor' : 'rad';
    segSys.dataset.k = k;
    document.querySelectorAll('#segSys .mbtn').forEach(el => el.classList.toggle('a', +el.dataset.k === k));
    document.getElementById('floorPnl').style.display = (st.sys === 'floor') ? '' : 'none';
    if (st.sys === 'rad') { radRender(); radRefresh(); } else st.radRooms = [];
    floorCalc();
  });

  document.getElementById('bRadFloors').addEventListener('input', function () { radRender(); radRefresh(); });
  document.getElementById('radRoomsBox').addEventListener('input', function (e) { handleRadInput(e); radRefresh(); });
  document.getElementById('bPerim').addEventListener('input', function () {
    st.perim = parseFloat(this.value) || 0;
    radRefresh();
  });
  radRender();

  const segRad = document.getElementById('segRad');
  segRad.addEventListener('click', function (e) {
    const b = e.target.closest('.mbtn');
    if (!b) return;
    const k = +b.dataset.k;
    st.radBrand = k;
    segRad.dataset.k = k;
    document.querySelectorAll('#segRad .mbtn').forEach(el => el.classList.toggle('a', +el.dataset.k === k));
    radInfo(); radRefresh();
  });
  radInfo();

  ['bFloors', 'bRooms'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', floorCalc);
  });
  document.getElementById('floorsBox').addEventListener('input', floorsRead);
  document.getElementById('bEpp').addEventListener('change', function () {
    st.epp = this.checked;
    floorCalc();
  });

  const qKranEl = document.getElementById('qKran');
  if (qKranEl) qKranEl.addEventListener('input', function () {
    qty.kran = Math.max(0, Math.floor(+this.value || 0));
    upd();
  });

  document.addEventListener('input', function (e) {
    if (e.target.classList && e.target.classList.contains('qi')) {
      const id = e.target.dataset.id;
      if (id) {
        qty[id] = Math.max(0, Math.floor(+e.target.value || 0));
        upd();
      }
    }
  });

  document.getElementById('bbArea').addEventListener('input', function () {
    st.bArea = Math.max(0, parseFloat(this.value) || 0);
    const wa = document.getElementById('wArea');
    if (wa && wa.value !== this.value) wa.value = this.value;
    renderBund(); upd();
  });

  document.addEventListener('click', function (e) {
    const add = e.target.closest('[data-add]');
    if (add) { addItem(add.dataset.add); return; }

    const he = e.target.closest('.hedit');
    if (he) { editHist(+he.dataset.i); return; }

    const hi = e.target.closest('.hitem');
    if (hi && document.getElementById('hList').style.display !== 'none') {
      renderDet(+hi.dataset.i);
      return;
    }

    const catH = e.target.closest('.cat-h');
    if (catH && !catH.closest('#pgCat')) {
      const body = catH.nextElementSibling;
      body.classList.toggle('open');
      catH.classList.toggle('a');
    }
  });

  document.getElementById('bSave').addEventListener('click', saveCalc);
  const bGit = document.getElementById('bGitSave');
  if (bGit) bGit.addEventListener('click', function () {
    const rec = saveCalc();
    if (rec) pushToGit(rec);
  });
  document.getElementById('bClear').addEventListener('click', clearCalc);
  document.getElementById('bPrint').addEventListener('click', function () { window.print(); });
  const hClearEl = document.getElementById('hClear');
  if (hClearEl) hClearEl.addEventListener('click', function () {
    if (!hist.length) return;
    hist = [];
    saveState();
    renderHist();
    toast('История очищена');
  });
  document.getElementById('hBack').addEventListener('click', backList);
  document.getElementById('catS').addEventListener('input', renderCAT);

  ['clFio', 'clPhone', 'clAddr'].forEach(id =>
    document.getElementById(id).addEventListener('input', function () {
      this.classList.remove('err');
    }));

  document.getElementById('bnav').addEventListener('click', function (e) {
    const b = e.target.closest('.nbtn');
    if (!b) return;
    e.preventDefault();
    if ('#' + b.dataset.pg !== location.hash) history.pushState(null, '', '#' + b.dataset.pg);
    showPage(b.dataset.pg);
  });
  addEventListener('popstate', function () {
    showPage((location.hash || '').replace(/^#/, '') || 'calc');
  });
  if (location.hash) showPage(location.hash.replace(/^#/, '') || 'calc');

  /* Splash */
  setTimeout(function () {
    const s = document.getElementById('splash');
    if (!s) return;
    const t = document.querySelector('.spl-title');
    if (t) {
      let fs = parseFloat(getComputedStyle(t).fontSize);
      t.style.whiteSpace = 'nowrap';
      while (t.scrollWidth > innerWidth - 8 && fs > 12) {
        fs = Math.floor(fs * 0.93 * 10) / 10;
        t.style.fontSize = fs + 'px';
      }
      if (t.scrollWidth > innerWidth - 8) {
        t.style.whiteSpace = 'normal';
        t.style.overflowWrap = 'anywhere';
      }
    }
    s.classList.add('hide');
    setTimeout(function () { s.remove(); }, 5200);
  }, 3600);

  /* Offline / online */
  function setOff(on) {
    document.getElementById('offB').classList.toggle('show', !!on);
  }
  addEventListener('offline', function () { setOff(true); });
  addEventListener('online', function () { setOff(false); });

  /* PWA install */
  let deferred = null;
  addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    document.getElementById('instBanner').classList.add('show');
  });
  document.getElementById('bInstall').addEventListener('click', function () {
    if (deferred) {
      deferred.prompt();
      deferred = null;
    }
  });
  document.getElementById('bNoInstall').addEventListener('click', function () {
    document.getElementById('instBanner').classList.remove('show');
  });
});