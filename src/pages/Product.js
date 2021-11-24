import React, { useContext } from 'react'

import Helmet from '../components/Helmet'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'
import { withRouter } from "../utils/withRouter"
import ProductData from '../assets/firebase-data/products'


const Product = props => {
    const productData = useContext(ProductData);

    const product = productData.getProductBySlug(props.params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        console.log(props)
        window.scrollTo(0,0)
    }, [product])

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default withRouter(Product)
