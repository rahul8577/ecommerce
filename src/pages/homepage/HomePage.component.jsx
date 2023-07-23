import './homepage.style.css'
import Directory from '../../components/directory/Directory.component'


const HomePage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
            <Directory/>   
        </div>
    );
}

export default HomePage; 