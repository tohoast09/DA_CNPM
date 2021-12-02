import { db } from '../../../firebase';
import {
    collection,
    getDocs
} from 'firebase/firestore';

var WHData = [];

const getBook = async () => {
    const queryBooks = await getDocs(collection(db, "books"));
    await queryBooks.forEach(async (book) => {
        const newBook = {
            id:				book.id,
            title: 			book.data().title,
            price: 			book.data().price, 
            quantity: 		book.data().quantity,
            categorySlug: 	book.data().categorySlug,
            description: 	book.data().description,
			image01:		book.data().image01,
			image02:		book.data().image02,
			promotion:		book.data().promotion,
			slug:			book.data().slug,
			tag:			book.data().tag
        }
        WHData.push(newBook);
        console.log("newBookPush: ", newBook);
    });
}

export const GetBook = getBook();
export default WHData;

/*import {v4 as uuidv4} from "uuid";

const WHData = [
    {
        stt: uuidv4(),
        name: "Luật tâm thức",
        code: "TRLY0001",
        quantity: 3020
    },
    {
        stt: uuidv4(),
        name: "Doraemon 90",
        code: "CMIC0090",
        quantity: 3000
    },
    {
        stt: uuidv4(),
        name: "Conan 100",
        code: "CMIC0100",
        quantity: 200
    },
    {
        stt: uuidv4(),
        name: "Reset hiện tại update tương lai",
        code: "CSXH0001",
        quantity: 300
    },
    {
        stt: uuidv4(),
        name: "Tony buổi sáng",
        code: "TRNG0001",
        quantity: 350
    },
    {
        stt: uuidv4(),
        name: "Tuổi trẻ đáng giá bao nhiêu",
        code: "TRLY0002",
        quantity: 100
    },
    {
        stt: uuidv4(),
        name: "Thi nhân Việt Nam",
        code: "VHOC0001",
        quantity: 1000
    },
    {
        stt: uuidv4(),
        name: "Mặc kệ thiên hạ sống như người Nhật",
        code: "CSXH0002",
        quantity: 1265
    },
    {
        stt: uuidv4(),
        name: "Chúng ta đâu chỉ sống cho riêng mình",
        code: "TRLY0003",
        quantity: 45
    },
    {
        stt: uuidv4(),
        name: "Lưng chừng cô đơn",
        code: "TTHU0001",
        quantity: 250
    },
    {
        stt: uuidv4(),
        name: "Tuổi trẻ của chúng ta sẽ mãi mãi xanh",
        code: "TRLY0004",
        quantity: 600
    },
    {
        stt: uuidv4(),
        name: "Quá trẻ để chết",
        code: "TRLY0005",
        quantity: 110
    },
    {
        stt: uuidv4(),
        name: "Chủ nghĩa khắc kỷ",
        code: "TRLY0006",
        quantity: 300
    },
    {
        stt: uuidv4(),
        name: "Đừng hoài phí tuổi trẻ",
        code: "TRLY0007",
        quantity: 50
    },
    {
        stt: uuidv4(),
        name: "Còn có thể bên người bao lâu nữa",
        code: "TRNG0002",
        quantity: 40
    },
    {
        stt: uuidv4(),
        name: "Nếu biết trăm năm là hữu hạn",
        code: "TRNG0003",
        quantity: 400
    },
    {
        stt: uuidv4(),
        name: "Sepiens Lược sử loài người",
        code: "LISU0001",
        quantity: 500
    },
    {
        stt: uuidv4(),
        name: "Súng Vi Trùng và Thép",
        code: "TRNG0004",
        quantity: 300
    },
    {
        stt: uuidv4(),
        name: "Đắc nhân tâm",
        code: "TRLY0008",
        quantity: 5
    },
    {
        stt: uuidv4(),
        name: "Nhà giả kim",
        code: "TRLY0009",
        quantity: 10
    }
];

export default WHData; */