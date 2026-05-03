// GTO preflop ranges for 6-max No Limit Hold'em at 100BB
// Frequencies represent how often to take the action (1 = always, 0.5 = 50%)
// Data based on standard GTO solver outputs (PioSOLVER / GTO+ approximations)

export type Position = 'UTG' | 'HJ' | 'CO' | 'BTN' | 'SB' | 'BB';
export type Situation = 'RFI' | 'FOR' | 'F3B';

// combo → frequency (0–1)
type RangeMap = Record<string, number>;

function r(pure: string[], mixed: Record<string, number> = {}): RangeMap {
  const out: RangeMap = {};
  for (const c of pure) out[c] = 1;
  for (const [c, f] of Object.entries(mixed)) out[c] = f;
  return out;
}

// ─── RFI (Raise First In) ────────────────────────────────────────────────────

export const RFI: Record<Position, RangeMap> = {
  UTG: r(
    ['AA','KK','QQ','JJ','TT','99','88','77',
     'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
     'AKo','AQo','AJo',
     'KQs','KJs','KTs','K9s','K8s','K7s',
     'KQo','KJo',
     'QJs','QTs','Q9s',
     'JTs','T9s'],
    { 'K6s':0.5,'K5s':0.5,'ATo':0.5,'66':0.5 }
  ),
  HJ: r(
    ['AA','KK','QQ','JJ','TT','99','88','77','66',
     'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
     'AKo','AQo','AJo','ATo',
     'KQs','KJs','KTs','K9s','K8s','K7s','K6s',
     'KQo','KJo','KTo',
     'QJs','QTs','Q9s','Q8s',
     'QJo',
     'JTs','J9s','T9s'],
    { 'K5s':0.5,'K4s':0.5,'QTo':0.5,'A9o':0.5,'55':0.5 }
  ),
  CO: r(
    ['AA','KK','QQ','JJ','TT','99','88','77','66','55','44',
     'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
     'AKo','AQo','AJo','ATo','A9o','A8o',
     'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s',
     'KQo','KJo','KTo',
     'QJs','QTs','Q9s','Q8s',
     'QJo','QTo',
     'JTs','J9s','J8s',
     'JTo',
     'T9s','T8s',
     '98s','87s','76s'],
    { 'K3s':0.5, 'K2s':0.5, 'Q7s':0.5, 'Q6s':0.5, 'J7s':0.5, '65s':0.5, '54s':0.5, 'A5o':0.5, '33':0.5 }
  ),
  BTN: r(
    ['AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
     'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
     'AKo','AQo','AJo','ATo','A9o','A8o','A7o','A6o','A5o','A4o','A3o',
     'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s',
     'KQo','KJo','KTo','K9o','K8o',
     'QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','Q3s',
     'QJo','QTo','Q9o',
     'JTs','J9s','J8s','J7s','J6s','J5s',
     'JTo','J9o',
     'T9s','T8s','T7s','T6s',
     'T9o',
     '98s','97s','96s',
     '87s','86s',
     '76s','75s',
     '65s',
     '54s'],
    { 'Q2s':0.5, 'J4s':0.5, 'J3s':0.5, 'T5s':0.5, '85s':0.5, '74s':0.5, '64s':0.5, '53s':0.5, 
      'A2o':0.5, 'K7o':0.5, 'Q8o':0.5, 'T8o':0.5, '98o':0.5 }
  ),
SB: r(
    ['AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
     'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
     'AKo','AQo','AJo','ATo','A9o','A8o','A7o','A6o','A5o','A4o','A3o',
     'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s',
     'KQo','KJo','KTo','K9o','K8o',
     'QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','Q3s','Q2s',
     'QJo','QTo','Q9o',
     'JTs','J9s','J8s','J7s','J6s','J5s',
     'JTo','J9o',
     'T9s','T8s','T7s','T6s',
     'T9o',
     '98s','97s','96s',
     '87s','86s',
     '76s','75s',
     '65s',
     '54s'],
    { 
      'A2o':0.5, 'K7o':0.5, 'Q8o':0.5, 'T8o':0.5, '98o':0.5, 
      'J4s':0.5, 'J3s':0.5, 'T5s':0.5, '85s':0.5, '74s':0.5, '64s':0.5, '53s':0.5 
    }
  ),
  BB: {} // BB cannot RFI
};

