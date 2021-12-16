import axios from 'axios';
import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import Category from '../../component/category/Category';
import SearchInput from '../../component/input/SearchInput';
import Product from '../../component/product/Product';

export default function HomePage(){
    const [listCarousel, setListCarousel] = React.useState([]);
    const [listCategory, setListCategory] = React.useState([]);
    const [listProduct, setListProduct] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);
    const [page, setPage] = React.useState(1);

  
  const getCarousel = () => {
      axios.get('https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web')
      .then(res=>{
          setListCarousel(res.data.data)
      }).catch(err => console.log(err))
  };

  const getCategory = () => {
      axios.get('https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true')
      .then(res=>{
          setListCategory(res.data.data)
      }).catch(err => console.log(err))
  };

  const getProductMore = () => {
      setIsFetching(true);

        axios({
        method: "GET",
        url: "https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation",
        params: {page: page },
        })
        .then((res) => {
            setListProduct((prevTitles) => {
            return [...new Set([...prevTitles, ...res.data.data.map((b) => b)])];
        });
            setPage((prevPageNumber) => prevPageNumber + 1);
            setIsFetching(false);
        })
        .catch(err => {
            console.log(err);
        });
  }

    React.useEffect(()=>{
        getCarousel();
        getCategory();
        getProductMore();
    }, []);

  const renderCarousel = () => {
      return listCarousel.map((value,index)=>{
          return(
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="500"
                src={value.url}
                alt="slide"
                />
            </Carousel.Item>     
          )
      })
  }

   const renderCategory = () => {
      return listCategory.map((value,index)=>{
          if(index < 11){
              return(
                   <Category
                       key={index}
                       value={value}
                   />
              )
          }
      })
  }


    return(
        <div className='container-fluid'>
            {listProduct.length > 0 &&  <SearchInput/>}
            <Carousel>
                {renderCarousel()}
            </Carousel>
           <Row className="justify-content-center mb-5 mt-4">
                {renderCategory()}
           </Row> 
            <Row className="justify-content-center mb-5 mt-4">
                {listProduct.map((value, index) => {
                    return(
                            <Product
                            key={index}
                            value={value}
                            />
                        )               
                })}
            </Row>
                { (
                    <Row className="justify-content-center mb-5 mt-4">
                        <Col md={6} className="text-center">
                            {isFetching && <p>Memuat...</p>}
                            {listProduct.length > 0 && <Button onClick={getProductMore} variant="outline-danger">Lihat semua</Button>}
                        </Col>
                    </Row>
                )}
        </div>
    )
}
