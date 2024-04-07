import { useDaysInWeekStore } from "../../store/usePlanStore"
const Selector = ()=>{
    const daysOfWeek = useDaysInWeekStore(state => state.daysOfWeek)
    console.log("11132")
    console.log(daysOfWeek)
    console.log("11132")

    // Object.keys(musclesData).forEach((k)=>{
    //     const key = parseInt(k,10)
    //     const muscleGroup = musclesData[key]
    //     res.push(muscleGroup.name_en)
    //     // console.log(`English: ${muscleGroup.name_en}, Chinese: ${muscleGroup.name_cn}`);
    //   })
    return (
        <div>
        {Object.entries(daysOfWeek).map(([key, v]) => (
            v===true?(
                <div key={key}>
                Keys: {key}, Value: {v.toString()}
                <div>
                    <select name="workout-selection">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                            
                    </select>
                </div>
              </div>

            ):
            null

        ))}
      </div>
        // <select name="pets" id="pet-select">
        // <option value="">--Please choose an option--</option>
        // <option value="dog">Dog</option>
        // <option value="cat">Cat</option>
        // <option value="hamster">Hamster</option>
        // <option value="parrot">Parrot</option>
        // <option value="spider">Spider</option>
        // <option value="goldfish">Goldfish</option>
        // </select>
    
    )
}
export default Selector