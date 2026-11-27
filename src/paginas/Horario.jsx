import './horario.css'
function Horario() {
  
  return (
    <main className="contenedor-horario">
      <h1>Horario</h1>
      <table className="tabla-horario" >
        <thead className="tabla-horario-head">
          <tr className='dias'>
            <th>HORA</th>
            <th>LUN</th>
            <th>MAR</th>
            <th>MIE</th>
            <th>JUE</th>
            <th>VIE</th>
          </tr>
        </thead>

        <tbody >
          <tr className='dias'>
            <td className="pri">8:00-8:55</td>
            <td>CMEM</td>
            <td className="segun">AAD</td>
            <td>TDAD</td>
            <td className="tercer">AAD</td>
            <td>MA</td>
          </tr>

          <tr className='dias'>
            <td className="pri">9:00-9:55</td>
            <td>TDAD</td>
            <td className="segun">AAD</td>
            <td>ARCM</td>
            <td className="tercer">AAD</td>
            <td>CS</td>
          </tr>

          <tr className='dias'>
            <td className="pri">10:00-10:55</td>
            <td>ARCM</td>
            <td className="segun">MA</td>
            <td>DSW</td>
            <td className="tercer">MTDF</td>
            <td>MCAI</td>
          </tr>

          <tr className='dias'>
            <td>11:00-11:55</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr className='dias'>
            <td className="pri">12:00-12:55</td>
            <td>MA</td>
            <td className="segun">ARCM</td>
            <td>DSW</td>
            <td className="tercer">TW</td>
            <td>ARCM</td>
          </tr>

          <tr className='dias'>
            <td className="pri">13:00-13:55</td>
            <td>TDAD</td>
            <td className="segun">TW</td>
            <td >MCAI</td>
            <td className="tercer">DSW</td>
            <td>CMEM</td>
          </tr>

          <tr className='ult'>
            <td className='pri'>14:00-14:55</td>
            <td>MA</td>
            <td className='segun'>CS</td>
            <td>MCAI</td>
            <td className='tercer'>CS</td>
            <td>DSW</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Horario