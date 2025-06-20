function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(alas) || isNaN(tinggi)) {
    alert('Masukkan angka yang valid untuk alas dan tinggi');
    return;
  }
  const luas = 0.5 * alas * tinggi;
  document.getElementById('hasilLuas').innerHTML = `
    L = 1/2 × ${alas} × ${tinggi}<br>
    L = ${luas}
  `;
}

function resetLuas() {
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('hasilLuas').innerHTML = '';
}

function hitungKeliling() {
  const s1 = parseFloat(document.getElementById('s1').value);
  const s2 = parseFloat(document.getElementById('s2').value);
  const s3 = parseFloat(document.getElementById('s3').value);
  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    alert('Masukkan angka yang valid untuk semua sisi');
    return;
  }
  const keliling = s1 + s2 + s3;
  document.getElementById('hasilKeliling').innerHTML = `
    K = ${s1} + ${s2} + ${s3}<br>
    K = ${keliling}
  `;
}

function resetKeliling() {
  document.getElementById('s1').value = '';
  document.getElementById('s2').value = '';
  document.getElementById('s3').value = '';
  document.getElementById('hasilKeliling').innerHTML = '';
}
