'use client';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const  positions = [
    { pair:'Wif',
      created:'16 days',
      contract_audit: 'fad',
      pooled_sol:5,
      pooled_token:10,
      h_change:-20,
      LP_burned:'not burned',
      status:'waiting'
    },{
      pair:'Winston',
      created:'21 h',
      contract_audit: 'fad',
      pooled_sol:50,
      pooled_token:20,
      h_change:+30,
      LP_burned:'burned',
      status:'Buying'
    },{
      pair:'Daddy',
      created:'3 mins',
      contract_audit: 'fad',
      pooled_sol:20,
      pooled_token:10,
      h_change:-40,
      LP_burned:'not burned',
      status:'waiting'
    },{
      pair:'Wif',
      created:'16 days',
      contract_audit: 'fad',
      pooled_sol:5,
      pooled_token:10,
      h_change:-20,
      LP_burned:'not burned',
      status:'waiting'
    },{
      pair:'Winston',
      created:'21 h',
      contract_audit: 'fad',
      pooled_sol:50,
      pooled_token:20,
      h_change:+30,
      LP_burned:'burned',
      status:'Buying'
    },{
      pair:'Daddy',
      created:'3 mins',
      contract_audit: 'fad',
      pooled_sol:20,
      pooled_token:10,
      h_change:-40,
      LP_burned:'not burned',
      status:'waiting'
    },
  ]

  const popUp = async ()=>{
    try{
    const popup = document.querySelector('.popup')
    popup.classList.toggle('active')
  }catch(err){
    alert(err)
  }  
}
const popUpToast = async ()=>{
  try{
  const popup = document.querySelector('.popuptoast')
  popup.classList.toggle('active')
}catch(err){
  alert(err)
}  
}
const popUpSuccess = async ()=>{
  try{
  const popUpOff = document.querySelector('.popuptoast')
  popUpOff.classList.toggle('active')
  const popup = document.querySelector('.popUpSuccess')
  popup.classList.add('active')
}catch(err){
  alert(err)
}  
}
  return (
    <main className="flex min-h-screen text-white flex-col items-center justify-between p-20">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
      </div> */}
                <div className="popuptoast" id="popup-1">
        <div className='overlaytoast'>
        <div className="fixed left-0 top-0 flex flex-col font-bold w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">

                <p className='font-bold text-white p-2 text-2xl'>
                Accept Terms and Conditions
              </p>
                <p className='text-grandson font-bold p-2 text-sm'>
                  To proceed, please accept our <span className='text-green font-bold'>Terms and Conditions</span>
              </p>
              <label className='bg-transparent font-bold space-x-2 text-grandson text-sm px-2 flex'>
                <input className='bg-green' type='checkbox' true/>
                <p className='font-bold'>
                I've read and accept the terms and conditions
                </p>
              </label>
              <div className='p-2 font-bold'>
                <button style={{ borderRadius:'5px' }} className="text-sm p-3 bg-green w-auto" onClick={popUpSuccess}>Accept</button>
              </div>
              </div>
              </div>
              </div>
      <div className="popup" id="popup-1">
        <div className='overlay'>
        <div className="fixed left-0 top-0 flex flex-col font-bold w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <p className='font-bold text-2xl'>Acquire membership Card</p>
              <p style={{ width:'30vw' }} className='text-sm text-grandson font-bold p-4 '>when purchasing a membership card please ensure you use the same wallet you use with the bot. We will authenticate your NFT ownership upon login, so be sure to disconnect and log in again after buying the NFT. This card entitiles you to 0% fees on the Bot</p>
              <div style={{ height:'40vh' }} className='bg-black m-4 fixed left-0 top-0 flex flex-col w-1/2 justify-center border-b border-gray-300  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"'>
              <Image src='/premium.png' alt='' width={350} height={350} priority/>
        </div>
              <button className="text-sm p-2 bg-purple-500 rounded-lg w-auto" onClick={popUp}>Buy at magic Eden</button>
            </div>
        </div>
      </div>
      <div style={{ position:'absolute', top:'0%' }} className="flex bg-black justify-between p-1 w-full">

      <div className=" p-2 flex items-center">
        <div className='flex mx-2'>    
          <Image src='/Logo.png' alt='' width={150} height={150} priority/>
        </div>
        <Link href='/'>
        <p className=" font-bold p-2 cursor-pointer hover:text-grandson">Pending pool</p>
        </Link>
        <Link href='/open_positions'>
        <p className= "font-bold p-2 cursor-pointer text-grandson hover:text-white">Open positions</p>
        </Link>
        <Link href='/closed_positions'>
        <p className=" font-bold p-2 cursor-pointer text-grandson hover:text-white">Closed positions</p>
        </Link>
        <Link href='/settings'>
        <p className=" font-bold p-2 cursor-pointer text-grandson hover:text-white">Settings</p>
        </Link>
      </div>

      <div className="flex justify-center items-center">
        {/* <div style={{ background: 'linear-gradient(85deg, #0039a6, #17b169)'}} className="cursor-pointer flex space-x-6 items-center w-auto h-1/2 p-2 rounded-lg">
        <div>
          <p className="text-sm font-bold " onClick={popUp}>Purchase premium</p>
        </div>  
        <Image src='/crown.png' alt='' width={25} height={25} priority/>
        </div> */}
        <Image src='/purchase.png' alt='' width={200} height={200} priority/>
        <div style={{ border:'1px gray solid' }} className="flex font-bold  space-x-2 h-1/2 justify-center items-center m-2 p-1 px-4 rounded-full">
          <p className='font-bold '>786.9</p>
          <Image src='/SOL.png' alt='' width={20} height={20} priority/>
        </div>
        <div style={{ border:'1px gray solid' }} className="flex h-1/2 font-bold  justify-center items-center p-2 m-2 bg-gray rounded-full" >
          <p className='font-bold px-6'>64ec2c...c898</p>
        </div>
        <Image src='/profile.png' alt='' width={40} height={40} priority/>
      </div>
      </div>

      <div className="relative flex flex-col  before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3  after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] ">
        <div className='flex justify-between '>
        <div className="py-4">
          <p className="font-bold text-white">PENDING POOL</p>
          <p className="text-sm text-grandson font-bold">Presenting your current pending pool, updated in real-time</p>
        </div>
        <div className='popUpSuccess'>
        <div style={{ border:'gray 2px solid' }}  className='transactionSuccessful bg-black-500 fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"'>
        <Image src='/tick.png' alt='' width={60} height={60} priority/>
          <div className=''>
              <p className='p-1 font-bold text-sm'>
                  Transaction successful
              </p>
              <p className='text-sm font-bold'>
                  Bought 1,000,000 for 6.5
              </p>
            </div>    
        </div>

        </div>

        <div  style={{ border:'gray 1px solid' }} className=" hidden bg-black-500 fixed left-0 top-0 flex w-full justify-center items-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Image src='/cancel.png' alt='' width={60} height={60} priority/>
          <div>
              <p className='p-1 font-bold text-sm'>
                  Transaction failed
              </p>
              <p className='text-sm font-bold'>
                  Bought 1,000,000 for 6.5
              </p>
            </div>    
        </div>
        </div>




        <div className="p-2 flex justify-between">

        <Image src='/filter.png' alt='' width={100} height={100} priority/>

        <Image src='/settings.png' alt='' width={100} height={100} priority/>
        </div>
        <div>
          {
            //pair list
          }
          <table className="bg-black p-4">
            <thead className='text-grandson text-sm'>
              <th style={{ width:'12vw' }} className='font-bold p-4 text-sm text-start py-4'>
                pair
              </th>
              <th style={{ width:'10vw' }} className='font-bold text-start py-4'>
                created
              </th>
              <th style={{ width:'20vw' }} className='font-bold w-auto text-start text-sm py-4'>
                contract audit
              </th>
              <th style={{ width:'10vw' }} className='font-bold text-start py-4'>
                pooled sol
              </th>
              <th style={{ width:'10vw' }} className='font-bold text-start py-4'>
                pooled token
              </th>
              <th style={{ width:'10vw' }} className='font-bold text-start py-4'>
                24H change(%)
              </th>
              <th style={{ width:'10vw' }} className='font-bold text-start py-4'>
                LP burned
              </th>
              <th style={{ width:'10vw' }} className='font-bold text-start py-4'>
                status
              </th>
            </thead>
            <tbody className="p-4">
              { positions.map((position, index) => (
                <tr key={index} className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex items-center space-x-2'>

                  <Image src={`/${position.pair}.png`} alt='' width={25} height={25} priority/>
                  <p className='font-bold'>{position.pair}</p>
                  </div>
                </td>
                <td>
                  <p className='font-bold'>{position.created}</p>
                </td>
                <td className='flex items-center space-x-1 py-6'>
                  <div className='flex items-center space-x-1'>
                  <p style={{ fontSize:'12px' }} className='font-bold'>Fad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center space-x-1'>
                  <p style={{ fontSize:'12px' }} className='font-bold'>Mad</p> <Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                  <div className='flex items-center space-x-1'>
                  <p style={{ fontSize:'12px' }} className='font-bold'>top 10 holders</p><Image src='/tick.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                <div className='flex p-2 space-x-2 items-center'>
                  <Image src='/SOL.png' alt='' width={20} height={20} priority/>
                  <p className='font-bold'>{position.pooled_sol}</p> 
                </div>
                </td>
                <td>
                  <p className='font-bold'>{position.pooled_token}%</p>
                </td>
                <td>
                  <p className={`text-red font-bold ${position.h_change > 0 ? 'text-green' : 'text-red'}`}>{position.h_change}%</p>
                </td>
                <td>
                <div className='flex items-center space-x-1'>
                  <p className='font-bold'>{position.LP_burned}</p> 
                  <Image src='/cancel.png' alt='' width={12} height={12} priority/>
                  </div>
                </td>
                <td>
                  <p className={`${position.status === 'waiting' ? 'text-yellow' : 'text-green'} font-bold`}>{position.status}</p>
                </td>
                <td className='text-white p-4'>
                <Image className='text-white' src='/watch.png' alt='' width={20} height={20} priority/>
                </td>
                <td>
                  <button style={{ width:'8vw' }} className="font-bold m-1flex text-sm rounded-full bg-gray p-2 px-3 m-1" onClick={popUpToast}>Quick buy</button>
                </td>
                <td  className='p-2'>
                  <p className="text-sm font-bold rounded-full bg-gray p-2 px-3">Cancel</p>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </main>
  );
}
