
const test=require("node:test");const assert=require("node:assert/strict");const L=require("../src/logic.js");
test("presets table",()=>{assert.equal(L.getPreset("shopify").width,2048);assert.equal(L.getPreset("amazon").height,2000);assert.equal(L.getPreset("etsy").width,2700);assert.equal(L.getPreset("nope"),null);});
test("pad geometry landscape never crops",()=>{const g=L.padGeometry(1000,500,2000,2000);assert.equal(g.width,2000);assert.equal(g.height,1000);assert.equal(g.y,500);assert.equal(g.cropped,false);});
test("pad geometry portrait",()=>{const g=L.padGeometry(500,1000,1000,1000);assert.equal(g.height,1000);assert.equal(g.x,250);});
test("pad geometry already exact",()=>{const g=L.padGeometry(800,800,800,800);assert.equal(g.scale,1);assert.equal(g.x,0);});
test("rename map parsing skips header",()=>{const m=L.parseRenameMap("filename,sku\nIMG_1.jpg,SKU-001\nIMG_2.jpg,SKU-002");assert.equal(m["IMG_1.jpg"],"SKU-001");assert.equal(L.targetFilename("IMG_1.jpg",m,"webp"),"SKU-001.webp");});
test("target filename sanitizes sku",()=>{assert.equal(L.targetFilename("photo one.jpg",{},"jpg"),"photo-one.jpg");});
test("size report and bytes",()=>{const csv=L.buildSizeReport([{original:"a.jpg",output:"a.webp",originalBytes:2000,outputBytes:1000}]);assert.match(csv,/50/);assert.equal(L.formatBytes(2048),"2.0 KB");});
test("mime mapping",()=>{assert.equal(L.outputMime("webp"),"image/webp");assert.equal(L.outputMime("jpg"),"image/jpeg");});
