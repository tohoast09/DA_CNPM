import BookList from "../components/cart/BookList"

const DATA = [
    {
      id: 'm1',
      name: 'This is a first meetup',
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      price: 120000,
      promotion: '10%',
      quantity:1
    },
    {
      id: 'm2',
      name: 'This is a second meetup',
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      price: 380000,
      promotion: '20%',
      quantity:1

    },
    {
        id: 'm3',
        name: 'This is a second meetup',
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        price: 380000,
        promotion: '20%',
        quantity:2

      },
      {
        id: 'm4',
        name: 'This is a second meetup',
        src:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        price: 380000,
        promotion: '20%',
        quantity:1

      },
  ];
function Home(){
    console.log('ender from Home')
    return(
        <div>
            <div className='cart-container'>
                <h3>Trang chu</h3>
                <BookList booklist={DATA}/>
            </div>
        </div>
    )
}

export default Home