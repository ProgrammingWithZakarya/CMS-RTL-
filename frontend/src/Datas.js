
let products = [
    {
        id: 1,
        title: "کابل شارژر type c",
        price: 200_000,
        img: "./images/charger.jpeg",
        count: 5,
        off: 5,
        isNew: "نو",
        score: 4,
        group : 'cable&charger'
    },
    {
        id: 2,
        title: "ایرپاد مدل  i12",
        price: 500_000,
        img: "./images/head.jpeg",
        count: 7,
        off: 0,
        isNew: "نو",
        score: 4,
        group : 'headphones'
    },
    {

        id: 3,
        title: "هدفون گیمینگ ASUS",
        price: 1_000_000,
        img: "./images/headphone.jpeg",
        count: 20,
        off: 7,
        isNew: "نو",
        score: 4,
        group : 'headphones'
    },


    {
        id: 4,
        title: "گوشی سامسونگ مدل galaxy A52",
        price: 7_200_000,
        img: "./images/1.jpg",
        count: 6,
        off: 5,
        isNew: "نو",
        score: 4,
        group : 'mobile'
    },



]
let orders = [
    {
        id: 1,
        customer: {
            fullName: "ali ahmadi",
            img: './images/zakarya.jpg',
            nationalCode: 2890376486,
            address: "پیرانشهر بلوار سردشت کوچه خیام 14",
            phoneNumber: "09142960913"
        },
        product: {
            title: "گوشی سامسونگ مدل galaxy A72",
            img: "./images/1.jpg",
            price: 7_200_000,
        },
        noumberOfOrders: 1,
        status: 'cancelled',
    },
    {
        id: 2,
        customer: {
            fullName: "mohsen alimardani",
            img: '',
            nationalCode: 2890376486,
            address: "پیرانشهر بلوار سردشت کوچه خیام 18",
            phoneNumber: "09142960913"
        },
        product: {
            title: "گوشی سامسونگ مدل galaxy A72",
            img: "./images/1.jpg",
            price: 7_200_000,
        },
        noumberOfOrders: 1,
        status: 'sending',
    },
    {
        id: 3,
        customer: {
            fullName: "ali ahmadi",
            img: './images/zakarya.jpg',
            nationalCode: 2890376486,
            address: "پیرانشهر بلوار سردشت کوچه خیام 14",
            phoneNumber: "09142960913"
        },
        product: {
            title: "گوشی سامسونگ مدل galaxy A52",
            img: "./images/1.jpg",
            price: 7_200_000,
        },
        noumberOfOrders: 1,
        status: 'sended',
    },
]
let users = {
    admins: [
        {
            id: 1,
            firstName: 'zakarya',
            lastName: 'hasanZadah',
            fullName: "",
            img: "./images/zakarya.jpg",
            nationalCode: "2890376486",
            email: "hasanzadahzakarya@gmail.com",
            phoneNumber: "09142960913",
            activity: "فروشنده",
            score: '4.5',
            comments: [],
            todos : [],
        },
        {
            id: 2,
            firstName: 'ali',
            lastName: 'ahmadi',
            fullName: "ali ahamdi",
            img: "./images/zakarya.jpg",
            nationalCode: "2890376486",
            email: "ali@gmail.com",
            phoneNumber: "09142960913",
            activity: "پیک موتوری",
            score: '4',
            comments: [],
            todos : [],
        },
        {
            id: 3,
            firstName: 'salah',
            lastName: 'mohammadi',
            fullName: "",
            img: "./images/yolme.jpg",
            nationalCode: "2890376486",
            email: "mohammadi@gmail.com",
            phoneNumber: "09142960913",
            activity: "فروشنده",
            score: '3.7',
            comments: [],
            todos : [],
        },
        {
            id: 4,
            firstName: 'saman',
            lastName: 'azizi',
            fullName: "",
            img: "./images/saeedi.jpeg",
            nationalCode: "2890376486",
            email: "hasanzadahzakarya@gmail.com",
            phoneNumber: "09142960913",
            activity: "فروشنده",
            score: '5',
            comments: [],
            todos : [],
        },
    ],
    customers: [
        {
            id: 1,
            firstName: 'saman',
            lastName: 'azizi',
            fullName: "",
            img: "./images/saeedi.jpeg",
            nationalCode: "2890376486",
            email: "hasanzadahzakarya@gmail.com",
            phoneNumber: "09142960913",
            score: '5',
            address: 'پیرانشهر بلوار سردشت کوچه خیام 14',
            comments: [],
        },
        {
            id: 2,
            firstName: 'babak',
            lastName: 'gholami',
            fullName: "",
            img: "./images/zakarya.jpg",
            nationalCode: "2890376486",
            email: "gholami@gmail.com",
            phoneNumber: "09142960913",
            score: '5',
            address: 'تهران میدان آزادی خیابان نیکا',
            comments: [],
        },
        {
            id: 3,
            firstName: 'mohammad',
            lastName: 'omidi',
            fullName: "",
            img: "./images/yolme.jpg",
            nationalCode: "2890376486",
            email: "yolme@gmail.com",
            phoneNumber: "09142960913",
            score: '5',
            address: 'پیرانشهر چهارراه آزادی ',
            comments: [],
        },
        {
            id: 4,
            firstName: 'saman',
            lastName: 'azizi',
            fullName: "",
            img: "./images/saeedi.jpeg",
            nationalCode: "2890376486",
            email: "hasanzadahzakarya@gmail.com",
            phoneNumber: "09142960913",
            score: '5',
            address: 'پیرانشهر بلوار سردشت کوچه خیام 18',
            comments: []
        },
    ]
}
let categories = {
    emergency: [
        {
            id: 1,
            title: 'وسایل زخم و پانسمان',
            img: './images/categorys/emergency grouping/Bandage 2 Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 2,
            title: 'داروهای ارتوپدی',
            img: './images/categorys/emergency grouping/Bone Broken Ambulance Medicine Hospital Doctor Medical - Copy.svg',
        },
        {
            id: 3,
            title: 'کتاب دانستنی های فوریتی',
            img: './images/categorys/emergency grouping/Book Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 4,
            title: 'مراقبه از جشم ',
            img: './images/categorys/emergency grouping/Glasses Eye Ambulance Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 5,
            title: 'دارو های دستساز',
            img: './images/categorys/emergency grouping/Jar 2 Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 6,
            title: 'کلیه و مثانه',
            img: './images/categorys/emergency grouping/Kidney Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 7,
            title: 'قرص های آرامبخش',
            img: './images/categorys/emergency grouping/Pill 2 Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 8,
            title: 'اسمارت واچ های مراقبتی',
            img: './images/categorys/emergency grouping/Smartwatch Heart Medicine Hospital Doctor Medical.svg',
        },
        {
            id: 9,
            title: 'آمپول های تقویتی',
            img: './images/categorys/emergency grouping/Syringe Medicine Hospital Doctor Medical.svg',
        },
    ],
    mobile : [
        {
            id : 1,
            title : "موبایل",
            img: "./images/categorys/mobile shop/iphone.svg",
            inGroup:'mobile'
        },
        {
            id : 2,
            title : "کنسول بازی",
            img: "./images/categorys/mobile shop/joystick.svg",
            inGroup:'game_console'
        },
        {
            id : 3,
            title : "هدفون ها",
            img: "./images/categorys/mobile shop/headphone.svg",
            inGroup:'headphones'
        },
        {
            id : 4,
            title : "کابل و شارژر",
            img: "./images/categorys/mobile shop/charger.svg",
            inGroup:'cable&charger'
        },
        {
            id : 5,
            title : "گلس صفحه نمایش",
            img: "./images/categorys/mobile shop/cracked.svg",
            inGroup:'glasses'
        },
        {
            id : 6,
            title : "قطعات کامپوتر و لپتاپ",
            img: "./images/categorys/mobile shop/cooler.svg",
            inGroup:'computer&loptop'
        },
    ]
}
const mostSellingProducts =[
    {
        id: 1,
        title: "کابل شارژر type c",
        price: 200_000,
        img: "./images/charger.jpeg",
        count: 5,
        score: 4,
    },
    {
        id: 2,
        title: "کابل شارژر type c",
        price: 200_000,
        img: "./images/charger.jpeg",
        count: 5,
        score: 4,
    },
    {
        id: 3,
        title: "کابل شارژر type c",
        price: 200_000,
        img: "./images/charger.jpeg",
        count: 5,
        score: 4,
    },
    {
        id: 4,
        title: "کابل شارژر type c",
        price: 200_000,
        img: "./images/charger.jpeg",
        count: 5,
        score: 4,
    },
    {
        id: 5,
        title: "کابل شارژر type c",
        price: 200_000,
        img: "./images/charger.jpeg",
        count: 5,
        score: 4,
    },
]
export { products, orders, users, categories, mostSellingProducts }
