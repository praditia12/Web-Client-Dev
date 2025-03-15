# 📌 Laporan Implementasi Kode - Session 2

## 📖 Deskripsi

Dokumen ini berisi laporan implementasi kode yang menyelesaikan beberapa tugas pemrograman dalam JavaScript. Kode ini mencakup konversi suhu, konversi satuan panjang, pengecekan bilangan genap atau ganjil, manipulasi string, dan pemeriksaan palindrom.

## 📂 Struktur Folder

Folder terdiri dari lima file function utama:

1. 🔥 **Konversi Fahrenheit ke Celsius**
2. 📏 **Konversi Centimeter ke Kilometer dan sebaliknya**
3. 🔢 **Pengecekan Bilangan Genap atau Ganjil**
4. ✂️ **Menghapus Kemunculan Pertama dari String yang Dicari**
5. 🔄 **Memeriksa Apakah Sebuah String adalah Palindrom**

---

## 🛠️ Implementasi

### 1. 🔥 Konversi Fahrenheit ke Celsius

**Fungsi:**

```js
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
```

**Contoh Penggunaan:**

```js
console.log(fahrenheitToCelsius(100)); // Output: 37.78
```

### 2. 📏 Konversi Centimeter ke Kilometer dan Sebaliknya

**Fungsi:**

```js
function convertCmToKm(cm) {
    return cm / 100000 + " km";
}

function convertKmToCm(km) {
    return km * 100000 + " cm";
}
```

**Contoh Penggunaan:**

```js
console.log(convertCmToKm(100000)); // Output: "1 km"
console.log(convertKmToCm(1)); // Output: "100000 cm"
```

### 3. 🔢 Pengecekan Bilangan Genap atau Ganjil

**Fungsi:**

```js
function isEven(n) {
    return n % 2 === 0;
}
```

**Contoh Penggunaan:**

```js
console.log(isEven(1000)); // Output: true
console.log(isEven(1001)); // Output: false
```

### 4. ✂️ Menghapus Kemunculan Pertama dari "Search String"

**Fungsi:**

```js
function removeFirstOccurrence(str, search) {
    return str.replace(search, "");
}
```

**Contoh Penggunaan:**

```js
console.log(removeFirstOccurrence("lorem ipsum dolor", "rem ip")); // Output: losum dolor
```

### 5. 🔄 Memeriksa Apakah Sebuah String adalah Palindrom

**Fungsi:**

```js
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
```

**Contoh Penggunaan:**

```js
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

---

## 🎯 Kesimpulan

Kode ini dibuat untuk menyelesaikan berbagai tugas pemrograman dasar menggunakan JavaScript. Setiap fungsi dibuat sederhana dan mudah digunakan dengan contoh implementasi yang jelas.

---

## 🚀 Cara Menjalankan Kode

1. Salin kode ke dalam file **script.js**
2. Jalankan menggunakan Node.js dengan perintah:
    ```sh
    node script.js
    ```
3. Alternatif lain, jalankan di browser dengan memasukkan kode ke dalam **console JavaScript** di DevTools.

---

## 🎉 Terima Kasih & Happy Coding! 🚀
