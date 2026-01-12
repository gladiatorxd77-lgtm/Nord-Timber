let cart=[];
function addToCart(n,p){cart.push({n,p});update()}
function update(){
document.getElementById('cart-items').innerHTML='';
let t=0;
cart.forEach((i,idx)=>{
t+=i.p;
let li=document.createElement('li');
li.innerHTML=i.n+' '+i.p+' zł <button onclick=remove('+idx+')>X</button>';
document.getElementById('cart-items').appendChild(li);
});
document.getElementById('count').innerText=cart.length;
document.getElementById('total').innerText=t;
document.getElementById('final').innerText=t+Number(delivery.value);
}
function remove(i){cart.splice(i,1);update()}
function toggleCart(){cartDiv.style.display=cartDiv.style.display=='none'?'block':'none'}
const cartDiv=document.getElementById('cart');
const delivery=document.getElementById('delivery');
delivery.onchange=update;
