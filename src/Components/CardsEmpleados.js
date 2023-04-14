



const CardsEmpleados = (props) => {
    return (
        <figure style={figure}>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <img src={props.card.img} alt={props.card.alt} />
                <div style={divdatos}>
                    <div style={divnombre}>
                        <p style={pnombre}>
                            {props.card.nombre}
                        </p>
                        <p style={papellido}>
                            {props.card.apellido}
                        </p>
                    </div>
                    <div style={divedad}>
                        <h1 style={edad}>
                            Edad: {props.card.edad}
                        </h1>
                    </div>
                    <div style={divresto}></div>
                </div>
            </div>
        </figure>
    )
}

export default CardsEmpleados

const figure = {
    height: "531px",
    width: "360px",
    border: "2px solid black",

}

const divnombre = {
    backgroundColor: "#B4D4EC",
    height: "100px",
    width: "200px",
}

const pnombre = {
    color: "black",
    marginLeft: "20px",
    textTransform: "uppercase",
    fontSize: "15px",
    marginTop: "20px"
}

const papellido = {
    color: "black",
    marginLeft: "20px",
    textTransform: "uppercase",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: "0"
}

const divedad = {
    height: "125px",
    width: "150px",
    backgroundColor: "black",
    margin: "-25px 0px 0px 0px",
}

const edad = {
    textAlign: "center",
    color: "#B4D4EC",
    fontSize: "25px",
    marginTop: "45px",
}

const divresto = {
    backgroundColor: "#B4D4EC",
    height: "100px",
    width: "10px",
    margin: "0px"
}

const divdatos = {
    display: "flex",
    flexDirection: "row",
}
