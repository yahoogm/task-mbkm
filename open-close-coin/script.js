let kumpulanKoin = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1];

let j = 0;
let k = 0;

for (i = 0; i < kumpulanKoin.length; i++) {
  if (kumpulanKoin[i] == 1) {
    console.log("ekor");
    j++;
  } else {
    console.log("kepala");
    k++;
  }
}

if (j == kumpulanKoin.length || k == kumpulanKoin.length) {
  console.log("koin satu sisi");
} else {
  if (j > k) {
    console.log("balikkan kepala");
    console.log("jumlah kepala yang harus dibalikkan = " + k);
  } else if (j < k) {
    console.log("balikkan ekor");
    console.log("jumlah ekor yang harus dibalikkan = " + j);
  } else {
    console.log("Jumlah sama");
  }
}
