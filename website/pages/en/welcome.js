const React = require('react')
const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

function Welcome(props) {
    return(
        <div className="docMainWrapper wrapper">
            <Container className="mainContainer documentContainer postContainer">
                <h1>Hello Newbies! 😎 </h1>
                <p>Welcome to the community</p>
                <div>
                    <h1>Get familiar with your mentors</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </div>
            </Container>
        </div>
    )
}

module.exports = Welcome