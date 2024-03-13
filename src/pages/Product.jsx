import React from 'react'
import ProductTopbar from '../common/Product/ProductTopbar'
import ProductSecond from '../common/Product/ProductSecond'
import Table from '../common/Product/Table'

export default function Product() {
    return (
        <div className='xl:my-5'>
            <ProductTopbar />
            <ProductSecond />
            <Table />
        </div>
    )
}
