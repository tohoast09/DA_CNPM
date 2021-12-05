import React, { useCallback, useState, useEffect, useRef, useContext } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'

import ProductData from '../assets/firebase-data/products'
import category from '../assets/fake-data/category'
import tags from '../assets/fake-data/product-tag'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'
import  { FilterState } from '../stores/AppState'
import DoubleSlider from '../components/DoubleSlider'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Catalog = () => {

    const initFilter = {
        title:"",
        category: [],
        tag: [],
        price: [0,100]
    }

    const filterStateCtx = useContext(FilterState)
    const ProductDataCtx =useContext(ProductData)
    const productList = ProductDataCtx.getAllProducts()

    const [products, setProducts] = useState(productList)

    const filter = filterStateCtx.state;
    const setFilter = filterStateCtx.setState;

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case "TAG":
                    setFilter({...filter, tag: [...filter.tag, item.tag]})
                    break
                default:
            }
        } else {
            switch(type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case "TAG":
                    const newtag = filter.tag.filter(e => e !== item.tag)
                    setFilter({...filter, tag: newtag}) 
                    break
                default:
            }
        }
    }

    const clearFilter = () => setFilter((prev)=>{return {...initFilter,title:prev.title};});

    const updateProducts = useCallback(
        () => {
            let temp = productList
            if (filter.title.length > 0) {
                temp = temp.filter(e => e.title.toLowerCase().indexOf(filter.title.toLowerCase())!== -1)
            }

            console.log(filter.price);
            temp = temp.filter((e) => { return e.price>=filter.price[0]*10000&&e.price<=filter.price[1]*10000;});
            
            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if (filter.tag.length > 0) {
                temp = temp.filter(e => {
                    const check = e.tag.find(tag => filter.tag.includes(tag))
                    return check !== undefined
                })
            }

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            thể loại sách
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Tag
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                tags.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("TAG", input.checked, item)}
                                            checked={filter.tag.includes(item.tag)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
{/* 
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            bìa
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                                            checked={filter.size.includes(item.size)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div> */}
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            giá
                        </div>
                        <div className="catalog__filter__widget__content">
                             <DoubleSlider />
                        </div>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                                sắp xếp theo
                        </div>
                        <div className="catalog__filter__widget__content">
                            <BasicSelect/>    
                        </div>
                    </div>
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>bộ lọc</Button>
                </div>
                
                <div className="catalog__content">
                    <InfinityList
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog;

const getPrice = (data)=>{
    if ('promotion' in data){
        return parseInt(Number(data.price*(1-data.promotion/100)));
    }
    else return parseInt(data.price);
}
const funDic={
    'az':(a,b)=>{return (a.title<b.title)?-1:1},
    'za':(a,b)=>{return (a.title>b.title)?-1:1},
    'pa':(a,b)=>{return  getPrice(a)-getPrice(b)},
    'pd':(a,b)=>{return  getPrice(b)-getPrice(a)}
}


function BasicSelect() {
    const { sortProducts }=useContext(ProductData);
    const [sortMethod, setSortMethod] = useState('az');
    useEffect(()=>{sortProducts(funDic['az'])},[]);
    const handleChange = (event) => {
      setSortMethod(event.target.value);
      sortProducts(funDic[event.target.value]);
    };

    return (
      <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortMethod}
            onChange={handleChange}
          >
            <MenuItem value={'az'}>Tên (từ A đến Z)</MenuItem>
            <MenuItem value={'za'}>Tên (từ Z đến A)</MenuItem>
            <MenuItem value={'pa'}>Giá (từ thấp đến cao)</MenuItem>
            <MenuItem value={'pd'}>Giá (từ cao đến thấp)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }