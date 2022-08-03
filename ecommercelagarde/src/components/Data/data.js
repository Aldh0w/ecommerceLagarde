const Data = [
    {
        id: 1,
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        stock: 5,
    },

    {
        id: 2,
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        stock: 5,
    },

    {
        id: 3,
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        stock: 5,
    }
]

const getFetch = new Promise((res,rej)=>{
    let condicion = true;
    if(condicion){
        setTimeout(()=>{
            res(Data)    
        }, 2000);
    }
    else{
        rej(console.log("No hay datos"))
    }
});

export default getFetch;



