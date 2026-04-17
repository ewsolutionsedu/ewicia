/* ================================================
   EWicIA v2.0.1 — Patch de actualización
   Añade este archivo a tu HTML con:
   <script src="ewicia-v201-update.js"></script>
   justo antes del </body>
================================================ */
(function() {
  // 1) Inyectar estilos
  var style = document.createElement('style');
  style.textContent = `
/* ============================================
   ANNOUNCEMENT BAR — EWicIA v2.0.1
============================================ */
.announcement-bar {
    background: linear-gradient(90deg,#0f2027,#203a43,#2c5364,#1a1a2e);
    background-size:300% 100%;
    animation:barSlide 6s linear infinite;
    color:#fff;
    text-align:center;
    padding:.65rem 1rem;
    position:sticky;top:0;z-index:1100;
    overflow:hidden;
}
@keyframes barSlide{0%{background-position:0% 50%}100%{background-position:300% 50%}}
.announcement-bar::before{
    content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);
    animation:shimmer 3s infinite;
}
@keyframes shimmer{0%{left:-100%}100%{left:200%}}
.bar-inner{display:flex;align-items:center;justify-content:center;gap:1.25rem;flex-wrap:wrap;font-size:.85rem;font-weight:600;}
.bar-badge{
    background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;
    padding:.2rem .85rem;border-radius:50px;font-weight:800;font-size:.78rem;
    text-transform:uppercase;letter-spacing:.5px;
    animation:badgePulse 2s ease-in-out infinite;
    box-shadow:0 0 12px rgba(245,158,11,.5);
}
@keyframes badgePulse{
    0%,100%{box-shadow:0 0 8px rgba(245,158,11,.4);transform:scale(1)}
    50%{box-shadow:0 0 18px rgba(245,158,11,.8);transform:scale(1.04)}
}
.bar-features{display:flex;gap:1.25rem;flex-wrap:wrap;justify-content:center;opacity:.92;}
.bar-features span{display:flex;align-items:center;gap:.3rem;}
.bar-features span::before{content:'✦';color:#86efac;font-size:.65rem;}
.bar-cta{
    background:#fff;color:#1e3a5f;
    padding:.25rem 1rem;border-radius:50px;text-decoration:none;
    font-weight:800;font-size:.78rem;transition:all .25s;white-space:nowrap;
}
.bar-cta:hover{background:#f59e0b;color:#fff;transform:scale(1.06);}

/* ============================================
   NOVEDADES v2.0.1 SECTION
============================================ */
.novedades{padding:5rem 2rem;background:#0f172a;position:relative;overflow:hidden;}
.novedades::before{
    content:'';position:absolute;inset:0;
    background:
        radial-gradient(circle at 15% 50%,rgba(102,126,234,.18) 0%,transparent 55%),
        radial-gradient(circle at 85% 30%,rgba(16,185,129,.15) 0%,transparent 50%),
        radial-gradient(circle at 50% 90%,rgba(139,92,246,.12) 0%,transparent 45%);
}
.novedades-content{max-width:1200px;margin:0 auto;position:relative;}
.novedades-header{text-align:center;margin-bottom:3.5rem;}
.version-chip{
    display:inline-flex;align-items:center;gap:.5rem;
    background:linear-gradient(135deg,#f59e0b,#ef4444);
    color:#fff;padding:.35rem 1.25rem;border-radius:50px;
    font-weight:800;font-size:.85rem;text-transform:uppercase;letter-spacing:.6px;
    margin-bottom:1.25rem;animation:badgePulse 2.5s ease-in-out infinite;
}
.novedades-header h2{font-size:2.6rem;font-weight:800;color:#fff;margin-bottom:.75rem;line-height:1.2;}
.novedades-header h2 span{
    background:linear-gradient(135deg,#667eea,#10b981);
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.novedades-header p{color:rgba(255,255,255,.65);font-size:1.1rem;max-width:600px;margin:0 auto;}
.novedades-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;}
.novedad-card{
    background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);
    border-radius:20px;padding:2rem;
    transition:all .35s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden;
}
.novedad-card::before{
    content:'';position:absolute;top:0;left:0;right:0;height:2px;
    background:var(--ca,linear-gradient(90deg,#667eea,#764ba2));
    transform:scaleX(.35);transform-origin:left;transition:transform .35s ease;
}
.novedad-card:hover{transform:translateY(-8px);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.2);box-shadow:0 24px 48px rgba(0,0,0,.4);}
.novedad-card:hover::before{transform:scaleX(1);}
.novedad-card.ac-g{--ca:linear-gradient(90deg,#10b981,#06d6a0)}
.novedad-card.ac-b{--ca:linear-gradient(90deg,#667eea,#764ba2)}
.novedad-card.ac-a{--ca:linear-gradient(90deg,#f59e0b,#ef4444)}
.novedad-card.ac-p{--ca:linear-gradient(90deg,#8b5cf6,#ec4899)}
.novedad-card.ac-t{--ca:linear-gradient(90deg,#06b6d4,#10b981)}
.novedad-card.ac-r{--ca:linear-gradient(90deg,#f43f5e,#fb923c)}
.novedad-icon{font-size:2.25rem;margin-bottom:1rem;display:block;}
.novedad-title{display:flex;align-items:center;gap:.6rem;margin-bottom:.75rem;}
.novedad-title h3{font-size:1.15rem;font-weight:700;color:#fff;}
.new-tag{background:#10b981;color:#fff;font-size:.62rem;font-weight:800;padding:.15rem .55rem;border-radius:50px;text-transform:uppercase;letter-spacing:.5px;flex-shrink:0;}
.fix-tag{background:#667eea;color:#fff;font-size:.62rem;font-weight:800;padding:.15rem .55rem;border-radius:50px;text-transform:uppercase;letter-spacing:.5px;flex-shrink:0;}
.novedad-card p{color:rgba(255,255,255,.65);font-size:.95rem;line-height:1.75;}
.novedad-card p strong{color:rgba(255,255,255,.88);}
.novedades-cta{text-align:center;margin-top:3rem;}
.btn-novedad{
    display:inline-flex;align-items:center;gap:.75rem;
    background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;
    padding:1rem 2.5rem;border-radius:50px;text-decoration:none;
    font-weight:700;font-size:1rem;transition:all .3s;
    box-shadow:0 8px 20px rgba(102,126,234,.4);
}
.btn-novedad:hover{transform:translateY(-3px);box-shadow:0 16px 35px rgba(102,126,234,.6);}
@media(max-width:768px){
    .bar-features{display:none;}
    .novedades-header h2{font-size:1.9rem;}
    .novedades-grid{grid-template-columns:1fr;}
}
`;
  document.head.appendChild(style);

  // 2) Inyectar barra de anuncio ANTES del header
  var barDiv = document.createElement('div');
  barDiv.innerHTML = `    <div class="announcement-bar">
        <div class="bar-inner">
            <span class="bar-badge">🚀 v2.0.1 Disponible</span>
            <div class="bar-features">
                <span>Ed. Infantil 0-6 años</span>
                <span>Informes únicos</span>
                <span>Naturalidad real</span>
                <span>17 CC.AA. + Ceuta y Melilla</span>
            </div>
            <a href="https://drive.google.com/uc?export=download&id=1ixOdmSiufqCEOQ8NLdK85rAAvXWA9kmd" class="bar-cta">Actualizar gratis →</a>
        </div>
    </div>`.trim();
  var bar = barDiv.firstChild;
  var header = document.querySelector('header') || document.body.firstChild;
  document.body.insertBefore(bar, header);

  // 3) Inyectar sección de novedades DESPUÉS de la sección stats
  var statsSection = document.querySelector('.stats');
  if (statsSection) {
    var novedadesDiv = document.createElement('div');
    novedadesDiv.innerHTML = `
    <section id="novedades" class="novedades">
        <div class="novedades-content">
            <div class="novedades-header">
                <div class="version-chip">🎉 Nueva versión · Abril 2026</div>
                <h2>Lo nuevo en <span>EWicIA 2.0.1</span></h2>
                <p>La actualización más completa hasta la fecha. Más natural, más inteligente, lista para Infantil.</p>
            </div>
            <div class="novedades-grid">
                <div class="novedad-card ac-g">
                    <span class="novedad-icon">🧒</span>
                    <div class="novedad-title"><h3>Soporte Ed. Infantil</h3><span class="new-tag">Nuevo</span></div>
                    <p>Cobertura completa para alumnos de <strong>0 a 6 años</strong>. Informes adaptados al currículo de Infantil con lenguaje apropiado para esta etapa.</p>
                </div>
                <div class="novedad-card ac-b">
                    <span class="novedad-icon">🎨</span>
                    <div class="novedad-title"><h3>Sistema de Naturalidad</h3><span class="new-tag">Nuevo</span></div>
                    <p>Cada informe es <strong>único e irrepetible</strong>. Análisis genuino de los datos de cada alumno, sin plantillas ni frases copiadas.</p>
                </div>
                <div class="novedad-card ac-a">
                    <span class="novedad-icon">🗣️</span>
                    <div class="novedad-title"><h3>Tono Más Humano</h3></div>
                    <p>Los informes suenan como <strong>escritos por un docente de verdad</strong>. Expresiones naturales y cercanas para las familias.</p>
                </div>
                <div class="novedad-card ac-p">
                    <span class="novedad-icon">🗺️</span>
                    <div class="novedad-title"><h3>Las 17 CC.AA. + Ceuta y Melilla</h3></div>
                    <p>Soporte completo para <strong>todos los territorios</strong> de España, respetando currículo y lengua de cada comunidad autónoma.</p>
                </div>
                <div class="novedad-card ac-t">
                    <span class="novedad-icon">🔧</span>
                    <div class="novedad-title"><h3>Corrección de Errores</h3><span class="fix-tag">Fix</span></div>
                    <p>Corrección de fallos en la <strong>generación por lotes</strong>. Mayor estabilidad y mejor rendimiento con grupos grandes.</p>
                </div>
                <div class="novedad-card ac-r">
                    <span class="novedad-icon">⬆️</span>
                    <div class="novedad-title"><h3>Actualización Gratuita</h3></div>
                    <p>Si ya tienes la v2.0.0, actualizar a 2.0.1 es <strong>completamente gratis</strong>. Descarga e instala en minutos.</p>
                </div>
            </div>
            <div class="novedades-cta">
                <a href="https://drive.google.com/uc?export=download&id=1ixOdmSiufqCEOQ8NLdK85rAAvXWA9kmd" class="btn-novedad">
                    📥 Descargar EWicIA 2.0.1 — Gratis
                </a>
            </div>
        </div>
    </section>`.trim();
    var novedadesSection = novedadesDiv.firstChild;
    statsSection.after(novedadesSection);
  }

  // 4) Actualizar nav: añadir enlace "Novedades"
  var navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    var li = document.createElement('li');
    li.innerHTML = '<a href="#novedades" style="color:#f59e0b;font-weight:700;">✦ Novedades</a>';
    navLinks.insertBefore(li, navLinks.firstChild);
  }

  console.log('[EWicIA] v2.0.1 patch applied ✓');
})();
