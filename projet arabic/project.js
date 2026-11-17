(function(){
var b=[].slice.call(document.querySelectorAll('#loop button')),lp=document.getElementById('lp'),i=0,t;
function on(n){i=n;b.forEach(function(x,k){x.classList.toggle('on',k===n)});lp.textContent=b[n].dataset.t}
b.forEach(function(x,k){x.addEventListener('click',function(){clearInterval(t);on(k)})});
on(0);
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(function(){on((i+1)%4)},3200);
var D=[["راقب وقتك","سجّل التطبيقات التي تستحوذ على وقتك، دون أن تحكم على نفسك."],["نظّف التنبيهات","أوقف الإشعارات التي لا تحتاج إليها فعلاً."],["وجبة بلا شاشة","اجعل وجبة واحدة فرصة للحوار والحضور مع العائلة."],["حرّك جسدك","امشِ أو مارس نشاطاً بدنياً لمدة عشرين دقيقة."],["استعد هواية","خصص نصف ساعة للقراءة أو الرسم أو تعلم مهارة."],["لقاء حقيقي","اقض وقتاً مع صديق أو فرد من الأسرة دون هاتف."],["راجع تقدمك","اختر عادة واحدة نجحت معك واجعلها جزءاً من أسبوعك القادم."]],
ul=document.getElementById('days'),saved=[];
try{saved=JSON.parse(localStorage.getItem('d7')||'[]')}catch(e){}
D.forEach(function(d,k){var li=document.createElement('li'),l=document.createElement('label'),c=document.createElement('input');
c.type='checkbox';c.checked=!!saved[k];c.addEventListener('change',up);
var v=document.createElement('div');v.innerHTML='<b>اليوم '+(k+1)+': '+d[0]+'</b><small>'+d[1]+'</small>';
l.appendChild(c);l.appendChild(v);li.appendChild(l);ul.appendChild(li)});
function up(){var cs=ul.querySelectorAll('input'),n=0,s=[];
cs.forEach(function(c){s.push(c.checked);if(c.checked)n++});
document.getElementById('pb').style.width=(n/7*100)+'%';
document.getElementById('pt').textContent=n===7?'أحسنت! أكملت التحدي كاملاً.':'أنجزت '+n+' من 7 خطوات';
try{localStorage.setItem('d7',JSON.stringify(s))}catch(e){}}
up();
})();


(function(){
var D=[6,7,8,8,8,7],T=44,st=document.getElementById('stage'),sc=[].slice.call(st.querySelectorAll('.sc')),rg=document.getElementById('rg'),tm=document.getElementById('tm'),b=document.getElementById('pb2'),ov=document.getElementById('ov'),t=0,pl=false,last=0,cur=-1;
function idx(x){var a=0;for(var i=0;i<D.length;i++){a+=D[i];if(x<a)return i}return D.length-1}
function render(){var n=idx(t);if(n!==cur){cur=n;sc.forEach(function(e,k){e.classList.toggle('on',k===n)})}
rg.value=t;var s=Math.floor(t);tm.textContent=Math.floor(s/60)+':'+('0'+s%60).slice(-2)}
function tick(now){if(!pl)return;t=Math.min(T,t+(now-last)/1000);last=now;render();if(t>=T)stop();else requestAnimationFrame(tick)}
function go(){if(t>=T){t=0;cur=-1}pl=true;ov.classList.add('h');st.classList.remove('pz');b.textContent='❚❚';last=performance.now();requestAnimationFrame(tick)}
function stop(){pl=false;st.classList.add('pz');b.textContent='▶'}
b.addEventListener('click',function(){pl?stop():go()});ov.addEventListener('click',go);
rg.addEventListener('input',function(){t=+rg.value;cur=-1;render()});
render();
})();