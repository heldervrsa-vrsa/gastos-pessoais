
const STORAGE_KEY='pwa_gastos_final_full';

function carregar(){
  const dados = JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
  const lista = document.getElementById('lista');
  lista.innerHTML = dados.length ? dados.map(d=>`${d.valor}€ - ${d.data} - ${d.categoria}`).join('<br>') : 'Sem registos';
}

function guardar(){
  const valor = document.getElementById('valor').value;
  const data = document.getElementById('data').value;
  const categoria = document.getElementById('categoria').value;
  if(!valor || !data || !categoria){alert('Preencha todos os campos'); return;}
  const dados = JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
  dados.push({valor,data,categoria});
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  carregar();
}

function apagarTudo(){
  if(confirm('Apagar TODOS os dados?')){
    localStorage.removeItem(STORAGE_KEY);
    carregar();
  }
}

carregar();
