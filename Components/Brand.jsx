

export function Brand(props) {
    return (

        <div >
            <img src={`../images/brandsCards/${props.name}.webp`} alt="Failed" />
            <p>{props.name}</p>
        </div>

    );
}

export default Brand;