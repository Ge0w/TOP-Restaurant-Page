(()=>{"use strict";const e=()=>{console.log("About Page");const e=document.createElement("section");e.classList.add("about-page","flex");const n=document.createElement("div");n.classList.add("about-body","flex"),e.append(n);const t=document.createElement("p");t.classList.add("my-1","py-1"),t.textContent="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",n.append(t);const a=document.createElement("a");return a.classList.add("btn"),a.textContent="Order",e.append(a),a.addEventListener("click",(()=>{window.open("https://deliveroo.co.uk/menu/london/new-malden/thebakesale-ltd")})),e},n=document.querySelector("#content");n.append((()=>{const e=document.createElement("div");e.classList.add("header","my-1","py-1","flex");const n=document.createElement("div");n.classList.add("flex","logo"),e.append(n);const t=document.createElement("h1");t.classList.add("my-1-2","py-1-2"),t.textContent="The Baked Sale",n.append(t);const a=document.createElement("img");a.classList.add("my-1-2","py-1-2"),a.src="images/icon_logo.png",n.append(a);const i=document.createElement("div");i.classList.add("navbar","flex"),e.append(i);const s=document.createElement("navbar");s.classList.add("flex"),i.append(s);const o=document.createElement("ul");o.classList.add("flex"),s.append(o);const c=document.createElement("li");c.id="aboutBtn",c.textContent="About",o.append(c);const l=document.createElement("li");l.id="menuBtn",l.textContent="Menu",o.append(l);const d=document.createElement("li");return d.id="contactBtn",d.textContent="Contact",o.append(d),console.log("header runs"),e})()),n.append(e());const t=document.querySelector("#aboutBtn"),a=document.querySelector("#contactBtn"),i=document.querySelector("#menuBtn");t.addEventListener("click",(()=>{n.childNodes[2].remove(),n.append(e())})),a.addEventListener("click",(()=>{n.childNodes[2].remove(),n.append((()=>{const e=document.createElement("section");e.classList.add("contact","order","flex");const n=document.createElement("h1");return n.textContent="Contact details here",e.append(n),e})())})),i.addEventListener("click",(()=>{n.childNodes[2].remove(),n.append((()=>{console.log("Menu");const e=document.createElement("div");return e.innerHTML="<section class='menu flex my-1 py-1'>\n        <h1>Milkshakes</h1>\n        <div class='milkshakes flex'>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n        </div>\n        <h1>Baked Goods</h1>\n        <div class='baked-goods flex'>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n            <div class='card flex'>\n                <img src='images/icon_logo.png '>\n                <h2>Vanilla Milkshake</h2>\n                <h3>£4.99</h3>\n            </div>\n        </div>\n        </section>",e})())}))})();