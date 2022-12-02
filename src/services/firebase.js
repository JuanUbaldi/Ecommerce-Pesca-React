import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVcL28oZNIX5irdrzdfqey0f5Vg5OwDYA",
  authDomain: "pesca-402db.firebaseapp.com",
  projectId: "pesca-402db",
  storageBucket: "pesca-402db.appspot.com",
  messagingSenderId: "761483034564",
  appId: "1:761483034564:web:caa670e1bfda3bf96b2e91",
};

const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export async function getItemFromAPI(id) {
  const docRef = doc(DB, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
      id: docSnap.id,
    };
  } else {
    console.error("el producto no existe");
  }
}

export async function getItemsFromAPI() {
  try {
    const collectionProducts = collection(DB, "productos");
    let respuesta = await getDocs(collectionProducts);
    const productos = respuesta.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return productos;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "productos");
  const myquery = query(productsRef, where("categoria", "==", categoryId));

  const productsSnapshot = await getDocs(myquery);

  const products = productsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return products;
}
export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyOrders");
  const docRef = await addDoc(collectionRef, buyOrderData);
  
  return docRef.id;
}
export async function createBuyOrderFirestorewithstock(buyOrderData) {
  const collectionProductsRef = collection(DB, "productos");
  const collectionOrdersRef = collection(DB, "buyOrders");
  const batch = writeBatch();
  let arrayIds = buyOrderData.items.map((item) => item.id);
  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));
  getDocs(q);

  let products = await getDocs(q);
  products.docs.map();
}

