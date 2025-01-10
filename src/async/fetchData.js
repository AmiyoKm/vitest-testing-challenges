export const fetchData = async()=> {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Data successfully fetched")
        },2500)
    })
}