// ─── 3BET ranges (hero 3bets villain's open) ─────────────────────────────────
// Structure: THREBET[heroPos][villainPos]

export const THREEBET: Partial<Record<Position, Partial<Record<Position, RangeMap>>>> = {
  HJ: {
    UTG: r(
      ['AA','KK','QQ','AKs','AQs'],
      { 'JJ':0.6,'AKo':0.7,'AQo':0.3,'KQs':0.3 }
    ),
  },
  CO: {
    UTG: r(
      ['AA','KK','QQ','JJ','AKs','AQs','AKo'],
      { 'TT':0.5,'AJs':0.5,'AQo':0.4,'AJo':0.2,'KQs':0.3 }
    ),
    HJ: r(
      ['AA','KK','QQ','JJ','AKs','AQs','AKo'],
      { 'TT':0.7,'AJs':0.6,'AQo':0.5,'AJo':0.3,'KQs':0.4,'KJs':0.2 }
    ),
  },
  BTN: {
    UTG: r(
      ['AA','KK','QQ','JJ','TT','AKs','AQs','AJs','AKo','AQo'],
      { '99':0.4,'ATs':0.5,'AJo':0.3,'KQs':0.4,'KJs':0.2,'A5s':0.5,'A4s':0.3 }
    ),
    HJ: r(
      ['AA','KK','QQ','JJ','TT','AKs','AQs','AJs','AKo','AQo'],
      { '99':0.6,'88':0.3,'ATs':0.6,'A9s':0.4,'AJo':0.4,'KQs':0.5,'KJs':0.3,'A5s':0.6,'A4s':0.4,'QJs':0.2 }
    ),
    CO: r(
      ['AA','KK','QQ','JJ','TT','99','AKs','AQs','AJs','ATs','AKo','AQo','AJo'],
      { '88':0.4,'77':0.2,'A9s':0.5,'A5s':0.7,'A4s':0.5,'A3s':0.3,'ATo':0.4,
        'KQs':0.6,'KJs':0.4,'KTs':0.2,'QJs':0.4,'JTs':0.3,'T9s':0.2 }
    ),
  },
  SB: {
    UTG: r(
      ['AA','KK','QQ','JJ','TT','AKs','AQs','AJs','AKo'],
      { '99':0.4,'ATs':0.4,'AQo':0.5,'AJo':0.2,'KQs':0.3,'A5s':0.4 }
    ),
    HJ: r(
      ['AA','KK','QQ','JJ','TT','AKs','AQs','AJs','AKo','AQo'],
      { '99':0.5,'88':0.2,'ATs':0.5,'A9s':0.3,'AJo':0.3,'KQs':0.4,'KJs':0.2,'A5s':0.5,'A4s':0.3 }
    ),
    CO: r(
      ['AA','KK','QQ','JJ','TT','99','AKs','AQs','AJs','AKo','AQo'],
      { '88':0.4,'77':0.2,'ATs':0.6,'A9s':0.4,'A5s':0.6,'A4s':0.4,'AJo':0.4,'ATo':0.2,
        'KQs':0.5,'KJs':0.3,'QJs':0.3,'JTs':0.2 }
    ),
    BTN: r(
      ['AA','KK','QQ','JJ','TT','99','88','AKs','AQs','AJs','ATs','AKo','AQo','AJo'],
      { '77':0.4,'66':0.2,'A9s':0.5,'A8s':0.3,'A5s':0.7,'A4s':0.5,'A3s':0.3,'ATo':0.5,
        'KQs':0.6,'KJs':0.4,'KTs':0.3,'QJs':0.4,'JTs':0.3,'T9s':0.2,'98s':0.2 }
    ),
  },
  BB: {
    UTG: r(
      ['AA','KK','QQ','JJ','AKs','AQs','AKo'],
      { 'TT':0.5,'AJs':0.5,'AQo':0.4,'A5s':0.4,'KQs':0.3 }
    ),
    HJ: r(
      ['AA','KK','QQ','JJ','TT','AKs','AQs','AJs','AKo','AQo'],
      { '99':0.5,'ATs':0.5,'A9s':0.3,'A5s':0.5,'AJo':0.3,'KQs':0.4,'KJs':0.2 }
    ),
    CO: r(
      ['AA','KK','QQ','JJ','TT','99','AKs','AQs','AJs','AKo','AQo'],
      { '88':0.4,'77':0.2,'ATs':0.6,'A9s':0.4,'A5s':0.6,'A4s':0.3,'AJo':0.4,'ATo':0.2,
        'KQs':0.5,'KJs':0.3,'QJs':0.3,'JTs':0.2,'A3s':0.2 }
    ),
    BTN: r(
      ['AA','KK','QQ','JJ','TT','99','88','AKs','AQs','AJs','ATs','A9s','AKo','AQo','AJo'],
      { '77':0.5,'66':0.3,'A8s':0.4,'A5s':0.7,'A4s':0.5,'A3s':0.3,'ATo':0.5,'A9o':0.3,
        'KQs':0.6,'KJs':0.4,'KTs':0.3,'QJs':0.4,'JTs':0.3,'T9s':0.3,'98s':0.2 }
    ),
    SB: r(
      ['AA','KK','QQ','JJ','TT','99','88','77','AKs','AQs','AJs','ATs','A9s','A5s','A4s',
       'AKo','AQo','AJo','ATo'],
      { '66':0.5,'55':0.3,'A8s':0.4,'A3s':0.3,'A2s':0.2,'A9o':0.4,'A8o':0.2,
        'KQs':0.6,'KJs':0.4,'KTs':0.3,'K9s':0.2,'QJs':0.5,'QTs':0.3,'JTs':0.4,'T9s':0.3,'98s':0.2,'87s':0.2 }
    ),
  },
};

