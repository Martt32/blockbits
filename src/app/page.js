'use client';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const popUp = async ()=>{
    try{
    const popup = document.querySelector('.popup')
    popup.classList.toggle('active')
  }catch(err){
    alert(err)
  }  
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
      </div> */}
      <div className="popup" id="popup-1">
        <div className='overlay'>
            <div className='bg-black fixed left-0 top-0 flex flex-col w-1/2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"'>
              {/* <p className='font-bold text-white p-2 text-2xl'>
                Accept Terms and Conditions
              </p>
                <p className='text-grandson p-2 text-sm'>
                  To proceed, please accept our <span className='text-green'>Terms and Conditions</span>
              </p>
              <label className='bg-transparent space-x-2 text-grandson text-sm px-2 flex'>
                <input className='bg-green' type='checkbox' true/>
                <p>
                I've read and accept the terms and conditions
                </p>
              </label>
              <div className='p-2'>
                <button className="text-sm p-2 bg-green rounded-lg w-auto" onClick={popUp}>Accept</button>
              </div>   */}

              <p className='font-bold text-2xl'>Acquire membership Card</p>
              <p style={{ width:'30vw' }} className='text-sm text-grandson p-4 '>when purchasing a membership card please ensure you use the same wallet you use with the bot. We will authenticate your NFT ownership upon login, so be sure to disconnect and log in again after buying the NFT. This card entitiles you to 0% fees on the Bot</p>
              <div style={{ height:'40vh' }} className='bg-black m-4 fixed left-0 top-0 flex flex-col w-1/2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"'>

              </div>
              <button className="text-sm p-2 bg-purple-500 rounded-lg w-auto" onClick={popUp}>Buy at magic Eden</button>
            </div>
        </div>
      </div>
      <div style={{ position:'fixed', top:'0%' }} className="flex justify-between p-2 w-full">

      <div className="bg-black p-4 flex items-center">
        <div className='flex mx-4'>
          <p className='font-bold text-2xl'>BlockBit</p>    
          <Image src='/solana.png' alt='' width={40} height={40} priority/>
        </div>
        <Link href='/'>
        <p className="p-2 cursor-pointer hover:text-grandson">Pending pool</p>
        </Link>
        <Link href='/open_positions'>
        <p className="p-2 cursor-pointer text-grandson hover:text-white">Open positions</p>
        </Link>
        <Link href='/closed_positions'>
        <p className="p-2 cursor-pointer text-grandson hover:text-white">Closed positions</p>
        </Link>
        <Link href='/settings'>
        <p className="p-2 cursor-pointer text-grandson hover:text-white">Settings</p>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <div style={{ background: 'linear-gradient(85deg, #0039a6, #17b169)'}} className="cursor-pointer flex space-x-6 items-center w-auto h-1/2 p-2 rounded-lg">
        <div>
          <p className="text-sm" onClick={popUp}>Purchase premium</p>
        </div>  
        <Image src='/crown.png' alt='' width={25} height={25} priority/>
        </div>
        <div style={{ border:'2px gray solid' }} className="flex space-x-2 h-1/2 justify-center items-center m-2 p-1 px-2 rounded-lg">
          <p >786.9</p>
          <Image src='/solana.png' alt='' width={40} height={40} priority/>
        </div>
        <div style={{ border:'2px gray solid' }} className="flex h-1/2 justify-center items-center p-2 m-2 bg-gray rounded-full" >
          <p >64ec2c...c898</p>
        </div>
        <Image src='/solana.png' alt='' width={60} height={60} priority/>
      </div>
      </div>

      <div className="relative flex flex-col  before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className='flex justify-between '>
        <div className="py-4">
          <p className="font-bold text-white">Pending pool</p>
          <p className="text-sm text-grandson font-bold">Presenting your current pending pool, updated in real-time</p>
        </div>
        <div className='bg-black fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"'>
        <Image src='/tick.png' alt='' width={60} height={60} priority/>
          <div>
              <p className='p-1 font-bold text-sm'>
                  Transaction successful
              </p>
              <p className='text-sm'>
                  Bought 1,000,000 for 6.5
              </p>
            </div>    
        </div>

        <div className='bg-black fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"'>
        <Image src='/cancel.png' alt='' width={60} height={60} priority/>
          <div>
              <p className='p-1 font-bold text-sm'>
                  Transaction failed
              </p>
              <p className='text-sm'>
                  Bought 1,000,000 for 6.5
              </p>
            </div>    
        </div>
        </div>




        <div className="p-2">

        <select style={{ border:'2px gray solid' }} className="bg-transparent w-auto rounded-full p-1 cursor-pointer">
          <option value='filter '>filter</option>
          
        </select>
        </div>
        <div>
          {
            //pair list
          }
          <table className="bg-black p-4">
            <thead className='text-grandson text-sm'>
              <th style={{ width:'10vw' }} className='p-4 text-sm text-start py-4'>
                pair
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                created
              </th>
              <th style={{ width:'20vw' }} className='w-auto text-start text-sm py-4'>
                contract audit
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                pooled sol
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                pooled token
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                24H change(%)
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                LP burned
              </th>
              <th style={{ width:'10vw' }} className='text-start py-4'>
                status
              </th>
            </thead>
            <tbody className="p-4">
              <tr className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>Wif</p>
                  </div>
                </td>
                <td>
                  <p>16 days</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                  <div className='flex items-center'>
                  <p>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>5</p> 
                </div>
                </td>
                <td>
                  <p>10%</p>
                </td>
                <td>
                  <p className="text-red">-20%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p>not burned</p> 
                  <Image src='/cancel.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className="text-yellow">waiting</p>
                </td>
                <td>
                  <button style={{ width:'8vw' }} className=" m-1flex text-sm rounded-lg bg-gray p-2  m-1" onclick={popUp}>Quick buy</button>
                </td>
                <td  className='p-2'>
                  <p className="text-sm rounded-lg bg-gray p-2">Cancel</p>
                </td>
              </tr>
              <tr className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>WINSTON</p>
                  </div>
                </td>
                <td>
                  <p>21 h</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                  <div className='flex items-center'>
                  <p>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>50</p> 
                </div>
                </td>
                <td>
                  <p>24%</p>
                </td>
                <td>
                  <p className="text-green">+30%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p>Burned</p> 
                  <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className="text-green">Buying</p>
                </td>
                <td>
                  <p style={{ width:'8vw' }} className=" m-1flex text-sm rounded-lg bg-gray p-2  m-1" onclick={popUp}>Quick buy</p>
                </td>
                <td  className='p-2'>
                  <p className="text-sm rounded-lg bg-gray p-2">Cancel</p>
                </td>
              </tr>
              <tr className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>DADDY</p>
                  </div>
                </td>
                <td>
                  <p>3 mins</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                  <div className='flex items-center'>
                  <p>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>6</p> 
                </div>
                </td>
                <td>
                  <p>20%</p>
                </td>
                <td>
                  <p className="text-red">-40%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p>not burned</p> 
                  <Image src='/cancel.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className="text-yellow">waiting</p>
                </td>
                <td>
                  <p style={{ width:'8vw' }} className=" m-1flex text-sm rounded-lg bg-gray p-2  m-1" onclick={popUp}>Quick buy</p>
                </td>
                <td  className='p-2'>
                  <p className="text-sm rounded-lg bg-gray p-2">Cancel</p>
                </td>
              </tr>
              <tr className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>wif</p>
                  </div>
                </td>
                <td>
                  <p>16 days</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                  <div className='flex items-center'>
                  <p>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>5</p> 
                </div>
                </td>
                <td>
                  <p>10%</p>
                </td>
                <td>
                  <p className="text-red">-20%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p>not burned</p> 
                  <Image src='/cancel.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className="text-yellow">waiting</p>
                </td>
                <td>
                  <p style={{ width:'8vw' }} className=" m-1flex text-sm rounded-lg bg-gray p-2  m-1" onclick={popUp}>Quick buy</p>
                </td>
                <td  className='p-2'>
                  <p className="text-sm rounded-lg bg-gray p-2">Cancel</p>
                </td>
              </tr>
              <tr className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>WINSTON</p>
                  </div>
                </td>
                <td>
                  <p>21 h</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                  <div className='flex items-center'>
                  <p>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>50</p> 
                </div>
                </td>
                <td>
                  <p>24%</p>
                </td>
                <td>
                  <p className="text-green">+30%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p>Burned</p> 
                  <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className="text-green">Buying</p>
                </td>
                <td>
                  <p style={{ width:'8vw' }} className=" m-1flex text-sm rounded-lg bg-gray p-2  m-1" onclick={popUp}>Quick buy</p>
                </td>
                <td  className='p-2'>
                  <p className="text-sm rounded-lg bg-gray p-2">Cancel</p>
                </td>
              </tr>
              <tr className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/solana.png' alt='' width={25} height={25} priority/>
                  <p>DADDY</p>
                  </div>
                </td>
                <td>
                  <p>3 mins</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                  <div className='flex items-center'>
                  <p>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center'>
                  <p>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex items-center'>
                  <Image src='/solana.png' alt='' width={40} height={40} priority/>
                  <p>6</p> 
                </div>
                </td>
                <td>
                  <p>20%</p>
                </td>
                <td>
                  <p className="text-red">-40%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p>not burned</p> 
                  <Image src='/cancel.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className="text-yellow">waiting</p>
                </td>
                <td>
                  <p style={{ width:'8vw' }} className=" m-1flex text-sm rounded-lg bg-gray p-2  m-1" onclick={popUp}>Quick buy</p>
                </td>
                <td  className='p-2'>
                  <p className="text-sm rounded-lg bg-gray p-2">Cancel</p>
                </td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>

      </main>
  );
}
