
const data={
bewerten:{it:"valutare",level:"B2"},
beurteilen:{it:"giudicare",level:"B2"},
einschaetzen:{it:"stimare",level:"B2"}
};

document.querySelectorAll('.node').forEach(n=>{
 n.addEventListener('click',()=>{
   const d=data[n.dataset.id];
   document.getElementById('content').innerHTML=`<b>${n.textContent}</b><br>ITA: ${d.it}<br>Livello: ${d.level}`;
 });
});