// ─── CALL (flat call vs open) ─────────────────────────────────────────────────
// Hands that call rather than 3-bet or fold

export const CALL_VS_OPEN: Partial<Record<Position, Partial<Record<Position, RangeMap>>>> = {
  HJ: {
    UTG: r(
      ['TT','99','88','77','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s',
       'QJs','QTs','Q9s',
       'JTs','J9s',
       'T9s','T8s',
       '98s','87s','76s'],
      { 'AQs':0.3,'AQo':0.3,'66':0.5,'55':0.4,'44':0.3,'33':0.3,'22':0.3,
        'K8s':0.5,'97s':0.5,'86s':0.3,'75s':0.3,'65s':0.3,'54s':0.3 }
    ),
  },
  CO: {
    UTG: r(
      ['TT','99','88','77','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s',
       'QJs','QTs','Q9s','Q8s',
       'JTs','J9s','J8s',
       'T9s','T8s',
       '98s','97s','87s','86s','76s','75s','65s','54s'],
      { 'AQo':0.3,'66':0.7,'55':0.5,'44':0.4,'33':0.3,'22':0.3,
        'K7s':0.4,'96s':0.3,'85s':0.3,'74s':0.3,'64s':0.3,'53s':0.3 }
    ),
    HJ: r(
      ['TT','99','88','77','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s',
       'QJs','QTs','Q9s','Q8s',
       'JTs','J9s','J8s',
       'T9s','T8s',
       '98s','97s','87s','86s','76s','75s','65s','64s','54s','53s'],
      { 'AQo':0.4,'66':0.7,'55':0.5,'44':0.4,'33':0.3,'22':0.3,
        'K7s':0.5,'96s':0.4,'85s':0.4,'74s':0.3,'43s':0.3 }
    ),
  },
  BTN: {
    UTG: r(
      ['TT','99','88','77','66','55','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s','K7s',
       'QJs','QTs','Q9s','Q8s','Q7s',
       'JTs','J9s','J8s','J7s',
       'T9s','T8s','T7s',
       '98s','97s','96s','87s','86s','85s','76s','75s','65s','64s','54s','53s','43s'],
      { '44':0.5,'33':0.4,'22':0.4,'AJo':0.3,'K6s':0.4,'K5s':0.3,'Q6s':0.3,'J6s':0.3,'95s':0.3,'74s':0.3 }
    ),
    HJ: r(
      ['TT','99','88','77','66','55','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s',
       'QJs','QTs','Q9s','Q8s','Q7s',
       'JTs','J9s','J8s','J7s',
       'T9s','T8s','T7s',
       '98s','97s','96s','87s','86s','85s','76s','75s','65s','64s','54s','53s','43s'],
      { '44':0.5,'33':0.4,'22':0.3,'AJo':0.4,'K5s':0.4,'Q6s':0.4,'J6s':0.3,'95s':0.4,'74s':0.3,'63s':0.3 }
    ),
    CO: r(
      ['99','88','77','66','55','44','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s',
       'QJs','QTs','Q9s','Q8s','Q7s','Q6s',
       'JTs','J9s','J8s','J7s','J6s',
       'T9s','T8s','T7s','T6s',
       '98s','97s','96s','95s','87s','86s','85s','76s','75s','74s','65s','64s','54s','53s','43s'],
      { '33':0.5,'22':0.4,'AJo':0.4,'ATo':0.3,'K4s':0.4,'Q5s':0.3,'J5s':0.3,'T5s':0.3,'94s':0.3,'84s':0.3,'63s':0.3 }
    ),
  },
  SB: {
    UTG: r(
      ['TT','99','88','77','66','55','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s',
       'QJs','QTs','Q9s','Q8s',
       'JTs','J9s','J8s',
       'T9s','T8s',
       '98s','97s','87s','76s','65s','54s'],
      { '44':0.4,'33':0.3,'22':0.3,'K7s':0.4,'Q7s':0.3,'J7s':0.3,'T7s':0.3,'86s':0.3,'75s':0.3,'64s':0.3 }
    ),
    HJ: r(
      ['TT','99','88','77','66','55','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s','K7s',
       'QJs','QTs','Q9s','Q8s',
       'JTs','J9s','J8s',
       'T9s','T8s',
       '98s','97s','87s','86s','76s','65s','54s'],
      { '44':0.5,'33':0.4,'22':0.3,'Q7s':0.3,'J7s':0.3,'T7s':0.3,'75s':0.4,'64s':0.3 }
    ),
    CO: r(
      ['99','88','77','66','55','44','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s','K7s',
       'QJs','QTs','Q9s','Q8s','Q7s',
       'JTs','J9s','J8s','J7s',
       'T9s','T8s','T7s',
       '98s','97s','96s','87s','86s','85s','76s','75s','65s','64s','54s','53s'],
      { '33':0.4,'22':0.3,'ATo':0.2,'K6s':0.4,'Q6s':0.3,'J6s':0.3,'T6s':0.3,'95s':0.3,'74s':0.3,'43s':0.3 }
    ),
    BTN: r(
      ['88','77','66','55','44','33','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s',
       'QJs','QTs','Q9s','Q8s','Q7s','Q6s',
       'JTs','J9s','J8s','J7s','J6s',
       'T9s','T8s','T7s','T6s',
       '98s','97s','96s','95s','87s','86s','85s','84s','76s','75s','74s','65s','64s','54s','53s','43s'],
      { '22':0.4,'ATo':0.3,'K5s':0.3,'Q5s':0.3,'J5s':0.3,'T5s':0.3,'94s':0.3,'83s':0.2,'73s':0.2,'63s':0.3,'52s':0.3 }
    ),
  },
  BB: {
    UTG: r(
      ['TT','99','88','77','66','55','44','33','22',
       'AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'AQo','AJo',
       'KQs','KJs','KTs','K9s','K8s','K7s',
       'KQo','KJo',
       'QJs','QTs','Q9s','Q8s',
       'JTs','J9s','J8s',
       'T9s','T8s','T7s',
       '98s','97s','96s','87s','86s','85s','76s','75s','65s','64s','54s','53s','43s'],
      { 'ATo':0.5,'AKo':0.3,'K6s':0.4,'Q7s':0.4,'J7s':0.3,'T6s':0.3,'95s':0.3,'84s':0.3,'74s':0.3,'63s':0.3,'52s':0.3 }
    ),
    HJ: r(
      ['TT','99','88','77','66','55','44','33','22',
       'AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'AQo','AJo','ATo',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s',
       'KQo','KJo',
       'QJs','QTs','Q9s','Q8s','Q7s',
       'JTs','J9s','J8s','J7s',
       'T9s','T8s','T7s','T6s',
       '98s','97s','96s','87s','86s','85s','76s','75s','65s','64s','54s','53s','43s'],
      { 'KTo':0.5,'Q6s':0.3,'J6s':0.3,'95s':0.4,'84s':0.3,'74s':0.3,'63s':0.3,'52s':0.3,'42s':0.3 }
    ),
    CO: r(
      ['99','88','77','66','55','44','33','22',
       'AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'AQo','AJo','ATo',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s',
       'KQo','KJo','KTo',
       'QJs','QTs','Q9s','Q8s','Q7s','Q6s',
       'JTs','J9s','J8s','J7s','J6s',
       'T9s','T8s','T7s','T6s',
       '98s','97s','96s','95s','87s','86s','85s','76s','75s','74s','65s','64s','54s','53s','43s'],
      { 'A9o':0.4,'K9o':0.4,'Q5s':0.3,'J5s':0.3,'T5s':0.3,'94s':0.3,'84s':0.3,'73s':0.3,'63s':0.3,'52s':0.3,'42s':0.3,'32s':0.3 }
    ),
    BTN: r(
      ['77','66','55','44','33','22',
       'ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'AJo','ATo','A9o',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s',
       'KQo','KJo','KTo','K9o',
       'QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s',
       'QJo','QTo',
       'JTs','J9s','J8s','J7s','J6s','J5s',
       'JTo',
       'T9s','T8s','T7s','T6s','T5s',
       '98s','97s','96s','95s','87s','86s','85s','84s','76s','75s','74s','65s','64s','63s','54s','53s','43s','42s','32s'],
      { 'A8o':0.4,'K8o':0.4,'K3s':0.4,'Q4s':0.4,'Q9o':0.4,'Q8o':0.3,'J4s':0.4,'J9o':0.4,'J8o':0.3,'T4s':0.4,'T9o':0.5,'T8o':0.3,'94s':0.4,'93s':0.3,'83s':0.3,'73s':0.3,'62s':0.3,'52s':0.3 }
    ),
    SB: r(
      ['55','44','33','22',
       'A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
       'ATo','A9o','A8o',
       'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s',
       'KQo','KJo','KTo','K9o','K8o',
       'QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s',
       'QJo','QTo','Q9o',
       'JTs','J9s','J8s','J7s','J6s','J5s','J4s',
       'JTo','J9o',
       'T9s','T8s','T7s','T6s','T5s','T4s',
       'T9o','T8o',
       '98s','97s','96s','95s','94s','87s','86s','85s','84s','76s','75s','74s','73s','65s','64s','63s','54s','53s','52s','43s','42s','32s'],
      { '66':0.4,'A7o':0.3,'K2s':0.5,'Q3s':0.4,'Q2s':0.3,'Q8o':0.4,'J3s':0.3,'J8o':0.3,'T3s':0.3,'93s':0.3,'83s':0.3,'72s':0.3,'62s':0.3,'74o':0.2 }
    ),
  },
};

