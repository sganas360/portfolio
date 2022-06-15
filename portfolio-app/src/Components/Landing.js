import coding from "../Files/DSC06831.JPG"
import TypeWriterEffect from 'react-typewriter-effect'
import Rotate from 'react-reveal/Rotate';

function Landing(){
  return(
      <div className="parent" id="home">
        <img id="landing-pic" src={coding}></img>
        <TypeWriterEffect className="typewriter"
          textStyle={{
            fontFamily: 'Red Hat Display',
            color: '#ffffff',
            fontWeight: 500,
            fontSize: '4em',
          }}
          startDelay={1000}
          cursorColor="#ffffff"
          multiText={[
            'I am a Lifelong Learner.',
            'I am a Military Veteran.',
            'I am a Motivated Worker.',
            'I am a Software Developer.',
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
        />
        <Rotate top left>
          <h1 className="first-name">Shun</h1>
        </Rotate>
        <Rotate bottom right>
          <h1 className="last-name">Ganas</h1>
        </Rotate>
      </div>
      
    
    
  )
}

export default Landing