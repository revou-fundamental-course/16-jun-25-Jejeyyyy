function showSection(id) {
  const sections = ['segitiga', 'persegi', 'lingkaran'];
  sections.forEach(sec => {
    document.getElementById(sec).style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

window.onload = function () {
  showSection('segitiga');
};

function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(alas) || isNaN(tinggi)) return alert('Isi alas dan tinggi!');
  const luas = 0.5 * alas * tinggi;
  document.getElementById('hasilLuas').innerHTML = `L = 1/2 × ${alas} × ${tinggi} = ${luas}`;
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById('s1').value);
  const s2 = parseFloat(document.getElementById('s2').value);
  const s3 = parseFloat(document.getElementById('s3').value);
  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) return alert('Isi semua sisi!');
  const keliling = s1 + s2 + s3;
  document.getElementById('hasilKeliling').innerHTML = `K = ${s1} + ${s2} + ${s3} = ${keliling}`;
}

function resetSegitiga() {
  ['alas', 'tinggi', 's1', 's2', 's3'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('hasilLuas').innerHTML = '';
  document.getElementById('hasilKeliling').innerHTML = '';
}

function hitungPersegi() {
  const sisi = parseFloat(document.getElementById('sisi').value);
  if (isNaN(sisi)) return alert('Isi panjang sisi!');
  const luas = sisi * sisi;
  const kel = 4 * sisi;
  document.getElementById('hasilPersegi').innerHTML = `L = ${luas}, K = ${kel}`;
}

function resetPersegi() {
  document.getElementById('sisi').value = '';
  document.getElementById('hasilPersegi').innerHTML = '';
}

function hitungLingkaran() {
  const r = parseFloat(document.getElementById('jari').value);
  if (isNaN(r)) return alert('Isi jari-jari!');
  const luas = Math.PI * r * r;
  const kel = 2 * Math.PI * r;
  document.getElementById('hasilLingkaran').innerHTML = `L ≈ ${luas.toFixed(2)}, K ≈ ${kel.toFixed(2)}`;
}

function resetLingkaran() {
  document.getElementById('jari').value = '';
  document.getElementById('hasilLingkaran').innerHTML = '';
}