// ─── 4BET ranges (hero 4bets villain's 3bet) ──────────────────────────────────
// Structure: FOURBET[heroPos][villainPos] = combos hero 4bets

export const FOURBET: Partial<Record<Position, Partial<Record<Position, RangeMap>>>> = {
  UTG: {
    HJ:  r(['AA','KK','QQ','AKs','AKo'], { 'JJ':0.5,'AQs':0.3,'AQo':0.2 }),
    CO:  r(['AA','KK','QQ','AKs','AKo'], { 'JJ':0.6,'AQs':0.4,'AQo':0.3,'A5s':0.3 }),
    BTN: r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.5,'AQs':0.5,'AQo':0.4,'A5s':0.5,'A4s':0.3,'KQs':0.3 }),
    SB:  r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.5,'AQs':0.4,'AQo':0.3,'A5s':0.4 }),
    BB:  r(['AA','KK','QQ','AKs','AKo'], { 'JJ':0.5,'AQs':0.3,'A5s':0.3 }),
  },
  HJ: {
    CO:  r(['AA','KK','QQ','AKs','AKo'], { 'JJ':0.5,'AQs':0.3,'AQo':0.2 }),
    BTN: r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.5,'AQs':0.5,'AQo':0.4,'A5s':0.5,'A4s':0.3 }),
    SB:  r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.5,'AQs':0.4,'AQo':0.3,'A5s':0.4 }),
    BB:  r(['AA','KK','QQ','AKs','AKo'], { 'JJ':0.5,'AQs':0.4,'A5s':0.3 }),
  },
  CO: {
    BTN: r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.6,'AQs':0.5,'AQo':0.4,'A5s':0.6,'A4s':0.4,'KQs':0.3 }),
    SB:  r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.5,'AQs':0.4,'AQo':0.3,'A5s':0.5,'A4s':0.3 }),
    BB:  r(['AA','KK','QQ','JJ','AKs','AKo'], { 'TT':0.5,'AQs':0.4,'AQo':0.3,'A5s':0.4 }),
  },
  BTN: {
    SB:  r(['AA','KK','QQ','JJ','TT','AKs','AQs','AKo'], { '99':0.5,'AJs':0.4,'AQo':0.6,'A5s':0.6,'A4s':0.4,'KQs':0.4,'KJs':0.3 }),
    BB:  r(['AA','KK','QQ','JJ','TT','AKs','AQs','AKo'], { '99':0.5,'AJs':0.4,'AQo':0.5,'A5s':0.6,'A4s':0.4,'KQs':0.4 }),
  },
  SB: {
    BB:  r(['AA','KK','QQ','JJ','TT','AKs','AQs','AKo','AQo'], { '99':0.5,'88':0.3,'AJs':0.4,'AJo':0.3,'A5s':0.6,'A4s':0.4,'KQs':0.5,'KJs':0.3 }),
  },
};

