import '../style/Error.css'
import error from '../images/404.png'

const Error = ({ updatePage }) => {
  return (
    <div className='error-body'>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <img alt="err" src={error} className='error-logo'/>
      <button onClick={() => updatePage("query")} className='back-error-button'>Go back to Homepage</button>
    </div>
  )
}

export default Error;