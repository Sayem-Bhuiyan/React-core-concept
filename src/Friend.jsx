
export default function Friend({singer}){
    console.log(singer);
    return(
        <div>
            <h3>Singer: {singer.name}</h3>
            <h5>Age: {singer.age}</h5>
        </div>
    )
}