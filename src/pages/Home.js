import React, { useEffect, useContext } from 'react'

import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import policy from '../assets/fake-data/policy'
import ProductData from '../assets/firebase-data/products'
import { HeroSliderDataProvider } from '../assets/firebase-data/hero-slider'

import banner from '../assets/images/banner.png'

const Home = () => {
    const ProductDataCtx = useContext(ProductData);
   
    return (
        <Helmet title="Trang chủ">
            {/* hero slider */}
            <HeroSliderDataProvider>
            <HeroSlider
                control={true}
                auto={false}
                timeOut={5000}
            />
            </HeroSliderDataProvider>
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCard
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            ProductDataCtx.getProductsByTag('best-seller').map((item, index) => (
                                <ProductCard
                                    data={item}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                             ProductDataCtx.getProductsByTag('recent').map((item, index) => (
                                <ProductCard
                                    data={item}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}
            
            {/* banner */}

            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            ProductDataCtx.getProducts(12).map((item, index) => (
                                <ProductCard
                                    data={item}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>

    )
}

export default Home
