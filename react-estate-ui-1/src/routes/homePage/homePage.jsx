import SearchBar from '../../components/searchBar/SearchBar'
import'./homePage.scss'

function HomePage(){ 
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                   <h2 className='title'>
                       Find Real Estate & get Your Dream Place.
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita ipsam aliquam enim reiciendis perspiciatis necessitatibus vel veniam, animi voluptatibus quisquam deserunt neque nisi, inventore odit nostrum itaque, delectus cumque.    
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h3>16+</h3>
                            <h4>Years of Experience</h4>
                        </div>
                        <div className="box">
                            <h3>200</h3>
                            <h4>Awards Gained</h4>
                        </div>
                        <div className="box">
                            <h3>1200+</h3>
                            <h4>Property Ready</h4>
                        </div>
                    </div>
                </div>
            </div>   
            <div className="imgContainer">
                <img src="/bg.png" alt=""/>
            </div>
        </div>
    )
}

export default HomePage;