// ─── CALL 3BET ranges (hero calls villain's 3bet) ────────────────────────────

export const CALL3BET: Partial<Record<Position, Partial<Record<Position, RangeMap>>>> = {
  UTG: {
    HJ:  r(['JJ','TT','99','AQs','AJs','ATs','KQs','KJs','QJs','JTs'], { 'AQo':0.3,'88':0.3 }),
    CO:  r(['JJ','TT','99','88','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','JTs','T9s'], { 'AQo':0.4,'77':0.3 }),
    BTN: r(['JJ','TT','99','88','77','AQs','AJs','ATs','A9s','KQs','KJs','KTs','K9s','QJs','QTs','JTs','T9s','98s'], { 'AQo':0.5,'AJo':0.3,'66':0.3,'A8s':0.3 }),
    SB:  r(['JJ','TT','99','88','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','JTs','T9s'], { 'AQo':0.4,'77':0.3,'A8s':0.3 }),
    BB:  r(['JJ','TT','99','AQs','AJs','ATs','KQs','KJs','QJs','JTs'], { 'AQo':0.3,'88':0.4,'A9s':0.3 }),
  },
  HJ: {
    CO:  r(['JJ','TT','99','88','AQs','AJs','ATs','KQs','KJs','QJs','JTs'], { 'AQo':0.3,'77':0.3 }),
    BTN: r(['JJ','TT','99','88','77','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','QTs','JTs','T9s','98s'], { 'AQo':0.5,'AJo':0.3,'66':0.3 }),
    SB:  r(['JJ','TT','99','88','AQs','AJs','ATs','KQs','KJs','KTs','QJs','JTs','T9s'], { 'AQo':0.4,'77':0.3 }),
    BB:  r(['JJ','TT','99','88','AQs','AJs','ATs','KQs','KJs','QJs','JTs'], { 'AQo':0.4,'77':0.4 }),
  },
  CO: {
    BTN: r(['JJ','TT','99','88','77','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','QTs','JTs','T9s','98s','87s'], { 'AQo':0.5,'AJo':0.3,'66':0.4,'55':0.3,'A8s':0.4 }),
    SB:  r(['JJ','TT','99','88','77','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','JTs','T9s'], { 'AQo':0.4,'AJo':0.3,'66':0.3,'A8s':0.3 }),
    BB:  r(['JJ','TT','99','88','77','AQs','AJs','ATs','A9s','KQs','KJs','QJs','JTs','T9s'], { 'AQo':0.4,'AJo':0.3,'66':0.4 }),
  },
  BTN: {
    SB:  r(['TT','99','88','77','66','AQs','AJs','ATs','A9s','A8s','KQs','KJs','KTs','K9s','QJs','QTs','JTs','T9s','98s','87s','76s'], { 'JJ':0.5,'55':0.4,'44':0.3,'AJo':0.4,'ATo':0.3,'A7s':0.3,'K8s':0.3,'Q9s':0.3,'65s':0.3 }),
    BB:  r(['TT','99','88','77','66','AQs','AJs','ATs','A9s','KQs','KJs','KTs','QJs','QTs','JTs','T9s','98s','87s','76s'], { 'JJ':0.5,'55':0.4,'44':0.3,'AJo':0.3,'A8s':0.3,'K9s':0.3,'65s':0.3 }),
  },
  SB: {
    BB:  r(['TT','99','88','77','66','55','AQs','AJs','ATs','A9s','A8s','KQs','KJs','KTs','K9s','QJs','QTs','Q9s','JTs','J9s','T9s','T8s','98s','87s','76s','65s'], { 'JJ':0.5,'44':0.4,'33':0.3,'A7s':0.4,'A6s':0.3,'K8s':0.4,'Q8s':0.3,'54s':0.3 }),
  },
};

