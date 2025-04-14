import dynamic from "next/dynamic";
import Image from "next/image";
const HomePage = dynamic(() => import('../Components/Home'))

export default function Home() {
  return (
    <div >
      <HomePage/>
    </div>
  );
}
