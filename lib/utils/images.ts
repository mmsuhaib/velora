const UNSPLASH_IDS = {
  furniture: [
    "1567538096630-e0c55bd6374c",
    "1555041469-a586c61ea9bc",
    "1586023492125-27b2c045efd7",
    "1524758631624-e2822e304c36",
    "1592078615290-033ee584e267",
    "1550254478-ead40cc54513",
    "1493663284031-b7e3aefcae8e",
    "1493809842364-78817add7ffb",
    "1554995207-c18c203602cb",
    "1616486338812-3dadae4b4ace",
    "1493857671505-72967e2e2760",
    "1567016432779-094069958ea5",
    "1631679706909-1844bbd07221",
    "1519947486511-46149fa0a254",
    "1533090161767-e6ffed986c88",
    "1538688525198-9b88f6f53126",
    "1512212621149-107ffe572d2f",
    "1560448204-e02f11c3d0e2",
    "1583847268964-b28dc8f51f92",
    "1615873968403-89e068629265",
    "1618221195710-dd6b41faaea6",
    "1586105251261-72a756497a11",
    "1601924994987-69e26d50dc26",
    "1600210492486-724fe5c67fb0",
    "1567016376408-0226e4d0c1ea",
    "1583608205776-bfd35f0d9f83",
    "1560185893-a55cbc8c57e8",
    "1522708323590-d24dbb6b0267",
    "1600121848594-d8644e57abab",
    "1512918728675-ed5a9ecdebfd",
    "1470071459604-3b5ec3a7fe05",
    "1516156008625-3a9d6067fab5",
    "1598300042247-d088f8ab3a91",
    "1441986300917-64674bd600d8",
    "1571055107559-3e67626fa8be",
  ],
  outdoor: [
    "1506929562872-bb421503ef21",
    "1571003123894-1f0594d2b5d9",
    "1519046904884-53103b34b206",
    "1519708227418-c8fd9a32b7a2",
    "1582610116397-edb318620f90",
    "1600585154340-be6161a56a0c",
    "1600607687920-4e2a09cf159d",
  ],
  curtains: [
    "1615529182904-14819c35db37",
    "1519710164239-da123dc03ef4",
    "1615874959474-d609969a20ed",
  ],
  shades: [
    "1503676260728-1c00da094a0b",
    "1541692641319-981cc79ee10a",
    "1506521781263-d8422e82f27a",
  ],
} as const;

export function unsplash(id: string, w = 1600, h = 1200) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export function furnitureImg(i: number, w?: number, h?: number) {
  return unsplash(UNSPLASH_IDS.furniture[i % UNSPLASH_IDS.furniture.length], w, h);
}

export function outdoorImg(i: number, w?: number, h?: number) {
  return unsplash(UNSPLASH_IDS.outdoor[i % UNSPLASH_IDS.outdoor.length], w, h);
}

export function curtainImg(i: number, w?: number, h?: number) {
  return unsplash(UNSPLASH_IDS.curtains[i % UNSPLASH_IDS.curtains.length], w, h);
}

export function shadeImg(i: number, w?: number, h?: number) {
  return unsplash(UNSPLASH_IDS.shades[i % UNSPLASH_IDS.shades.length], w, h);
}
