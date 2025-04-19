import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../../../Components/Home'));

const Home = () => {
    return (
        <div >
           <HomePage/>
        </div>
    )
}

export default Home;