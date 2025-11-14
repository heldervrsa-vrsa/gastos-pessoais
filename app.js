
const KEY="pwa_gastos_final2";

function carregar(){
  let dados = JSON.parse(localStorage.getItem(KEY) || "[]");
  let html="";
  dados.forEach(x=>{
    html += `<div>${x.valor}€ - ${x.data} - ${x.cat}</div>`;
  });
  document.getElementById("lista").innerHTML = html || "Sem registos";
}

function guardar(){
  let v = document.getElementById("valor").value;
  let d = document.getElementById("data").value;
  let c = document.getElementById("categoria").value;
  if(!v||!d||!c){alert("Preencha tudo");return;}
  let dados = JSON.parse(localStorage.getItem(KEY) || "[]");
  dados.push({valor:v, data:d, cat:c});
  localStorage.setItem(KEY, JSON.stringify(dados));
  carregar();
}

function apagarTudo(){
  if(confirm("Apagar todos os dados?")){
    localStorage.removeItem(KEY);
    carregar();
  }
}

carregar();
