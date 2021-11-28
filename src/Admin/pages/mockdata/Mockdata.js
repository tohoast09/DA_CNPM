import { v4 as uuidv4 } from "uuid";
import connectFB from "../../connectFB";
import { db } from "../../connectFB";
import {
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
  getDoc,
  query,
  orderBy,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
function getlevel(status) {
  if (status === "complete") {
    return 0;
  } else if (status === "preparing") {
    return 2;
  } else {
    return 1;
  }
}
var Mockdata = [];
var arr1=[];
var arr2=[];

const getOrder = async () => {
  const queryUsers = await getDocs(collection(db, "users"));
  await queryUsers.forEach(async (user) => {
    {
      await console.log("User: ", user.id, " => ", user.data());
      const queryOrders = await getDocs(collection(user.ref, "orders"));
      await queryOrders.forEach((order) => {
        //console.log("Order: ", order.id);
        const status = order.data().status;
        const orderID = order.id;
        const totalPay = order.data().totalPay;
        arr1.push(orderID);
        arr2.push(totalPay);


        order.data().books.map((book, index) => {
          const newBook = {
            id: orderID,
            idx: index,            
            level: parseInt(getlevel(status)),
            name: book.bookName,
          };
          Mockdata.push(newBook);
          console.log("newPush: ", newBook);
        });
      });
    }
  });
};

// const Mockdata = [
//   {
//     id: uuidv4(),
//     name: "Luật tâm thức",
//     level: 2 // high
//   },
//   {
//     id: uuidv4(),
//     name: "Reset hiện tại update tương lai",
//     level: 0 // low
//   },
//   {
//     id: uuidv4(),
//     name: "Tony buổi sáng",
//     level: 1 // medium
//   },
//   {
//     id: uuidv4(),
//     name: "Tuổi trẻ đáng giá bao nhiêu",
//     level: 1 // medium
//   },
//   {
//     id: uuidv4(),
//     name: "Thi nhân Việt Nam",
//     level: 2 // high
//   },
//   {
//     id: uuidv4(),
//     name: "Mặc kệ thiên hạ sống như người Nhật",
//     level: 1 // medium
//   },
//   {
//     id: uuidv4(),
//     name: "Chúng ta đâu chỉ sống cho riêng mình",
//     level: 0 // low
//   },
//   {
//     id: uuidv4(),
//     name: "Lưng chừng cô đơn",
//     level: 1 // medium
//   },
//   {
//     id: uuidv4(),
//     name: "Tuổi trẻ của chúng ta sẽ mãi mãi xanh",
//     level: 1 // low
//   },
//   {
//     id: uuidv4(),
//     name: "Quá trẻ để chết",
//     level: 2 // high
//   },
//   {
//     id: uuidv4(),
//     name: "Chủ nghĩa khắc kỷ",
//     level: 2 // high
//   },
//   {
//     id: uuidv4(),
//     name: "Đừng hoài phí tuổi trẻ",
//     level: 1 // medium
//   },
//   {
//     id: uuidv4(),
//     name: "Còn có thể bên người bao lâu nữa",
//     level: 0 // low
//   },
//   {
//     id: uuidv4(),
//     name: "Nếu biết trăm năm là hữu hạn",
//     level: 1 // medium
//   },
//   {
//     id: uuidv4(),
//     name: "Sepiens Lược sử loài người",
//     level: 2 // high
//   },
//   {
//     id: uuidv4(),
//     name: "Súng Vi Trùng và Thép",
//     level: 2 // high
//   }
// ];
export const GetOrder = getOrder();

export default Mockdata;
