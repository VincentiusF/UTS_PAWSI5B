const Pariwisata = require("../model/Vincentiusf");

const createdPariwisata = (req, res) => {
    // Validasi input
    const { nama, umur, jurusan } = req.body;

    if (!nama || !umur || !jurusan) {
        return res.status(400).json({
            message: "Semua field (nama, umur, jurusan) harus diisi"
        });
    }

    // Membuat instance baru dari model Pariwisata
    const pariwisata = new Pariwisata({
        nama: req.body.nama,
        umur: req.body.umur,
        jurusan: req.body.jurusan
    });

    console.log(pariwisata);

    // Menyimpan data ke database
    pariwisata.save()
        .then((createdPariwisata) => {
            res.status(201).json({
                message: "Data berhasil disimpan",
                pariwisataId: createdPariwisata._id,
                nama: createdPariwisata.nama,
                umur: createdPariwisata.umur,
                jurusan: createdPariwisata.jurusan
            });
        })
        .catch((err) => {
            console.error(err); // Menggunakan console.error untuk kesalahan
            res.status(500).json({
                message: 'Internal server error'
            });
        });
};

module.exports = { createdPariwisata };