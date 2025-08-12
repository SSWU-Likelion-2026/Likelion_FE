import React from 'react'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
import Mobile from './Mobile'


const Home = ({ thisW }) => {

    return (
        <>{(thisW > 1000) ?
            <div className='container_w home_wrap'>
                <Top />
                <Middle />
                <Bottom />
            </div>
            :
            <div className='container_m home_wrap_m'>
                <Mobile />
            </div>
        }
        </>

    )
}

export default Home