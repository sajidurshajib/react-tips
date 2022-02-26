const PreviewEdit = ({ data, setData, index }) => {
    const changeSlot1 = (v) => {
        let copyData = data
        copyData[index].slot1 = v
        copyData[index].total = copyData[index].slot1 + copyData[index].slot2
        setData([...copyData])
    }

    const changeSlot2 = (v) => {
        let copyData = data
        copyData[index].slot2 = v
        copyData[index].total = copyData[index].slot1 + copyData[index].slot2
        setData([...copyData])
    }

    return (
        <div>
            <form>
                <input
                    type="number"
                    value={data[index].slot1}
                    onChange={(e) => changeSlot1(parseInt(e.target.value))}
                />
                <input
                    type="number"
                    value={data[index].slot2}
                    onChange={(e) => changeSlot2(parseInt(e.target.value))}
                />

                <p>{data[index].total}</p>
            </form>
        </div>
    )
}

export default PreviewEdit
