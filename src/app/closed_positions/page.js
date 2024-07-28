import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const  positions = [
    {
      pair:'Wif',
      created:'16 days',
      invested: 21,
      current:6.7,
      ROI:32.12,
      PNL:'+0.2',
      status:'waiting'
    },{
      pair:'Winston',
      created:'21 h',
      invested: 6.7,
      current:21,
      ROI:24,
      PNL:'+0.2',
      status:'waiting'
    },{
      pair:'Daddy',
      created:'3 mins',
      invested: 21,
      current:6.7,
      ROI:32.12,
      PNL:'+0.2',
      status:'waiting'
    },{
      pair:'Winston',
      created:'21 h',
      invested: 6.7,
      current:21,
      ROI:24,
      PNL:'+0.2',
      status:'TP Selling'
    },{
      pair:'Borpa',
      created:'12 days',
      invested: 21,
      current:0.2,
      ROI:2.12,
      PNL:'+0.2',
      status:'TP Selling'
    },{
      pair:'JitoSOL',
      created:'12 days',
      invested: 21,
      current:6.7,
      ROI:12,
      PNL:'-0.2',
      status:'SP Selling'
    },{
      pair:'Daddy',
      created:'3 mins',
      invested: 21,
      current:6.7,
      ROI:32.12,
      PNL:'+0.2',
      status:'TP Selling'
    },
  ]

  return (
    <main className="flex min-h-screen text-white font-bold flex-col items-center justify-between p-20">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
      </div> */}
      <div style={{ position:'absolute', top:'0%' }} className="flex bg-black justify-between p-1 w-full">

<div className=" p-2 flex items-center">
  <div className='flex mx-2'>    
    <Image src='/Logo.png' alt='' width={150} height={150} priority/>
  </div>
  <Link href='/'>
  <p className="p-2 cursor-pointer font-bold text-grandson hover:text-white">Pending pool</p>
  </Link>
  <Link href='/open_positions'>
  <p className="p-2 cursor-pointer font-bold text-grandson hover:text-grandson">Open positions</p>
  </Link>
  <Link href='/closed_positions'>
  <p className="p-2 cursor-pointer font-bold text-white hover:text-grandson">Closed positions</p>
  </Link>
  <Link href='/settings'>
  <p className="p-2 cursor-pointer font-bold text-grandson hover:text-white">Settings</p>
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
        <div style={{ border:'1px gray solid' }} className="flex font-bold  space-x-2 h-1/2 justify-center items-center m-2 p-1 px-2 rounded-full">
          <p className='font-bold px-1'>786.9</p>
          <Image src='/SOL.png' alt='' width={20} height={20} priority/>
        </div>
        <div style={{ border:'1px gray solid' }} className="flex h-1/2 font-bold  justify-center items-center p-2 m-2 bg-gray rounded-full" >
          <p className='font-bold px-6'>64ec2c...c898</p>
        </div>
        <Image src='/profile.png' alt='' width={40} height={40} priority/>
      </div>
</div>

      <div className="relative flex flex-col  before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full  before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="py-4">
          <p className="font-bold text-white">Closed positions</p>
          <p className="text-sm text-grandson font-bold">Presenting your closed position, updated in real-time</p>
        </div>
        <div className="p-2 flex justify-between">

        <Image src='/filter.png' alt='' width={100} height={100} priority/>
        <p className='text-grandson font-bold'>Closed Positions PNL:177 SOL</p>
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
              <th style={{ width:'10vw' }} className='text-start font-bold py-4'>
                created
              </th>
              <th style={{ width:'20vw' }} className='w-auto text-start font-bold text-sm py-4'>
                invested
              </th>
              <th style={{ width:'10vw' }} className='text-start font-bold py-4'>
                sold
              </th>
              <th style={{ width:'10vw' }} className='text-start font-bold py-4'>
                ROI
              </th>
              <th style={{ width:'10vw' }} className='text-start font-bold py-4'>
                PNL
              </th>
            </thead>
            <tbody className="p-4">
              {positions.map((position, index) => (
              <tr key={index} className="odd:bg-gray even:bg-black text-sm p-2" style={{ height:'10vh' }}>
                <td  className='p-2'>
                  <div className='flex space-x-2'>

                  <Image src='/SOL.png' alt='' width={25} height={25} priority/>
                  <p className='font-bold'>{position.pair}</p>
                  </div>
                </td>
                <td>
                  <p className='font-bold'>{position.created}</p>
                </td>
                <td className='flex items-center space-x-2 py-6'>
                <div className='flex items-center'>
                  <Image src='/SOL.png' alt='' width={20} height={20} priority/>
                  <p className='font-bold'>{position.invested}</p> 
                </div>
                </td>
                <td>
                <div className='flex font-bold items-center'>
                  <Image src='/SOL.png' alt='' width={20} height={20} priority/>
                  <p className='font-bold'>{position.current}</p> 
                </div>
                </td>
                <td className={`${position.ROI === 12 ? 'text-red' : 'text-green'}`}>
                  <p className=' font-bold'>{position.ROI}</p>
                </td>
                <td>
                <div className={`flex items-center ${position.status === 'SP Selling' ? 'text-red' : 'text-green'}`}>
                  <Image src='/SOL.png' alt='' width={20} height={20} priority/>
                  <p className='font-bold'>{position.PNL}</p> 
                </div>
                </td>
                <td className='text-white p-4'>
                <Image className='text-white' src='/watch.png' alt='' width={20} height={20} priority/>
                </td>
                <td className=' p-4'>
                <Image className='text-white' src='/hide.png' alt='' width={20} height={20} priority/>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>

      </main>
  );
}
