import { useState } from 'react'
import InputSection from './InputSection/InputSection'
import classes from './MultipleInput.module.css'
import PreviewEdit from './PreviewEdit/PreviewEdit'

const MultipleInput = () => {
    const [data, setData] = useState([])

    return (
        <div className={classes.MultipleInput}>
            <h2>Multiple Input</h2>
            {/* Just input object */}
            <InputSection data={data} setData={setData} />

            {/* Prevoew and Edit */}
            {data.map((v, i) => {
                /* v: don't need every object to pass*/
                return <PreviewEdit data={data} setData={setData} index={i} key={i} />
            })}
        </div>
    )
}

export default MultipleInput