// ─── Lookup API ──────────────────────────────────────────────────────────────

export type ActionResult = {
  action: string;
  frequency: number;
  color: 'green' | 'blue' | 'yellow' | 'gray';
}[];

export function getRFIResult(heroPos: Position, combo: string): ActionResult {
  const range = RFI[heroPos] ?? {};
  if (heroPos === 'BB') return [{ action: 'N/A', frequency: 1, color: 'gray' }];
  const freq = range[combo] ?? 0;
  if (freq === 0) return [{ action: 'Fold', frequency: 1, color: 'gray' }];
  if (freq >= 1) return [{ action: 'Open', frequency: 1, color: 'green' }];
  return [
    { action: 'Open', frequency: freq, color: 'yellow' },
    { action: 'Fold', frequency: 1 - freq, color: 'gray' },
  ];
}

export function getFORResult(heroPos: Position, villainPos: Position, combo: string): ActionResult {
  const threeBetFreq = THREEBET[heroPos]?.[villainPos]?.[combo] ?? 0;
  const callFreq = CALL_VS_OPEN[heroPos]?.[villainPos]?.[combo] ?? 0;
  const foldFreq = Math.max(0, 1 - threeBetFreq - callFreq);

  if (threeBetFreq === 0 && callFreq === 0) {
    return [{ action: 'Fold', frequency: 1, color: 'gray' }];
  }

  const results: ActionResult = [];
  if (threeBetFreq > 0) results.push({ action: '3-Bet', frequency: threeBetFreq, color: 'green' });
  if (callFreq > 0) results.push({ action: 'Call', frequency: callFreq, color: 'blue' });
  if (foldFreq > 0.05) results.push({ action: 'Fold', frequency: foldFreq, color: 'gray' });
  return results;
}

