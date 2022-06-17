const Card = (props) => { 
    return (
        <div style={{ backgroundImage: `url(${props.link})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {props.description}
              </span>
              <div className="pt-8 text-center">
                <a href={props.view} target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
    )
}
export default Card