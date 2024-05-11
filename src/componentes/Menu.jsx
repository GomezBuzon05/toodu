import '../App.css'
import img from "../IMGS/logoo.png"


export const Barrra = () => {
  return (
    <>
      <div class="barra flex">
        <div class="col-1">
          <div class="logo">
            <img src={img} alt="" />
          </div>
          <nav>
            <a href="#">HOME</a>
            <a href="#">PRODUCTOS</a>
            <a href="#">STORE</a>
            <a href="#">OTHERS</a>
          </nav>
        </div>
        <div class="col-2">
          <div class="busQueda">
            <input className='gojo' placeholder="search..." type="text" />
            <button>Buscar</button>
          </div>
        </div>
        <div class="col-3">
          <div class="iniciar">
            <button>iniciar Secion</button>
          </div>
          <div class="registrase">
            <button>Registrase</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default  Barrra;