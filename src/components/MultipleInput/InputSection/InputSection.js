import { useState } from 'react'

const InputSection = ({ data, setData }) => {
    const [slot1, setSlot1] = useState(0)
    const [slot2, setSlot2] = useState(0)

    const submit = (e) => {
        e.preventDefault()

        let total = slot1 + slot2

        let newObj = { slot1, slot2, total }

        setData([...data, { ...newObj }])
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="number" onChange={(e) => setSlot1(parseInt(e.target.value))} />
                <input type="number" onChange={(e) => setSlot2(parseInt(e.target.value))} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InputSection
