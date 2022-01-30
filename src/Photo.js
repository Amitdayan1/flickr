import './App.css'

function Photo(props) {
    console.log(props)
    return (
        <div className={"column"}>
            <a href={props.data.url_s}> <img src={props.data.url_s} alt={"..."} width={"300px"} height={"300px"}/></a>
        </div>
    )
}

export default Photo;