export async function exportItemsToFirestore() {
  const items = [
    {
      id: 1,
      titulo: "Anzuelo",
      precio: 200,
      stock: 150,
      descripcion: "tamaño 1.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo1.jpeg",
    },
    {
      id: 2,
      titulo: "Anzuelo",
      precio: 220,
      stock: 160,
      descripcion: "tamaño 2.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo2.jpg",
    },
    {
      id: 3,
      titulo: "Anzuelo",
      precio: 250,
      stock: 100,
      descripcion: "tamaño 3.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo3.jpeg",
    },
    {
      id: 4,
      titulo: "Anzuelo",
      precio: 270,
      stock: 158,
      descripcion: "tamaño 4.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo4.jpeg",
    },
    {
      id: 5,
      titulo: "Anzuelo",
      precio: 280,
      stock: 140,
      descripcion: "tamaño 5.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo5.jpg",
    },
    {
      id: 6,
      titulo: "Anzuelo",
      precio: 290,
      stock: 157,
      descripcion: "tamaño 6.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo6.jpeg",
    },
    {
      id: 7,
      titulo: "Anzuelo",
      precio: 300,
      stock: 109,
      descripcion: "tamaño 7.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo7.jpg",
    },
    {
      id: 8,
      titulo: "Anzuelo",
      precio: 310,
      stock: 150,
      descripcion: "tamaño 8.0",
      categoria: "Anzuelos",
      imagen: "/Img/Anzuelo8.jpg",
    },
    {
      id: 9,
      titulo: "plomadas",
      precio: 40,
      stock: 50,
      descripcion: "peso 10 gr",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 10,
      titulo: "plomadas",
      precio: 50,
      stock: 60,
      descripcion: "peso 20 gr",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 11,
      titulo: "plomadas",
      precio: 50,
      stock: 100,
      descripcion: "peso 25 gr",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 12,
      titulo: "plomadas",
      precio: 65,
      stock: 104,
      descripcion: "peso 30gr",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 13,
      titulo: "plomadas",
      precio: 75,
      stock: 110,
      descripcion: "peso 40 gr.",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 14,
      titulo: "plomadas",
      precio: 90,
      stock: 65,
      descripcion: "peso 50 gr.",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 15,
      titulo: "plomadas",
      precio: 100,
      stock: 80,
      descripcion: "peso 70 gr.",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 16,
      titulo: "plomadas",
      precio: 120,
      stock: 67,
      descripcion: "peso 80 gr.",
      categoria: "plomadas",
      imagen: "/Img/plomadas.jpg",
    },
    {
      id: 17,
      titulo: "rotores chicos",
      precio: 20,
      stock: 560,
      descripcion: "rotores en t chicos",
      categoria: "rotores",
      imagen: "/Img/rotores.jpeg",
    },
    {
      id: 18,
      titulo: "rotores",
      precio: 30,
      stock: 360,
      descripcion: "rotores en t mediano",
      categoria: "rotores",
      imagen: "/Img/rotores.jpeg",
    },
    {
      id: 19,
      titulo: "rotores",
      precio: 40,
      stock: 580,
      descripcion: "rotores en t grande",
      categoria: "rotores",
      imagen: "/Img/rotores.jpeg",
    },
    {
      id: 20,
      titulo: "mosquetones",
      precio: 30,
      stock: 500,
      descripcion: "mosqueton chico",
      categoria: "mosquetones",
      imagen: "/Img/mosquetonChico.jpg",
    },
    {
      id: 21,
      titulo: "mosquetones",
      precio: 40,
      stock: 300,
      descripcion: "mosqueton mediano",
      categoria: "mosquetones",
      imagen: "/Img/mosquetonMediano.jpeg",
    },
    {
      id: 22,
      titulo: "mosquetones",
      precio: 50,
      stock: 700,
      descripcion: "mosqueton grande",
      categoria: "mosquetones",
      imagen: "/Img/mosquetonGrande.jpg",
    },
    {
      id: 23,
      titulo: "tanza",
      precio: 220,
      stock: 37,
      descripcion: "tanza de 0.35 mm.",
      categoria: "tanza",
      imagen: "/Img/tanza35.jpg",
    },
    {
      id: 24,
      titulo: "tanza",
      precio: 250,
      stock: 77,
      descripcion: "tanza de 0.40 mm.",
      categoria: "tanza",
      imagen: "/Img/tanza40.jpg",
    },
    {
      id: 25,
      titulo: "tanza",
      precio: 320,
      stock: 87,
      descripcion: "tanza de 0.45 mm.",
      categoria: "tanza",
      imagen: "/Img/tanza45.jpg",
    },
    {
      id: 26,
      titulo: "tanza",
      precio: 360,
      stock: 100,
      descripcion: "tanza de 0.50 mm.",
      categoria: "tanza",
      imagen: "/Img/tanza50.jpg",
    },
    {
      id: 27,
      titulo: "tanza",
      precio: 400,
      stock: 80,
      descripcion: "tanza de 0.60 mm.",
      categoria: "tanza",
      imagen: "/Img/tanza60.jpeg",
    },
    {
      id: 28,
      titulo: "tanza",
      precio: 480,
      stock: 56,
      descripcion: "tanza de 0.70 mm.",
      categoria: "tanza",
      imagen: "/Img/tanza70.jpg",
    },

    {
      id: 29,
      titulo: "langostinos",
      precio: 250,
      stock: 120,
      descripcion: "200 gramos de langostinos",
      categoria: "carnada",
      imagen: "/Img/langostino.jpeg",
    },
    {
      id: 30,
      titulo: "camaron",
      precio: 200,
      stock: 130,
      descripcion: "200gr de camaron ",
      categoria: "carnada",
      imagen: "/Img/camaron.jpeg",
    },
    {
      id: 31,
      titulo: "calamar",
      precio: 200,
      stock: 390,
      descripcion: "calamar por unidad",
      categoria: "carnada",
      imagen: "/Img/calamar.jpeg",
    },
    {
      id: 32,
      titulo: "anchoita",
      precio: 120,
      stock: 167,
      descripcion: "bolsita de 100 gr. de anchoita",
      categoria: "carnada",
      imagen: "/Img/anchoita.jpg",
    },
    {
      id: 33,
      titulo: "filet de pejerrey",
      precio: 50,
      stock: 268,
      descripcion: "filet por unidad",
      categoria: "carnada",
      imagen: "/Img/pejerrey.jpeg",
    },
    {
      id: 34,
      titulo: "filet de magru",
      precio: 80,
      stock: 200,
      descripcion: "filet por unidad",
      categoria: "carnada",
      imagen: "/Img/magru.jpeg",
    },
  ];
  const collectionRef = collection(DB, "productos");
  for (let item of items) {
    const docRef = await addDoc(collectionRef, item);
    console.log(docRef.id);
  }
}
