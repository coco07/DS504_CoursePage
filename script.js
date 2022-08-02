var a = document.getElementById("material_table");
var b = document.getElementById("annun");

for (let i = 0; i < materials.length; i++) {
  let x = materials[i];
  let tr = document.createElement("tr");
  if (x.length == 1) {
    let th = document.createElement("th");
    th.innerText = x[0];
    th.setAttribute("colspan", "2");
    th.classList = ["week_title"];
    tr.appendChild(th);
  }
  else {
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let link = document.createElement("a");
    th1.innerText = x[0];
    link.innerText = x[1];
    link.setAttribute("href", x[2]);
    tr.appendChild(th1);
    th2.appendChild(link);
    tr.appendChild(th2);
  }
  a.appendChild(tr);
}

for (let i = announcements.length - 1; i >= 0; i--) {
  let x = announcements[i];
  let container = document.createElement("div");
  container.classList = ["ann_elem"];
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let hr = document.createElement("hr");
  p1.innerText = x[0];
  p2.innerText = x[1];
  p1.classList = ["ann_elem_title"];
  p2.classList = ["ann_elem_body"];
  container.appendChild(p1);
  container.appendChild(hr);
  container.appendChild(p2);
  b.appendChild(container);
}
