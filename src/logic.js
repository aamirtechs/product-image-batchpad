
const PRESETS={shopify:{width:2048,height:2048,label:"Shopify 2048"},amazon:{width:2000,height:2000,label:"Amazon 2000"},etsy:{width:2700,height:2700,label:"Etsy 2700"},square1000:{width:1000,height:1000,label:"Square 1000"}};
function getPreset(key){return PRESETS[key]||null;}
function padGeometry(srcW,srcH,targetW,targetH){if(!srcW||!srcH||!targetW||!targetH)throw new Error("dimensions required");const scale=Math.min(targetW/srcW,targetH/srcH);const width=Math.round(srcW*scale);const height=Math.round(srcH*scale);return {scale,width,height,x:Math.round((targetW-width)/2),y:Math.round((targetH-height)/2),canvasWidth:targetW,canvasHeight:targetH,cropped:false};}
function parseRenameMap(text){const map={};String(text||"").split(/\r?\n/).forEach((line,idx)=>{if(!line.trim())return;const parts=line.split(",").map(s=>s.trim().replace(/^"|"$/g,""));if(parts.length>=2){if(idx===0&&/file|sku/i.test(line))return;map[parts[0]]=parts[1];}});return map;}
function targetFilename(original,map,format){const base=String(original||"file");const stem=base.replace(/\.[^.]+$/,"");const sku=(map&&map[base])||(map&&map[stem])||stem;const ext=format==="png"?"png":format==="webp"?"webp":"jpg";const safe=String(sku).replace(/[^A-Za-z0-9-_]+/g,"-").replace(/^-+|-+$/g,"")||"image";return safe+"."+ext;}
function formatBytes(n){if(n<1024)return n+" B";if(n<1048576)return (n/1024).toFixed(1)+" KB";return (n/1048576).toFixed(2)+" MB";}
function buildSizeReport(rows){const head="original,output,original_bytes,output_bytes,saved_percent";const lines=rows.map(r=>{const saved=r.originalBytes?Math.round((1-r.outputBytes/r.originalBytes)*100):0;return [r.original,r.output,r.originalBytes,r.outputBytes,saved].join(",");});return [head,...lines].join("\n")+"\n";}
function outputMime(format){return format==="png"?"image/png":format==="webp"?"image/webp":"image/jpeg";}
const api={PRESETS,getPreset,padGeometry,parseRenameMap,targetFilename,formatBytes,buildSizeReport,outputMime};
if(typeof module!=="undefined"&&module.exports){module.exports=api;} if(typeof window!=="undefined"){window.ProductImageBatchpad=api;}
