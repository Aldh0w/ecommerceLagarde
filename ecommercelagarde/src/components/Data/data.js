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
        titulo: "KIT TOPCROP",
        categoria: "FERTILIZANTES",
        imagen: "https://i.postimg.cc/3xdcb3Vf/descarga.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '3',
        titulo: "KIT KAWSAY HIDROPONIA",
        categoria: "FERTILIZANTES",
        imagen: "https://i.postimg.cc/7LqTZL4m/kit-kawsay.jpg",
        precio: 3200,
        descripcion: 'kit X4 (1lts) Fertilizantes para el ciclo completo. Especial uso en hidroponia',
        stock: 5,
    },

    {
        id: '4',
        titulo: "KIT CULTIVO AZTECA",
        categoria: "FERTILIZANTES",
        imagen: "https://i.postimg.cc/FR8yzQDz/KIT-AZTECA.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '5',
        titulo: "SUSTRATO KLASSMAN",
        categoria: "SUSTRATOS",
        imagen: "https://i.postimg.cc/63tsPDd7/sustrato-klasmann.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '6',
        titulo: "SUSTRATO GROW MIX",
        categoria: "SUSTRATOS",
        imagen: "https://i.postimg.cc/3wjV2nP3/sustrato-grow-mix.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '7',
        titulo: "SUSTRATO FIBRA DE COCO",
        categoria: "SUSTRATOS",
        imagen: "https://i.postimg.cc/Y0YVtjS8/fibra-santa-planta.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '8',
        titulo: "CARPA 60*60*160 DR. CULTIVO",
        categoria: "CARPAS",
        imagen: "https://i.postimg.cc/c1wbzDbS/carpa-60-60-160.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '9',
        titulo: "CARPA 80*80*180 DR. CULTIVO",
        categoria: "CARPAS",
        imagen: "https://i.postimg.cc/hP03DXnZ/carpa-Cultivo80-80-180.jpg",
        precio: 3200,
        descripcion: 'lorem impsum',
        stock: 5,
    },

    {
        id: '10',
        titulo: "CARPA 100*100*200 DR. CULTIVO",
        categoria: "CARPAS",
        imagen: "https://i.postimg.cc/SN4vbWBz/carpa-Cultivo1-1-2.jpg",
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


export const getFetchByCategoryId = (categoria)=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(data.filter(data => data.categoria === categoria))
        }, 2000)
    })
}


