import { create } from "zustand";

type PixelSquareStore = {
    OnSelectStatus: boolean
    toggleSelect: () => void 
}
type CreatePlanPopUpStore = {
    OnSelectStatus: boolean
    toggleOn: () => void 
    toggleOff: () => void 

}
type DaysInWeekStore = {
    daysOfWeek: {[key:string]:boolean},
    toggleDay:(initial:string) => void
}


export const useDaysInWeekStore = create<DaysInWeekStore>() ((set,get)=>({
    daysOfWeek:{'M':true,'T':true,'W':true,'R':true,'F':true,'S':true,'U':true},

    toggleDay: (initial:string)=> set((state)=>{
        const currState = state.daysOfWeek[initial]
        const newDaysOfWeek = {
            ...state.daysOfWeek,
            [initial]:!currState,
        }
        console.log(`toggleDay:`, newDaysOfWeek)
        return {daysOfWeek:newDaysOfWeek}
    }),
}))


export const usePopUpStore = create<CreatePlanPopUpStore>() ((set)=>({
    OnSelectStatus: false,
    toggleOn: () => set({OnSelectStatus:true}),
    toggleOff: () => set({OnSelectStatus:false})

}))



export const usePixelSquareStore = create<PixelSquareStore>() ((set)=>({
    OnSelectStatus: true,
    toggleSelect: () => set(state=>({OnSelectStatus:!state.OnSelectStatus}))

}))