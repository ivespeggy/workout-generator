export class randomIntUtils{
    static generateRandomInteger(min:number, max:number): number{
        min = Math.ceil(min)
        max = Math.max(max)

        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}