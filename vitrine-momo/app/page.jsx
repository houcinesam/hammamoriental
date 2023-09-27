"use client";
import './globals.css';
 import UseKeenSlider from '../components/MySlider';


  function Home() {
  return (
    
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <UseKeenSlider />  
        <div className="z-10 max-w-5xl w-full items-center  font-mono text-sm lg:flex">
        
         
          <h1 className="text-3xl flex justify-center items-center w-full h-screen ">
            la tete a toto
          </h1>
        </div>
        
      </main>
      
  );
}
export default Home;