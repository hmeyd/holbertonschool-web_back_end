/* eslint-disable */
export default function getListStudentIds(Array) {
      
    if (Array instanceof Object){
        const Ids = Array.map((element) => element.id);
        return Ids;}
    else{
        return [];
    }
}
