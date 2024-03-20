const express = require('express') // jadi disini kita memanggil sebuah variabel express dan mengimpor  sebuah module express dari package.json  
const app = express() //membuat variabel yang berisikan semua function di dalam express tersebut
const port = 3000 // membuat sebuah port untuk di jalankan ke web

app.get('/vann',(req,res) => { // app.get adalah sebuah fungsi/metode untuk membuat routing sederhana dan di beri sebuah parameter req dan res
    console.log('woyyy') // ini adalah cara untuk mengirim code ke dalam console
    res.send('hallo ini web afan') //res.send di gunakan untuk menampilkan sebuah code ke dalam halaman pada web
})

app.listen(port, () => { //listen.port digunakan untuk memerintahkan code ke dalam port yg kita berikan
    console.log('nyambung nyet')// ini digunakan untuk memeriksa apakah sudah berhasil menghubungkan port tersebut
})
