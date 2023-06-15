import axios from 'axios'
async function getApi(city){
const key="b3f08617ea95ee74d6b368cf78cf8a50"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
try{
    const trying=await axios.get(url);
    console.log(trying)
    return  trying.data;
}
catch(err){
    console.log(err);
}
}
export default getApi;