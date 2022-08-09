const data = [
    {
        id: '1',
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://elalquimistagrow.com/wp-content/uploads/2018/08/nutripack.png",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '2',
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '3',
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '4',
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '5',
        titulo: "NUTRIPACK NAMASTE",
        categoria: "FERTILIZANTES",
        imagen: "https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },
]

export const getFetch = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data)    
        }, 2000);
    })
};

export const getFetchById = (id)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data.find(data => data.id === id))
        }, 2000)
    })
};



