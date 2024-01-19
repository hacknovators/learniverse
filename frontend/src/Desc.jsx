export default function Desc({desc}) {
    let lined = desc.split("\\n")
    return <>
        {lined.map((line) => <p className="card-text"> {line} </p> )}
    </>
}