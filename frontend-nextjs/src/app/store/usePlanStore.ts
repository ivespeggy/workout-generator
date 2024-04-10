import { create } from "zustand";
import { MuscleGroupUtils } from "../MuscleData/Muscles";

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


type MuslceGroupStore = {
    updateDayOnSelectMuscle:(dayInitial:string,muscleName:string) => void,
    deleteCurrMuscleOnSelect:(dayInitial:string, muscleName:string) => void,
    dayOnSelectMuscle: {[key:string]:string},
    muscles: {[key: string]:boolean},
    toggleMuscle:(muscleName:string) => void
}
export const useMuscleGroupStore = create<MuslceGroupStore>() ((set)=>({
    deleteCurrMuscleOnSelect: (dayInitial:string, muscleName:string) => set((state) =>{
        const newDayOfOnSelectMuscle = {
            ...state.dayOnSelectMuscle,
            [dayInitial]:''
        }
        return {dayOnSelectMuscle:newDayOfOnSelectMuscle}
    }),
    updateDayOnSelectMuscle: (dayInitial:string, muscleName:string) => set((state)=>{
        const newDayOfOnSelectMuscle = {
            ...state.dayOnSelectMuscle,
            [dayInitial]:muscleName
        }
        return {dayOnSelectMuscle:newDayOfOnSelectMuscle}
    }),
    dayOnSelectMuscle: {'M':'','T':'', 'W':'','R':'','F':'','S':'','U':''},
    muscles: MuscleGroupUtils.getAllMoveName(),

    toggleMuscle: (muscleName:string) => set((state) =>{
        const selectedMuscleState = state.muscles[muscleName]
        const newMuscles = {
            ...state.muscles,
            [muscleName]: !selectedMuscleState,
        }
        return {muscles:newMuscles}
    })
}))

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