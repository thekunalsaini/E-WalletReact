import sum from "./sum";


it("when two number a & b is added", ()=>{
    const result = sum(2,3)

    //result === 5
    expect(result).toBe(5);
});