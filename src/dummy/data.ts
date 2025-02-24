export interface DataProduct {
    id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    category: 'Beras & Sereal' | 'Minyak & Bumbu' | 'Protein Hewani' | 'Produk Olahan';
    onClick?: () => void;
    detail?: string;
} 

export const data: DataProduct[] = [
    {
        "id": "1",
        "title": "Beras Pandan Wangi 5kg",
        "image": "",
        "description": "Beras Pandan Wangi berkualitas tinggi dengan aroma wangi khas. Cocok untuk konsumsi sehari-hari.",
        "price": 75000,
        "category": "Beras & Sereal"
      },
      {
        "id": "2",
        "title": "Tepung Terigu Segitiga Biru 1kg",
        "image": "",
        "description": "Tepung terigu serbaguna yang cocok untuk membuat berbagai jenis makanan seperti roti dan kue.",
        "price": 14000,
        "category": "Beras & Sereal"
      },
      {
        "id": "3",
        "title": "Minyak Goreng Bimoli 2L",
        "image": "",
        "description": "Minyak goreng Bimoli 2 liter dengan kandungan Omega 9, sehat untuk memasak.",
        "price": 36000,
        "category": "Minyak & Bumbu"
      },
      {
        "id": "4",
        "title": "Gula Pasir Putih 1kg",
        "image": "",
        "description": "Gula pasir putih berkualitas tinggi yang mudah larut dan cocok untuk berbagai kebutuhan dapur.",
        "price": 17000,
        "category": "Minyak & Bumbu"
      },
      {
        "id": "5",
        "title": "Garam Dapur Halus 500g",
        "image": "",
        "description": "Garam dapur halus yang cocok untuk memasak berbagai hidangan.",
        "price": 5000,
        "category": "Minyak & Bumbu"
      },
      {
        "id": "6",
        "title": "Telur Ayam Negeri 1kg",
        "image": "",
        "description": "Telur ayam negeri segar dengan kualitas terbaik, kaya protein dan bergizi.",
        "price": 27000,
        "category": "Protein Hewani"
      },
      {
        "id": "7",
        "title": "Daging Sapi Giling 1kg",
        "image": "",
        "description": "Daging sapi giling segar, cocok untuk berbagai olahan seperti bakso dan burger.",
        "price": 120000,
        "category": "Protein Hewani"
      },
      {
        "id": "8",
        "title": "Susu Kental Manis Indomilk 370g",
        "image": "",
        "description": "Susu kental manis Indomilk dengan rasa lezat, cocok untuk campuran minuman dan makanan.",
        "price": 12000,
        "category": "Produk Olahan"
      },
      {
        "id": "9",
        "title": "Mie Instan Indomie Goreng 1 dus (40 pcs)",
        "image": "",
        "description": "Indomie Goreng dalam kemasan dus isi 40 pcs, praktis dan lezat untuk dikonsumsi kapan saja.",
        "price": 125000,
        "category": "Produk Olahan"
      },
      {
        "id": "10",
        "title": "Kecap Manis ABC 600ml",
        "image": "",
        "description": "Kecap manis ABC dengan rasa khas, cocok untuk berbagai masakan nusantara.",
        "price": 26000,
        "category": "Minyak & Bumbu"
      }
]