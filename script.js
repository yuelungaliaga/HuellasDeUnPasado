// Fecha del día en la cabecera
const f=document.getElementById('fecha');
if(f){f.textContent='Lima, '+new Date().toLocaleDateString('es-PE',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}

// Si una foto aún no existe, se muestra el espacio reservado
document.querySelectorAll('.foto img').forEach(img=>{
  const fallo=()=>img.parentElement.classList.add('sin-img');
  if(img.complete&&img.naturalWidth===0)fallo();
  img.addEventListener('error',fallo);
});

// Pestañas: Nota informativa / Crónica / Texto interpretativo
document.querySelectorAll('.tabs').forEach(t=>{
  const bs=t.querySelectorAll('[role=tab]'),ps=t.querySelectorAll('.panel');
  bs.forEach((b,i)=>b.addEventListener('click',()=>{
    bs.forEach((x,j)=>x.setAttribute('aria-selected',i===j));
    ps.forEach((p,j)=>p.hidden=i!==j);
  }));
});

// Visor ampliado
const v=document.querySelector('.visor'),vi=v.querySelector('img'),vp=v.querySelector('p');
document.querySelectorAll('.foto,.fig').forEach(fo=>fo.addEventListener('click',()=>{
  if(fo.classList.contains('sensible')){fo.classList.remove('sensible');return}
  if(fo.classList.contains('sin-img')||fo.classList.contains('c'))return;
  vi.src=fo.querySelector('img').src;vp.textContent=fo.querySelector('figcaption').textContent;v.hidden=false;
}));
v.addEventListener('click',()=>v.hidden=true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')v.hidden=true});