export function getF3BResult(heroPos: Position, villainPos: Position, combo: string): ActionResult {
  const fourBetFreq = FOURBET[heroPos]?.[villainPos]?.[combo] ?? 0;
  const callFreq = CALL3BET[heroPos]?.[villainPos]?.[combo] ?? 0;
  const foldFreq = Math.max(0, 1 - fourBetFreq - callFreq);

  if (fourBetFreq === 0 && callFreq === 0) {
    return [{ action: 'Fold', frequency: 1, color: 'gray' }];
  }

  const results: ActionResult = [];
  if (fourBetFreq > 0) results.push({ action: '4-Bet', frequency: fourBetFreq, color: 'green' });
  if (callFreq > 0) results.push({ action: 'Call', frequency: callFreq, color: 'blue' });
  if (foldFreq > 0.05) results.push({ action: 'Fold', frequency: foldFreq, color: 'gray' });
  return results;
}

// Matrix cell color for the 13x13 grid
export type CellColor = 'raise' | 'call' | 'mixed-raise' | 'mixed-call' | 'fold';

export function getMatrixCellColor(
  situation: Situation,
  heroPos: Position,
  villainPos: Position | null,
  combo: string
): CellColor {
  if (situation === 'RFI') {
    const freq = RFI[heroPos]?.[combo] ?? 0;
    if (freq >= 0.85) return 'raise';
    if (freq >= 0.15) return 'mixed-raise';
    return 'fold';
  }
  if (situation === 'FOR' && villainPos) {
    const threeBetFreq = THREEBET[heroPos]?.[villainPos]?.[combo] ?? 0;
    const callFreq = CALL_VS_OPEN[heroPos]?.[villainPos]?.[combo] ?? 0;
    if (threeBetFreq >= 0.85) return 'raise';
    if (callFreq >= 0.85) return 'call';
    if (threeBetFreq > 0 && callFreq === 0) return 'mixed-raise';
    if (callFreq > 0 && threeBetFreq === 0) return 'mixed-call';
    if (threeBetFreq > 0 && callFreq > 0) return 'mixed-raise';
    return 'fold';
  }
  if (situation === 'F3B' && villainPos) {
    const fourBetFreq = FOURBET[heroPos]?.[villainPos]?.[combo] ?? 0;
    const callFreq = CALL3BET[heroPos]?.[villainPos]?.[combo] ?? 0;
    if (fourBetFreq >= 0.85) return 'raise';
    if (callFreq >= 0.85) return 'call';
    if (fourBetFreq > 0 && callFreq === 0) return 'mixed-raise';
    if (callFreq > 0 && fourBetFreq === 0) return 'mixed-call';
    if (fourBetFreq > 0 && callFreq > 0) return 'mixed-raise';
    return 'fold';
  }
  return 'fold';
}

