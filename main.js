// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// GANTI DENGAN FIREBASE CONFIG ANDA
const firebaseConfig = {
  apiKey: "AIzaSyBWzqA3FYUA3m3Y_C1c8fgIERYQzod6WwU",
    authDomain: "insancemerlang-75559.firebaseapp.com",
    projectId: "insancemerlang-75559",
    storageBucket: "insancemerlang-75559.firebasestorage.app",
    messagingSenderId: "276076065109",
    appId: "1:276076065109:web:55214f37cb4c9c7357bfdc"
}


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const siswaCollection = collection(db,"siswa")

// fungsi untuk menampilkan daftar siswa
export async function tampilkanDaftar() {
  // ambil snapshot data dari koleksi siswa
  const snapshot= await getDocs(siswaCollection)
  
  // ambil elemen tabel data
  const tabel =document.getElementById('tabelData')
  
  // kosongkan isi tabel nya 
  tabel.innerHTML = ""
  
  // loop setiap dokumen dalam snapshot 
  snapshot.forEach((doc) =>{
    // variabel untuk menyimpan data
    const data = doc.data()
    const id = doc.id
    
    // buat elemen baris baru
    const baris= document.createElement("tr")
    
    // buat elemen kolom untuk NIS
    const kolomNIS = document.createElement("td")
    kolomNIS.textContent =data.nis
    
    // buat elemen untuk kolom nama 
    const kolomNama = document.createElement("td")
    kolomNama.textContent = data.nama
    
    // buat elemen kolom untuk kelas
    const kolomKelas = document.createElement('td')
    kolomKelas.textContent= data.kelas
    
    // buat elemen kolom untuk aksi 
    const kolomAksi = document.createElement('td')
    
    // tombol edit
    const tombolEdit = document.createElement('button')
    tombolEdit.textContent= 'Edit'
    tombolEdit.href = 'edit.html?id='+ id
    tombolEdit.className ='button edit'
    
    // tombol hapus
    const tombolHapus = document.createElement('button')
    tombolHapus.textContent = 'Hapus'
    tombolHapus.className = 'button delete'
    
    // tambahkan elemen ke dalam kolom aksi
    kolomAksi.appendChild(tombolEdit)
    kolomAksi.appendChild(tombolHapus)
    
    // tambahkan kolom ke dalam baris 
    baris.appendChild(kolomNIS)
    baris.appendChild(kolomNama)
    baris.appendChild(kolomKelas)
    baris.appendChild(kolomAksi)
    
    // tambahkan baris ke aalam tabel
    tabel.appendChild(baris)
    
  })
}

