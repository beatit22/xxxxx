(function(){
  var wrap = document.getElementById("emcd-wrap");
  if (!wrap) return;

  // HTML data-* üzerinden ayarlar
  var END_ISO = wrap.getAttribute("data-end") || "2025-08-21T23:59:59";
  var HREF    = wrap.getAttribute("data-href") || "#";
  var BG      = wrap.getAttribute("data-bg") || "";

  // Arkaplan & buton linki
  if (BG) wrap.style.backgroundImage = "url('" + BG + "')";
  var btn = document.querySelector(".emcd-btn");
  if (btn) btn.href = HREF;

  // Sayaç elemanları
  var elD = document.getElementById("cd-d"),
      elH = document.getElementById("cd-h"),
      elM = document.getElementById("cd-m"),
      elS = document.getElementById("cd-s"),
      sentence = document.getElementById("emcd-sentence");

  var END = new Date(END_ISO);
  function z(n){ return String(n).padStart(2, "0"); }

  function draw(){
    var ms = END - new Date();

    if (ms <= 0){
      elD.textContent = elH.textContent = elM.textContent = elS.textContent = "00";
      if (sentence) sentence.textContent = "Kampanya sona erdi";
      clearInterval(iv);
      return;
    }
    var d = Math.floor(ms/86400000),
        h = Math.floor((ms%86400000)/3600000),
        m = Math.floor((ms%3600000)/60000),
        s = Math.floor((ms%60000)/1000);

    elD.textContent = z(d);
    elH.textContent = z(h);
    elM.textContent = z(m);
    elS.textContent = z(s);

    if (sentence){
      sentence.textContent = d + " gün " + h + " saat " + m + " dakika " + s + " saniye kaldı";
    }
  }

  draw();
  var iv = setInterval(draw, 1000);
})();