// Valid position matchups
export const VALID_FOR_MATCHUPS: Partial<Record<Position, Position[]>> = {
  HJ:  ['UTG'],
  CO:  ['UTG', 'HJ'],
  BTN: ['UTG', 'HJ', 'CO'],
  SB:  ['UTG', 'HJ', 'CO', 'BTN'],
  BB:  ['UTG', 'HJ', 'CO', 'BTN', 'SB'],
};

export const VALID_F3B_MATCHUPS: Partial<Record<Position, Position[]>> = {
  UTG: ['HJ', 'CO', 'BTN', 'SB', 'BB'],
  HJ:  ['CO', 'BTN', 'SB', 'BB'],
  CO:  ['BTN', 'SB', 'BB'],
  BTN: ['SB', 'BB'],
  SB:  ['BB'],
};

export const RANKS = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'] as const;

export function getCombo(row: number, col: number): string {
  const r1 = RANKS[row], r2 = RANKS[col];
  if (row === col) return `${r1}${r2}`;
  if (row < col) return `${r1}${r2}s`;
  return `${r2}${r1}o`;
}

// One-liner explanations for common hands
const EXPLANATIONS: Record<string, string> = {
  'AA': 'The nuts — always the strongest hand preflop.',
  'KK': 'Second nuts — 4-bet/call shoves against everything.',
  'QQ': 'Strong overpair; occasionally face tough spots vs UTG 4-bets.',
  'JJ': 'Strong but vulnerable; position matters significantly.',
  'TT': 'Medium pair; best played IP or as a 3-bet squeeze.',
  'AKs': 'The premium draw — nut flush draw equity plus top pair equity.',
  'AQs': 'Strong value hand; suited adds significant equity.',
  'AJs': 'Good value/blocker; IP calling range staple.',
  'ATs': 'Top of the "Broadway suited" calling range.',
  'A5s': 'Key bluff candidate — ace blocker plus backdoor nut flush.',
  'A4s': 'Ace blocker bluff; useful in 3-bet and 4-bet ranges.',
  'KQs': 'Strong Broadway suited hand with good showdown value.',
  'KJs': 'Solid implied odds hand, connects with many boards.',
  'QJs': 'Premium suited connector with great playability.',
  'JTs': 'Best suited connector; connects with a wide range of flops.',
  'T9s': 'Strong suited connector; good for calling ranges in position.',
  '98s': 'Mid suited connector with good equity vs wide ranges.',
  '87s': 'Low suited connector; best in late position.',
  '76s': 'Suited connector with implied odds in multiway pots.',
};

export function getExplanation(combo: string, results: ActionResult): string {
  if (EXPLANATIONS[combo]) return EXPLANATIONS[combo];
  const topAction = results[0];
  if (!topAction || topAction.action === 'Fold' || topAction.action === 'N/A') {
    return 'This hand lacks the equity or blocking value to continue profitably.';
  }
  const rank1 = combo[0], rank2 = combo.length === 3 ? combo[1] : combo[1];
  const suited = combo.endsWith('s');
  const pair = combo.length === 2 && combo[0] === combo[1];
  if (pair) return `Pocket pair with set-mining and showdown value.`;
  if (suited) return `Suited hand with flush draw potential and good equity.`;
  return `Offsuit broadway hand with strong high-card equity.`;
}
